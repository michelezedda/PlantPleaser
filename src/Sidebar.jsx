import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="select-menu">
          <ul>
            <li>appetizer</li>
            <li>main course</li>
            <li>side dish</li>
            <li>fingerfood</li>
            <li>snack</li>
            <li>bread</li>
            <li>salad</li>
            <li>dessert</li>
            <li>beverage</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
