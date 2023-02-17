import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
    </div>
  );
}

export default App;
