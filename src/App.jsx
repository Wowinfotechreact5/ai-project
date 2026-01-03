import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import SubSidebar from "./components/SubSidebar";

// pages
import Dashboard from "./pages/Dashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import AgentChains from "./pages/AgentChains";

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

  return (
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
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
