import React, { useState } from "react";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <button className="sidebar-toggle-btn" onClick={openSidebar}>
          {isOpen ? (
            <TbLayoutSidebarRightExpandFilled />
          ) : (
            <TbLayoutSidebarRightCollapseFilled />
          )}
        </button>
        <div className="select-menu">
          <ul>
            <Link to="/">
              <li onClick={closeSidebar}>HOME</li>
            </Link>
            <br />
            <Link to="/category/appetizer">
              <li onClick={closeSidebar}>appetizer</li>
            </Link>
            <Link to="/category/main-course">
              <li onClick={closeSidebar}>main course</li>
            </Link>
            <Link to="/category/side-dish">
              <li onClick={closeSidebar}>side dish</li>
            </Link>
            <Link to="/category/fingerfood">
              <li onClick={closeSidebar}>fingerfood</li>
            </Link>
            <Link to="/category/snack">
              <li onClick={closeSidebar}>snack</li>
            </Link>
            <Link to="/category/salad">
              <li onClick={closeSidebar}>salad</li>
            </Link>
            <Link to="/category/dessert">
              <li onClick={closeSidebar}>dessert</li>
            </Link>
            <Link to="/category/beverage">
              <li onClick={closeSidebar}>beverage</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
