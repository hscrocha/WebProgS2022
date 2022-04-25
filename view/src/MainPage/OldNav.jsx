import React from "react";

//Old NavBar component before using Routes
export default function OldNav(){
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html"><span className="bi-house-fill"></span> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="users.html">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li id="menu-admin" className="nav-item">
              <a className="nav-link" href="admin.html">Admin</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><span className="bi-person-circle"></span> Account</a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li id="menu-login"><a className="dropdown-item" href="/login.html">Login</a></li>
                    <li id="menu-register"><a className="dropdown-item" href="/register.html">Register</a></li>
                    <li id="menu-logout"><a className="dropdown-item" href="/logout">Logout</a></li>
                </ul>
            </li>
        </ul>    
        </div>
      </nav>
      
    );
}