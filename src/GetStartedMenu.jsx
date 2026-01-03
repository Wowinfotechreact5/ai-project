import React, { useState, useRef, useEffect } from "react";
// Import specific icons from react-icons
import { IoClose, IoChevronDown, IoCheckmarkCircle, IoEllipseOutline } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";

const GetStarted = () => {
      const [isOpen, setIsOpen] = useState(false);
      const menuRef = useRef(null);

      // Close the menu when clicking outside of it
      useEffect(() => {
            const handleClickOutside = (event) => {
                  if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setIsOpen(false);
                  }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

      const steps = [
            { title: "Create your first agent", completed: true },
            { title: "Test your agent", completed: false },
            { title: "Add a new Knowledge Base", completed: false },
      ];

      return (
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" ref={menuRef}>

                  {/* --- DROPDOWN MENU --- */}
                  {isOpen && (
                        <div className="w-80 md:w-96 bg-[#16161a] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">

                              {/* Header */}
                              <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#1c1c21]">
                                    <h3 className="text-lg font-semibold text-white">Get Started</h3>
                                    <button
                                          onClick={() => setIsOpen(false)}
                                          className="p-1 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                                    >
                                          <IoClose size={22} />
                                    </button>
                              </div>

                              <div className="p-5 space-y-5">
                                    {/* Progress Bar */}
                                    <div>
                                          <p className="text-sm text-gray-400 mb-2 font-medium">33% completed</p>
                                          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-purple-600 h-full w-1/3 rounded-full transition-all duration-700"></div>
                                          </div>
                                    </div>

                                    {/* Step List */}
                                    <div className="space-y-2">
                                          {steps.map((step, i) => (
                                                <div
                                                      key={i}
                                                      className="flex items-center justify-between p-3 bg-[#1c1c21] border border-gray-800 rounded-xl hover:border-purple-500/30 transition-all cursor-pointer group"
                                                >
                                                      <div className="flex items-center gap-3">
                                                            {step.completed ? (
                                                                  <IoCheckmarkCircle className="text-purple-500" size={20} />
                                                            ) : (
                                                                  <IoEllipseOutline className="text-gray-600 group-hover:text-gray-400" size={20} />
                                                            )}
                                                            <span className={`text-sm ${step.completed ? 'text-white' : 'text-gray-400'}`}>
                                                                  {step.title}
                                                            </span>
                                                      </div>
                                                      <IoChevronDown size={16} className="text-gray-600" />
                                                </div>
                                          ))}
                                    </div>

                                    {/* Footer Documentation Card */}
                                    <div
                                          onClick={() => window.open('https://docs.inya.ai/introduction', '_blank')}
                                          className="flex items-start gap-3 p-4 rounded-xl bg-purple-600/5 border border-purple-500/20 cursor-pointer hover:bg-purple-600/10 transition-all"
                                    >
                                          <FiFileText className="text-purple-400 mt-1" size={20} />
                                          <div>
                                                <p className="text-xs font-bold text-purple-300">Curious about Inya's capabilities?</p>
                                                <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                                                      Check out our documentations to learn what Inya can do
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}

                  {/* --- TRIGGER BUTTON --- */}
                  <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 shadow-xl group
          ${isOpen
                                    ? 'bg-purple-600 border-purple-500 text-white'
                                    : 'bg-[#1a1a1e] border-gray-700 text-gray-200 hover:bg-gray-800 hover:border-gray-600'
                              }`}
                  >
                        <div className="relative w-5 h-5 flex items-center justify-center">
                              <div className={`absolute inset-0 border-2 rounded-full ${isOpen ? 'border-purple-400/30' : 'border-gray-700'}`}></div>
                              <div className={`absolute inset-0 border-2 border-t-purple-500 rounded-full animate-spin ${isOpen ? 'border-t-white' : ''}`}></div>
                        </div>
                        <span className="text-sm font-semibold tracking-wide">Get Started</span>
                  </button>

            </div>
      );
};

export default GetStarted;