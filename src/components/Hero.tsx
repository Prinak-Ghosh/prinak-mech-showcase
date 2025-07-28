import { Button } from "@/components/ui/button";

interface HeroProps {
  onSectionChange: (section: string) => void;
  onShowNotification: () => void;
}

export const Hero = ({ onSectionChange, onShowNotification }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center text-foreground px-6">
      <div className="max-w-4xl mx-auto">
        <div 
          className="w-48 h-48 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl border-4 border-primary shadow-card fade-in-up"
          style={{ background: 'var(--gradient-profile)' }}
        >
          PG
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 fade-in-up">
          Prinak Ghosh
        </h1>
        
        <p className="text-xl mb-8 opacity-90 text-muted-foreground fade-in-up-delay-1">
          Mechanical Engineering Student Exploring Materials, Design & Sustainability
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90 text-muted-foreground fade-in-up-delay-2">
          Passionate about hands-on problem-solving and innovative engineering solutions. 
          I focus on materials science, sustainable design, and the intersection of technology 
          with real-world applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up-delay-3">
          <Button 
            variant="hero" 
            onClick={() => onSectionChange('portfolio')}
          >
            View Portfolio
          </Button>
          <Button 
            variant="hero-outline" 
            onClick={onShowNotification}
          >
            Download Resume
          </Button>
          <Button 
            variant="hero-outline" 
            onClick={() => onSectionChange('contact')}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};