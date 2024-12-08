import { useLocation } from "react-router";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";

const MenuBar = () => {
  const { pathname: path } = useLocation();

  const [activeNav, setActiveNav] = useState("/dashboard");

  useEffect(() => {
    if (path !== "/") {
      setActiveNav(path);
    }
  }, [path]);

  const title = (
    <h1 className="font-heading text-black text-4xl font-medium">Energy</h1>
  );

  const navItems = [
    {
      label: "Dashboard",
      nav: "/dashboard",
    },
    {
      label: "Sensors",
      nav: "/sensors",
    },
  ];

  const nav = (
    <div className="flex space-x-2">
      {navItems.map((navItem) => {
        const { label, nav } = navItem;
        return (
          <NavItem key={label} label={label} nav={nav} active={activeNav} />
        );
      })}
    </div>
  );
  return (
    <nav className="min-w-screen bg-container py-5 px-10 flex flex-wrap items-center justify-between mx-auto">
      {title}

      {nav}
    </nav>
  );
};

export default MenuBar;
