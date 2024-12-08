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
    <h1 className="font-heading color-black text-4xl font-medium">Energy</h1>
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
    {
      label: "Locations",
      nav: "/locations",
    },
  ];

  const nav = (
    <div className="flex gap-2">
      {navItems.map((navItem) => (
        <NavItem label={navItem.label} nav={navItem.nav} active={activeNav} />
      ))}
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
