import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "../components/MainNavigation.css";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const MainNavigation = () => {
  return (
    <nav className="nav-container">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className="socials">
          <Link to="https:/facebook.com" target="_blank">
            <Facebook color="blue" strokeWidth={1} />
          </Link>
          <Link to="https:/instagram.com" target="_blank">
            <Instagram size={20} color="#fd469a" strokeWidth={1.25} />
          </Link>
          <Link to="https:/twitter.com" target="_blank">
            <Twitter size={20} color="black" strokeWidth={2.5} />
          </Link>
          <Link to="https:/youtube.com" target="_blank">
            <Youtube size={20} color="red" strokeWidth={1.25} />
          </Link>
        </div>

        <div className="main-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
