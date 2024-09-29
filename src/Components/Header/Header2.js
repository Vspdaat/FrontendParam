import React, { useState, useEffect } from "react";
import MilletGrid from "./MilletGrid"; // Assuming MilletGrid is in the same folder

const Header2 = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item
  const [activeItem, setActiveItem] = useState(null); // Track clicked (sticky) item
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile view
  const [hoveringGrid, setHoveringGrid] = useState(false); // Track if hovering on the grid itself

  const navItems = [
    "MILLETS",
    "NUTRI BITES",
    "MILK MIXES",
    "IDLY PODIES",
    "SPICES",
    "SKIN AND HAIRCARE",
    "CONTACT US",
  ];

  // Detect screen size changes to adjust behavior for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Treat < 768px as mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle item click: toggle active item for desktop, deactivate for mobile
  const handleItemClick = (item) => {
    if (!isMobile) {
      if (activeItem === item) {
        setActiveItem(null); // If already active, clicking again will close it
      } else {
        setActiveItem(item); // Make the clicked item "sticky" (only desktop)
      }
    }
  };

  // Handle clicks outside the millet grid to close the active item
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".millet-grid") && !e.target.closest(".nav-item")) {
      setActiveItem(null);
      setHoveredItem(null);
    }
  };

  useEffect(() => {
    if (activeItem || hoveredItem) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [activeItem, hoveredItem]);

  return (
    <div>
      <nav className="bg-[#000719] text-white text-sm px-[53px] py-2 md:px-[213px]">
        <div className="container mx-auto">
          {/* Use overflow-x-auto and whitespace-nowrap to allow horizontal scrolling */}
          <ul className="flex flex-row w-full gap-8 text-[10px] md:text-[16px] h-[17px mb-2] overflow-x-auto whitespace-nowrap md:justify-center">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item hover:text-gray-400 cursor-pointer mb-2 sm:mb-0 ${
                  activeItem === item ? "text-gray-400" : ""
                }`}
                onMouseEnter={() => {
                  if (!isMobile && !activeItem && !hoveringGrid) setHoveredItem(item);
                }} // Only show hover if no active item
                onMouseLeave={() => {
                  if (!isMobile && !activeItem && !hoveringGrid) setHoveredItem(null);
                }} // Only hide hover if no active item
                onClick={() => handleItemClick(item)} // Handle click to make it sticky on desktop
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Display MilletGrid component if either the item is hovered or clicked */}
      {(hoveredItem || activeItem || hoveringGrid) && (
        <div
          className="millet-grid"
          onMouseEnter={() => setHoveringGrid(true)} // Stay stable when hovering over the grid
          onMouseLeave={() => setHoveringGrid(false)} // Reset hover state when leaving grid
        >
          <MilletGrid />
        </div>
      )}
    </div>
  );
};

export default Header2;