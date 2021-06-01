import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ to, text, className }) => {
  return (
    <>
      <NavLink to={to} text={text} className={className}>
        {text}
      </NavLink>
    </>
  );
};

export default NavLinks;
