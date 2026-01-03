import { createPortal } from "react-dom";
import { FiBook, FiGlobe, FiAlertCircle, FiLogOut } from "react-icons/fi";

export default function ProfileDropdown({ open, anchorRef }) {
      if (!open || !anchorRef.current) return null;

      const rect = anchorRef.current.getBoundingClientRect();

      return createPortal(
            <div
                  style={{
                        position: "fixed",
                        left: rect.right + 12,
                        bottom: window.innerHeight - rect.bottom,
                        zIndex: 9999,
                  }}
                  className="
  w-[230px]
  rounded-xl
  bg-[#0b1020]
  border border-[#1f2937]
  shadow-2xl
  text-gray-300
"

            >
                  {/* USER HEADER */}
                  <div className="flex items-center gap-3 px-4 pt-3 pb-2">

                        <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-xs font-semibold text-white">
                              SW
                        </div>
                        <div className="leading-tight">
                              <p className="text-sm font-medium text-white">Sagar Wow</p>
                              <p className="text-xs text-gray-400">wowjrdotnet@gmail.com</p>
                        </div>
                  </div>

                  <div className="border-t border-[#1f2937]" />

                  {/* PERSONAL / ADMIN */}
                  <div className="px-4 py-3">
                        <div className="flex items-center justify-between bg-[#111827] rounded-lg px-3 py-2">
                              <span className="text-sm text-gray-300">Personal</span>
                              <span className="text-xs px-2 py-0.5 rounded-md bg-[#1f2937] text-gray-200">
                                    Admin
                              </span>
                        </div>
                  </div>

                  <div className="border-t border-[#1f2937]" />

                  {/* MENU ITEMS */}
                  <MenuItem icon={<FiBook />} label="Documentation" />
                  <MenuItem icon={<FiGlobe />} label="Join Community" />
                  <MenuItem icon={<FiAlertCircle />} label="Report an issue" />

                  <div className="border-t border-[#1f2937] my-1" />

                  {/* LOGOUT */}
                  <div className="pb-1">
                        <MenuItem
                              icon={<FiLogOut />}
                              label="Log out"
                              danger
                        />
                  </div>
            </div>,
            document.getElementById("portal-root")
      );
}

function MenuItem({ icon, label, danger }) {
      return (
            <button
                  className={`
        w-full flex items-center gap-2
       px-3 py-[6px]

        text-sm
        transition
        ${danger
                              ? "text-red-400 hover:bg-red-500/10"
                              : "text-gray-300 hover:bg-[#1f2937]"
                        }
      `}
            >
                  <span className="text-base opacity-80">{icon}</span>
                  <span className="truncate">{label}</span>
            </button>
      );
}

