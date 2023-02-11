import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hey clever progammer how are you</h1>
      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
