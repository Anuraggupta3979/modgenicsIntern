import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">
        <Link to="/">ModGenics</Link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/img1">ImageOne</Link>
          </li>
          <li class="nav-item">
            <Link to="/img2">ImageTWo</Link>
          </li>
          <li class="nav-item">
            <Link to="/img3">ImageThree</Link>
          </li>
          <li class="nav-item">
            <Link to="/img4">ImageFour</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
