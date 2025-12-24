export default function TopBar() {
      return (
            <div className="top-bar">
                  {/* LEFT: logo */}
                  <div className="top-logo">
                        <img src="/logo.svg" alt="logo" />
                  </div>

                  {/* BUILD */}
                  <div className="top-build">
                        Build
                  </div>

                  {/* COLLAPSE ICON */}
                  <div className="top-collapse">
                        ❮
                  </div>

                  {/* TITLE */}
                  <div className="top-title">
                        Knowledge Base <span>0 KBs</span>
                  </div>

                  {/* RIGHT ACTIONS */}
                  <div className="top-actions">
                        <input placeholder="Search by agent name" />
                        <button className="primary-btn">+ Create Agent</button>
                  </div>
            </div>
      );
}
