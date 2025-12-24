import { useState } from "react";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import SubSidebar from "./components/SubSidebar";
import MainPanel from "./components/MainPanel";

export default function App() {
  const [sidebarState, setSidebarState] = useState("expanded");
  // "closed" | "collapsed" | "expanded"

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
      <SubSidebar
        state={sidebarState}
        onToggleSize={toggleExpandCollapse}
      />

      <div className="main">
        <Header />
        <MainPanel />
      </div>
    </div>
  );
}
