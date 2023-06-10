import { NavLink } from "react-router-dom";

import SideBar from "../components/SideBar";

import logo from "../assets/logo-updated-without.png";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="logo" src={logo} alt="HMweb Logo" />
      </NavLink>
      <SideBar />
    </header>
  );
};

export default Header;
