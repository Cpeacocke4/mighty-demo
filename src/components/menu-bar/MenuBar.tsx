import { useLocation } from "react-router";
import NavItem from "./NavItem";

const navItems = [
  {
    label: "Dashboard",
    nav: "/",
  },
  {
    label: "Sensors",
    nav: "/sensors",
  },
];

const MenuBar = () => {
  const { pathname: path } = useLocation();

  const title = (
    <h1 className="font-heading text-black text-4xl font-medium">Energy</h1>
  );

  const navButtons = (
    <div className="flex space-x-2">
      {navItems.map((navItem) => {
        const { label, nav } = navItem;
        return <NavItem key={label} label={label} nav={nav} active={path} />;
      })}
    </div>
  );

  return (
    <nav className="min-w-screen bg-container py-5 px-10 flex flex-wrap items-center justify-between mx-auto">
      {title}

      {navButtons}
    </nav>
  );
};

export default MenuBar;
