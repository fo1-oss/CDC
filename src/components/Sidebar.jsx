const navItems = [
  { id: 'overview', label: 'Overview', icon: 'fa-home' },
  { id: 'financials', label: 'Financials', icon: 'fa-chart-line' },
  { id: 'stores', label: 'Store Performance', icon: 'fa-store' },
  { id: 'market', label: 'Market & Competition', icon: 'fa-globe' },
  { id: 'funding', label: 'Funding & Expansion', icon: 'fa-rocket' },
  { id: 'team', label: 'Team', icon: 'fa-users' },
  { id: 'documents', label: 'Documents', icon: 'fa-folder-open' }
];

function Sidebar({ activeSection, onNavClick, isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="logo-container">
        <div className="logo">
          <span className="logo-top">CREPDOG</span><br />
          <span className="logo-bottom">CREW</span>
        </div>
        <div className="logo-badge">INVESTOR DATA ROOM</div>
      </div>
      <nav className="nav">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => onNavClick(item.id)}
          >
            <div className="icon">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
