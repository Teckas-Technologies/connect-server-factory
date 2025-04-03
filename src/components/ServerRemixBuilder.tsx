
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { X, Plus, ArrowRight, Save, Link, Link2, Settings, Plug, SparkleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { servers, serverRemixes } from '@/lib/mockData';
import { ServerClient, ServerRemix } from '@/lib/types';

// Helper type for draggable items
interface DraggableServerItem extends ServerClient {
  draggableId: string;
}

const ServerRemixBuilder: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [availableServers, setAvailableServers] = useState<DraggableServerItem[]>(
    servers.map(server => ({ ...server, draggableId: `available-${server.id}` }))
  );
  
  const [selectedServers, setSelectedServers] = useState<DraggableServerItem[]>([]);
  const [remixName, setRemixName] = useState('');
  const [remixDescription, setRemixDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('build');
  const [showRemixDialog, setShowRemixDialog] = useState(false);
  
  const filteredServers = availableServers.filter(server => 
    server.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const handleDragEnd = (result: any) => {
    const { source, destination } = result;
    
    // Dropped outside a droppable area
    if (!destination) return;
    
    // Same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;
    
    // Moving between lists
    if (source.droppableId !== destination.droppableId) {
      if (source.droppableId === 'available' && destination.droppableId === 'selected') {
        // Moving from available to selected
        const serverToMove = filteredServers[source.index];
        
        // Don't add if already in selected
        if (selectedServers.some(s => s.id === serverToMove.id)) return;
        
        const newDraggableId = `selected-${serverToMove.id}`;
        
        setSelectedServers([
          ...selectedServers,
          { ...serverToMove, draggableId: newDraggableId }
        ]);
      } else if (source.droppableId === 'selected' && destination.droppableId === 'available') {
        // Moving from selected to available (remove from selected)
        const serverToRemove = selectedServers[source.index];
        setSelectedServers(selectedServers.filter((_, idx) => idx !== source.index));
      }
      return;
    }
    
    // Reordering within the same list
    if (destination.droppableId === 'selected') {
      const items = Array.from(selectedServers);
      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);
      setSelectedServers(items);
    }
  };
  
  const handleRemoveServer = (serverId: string) => {
    setSelectedServers(selectedServers.filter(server => server.id !== serverId));
  };
  
  const handleAddServer = (server: DraggableServerItem) => {
    // Don't add if already in selected
    if (selectedServers.some(s => s.id === server.id)) return;
    
    const newDraggableId = `selected-${server.id}`;
    setSelectedServers([
      ...selectedServers,
      { ...server, draggableId: newDraggableId }
    ]);
  };
  
  const handleSaveRemix = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create server remixes.",
        variant: "destructive"
      });
      return;
    }
    
    if (!remixName.trim()) {
      toast({
        title: "Name required",
        description: "Please provide a name for your remix.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedServers.length < 2) {
      toast({
        title: "Servers required",
        description: "Please select at least two servers for your remix.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would be an API call
    const newRemix: ServerRemix = {
      id: `sr${Math.floor(Math.random() * 10000)}`,
      name: remixName,
      description: remixDescription,
      creator_id: user.id,
      creator: {
        name: user.name,
        avatar_url: user.avatar_url
      },
      servers: selectedServers.map(server => server.id),
      configuration: {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      public: isPublic,
      featured: false
    };
    
    toast({
      title: "Remix created successfully",
      description: "Your server remix has been created and is now available."
    });
    
    // Reset form
    setRemixName('');
    setRemixDescription('');
    setSelectedServers([]);
    setShowRemixDialog(false);
    
    // In a real application, you'd either redirect to the remix page
    // or update the UI to show the newly created remix
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SparkleIcon className="h-5 w-5 text-primary" />
          Server Remix Builder
        </CardTitle>
        <CardDescription>
          Combine multiple MCP servers to create powerful custom solutions
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="build">Build Remix</TabsTrigger>
            <TabsTrigger value="browse">Browse Remixes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="build">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Available Servers */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Available Servers</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag servers to the right to add them to your remix
                  </p>
                  
                  <Input
                    placeholder="Search servers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4"
                  />
                  
                  <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="available">
                      {(provided) => (
                        <ScrollArea className="h-[400px] border rounded-md p-2">
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="space-y-2"
                          >
                            {filteredServers.length > 0 ? (
                              filteredServers.map((server, index) => (
                                <Draggable
                                  key={server.draggableId}
                                  draggableId={server.draggableId}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className="border rounded-md p-3 bg-card hover:bg-muted/50 cursor-grab"
                                    >
                                      <div className="flex items-start justify-between">
                                        <div>
                                          <h4 className="font-medium">{server.name}</h4>
                                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                            {server.description}
                                          </p>
                                        </div>
                                        <Button 
                                          variant="ghost" 
                                          size="icon" 
                                          className="h-8 w-8 shrink-0"
                                          onClick={() => handleAddServer(server)}
                                        >
                                          <Plus className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))
                            ) : (
                              <div className="text-center py-8">
                                <p className="text-muted-foreground">No servers found</p>
                              </div>
                            )}
                            {provided.placeholder}
                          </div>
                        </ScrollArea>
                      )}
                    </Droppable>
                  </DragDropContext>
                </div>
              </div>
              
              {/* Selected Servers */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Your Remix</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Arrange servers and configure how they work together
                  </p>
                  
                  <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="selected">
                      {(provided) => (
                        <ScrollArea className="h-[300px] border rounded-md p-2">
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="space-y-2"
                          >
                            {selectedServers.length > 0 ? (
                              selectedServers.map((server, index) => (
                                <Draggable
                                  key={server.draggableId}
                                  draggableId={server.draggableId}
                                  index={index}
                                >
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className="border rounded-md p-3 bg-card hover:bg-muted/50 cursor-grab"
                                    >
                                      <div className="flex items-center justify-between">
                                        <h4 className="font-medium">{server.name}</h4>
                                        <Button 
                                          variant="ghost" 
                                          size="icon" 
                                          className="h-8 w-8"
                                          onClick={() => handleRemoveServer(server.id)}
                                        >
                                          <X className="h-4 w-4" />
                                        </Button>
                                      </div>
                                      
                                      {index < selectedServers.length - 1 && (
                                        <div className="flex justify-center mt-2">
                                          <ArrowRight className="text-muted-foreground h-5 w-5" />
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </Draggable>
                              ))
                            ) : (
                              <div className="text-center py-8 px-4 border-2 border-dashed rounded-md">
                                <p className="text-muted-foreground">Drag servers here to build your remix</p>
                              </div>
                            )}
                            {provided.placeholder}
                          </div>
                        </ScrollArea>
                      )}
                    </Droppable>
                  </DragDropContext>
                  
                  {selectedServers.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {selectedServers.length > 1 && selectedServers.length < 4 && (
                        <div className="bg-blue-50 border border-blue-100 text-blue-800 rounded-md p-3 text-sm">
                          <div className="flex gap-2 items-center">
                            <Link className="h-4 w-4 flex-shrink-0" />
                            <span>
                              These {selectedServers.length} servers will be linked together in sequence.
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {selectedServers.length >= 4 && (
                        <div className="bg-amber-50 border border-amber-100 text-amber-800 rounded-md p-3 text-sm">
                          <div className="flex gap-2 items-center">
                            <Settings className="h-4 w-4 flex-shrink-0" />
                            <span>
                              Complex remixes may require additional configuration.
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {selectedServers.length >= 2 && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-2 mt-4">
                                <Plug className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-green-600">
                                  {selectedServers.length} servers are compatible
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">
                                All selected servers support the MCP protocol and can be remixed.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                      
                      <Dialog open={showRemixDialog} onOpenChange={setShowRemixDialog}>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full mt-4"
                            disabled={selectedServers.length < 2}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            Save Remix
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle>Save Your Server Remix</DialogTitle>
                            <DialogDescription>
                              Provide details for your new server remix configuration.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                              <Label htmlFor="remix-name">Remix Name</Label>
                              <Input 
                                id="remix-name" 
                                placeholder="Enter a name for your remix"
                                value={remixName}
                                onChange={(e) => setRemixName(e.target.value)}
                              />
                            </div>
                            
                            <div className="grid gap-2">
                              <Label htmlFor="remix-description">Description</Label>
                              <Textarea 
                                id="remix-description" 
                                placeholder="Describe what your remix does"
                                value={remixDescription}
                                onChange={(e) => setRemixDescription(e.target.value)}
                                rows={3}
                              />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <Label htmlFor="public-remix" className="cursor-pointer">
                                Make this remix public
                              </Label>
                              <Switch 
                                id="public-remix" 
                                checked={isPublic}
                                onCheckedChange={setIsPublic}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setShowRemixDialog(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleSaveRemix}>
                              Create Remix
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="browse">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Featured Remixes</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {serverRemixes.map(remix => (
                  <Card key={remix.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-base">{remix.name}</CardTitle>
                          <CardDescription className="text-xs">
                            By {remix.creator.name} • {remix.servers.length} servers
                          </CardDescription>
                        </div>
                        {remix.featured && (
                          <div className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-md">
                            Featured
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {remix.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {servers
                          .filter(server => remix.servers.includes(server.id))
                          .map(server => (
                            <div key={server.id} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                              {server.name}
                            </div>
                          ))
                        }
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ServerRemixBuilder;
