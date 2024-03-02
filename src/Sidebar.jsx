import React, { useState } from "react";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";

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
            <li>
              <b>HOME</b>
            </li>
            <br />
            <li onClick={() => handleCategoryClick("appetizer")}>appetizer</li>
            <li onClick={() => handleCategoryClick("main course")}>
              main course
            </li>
            <li onClick={() => handleCategoryClick("side dish")}>side dish</li>
            <li onClick={() => handleCategoryClick("fingerfood")}>
              fingerfood
            </li>
            <li onClick={() => handleCategoryClick("snack")}>snack</li>
            <li onClick={() => handleCategoryClick("bread")}>bread</li>
            <li onClick={() => handleCategoryClick("salad")}>salad</li>
            <li onClick={() => handleCategoryClick("dessert")}>dessert</li>
            <li onClick={() => handleCategoryClick("beverage")}>beverage</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
