import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 text-foreground">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            Let's connect and explore opportunities together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="glass-card rounded-2xl p-8 text-foreground">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <strong>University Email:</strong>
                <a 
                  href="mailto:pg3019@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  pg3019@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <strong>Personal Email:</strong>
                <a 
                  href="mailto:prinakghosh27@gmail.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  prinakghosh27@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <strong>Phone:</strong>
                <a 
                  href="tel:8420837155" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  8420837155
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <strong>LinkedIn:</strong>
                <a 
                  href="https://www.linkedin.com/in/prinak-ghosh-94783b345/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};