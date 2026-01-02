import { FiSidebar } from "react-icons/fi";

export default function SubSidebar({ state, onToggleSize }) {
      if (state === "closed") return null;

      return (
            <aside className={`sub-sidebar ${state}`}>
                  {/* top */}
                  <div>
                        <div
                              className={`sub-header ${state === "collapsed" ? "center-toggle" : ""
                                    }`}
                        >
                              {state === "expanded" && (
                                    <p className="sub-title">Build</p>
                              )}

                              <button onClick={onToggleSize}>
                                    <FiSidebar size={22} color="slateblue" />
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

                  {/* bottom */}
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
