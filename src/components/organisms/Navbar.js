import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AppLogo from "../ui/logo/AppLogo";

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ width: `100vw` }}>
      <div className="navbar break-points">
        <Link to="/">
          <AppLogo />
        </Link>
        <div className="navbar__links">
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

export default Navbar;
