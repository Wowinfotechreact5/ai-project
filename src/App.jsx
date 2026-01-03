import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import SubSidebar from "./components/SubSidebar";

// pages
import Dashboard from "./pages/Dashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import AgentChains from "./pages/AgentChains";
const TASKS = [
  {
    id: "create-agent",
    title: "Create your first agent",
    short: "Create your first agent",
    docsUrl: "https://docs.inya.ai/introduction",
    steps: [
      "From the main dashboard, click the '+ Create Agent' button to begin.",
      "Choose a pre-built template from our marketplace that best fits your industry, such as Fintech, Automobile, or Customer Support.",
      "Fill in your agent's details. Give it a unique name, and set the correct Region and Time Zone for its operations.",
      "Link an existing Knowledge Base to provide your agent with the information it needs to answer questions.",
      "Click 'Create Agent'. Congratulations, your agent is now live and ready for configuration!"
    ]
  },
  {
    id: "test-agent",
    title: "Test your agent",
    short: "Test your agent",
    docsUrl: "https://docs.inya.ai/testing",
    steps: [
      "Open your created agent.",
      "Navigate to the Test panel.",
      "Ask sample questions.",
      "Verify responses.",
      "Refine prompts if required."
    ]
  },
  {
    id: "add-kb",
    title: "Add a new Knowledge Base",
    short: "Add a new Knowledge Base",
    docsUrl: "https://docs.inya.ai/knowledge-base",
    steps: [
      "Go to Knowledge Base section.",
      "Click 'Add Knowledge Base'.",
      "Upload files or connect a source.",
      "Process documents.",
      "Attach KB to your agent."
    ]
  }
];

function AppLayout() {
  const [sidebarState, setSidebarState] = useState("expanded");
  // "closed" | "collapsed" | "expanded"

  const location = useLocation();

  // ✅ Hide SubSidebar only on dashboard (/)
  const hideSubSidebar = location.pathname === "/";

  const toggleOpenClose = () => {
    setSidebarState((prev) =>
      prev === "closed" ? "expanded" : "closed"
    );
  };

  const toggleExpandCollapse = () => {
    setSidebarState((prev) =>
      prev === "expanded" ? "collapsed" : "expanded"
    );
  };
  const handleGetStarted = () => {
    window.open('https://docs.inya.ai/introduction', '_blank', 'noopener,noreferrer');
  };
  const [openGetStarted, setOpenGetStarted] = useState(false);
  const [activeTask, setActiveTask] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenGetStarted(false);
      }
    }

    if (openGetStarted) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openGetStarted]);
  return (
    <>
      <div className="app">
        <LeftSidebar onToggle={toggleOpenClose} />

        {/* ✅ SubSidebar only for non-dashboard routes */}
        {!hideSubSidebar && (
          <SubSidebar
            state={sidebarState}
            onToggleSize={toggleExpandCollapse}
          />
        )}

        <div className="main">
          <Header />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/agent-chains" element={<AgentChains />} />
          </Routes>
        </div>
        <button
          onClick={() => setOpenGetStarted((prev) => !prev)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-2.5 
             bg-[#1a1a1e] border border-gray-700 rounded-full hover:bg-gray-800 
             transition-all duration-200 shadow-lg group"
        >
          <div className="relative w-5 h-5">
            <div className="absolute inset-0 border-2 border-gray-600 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-t-purple-500 rounded-full animate-spin"></div>
          </div>

          <span className="font-medium text-sm text-gray-200 group-hover:text-white">
            Get Started
          </span>
        </button>



      </div>
      {openGetStarted && !activeTask && (
        <div className="fixed bottom-20 right-6 w-[360px] rounded-2xl
                  border border-[#1f2937] bg-gradient-to-b
                  from-[#0f172a] to-[#020617] shadow-2xl z-50">

          {/* Header */}
          <div className="flex justify-between px-5 py-4 border-b border-[#1f2937]">
            <span className="text-sm font-semibold text-white">Get Started</span>
            <button onClick={() => setOpenGetStarted(false)}>✕</button>
          </div>

          {/* Tasks */}
          <div className="p-3 space-y-2">
            {TASKS.map((task, index) => (
              <button
                key={task.id}
                onClick={() => setActiveTask(task)}
                className="w-full flex items-center gap-3 px-4 py-3
                     rounded-xl bg-[#111827] hover:bg-[#1f2937]
                     transition text-left"
              >
                <div className="h-5 w-5 rounded-full bg-purple-500
                          flex items-center justify-center text-xs text-white">
                  {index + 1}
                </div>
                <span className="text-sm text-white">{task.short}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {openGetStarted && activeTask && (
        <div className="fixed bottom-20 right-6 w-[420px] h-[520px]
                  rounded-2xl border border-[#1f2937]
                  bg-gradient-to-b from-[#0f172a] to-[#020617]
                  shadow-2xl z-50 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1f2937]">
            <button
              onClick={() => setActiveTask(null)}
              className="text-gray-400 hover:text-white"
            >
              ← Task
            </button>
            <button onClick={() => setOpenGetStarted(false)}>✕</button>
          </div>

          {/* Content */}
          <div className="px-5 py-4 overflow-y-auto text-sm text-gray-300">
            <h3 className="text-white font-semibold mb-1">
              {activeTask.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {activeTask.short}
            </p>

            <a
              href={activeTask.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-5
                   px-3 py-1.5 rounded-lg border border-[#1f2937]
                   text-xs text-white hover:bg-[#1f2937]"
            >
              📄 Read Docs
            </a>

            <div className="space-y-4">
              {activeTask.steps.map((step, idx) => (
                <div key={idx}>
                  <div className="text-xs text-gray-500 mb-1">
                    Step {idx + 1}
                  </div>
                  <div>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
