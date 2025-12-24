export default function SubSidebar({ state, onToggleSize }) {
      if (state === "closed") return null;

      return (
            <aside className={`sub-sidebar ${state}`}>
                  {/* top */}
                  <div>
                        <div className="sub-header">
                              {state === "expanded" && <span>Build</span>}
                              <button onClick={onToggleSize}>
                                    {state === "expanded" ? "⟨" : "⟩"}
                              </button>
                        </div>

                        <div className="menu-item active">
                              📚 {state === "expanded" && "Dashboard"}
                        </div>

                        <div className="menu-item">
                              ⚡ {state === "expanded" && "Knowledge Base"}
                        </div>

                        <div className="menu-item">
                              🔗 {state === "expanded" && "Agent Chains"}
                        </div>
                  </div>

                  {/* bottom credits */}
                  <div className="sub-sidebar-footer">
                        <div className="credit-ring">
                              <span>0%</span>
                        </div>

                        {state === "expanded" && (
                              <>
                                    <p className="credit-title">Free Credits Used</p>
                                    <small className="credit-sub">0s of 20m</small>
                              </>
                        )}
                  </div>
            </aside>
      );
}
