import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="fixed w-full top-0 z-50 glass-nav">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary-foreground">
          Prinak Ghosh
        </div>
        <ul className="flex gap-8 list-none">
          {['home', 'portfolio', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => onSectionChange(section)}
                className={cn(
                  "capitalize font-medium transition-colors cursor-pointer",
                  activeSection === section 
                    ? "text-primary-foreground" 
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                )}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};