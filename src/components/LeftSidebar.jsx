export default function LeftSidebar({ onToggle }) {
      return (
            <aside className="left-sidebar">
                  {/* Logo Section */}
                  <div className="logo-wrapper">
                        <div className="logo">✦</div>
                  </div>

                  {/* Divider */}
                  <div className="logo-divider" />

                  {/* Menu Buttons */}
                  <button onClick={onToggle} title="Toggle Sidebar">📚</button>
                  <button>⚡</button>
                  <button>🔗</button>

                  <div className="sidebar-bottom">
                        <div className="profile">SW</div>
                  </div>
            </aside>
      );
}
