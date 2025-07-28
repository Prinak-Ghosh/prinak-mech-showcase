import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Notification } from "@/components/Notification";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showNotification, setShowNotification] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handleShowNotification = () => {
    setShowNotification(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero 
              onSectionChange={handleSectionChange} 
              onShowNotification={handleShowNotification}
            />
            <About />
          </>
        );
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero 
              onSectionChange={handleSectionChange} 
              onShowNotification={handleShowNotification}
            />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      {renderContent()}
      
      <Notification 
        isVisible={showNotification}
        onHide={() => setShowNotification(false)}
      />
    </div>
  );
};

export default Index;
