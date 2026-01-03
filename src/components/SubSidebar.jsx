import { FiSidebar } from "react-icons/fi";
import { useLocation, NavLink } from "react-router-dom";
const SUB_SIDEBAR_ROUTES = {
      build: {
            title: "Build",
            routes: [
                  { to: "/knowledge-base", label: "Knowledge Base", icon: "📚" },
                  { to: "/help", label: "Help", icon: "❓" },
            ],
      },
      monitor: {
            title: "Monitor",
            routes: [
                  { to: "/monitor", label: "Monitor Dashboard", icon: "📊" },
                  { to: "/inspection", label: "Inspection", icon: "🔍" },
            ],
      },
      manage: {
            title: "Manage",
            routes: [
                  { to: "/settings", label: "Settings", icon: "⚙️" },
                  { to: "/users", label: "Users", icon: "👤" },
            ],
      },
};


export default function SubSidebar({ state, onToggleSize }) {
      const location = useLocation();
      const path = location.pathname;

      let activeSection = null;

      if (path.startsWith("/knowledge-base") || path.startsWith("/help")) {
            activeSection = "build";
      } else if (path.startsWith("/monitor") || path.startsWith("/inspection")) {
            activeSection = "monitor";
      } else if (path.startsWith("/settings") || path.startsWith("/users")) {
            activeSection = "manage";
      }

      if (!activeSection) return null;

      const section = SUB_SIDEBAR_ROUTES[activeSection];
      if (state === "closed") return null;

      return (
            <aside className={`sub-sidebar ${state}`}>

                  {/* HEADER */}
                  <div>
                        <div
                              className={`sub-header ${state === "collapsed" ? "center-toggle" : ""
                                    }`}
                        >
                              {state === "expanded" && (
                                    <p className="sub-title">{section.title}</p>
                              )}

                              <button onClick={onToggleSize}>
                                    <FiSidebar size={22} color="slateblue" />
                              </button>
                        </div>

                        {/* ROUTES */}
                        {section.routes.map((route) => (
                              <NavLink
                                    key={route.to}
                                    to={route.to}
                                    className={({ isActive }) =>
                                          `menu-item ${isActive ? "active" : ""}`
                                    }
                              >
                                    {route.icon} {state === "expanded" && route.label}
                              </NavLink>
                        ))}
                  </div>

                  {/* FOOTER */}
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
