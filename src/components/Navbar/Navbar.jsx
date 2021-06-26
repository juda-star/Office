import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Input"> formWork</Link>
        </li>
        <li>
          <Link to="/contact"> contact</Link>
        </li>
      </ul>
    </div>
  );
}
