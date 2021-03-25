import React from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  {
    name: "Main",
    path: "/",
  },
  {
    name: "About",
    path: "/about/",
  },
];

export const Nav: React.FC = React.memo(() => {
  return (
    <nav>
      {LINKS.map((item, index) => (
        <NavLink href="/" key={index} to={item.path} exact>
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
});
