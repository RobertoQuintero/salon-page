import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppLogo from "../ui/logo/AppLogo";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showHide = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav style={{ width: `100vw` }} className={`${show ? "" : "backdrop"}`}>
      <div className="navbar break-points">
        <Link to="/">
          <AppLogo />
        </Link>
        <div className="navbar__button" onClick={showHide}>
          <i className="fa fa-bars"></i>
        </div>
        <div className={`navbar__links ${show ? "click-menu" : ""}`}>
          <NavLink
            activeClassName="active"
            className="navbar__links-item"
            exact
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            activeClassName="active"
            className="navbar__links-item"
            exact
            to="/fotos"
          >
            Fotos
          </NavLink>

          <NavLink
            activeClassName="active"
            className="navbar__links-item"
            exact
            to="/servicios"
          >
            Servicios
          </NavLink>
          <NavLink
            activeClassName="active"
            className="navbar__links-item"
            exact
            to="/productos"
          >
            Productos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
