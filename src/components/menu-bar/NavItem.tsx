import { Link } from "react-router";

type NavItemProps = {
  label: string;
  nav: string;
  active: string;
};

const NavItem = (props: NavItemProps) => {
  const { label, nav, active } = props;

  const itemActive = active === nav;

  const bgColor = itemActive ? "bg-green" : "";

  const hoverState = itemActive ? "" : "hover:text-purple hover:font-bold";
  return (
    <div className={`${bgColor} rounded-xl px-5`}>
      <Link
        to={nav}
        className={`font-body font-medium text-black ${hoverState}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default NavItem;
