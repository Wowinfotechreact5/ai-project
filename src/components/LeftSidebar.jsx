import { MdDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { NavLink, useNavigate } from "react-router-dom";
const navIconClass = ({ isActive }) =>
      `
    w-10 h-10
    flex items-center justify-center
    rounded-lg
    transition-colors duration-200
    ${isActive
            ? "bg-[#6846ba] text-white"
            : "text-gray-300 hover:text-white hover:bg-[#2a2f3a]"
      }
  `;

export default function LeftSidebar({ onToggle }) {
      const [open, setOpen] = useState(false);
      const profileRef = useRef(null);
      const navigate = useNavigate()
      return (
            <>
                  <aside className="left-sidebar flex flex-col justify-between bg-[#1f242f]">

                        {/* TOP SECTION */}
                        <div>
                              {/* yaha pr Logo */}
                              <div className="logo-wrapper">
                                    <div className="logo">✦</div>
                              </div>

                              <div className="logo-divider" />

                              {/* ROUTES */}
                              <div className="flex flex-col gap-3 pt-4 pb-6">


                                    <NavLink to="/" className={navIconClass}>
                                          <MdDashboard size={18} />
                                    </NavLink>
                                    <NavLink to="/knowledge-base" className={navIconClass}>
                                          <FaTools size={18} />
                                    </NavLink>

                                    <NavLink to="/monitor" className={navIconClass}>
                                          <FiPieChart size={18} />
                                    </NavLink>

                                    <NavLink
                                          to="/manage"
                                          className={navIconClass}
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

