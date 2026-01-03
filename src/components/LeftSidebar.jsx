import { MdDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { NavLink, useNavigate } from "react-router-dom";

export default function LeftSidebar({ onToggle }) {
      const [open, setOpen] = useState(false);
      const profileRef = useRef(null);
      const navigate = useNavigate()
      return (
            <>
                  <aside className="left-sidebar flex flex-col justify-between">

                        {/* TOP SECTION */}
                        <div>
                              {/* Logo */}
                              <div className="logo-wrapper">
                                    <div className="logo">✦</div>
                              </div>

                              <div className="logo-divider" />

                              {/* ROUTES */}
                              <div className="flex flex-col gap-3 pt-4 pb-6">
                                    <button
                                          onClick={() => navigate('/')}
                                          // onClick={onToggle}
                                          data-tooltip-id="sidebar-tooltip"
                                          data-tooltip-content="Toggle Sidebar"
                                          className="p-2 text-gray-300 hover:text-white"
                                    >
                                          <MdDashboard size={20} />
                                    </button>

                                    <NavLink
                                          to="/knowledge-base"
                                          className={({ isActive }) =>
                                                `sidebar-icon ${isActive ? "active" : ""}`
                                          }
                                          title="Build"

                                    >
                                          <FaTools size={18} />
                                    </NavLink>

                                    <NavLink
                                          to="/monitor"
                                          className={({ isActive }) =>
                                                `sidebar-icon ${isActive ? "active" : ""}`
                                          }
                                          title="Monitor"
                                    // onClick={onToggle}
                                    >
                                          <FiPieChart size={18} />
                                    </NavLink>

                                    <NavLink
                                          to="/manage"
                                          className={({ isActive }) =>
                                                `sidebar-icon ${isActive ? "active" : ""}`
                                          }
                                          title="Manage"
                                    // onClick={onToggle}
                                    >
                                          <IoIosSettings size={18} />
                                    </NavLink>
                              </div>
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className="pb-4">
                              <div className="sidebar-bottom">
                                    <button
                                          ref={profileRef}
                                          onClick={() => setOpen((p) => !p)}
                                          className="profile"
                                    >
                                          SW
                                    </button>
                              </div>
                        </div>

                  </aside>

                  <ProfileDropdown open={open} anchorRef={profileRef} />
            </>
      );
}

