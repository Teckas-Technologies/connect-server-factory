
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle2, Clock, ChevronDown, ChevronUp, ThumbsUp, MessageSquare, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { formatDate } from '@/lib/utils';
import { FeatureRequest } from '@/lib/types';
import { featureRequests, categories } from '@/lib/mockData';

interface StatusConfig {
  label: string;
  color: string;
  icon: React.ReactNode;
}

const statusConfig: Record<string, StatusConfig> = {
  'pending': {
    label: 'Pending',
    color: 'bg-yellow-100 text-yellow-800',
    icon: <Clock className="h-3.5 w-3.5" />
  },
  'under-review': {
    label: 'Under Review',
    color: 'bg-blue-100 text-blue-800',
    icon: <MessageSquare className="h-3.5 w-3.5" />
  },
  'planned': {
    label: 'Planned',
    color: 'bg-purple-100 text-purple-800',
    icon: <CheckCircle2 className="h-3.5 w-3.5" />
  },
  'in-progress': {
    label: 'In Progress',
    color: 'bg-indigo-100 text-indigo-800',
    icon: <CheckCircle2 className="h-3.5 w-3.5" />
  },
  'completed': {
    label: 'Completed',
    color: 'bg-green-100 text-green-800',
    icon: <CheckCircle2 className="h-3.5 w-3.5" />
  },
  'declined': {
    label: 'Declined',
    color: 'bg-red-100 text-red-800',
    icon: <CheckCircle2 className="h-3.5 w-3.5" />
  }
};

interface FeatureRequestItemProps {
  request: FeatureRequest;
  onVote: (id: string, voted: boolean) => void;
}

const FeatureRequestItem: React.FC<FeatureRequestItemProps> = ({ request, onVote }) => {
  const [expanded, setExpanded] = useState(false);
  const [voted, setVoted] = useState(false);
  const status = statusConfig[request.status];
  
  const handleVote = () => {
    setVoted(!voted);
    onVote(request.id, !voted);
  };
  
  return (
    <div className="border rounded-lg p-4 mb-4 transition-all hover:bg-muted/30">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg">{request.title}</h3>
            <Badge className={status.color}>
              <div className="flex items-center gap-1">
                {status.icon}
                <span>{status.label}</span>
              </div>
            </Badge>
          </div>
          
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <span>Requested by {request.user.name}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(request.created_at)}</span>
            <span className="mx-2">•</span>
            <span>Category: {categories.find(c => c.id === request.category)?.name || request.category}</span>
          </div>
          
          {expanded && (
            <div className="mt-4">
              <p className="text-sm">{request.description}</p>
              
              {request.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {request.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center ml-4">
          <Button 
            variant="outline" 
            size="sm" 
            className={`flex flex-col rounded-md p-2 gap-1 ${voted ? 'bg-primary/10' : ''}`}
            onClick={handleVote}
          >
            <ThumbsUp className={`h-4 w-4 ${voted ? 'text-primary fill-primary' : ''}`} />
            <span className="text-sm font-medium">{voted ? request.votes + 1 : request.votes}</span>
          </Button>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="mt-2 text-xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <>
            <ChevronUp className="h-3 w-3 mr-1" />
            Show less
          </>
        ) : (
          <>
            <ChevronDown className="h-3 w-3 mr-1" />
            Show more
          </>
        )}
      </Button>
    </div>
  );
};

interface NewFeatureRequestProps {
  onSubmit: (request: Partial<FeatureRequest>) => void;
}

const NewFeatureRequest: React.FC<NewFeatureRequestProps> = ({ onSubmit }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [open, setOpen] = useState(false);
  
  const handleAddTag = () => {
    if (!currentTag.trim()) return;
    
    if (!tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
    }
    
    setCurrentTag('');
  };
  
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };
  
  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !category) return;
    
    onSubmit({
      title,
      description,
      category,
      tags
    });
    
    setTitle('');
    setDescription('');
    setCategory('');
    setTags([]);
    setOpen(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          New Feature Request
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request a New Feature</DialogTitle>
          <DialogDescription>
            Describe the feature you'd like to see on the MCP network.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <Input 
              id="title" 
              placeholder="Feature request title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description" className="text-sm font-medium">Description</label>
            <Textarea 
              id="description" 
              placeholder="Describe the feature and why it would be useful" 
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="tags" className="text-sm font-medium">Tags (optional)</label>
            <div className="flex gap-2">
              <Input 
                id="tag-input" 
                placeholder="Add tags"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              />
              <Button type="button" onClick={handleAddTag} variant="outline">
                Add
              </Button>
            </div>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 p-0" 
                      onClick={() => handleRemoveTag(tag)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!title.trim() || !description.trim() || !category}>
            Submit Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const FeatureRequests: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [requests, setRequests] = useState<FeatureRequest[]>(featureRequests);
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredRequests = filter 
    ? requests.filter(r => r.category === filter) 
    : requests;
  
  const sortedRequests = [...filteredRequests].sort((a, b) => b.votes - a.votes);
  
  const handleVote = (id: string, voted: boolean) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to vote on feature requests.",
        variant: "destructive"
      });
      return;
    }
    
    setRequests(prev => 
      prev.map(request => 
        request.id === id 
          ? { ...request, votes: voted ? request.votes + 1 : request.votes - 1 }
          : request
      )
    );
  };
  
  const handleSubmitRequest = (requestData: Partial<FeatureRequest>) => {
    if (!user) return;
    
    const newRequest: FeatureRequest = {
      id: `fr${Math.floor(Math.random() * 10000)}`,
      title: requestData.title || '',
      description: requestData.description || '',
      category: requestData.category || '',
      user_id: user.id,
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
      },
      status: 'pending',
      votes: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      tags: requestData.tags || [],
    };
    
    setRequests([newRequest, ...requests]);
    
    toast({
      title: "Feature request submitted",
      description: "Thank you for your suggestion!"
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature Requests</CardTitle>
        <CardDescription>
          Request and vote on new features for the MCP network
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <Button 
              variant={filter === null ? "default" : "outline"} 
              size="sm"
              onClick={() => setFilter(null)}
            >
              All
            </Button>
            {categories.slice(0, 5).map(category => (
              <Button 
                key={category.id}
                variant={filter === category.id ? "default" : "outline"} 
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
            <Select value={filter || ''} onValueChange={(value) => setFilter(value || null)}>
              <SelectTrigger className="sm:hidden w-[150px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <NewFeatureRequest onSubmit={handleSubmitRequest} />
        </div>
        
        <div className="space-y-2">
          {sortedRequests.length > 0 ? (
            sortedRequests.map(request => (
              <FeatureRequestItem 
                key={request.id} 
                request={request} 
                onVote={handleVote} 
              />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No feature requests found</p>
              <p className="text-sm mt-2">Be the first to suggest a feature for the MCP network!</p>
            </div>
          )}
        </div>
      </CardContent>
      
      {!user && (
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Please <Button variant="link" className="h-auto p-0">sign in</Button> to submit or vote on feature requests.
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default FeatureRequests;
