import { useEffect } from "react";

interface NotificationProps {
  isVisible: boolean;
  onHide: () => void;
  message?: string;
}

export const Notification = ({ 
  isVisible, 
  onHide, 
  message = "No resume has been uploaded yet." 
}: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-secondary/90 backdrop-blur-md text-secondary-foreground px-8 py-4 rounded-xl shadow-card border border-border">
        {message}
      </div>
    </div>
  );
};