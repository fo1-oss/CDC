import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import Overview from './pages/Overview';
import Financials from './pages/Financials';
import Stores from './pages/Stores';
import Market from './pages/Market';
import Funding from './pages/Funding';
import Team from './pages/Team';
import Documents from './pages/Documents';
import Chatbot from './components/Chatbot';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'financials':
        return <Financials />;
      case 'stores':
        return <Stores />;
      case 'market':
        return <Market />;
      case 'funding':
        return <Funding />;
      case 'team':
        return <Team />;
      case 'documents':
        return <Documents />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <MobileHeader
        isMenuOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
      />

      <div
        className={`sidebar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      />

      {/* Decorative swirl */}
      <svg className="swirl swirl-br" viewBox="0 0 200 200">
        <path d="M150 180 Q180 150 150 120 Q120 90 150 60 Q180 30 150 0" fill="none" stroke="#C0E529" strokeWidth="20" strokeLinecap="round"/>
      </svg>

      <div className="app">
        <Sidebar
          activeSection={activeSection}
          onNavClick={handleNavClick}
          isOpen={isMobileMenuOpen}
        />

        <main className="main">
          {renderSection()}
        </main>
      </div>

      <Chatbot
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />

      <button
        className={`chat-fab ${isChatOpen ? 'hidden' : ''}`}
        onClick={() => setIsChatOpen(true)}
      >
        <i className="fas fa-comment-dots"></i>
      </button>
    </>
  );
}

export default App;
