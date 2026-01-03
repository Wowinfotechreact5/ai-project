import { FiSidebar } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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

                        {/* ROUTE-BASED MENU */}
                        <NavLink
                              to="/knowledge-base"
                              className={({ isActive }) =>
                                    `menu-item ${isActive ? "active" : ""}`
                              }
                        >
                              📚 {state === "expanded" && "Knowledge Base"}
                        </NavLink>

                        <NavLink
                              to="/agent-chains"
                              className={({ isActive }) =>
                                    `menu-item ${isActive ? "active" : ""}`
                              }
                        >
                              🔗 {state === "expanded" && "Agent Chains"}
                        </NavLink>
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
