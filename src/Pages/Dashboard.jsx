import { useState } from "react";
import MainPanel from "../components/MainPanel";

export default function Dashboard() {

      const [openStep, setOpenStep] = useState(false
      ); // default open

      const toggleStep = (step) => {
            setOpenStep(openStep === step ? null : step);
      };
      const btnClick = () => {
            // '_blank' tells the browser to open a new tab
            window.open('https://docs.inya.ai/introduction', '_blank', 'noopener,noreferrer');
      };
      return (
            <MainPanel >
                  <div className="mt-6 max-w-3xl" >

                        {/* MAIN CARD */}
                        <div className="rounded-2xl border border-[#1f2937] bg-gradient-to-b from-[#0f172a] to-[#020617] shadow-xl">

                              {/* Header */}
                              <div className="px-6 py-5 border-b border-[#1f2937]">
                                    <h2 className="text-lg font-semibold text-white">
                                          Welcome Sandeep! Let’s get started
                                    </h2>
                              </div>

                              {/* STEPS */}
                              <div className="divide-y divide-[#1f2937]">

                                    {/* STEP 1 */}
                                    <StepItem
                                          step={1}
                                          openStep={openStep}
                                          onToggle={toggleStep}
                                          title="Create your first agent"
                                          completed
                                    >
                                          <p className="text-sm text-gray-400">
                                                Learn how to build and launch your first AI voice agent from scratch using our intuitive templates.
                                          </p>

                                          <button className="mt-3 inline-flex items-center rounded-lg border border-[#1f2937] bg-[#020617] px-4 py-2 text-sm text-white hover:bg-[#0f172a]">
                                                Learn how
                                          </button>
                                    </StepItem>

                                    {/* STEP 2 */}
                                    <StepItem
                                          step={2}
                                          openStep={openStep}
                                          onToggle={toggleStep}
                                          title="Test your agent"
                                    >
                                          <p className="text-sm text-gray-400">
                                                See your agent in action and learn how to test it in a safe environment.
                                          </p>

                                          <div className="mt-3 flex gap-3">
                                                <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-500">
                                                      Start Task
                                                </button>

                                                <button className="rounded-lg border border-[#1f2937] px-4 py-2 text-sm text-white hover:bg-[#0f172a]">
                                                      Learn how
                                                </button>
                                          </div>
                                    </StepItem>

                                    {/* STEP 3 */}
                                    <StepItem
                                          step={3}
                                          openStep={openStep}
                                          onToggle={toggleStep}
                                          title="Add a new Knowledge Base"
                                    >
                                          <p className="text-sm text-gray-400">
                                                Upload documents or connect data sources to power your agent with knowledge.
                                          </p>

                                          <button className="mt-3 rounded-lg border border-[#1f2937] px-4 py-2 text-sm text-white hover:bg-[#0f172a]">
                                                Add Knowledge Base
                                          </button>
                                    </StepItem>

                              </div>
                        </div>

                        {/* SECONDARY CARD */}
                        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#1f2937] bg-[#020617] px-6 py-4">
                              <div className="h-9 w-6 rounded-lg bg-[#0f172a] flex items-center justify-center">
                                    📄
                              </div>

                              <div style={{ cursor: 'pointer' }} onClick={btnClick}>
                                    <p className="text-sm font-medium text-white">
                                          Curious about Inya’s capabilities?
                                    </p>
                                    <p className="text-xs text-gray-400">
                                          Check out our documentation to learn what Inya can do
                                    </p>
                              </div>
                        </div>

                  </div>
            </MainPanel>
      );
}

/* Small chevron icon */
function Chevron({ rotate }) {
      return (
            <svg
                  className={`h-4 w-4 text-gray-500 transition-transform ${rotate ? "rotate-90" : ""
                        }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
            >
                  <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                  />
            </svg>
      );
}


function StepItem({ step, openStep, onToggle, title, completed, children }) {
      const isOpen = openStep === step;

      return (
            <div >
                  {/* HEADER */}
                  <button
                        onClick={() => onToggle(step)}
                        className="flex w-full items-center justify-between px-6 py-4"
                  >
                        <div className="flex items-center gap-3">
                              {completed ? (
                                    <div className="h-5 w-5 rounded-full bg-violet-500 flex items-center justify-center text-xs text-white">
                                          ✓
                                    </div>
                              ) : (
                                    <div className="h-5 w-5 rounded-full border border-gray-600" />
                              )}

                              <span className={`text-sm ${completed ? "text-white" : "text-gray-300"}`}>
                                    {title}
                              </span>
                        </div>

                        <Chevron rotate={isOpen} />
                  </button>

                  {/* BODY */}
                  <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                              }`}
                  >
                        <div className="px-6 pb-5">
                              <div className="max-w-[520px] leading-relaxed text-wrap break-words">
                                    {children}
                              </div>
                        </div>

                  </div>
            </div>
      );
}
