import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const myFunc = () => {
  let navbar = document.querySelector(".header .flex .navbar");
  let profile = document.querySelector(".header .flex .profile");

  document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    profile.classList.remove("active");
  };

  document.querySelector("#user-btn").onclick = () => {
    profile.classList.toggle("active");
    navbar.classList.remove("active");
  };

  window.onscroll = () => {
    profile.classList.remove("active");
    navbar.classList.remove("active");
  };
};

const Header = () => {
  useEffect(() => {
    myFunc();
  }, []);

  return (
    <div>
      <header className="header">
        <section className="flex">
          <Link to="/home" className="logo" style={{ textDecoration: "none" }}>
            yum-yum 😋
          </Link>
          <nav className="navbar">
            <Link to="/home" style={{ textDecoration: "none" }}>
              home
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              about
            </Link>
            <Link to="/menu" style={{ textDecoration: "none" }}>
              menu
            </Link>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              orders
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              contact
            </Link>
          </nav>
          <div className="icons">
            <Link to="/search">
              <i className="fas fa-search" />
            </Link>
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              <span style={{ textDecoration: "none" }}>(3)</span>
            </Link>
            <div id="user-btn" className="fas fa-user" />
            <div id="menu-btn" className="fas fa-bars" />
          </div>
          <div className="profile">
            <p className="name">shaikh anas</p>
            <div className="flex">
              <Link to="/profile" className="btn">
                profile
              </Link>
              <Link to="/" className="delete-btn">
                logout
              </Link>
            </div>
            <p className="account">
              <Link to="/login">login</Link> or{" "}
              <Link to="/register">register</Link>
            </p>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
