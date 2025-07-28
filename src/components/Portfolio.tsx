import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "./ProjectModal";

export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string;
  liveLink?: string;
  githubLink?: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: "Object Descriptions - Material Discovery Platform",
    description: "Every object around us tells a hidden story of its materials. From the magnesium alloy in your camera to the mesh fabric of your chair, these materials shape how we live, create, and move through the world. We built this space to help you discover what everyday objects are truly made of.\n\nEach image you see here is more than just a product—it is a layered composition of metals, fabrics, polymers, and glass working together to create comfort, precision, and beauty in your day-to-day life. Whether you're a designer seeking inspiration, a student learning material science, or simply someone who appreciates the craftsmanship behind objects, our goal is to make the invisible layers of everyday life visible.",
    tools: "Designed with Lovable, developed and version-controlled via GitHub, refined in Cursor, structured in Bolt, and deployed seamlessly on Netlify.",
    liveLink: "https://objectdescription-assignment.netlify.app/",
    githubLink: "https://github.com/Prinak-Ghosh/object-showcase"
  }
];

export const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = {
      ...project,
      id: Date.now()
    };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== id));
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
                    className="inline-block bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Live Project
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-primary text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
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