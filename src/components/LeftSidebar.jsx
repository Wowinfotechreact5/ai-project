import { MdDashboard } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function LeftSidebar({ onToggle }) {
      const [open, setOpen] = useState(false);
      const profileRef = useRef(null);
      return (
            <>
                  <aside className="left-sidebar">
                        {/* Logo Section */}
                        <div className="logo-wrapper">
                              <div className="logo">✦</div>
                        </div>

                        {/* Divider */}
                        <div className="logo-divider" />

                        {/* Menu Buttons */}
                        <button
                              onClick={onToggle}
                              data-tooltip-id="sidebar-tooltip"
                              data-tooltip-content="Toggle Sidebar"
                              className="p-2 text-gray-300 hover:text-white"
                        >
                              <MdDashboard size={20} />
                        </button>
                        {/* <button onClick={onToggle} title="Toggle Sidebar"><MdDashboard /></button> */}
                        <button title="Build"><FaTools /></button>
                        <button title="Monitor"><FiPieChart /></button>
                        <button title="Manage"><IoIosSettings /></button>

                        <div className="sidebar-bottom">
                              <button
                                    ref={profileRef}
                                    onClick={() => setOpen((p) => !p)}
                                    className="profile"
                              >
                                    SW
                              </button>
                        </div>

                        {/* <ProfileDropdown open={open} anchorRef={profileRef} /> */}
                  </aside>
                  <ProfileDropdown open={open} anchorRef={profileRef} />
            </>
      );
}
