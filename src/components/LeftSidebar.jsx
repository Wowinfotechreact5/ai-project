export default function LeftSidebar({ onToggle }) {
      return (
            <aside className="left-sidebar">
                  <div className="logo">✦</div>

                  <button onClick={onToggle} title="Toggle Sidebar">📚</button>
                  <button>⚡</button>
                  <button>🔗</button>

                  <div className="sidebar-bottom">


                        <div className="profile">
                              SW
                        </div>
                  </div>

            </aside>
      );
}
