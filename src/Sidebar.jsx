import React, { useState } from "react";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          {isOpen ? (
            <TbLayoutSidebarRightExpandFilled />
          ) : (
            <TbLayoutSidebarRightCollapseFilled />
          )}
        </button>
        <div className="select-menu">
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <br />
            <Link to="/appetizer">
              <li>appetizer</li>
            </Link>
            <Link to="/maincourse">
              <li>main course</li>
            </Link>
            <Link to="/sideDish">
              <li>side dish</li>
            </Link>
            <Link to="/fingerfood">
              <li>fingerfood</li>
            </Link>
            <Link to="/snack">
              <li>snack</li>
            </Link>
            <Link to="/bread">
              <li>beverage</li>
            </Link>
            <Link to="/salad">
              <li>salad</li>
            </Link>
            <Link to="/dessert">
              <li>dessert</li>
            </Link>
            <Link to="/beverage">
              <li>beverage</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
