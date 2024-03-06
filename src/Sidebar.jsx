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
            <Link to="/category/appetizer">
              <li>appetizer</li>
            </Link>
            <Link to="/category/main%20course">
              <li>main course</li>
            </Link>
            <Link to="/category/side%20dish">
              <li>side dish</li>
            </Link>
            <Link to="/category/fingerfood">
              <li>fingerfood</li>
            </Link>
            <Link to="/category/snack">
              <li>snack</li>
            </Link>
            <Link to="/category/salad">
              <li>salad</li>
            </Link>
            <Link to="/category/dessert">
              <li>dessert</li>
            </Link>
            <Link to="/category/beverage">
              <li>beverage</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
