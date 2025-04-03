
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Github, 
  Globe, 
  FileText, 
  Tag, 
  Server as ServerIcon,
  AlertCircle,
  Check,
  Plus,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { categories } from '@/lib/mockData';
import { useToast } from "@/hooks/use-toast";
import { generateId } from '@/lib/utils';

interface ServerFormValues {
  name: string;
  description: string;
  longDescription: string;
  category: string;
  type: 'server' | 'client';
  tags: string[];
  github: string;
  website: string;
  documentation: string;
  hosted: boolean;
  deploymentFiles: File[];
  configOptions: Record<string, any>;
}

const ServerSubmissionForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const initialFormValues: ServerFormValues = {
    name: '',
    description: '',
    longDescription: '',
    category: '',
    type: 'server',
    tags: [],
    github: '',
    website: '',
    documentation: '',
    hosted: false,
    deploymentFiles: [],
    configOptions: {},
  };

  const [formValues, setFormValues] = useState<ServerFormValues>(initialFormValues);
  const [currentTag, setCurrentTag] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ServerFormValues, string>>>({});
  const [activeTab, setActiveTab] = useState('basic');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is modified
    if (errors[name as keyof ServerFormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: keyof ServerFormValues, value: string) => {
    setFormValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is modified
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleHostedChange = (checked: boolean) => {
    setFormValues(prev => ({ ...prev, hosted: checked }));
  };

  const handleAddTag = () => {
    if (!currentTag.trim()) return;
    
    if (!formValues.tags.includes(currentTag.trim())) {
      setFormValues(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
    }
    
    setCurrentTag('');
  };

  const handleRemoveTag = (tag: string) => {
    setFormValues(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormValues(prev => ({
        ...prev,
        deploymentFiles: Array.from(e.target.files || [])
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ServerFormValues, string>> = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formValues.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formValues.category) {
      newErrors.category = 'Category is required';
    }
    
    if (formValues.github && !formValues.github.includes('github.com')) {
      newErrors.github = 'Please enter a valid GitHub URL';
    }
    
    if (formValues.hosted && formValues.deploymentFiles.length === 0) {
      newErrors.deploymentFiles = 'Deployment files are required for hosted servers';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Mock API call - In a real application, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newServerId = generateId('server');
      
      toast({
        title: "Server submitted successfully",
        description: formValues.hosted 
          ? "Your server has been submitted for hosting and is pending review." 
          : "Your server has been added to the directory.",
      });
      
      // Redirect to the server detail page
      setTimeout(() => {
        navigate(`/server/${newServerId}`);
      }, 1500);
      
    } catch (error) {
      console.error('Error submitting server:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your server. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (formValues !== initialFormValues) {
      // Show confirmation dialog
      return false;
    }
    
    navigate('/browse');
    return true;
  };

  return (
    <div>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Submit Your MCP Server</CardTitle>
          <CardDescription>
            Add your MCP server to the network for others to discover and use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="details">Details &amp; Links</TabsTrigger>
              <TabsTrigger value="hosting">Hosting &amp; Deployment</TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleSubmit}>
              <TabsContent value="basic">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Server Name <span className="text-red-500">*</span></Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Enter server name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description <span className="text-red-500">*</span></Label>
                    <Input 
                      id="description" 
                      name="description" 
                      placeholder="Brief description of your server (max 160 characters)"
                      value={formValues.description}
                      onChange={handleInputChange}
                      maxLength={160}
                      className={errors.description ? "border-red-500" : ""}
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {formValues.description.length}/160 characters
                    </p>
                    {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                    <Select 
                      value={formValues.category} 
                      onValueChange={(value) => handleSelectChange('category', value)}
                    >
                      <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select 
                      value={formValues.type} 
                      onValueChange={(value) => handleSelectChange('type', value as 'server' | 'client')}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="server">Server</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="currentTag" 
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="Add a tag"
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      />
                      <Button type="button" onClick={handleAddTag} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formValues.tags.map((tag) => (
                        <div key={tag} className="flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm">
                          <span>{tag}</span>
                          <button 
                            type="button" 
                            className="ml-2 text-muted-foreground hover:text-foreground"
                            onClick={() => handleRemoveTag(tag)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                      {formValues.tags.length === 0 && (
                        <p className="text-sm text-muted-foreground">No tags added yet</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                      Cancel
                    </Button>
                    <Button type="button" onClick={() => setActiveTab('details')}>
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="details">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="longDescription">Detailed Description</Label>
                    <Textarea 
                      id="longDescription" 
                      name="longDescription" 
                      placeholder="Provide a detailed description of your server, its features, and use cases"
                      value={formValues.longDescription}
                      onChange={handleInputChange}
                      rows={6}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="github" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub Repository
                    </Label>
                    <Input 
                      id="github" 
                      name="github" 
                      placeholder="https://github.com/yourusername/your-repo"
                      value={formValues.github}
                      onChange={handleInputChange}
                      className={errors.github ? "border-red-500" : ""}
                    />
                    {errors.github && <p className="text-sm text-red-500">{errors.github}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Website
                    </Label>
                    <Input 
                      id="website" 
                      name="website" 
                      placeholder="https://your-website.com"
                      value={formValues.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="documentation" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Documentation
                    </Label>
                    <Input 
                      id="documentation" 
                      name="documentation" 
                      placeholder="https://docs.your-website.com"
                      value={formValues.documentation}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('basic')}>
                      Previous
                    </Button>
                    <Button type="button" onClick={() => setActiveTab('hosting')}>
                      Next
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="hosting">
                <div className="space-y-6">
                  <div className="border rounded-lg p-4 bg-muted/30">
                    <div className="flex items-start space-x-2">
                      <div>
                        <ServerIcon className="h-5 w-5 text-primary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-medium">Host on our network</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Allow us to host your server on our network for better reliability, 
                          performance, and discovery. Your server will be deployed to our cloud 
                          infrastructure and managed by our team.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                          <Checkbox 
                            id="hosted" 
                            checked={formValues.hosted}
                            onCheckedChange={handleHostedChange}
                          />
                          <Label htmlFor="hosted" className="font-normal">
                            I want to host my server on the network
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {formValues.hosted && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="space-y-2">
                        <Label htmlFor="deploymentFiles">Upload Deployment Files</Label>
                        <Input 
                          id="deploymentFiles" 
                          type="file" 
                          multiple 
                          onChange={handleFileChange}
                          accept=".zip,.tar.gz,.js,.ts,.json,.yaml,.yml"
                          className={errors.deploymentFiles ? "border-red-500" : ""}
                        />
                        <p className="text-xs text-muted-foreground">
                          Upload the source code or deployment package for your server.
                          Accepted formats: .zip, .tar.gz, .js, .ts, .json, .yaml, .yml
                        </p>
                        {errors.deploymentFiles && <p className="text-sm text-red-500">{errors.deploymentFiles}</p>}
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <h4 className="font-medium">Hosting Requirements:</h4>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>MCP-compliant server implementation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Open-source license (MIT, Apache 2.0, etc.)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-500 mt-0.5" />
                            <span>Documentation for API endpoints and usage</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
                            <span>Servers using third-party APIs must include environment variable templates</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                  <div className="pt-4 flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setActiveTab('details')}>
                      Previous
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button type="button" variant="outline">Cancel</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure you want to cancel?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Your submission progress will be lost.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Keep Editing</AlertDialogCancel>
                          <AlertDialogAction onClick={() => navigate('/browse')}>
                            Yes, Cancel
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    
                    <Button type="submit" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Server"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerSubmissionForm;
