import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./ProjectModal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string;
  liveLink?: string;
  githubLink?: string;
}

export const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching projects",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProjects(data || []);
    }
  };

  const addProject = async (project: Omit<Project, 'id'>) => {
    const { error } = await supabase
      .from('projects')
      .insert([{
        title: project.title,
        description: project.description,
        tools: project.tools,
        live_link: project.liveLink,
        github_link: project.githubLink
      }]);

    if (error) {
      toast({
        title: "Error adding project",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Project added successfully",
      });
      fetchProjects();
    }
  };

  const deleteProject = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Error deleting project",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Project deleted successfully",
        });
        fetchProjects();
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 text-foreground">
          <h1 className="text-5xl font-bold mb-4">My Portfolio</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Showcasing projects that blend engineering principles with creative problem-solving
          </p>
          <Button 
            variant="hero"
            onClick={() => setIsModalOpen(true)}
            className="mb-8"
          >
            + Add New Project
          </Button>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 relative">
              <button
                onClick={() => deleteProject(project.id)}
                className="absolute top-4 right-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 w-8 h-8 rounded flex items-center justify-center text-sm font-bold transition-colors"
              >
                ×
              </button>
              
              <h3 className="text-2xl font-bold mb-4 text-card-foreground pr-10">
                {project.title}
              </h3>
              
              <div className="mb-6">
                {project.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-card-foreground/80 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="bg-accent/10 p-4 rounded-xl mb-6 border border-accent/20">
                <h4 className="font-semibold text-card-foreground mb-2">Tools & Workflow:</h4>
                <p className="text-card-foreground/70">{project.tools}</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-foreground text-background font-semibold py-3 px-6 rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg"
                  >
                    View Live Project
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-foreground text-foreground font-semibold py-3 px-6 rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
                  >
                    GitHub Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addProject}
      />
    </div>
  );
};