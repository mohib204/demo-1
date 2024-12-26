import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import img from './ownerImg-removebg-preview (1).png';
import imsg from './im-removebg-preview.png'
import "./nav.css"; // CSS for styling

const NavbarWithRope = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility
  const ropeRef = useRef(null); // Reference to rope element
  const imageRef = useRef(null); // Reference to image element

  // Click event to toggle dropdown visibility
  const handleRopeClick = () => {
    setDropdownVisible((prevState) => !prevState); // Toggle dropdown visibility
  };

  return (
    <div className="navbar-container">
      {/* Navbar with Links */}
      <nav className="navbar">
        <div className="navbarbrand">
          <img src={img} alt="img" className="small-image" />
        </div>
        <input type="checkbox" id="toggle" className="toggle-input" />
        <label htmlFor="toggle" className="toggle-label">
          ☰
        </label>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About The Owner</Link></li>
          <li><Link to="/projects">The Plans for a Day</Link></li>
          <li><Link to="/src/component/pages/owner/owner.js">The Website Owner</Link></li>
          <li><Link to="/src/component/pages/somestoveiknowabout/somestoveiknowabout.js">Some Stove I Know About</Link></li>
        </ul>
      </nav>

      {/* Rope element */}
      <div className="rope-wrapper">
        <div
          className="rope"
          onClick={handleRopeClick} // On click, toggle the dropdown visibility
          ref={ropeRef}
        >
          <img
            src={imsg} // Replace with your image URL
            alt="Rope"
            className="rope-image"
            ref={imageRef}
          />
        </div>
      </div>

      {/* Dropdown links */}
      <div
        className="dropdown-container"
        style={{
          opacity: dropdownVisible ? 1 : 0,
          pointerEvents: dropdownVisible ? "auto" : "none",
          transform: `translateY(${dropdownVisible ? 0 : -10}px)`, // Smooth transition
        }}
      >
        <li className="dropdown-item"><Link to="/src/component/pages/drop1/dr.js">Dropdown</Link></li>
        <li className="dropdown-item"><Link to="/src/component/pages/drop2/dro.js">Dropdown</Link></li>
      </div>
    </div>
  );
};

export default NavbarWithRope;
