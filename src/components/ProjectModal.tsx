import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "./Portfolio";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: Omit<Project, 'id'>) => void;
}

export const ProjectModal = ({ isOpen, onClose, onSubmit }: ProjectModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tools: '',
    liveLink: '',
    githubLink: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      description: formData.description,
      tools: formData.tools,
      liveLink: formData.liveLink || undefined,
      githubLink: formData.githubLink || undefined
    });
    setFormData({
      title: '',
      description: '',
      tools: '',
      liveLink: '',
      githubLink: ''
    });
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={6}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tools">Tools & Workflow</Label>
            <Textarea
              id="tools"
              value={formData.tools}
              onChange={(e) => handleChange('tools', e.target.value)}
              rows={3}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="liveLink">Live Project Link (optional)</Label>
            <Input
              id="liveLink"
              type="url"
              value={formData.liveLink}
              onChange={(e) => handleChange('liveLink', e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="githubLink">GitHub Repository Link (optional)</Label>
            <Input
              id="githubLink"
              type="url"
              value={formData.githubLink}
              onChange={(e) => handleChange('githubLink', e.target.value)}
            />
          </div>
          
          <Button type="submit" variant="hero" className="w-full">
            Add Project
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};