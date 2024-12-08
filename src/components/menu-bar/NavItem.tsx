type NavItemProps = {
  label: string;
  nav: string;
  active: string;
};

const NavItem = (props: NavItemProps) => {
  const { label, nav, active } = props;

  const itemActive = active === nav;

  const bgColor = itemActive ? "bg-green" : "";
  return (
    <div className={`${bgColor} rounded-xl px-5`}>
      <a
        href={nav}
        aria-current={itemActive ? "page" : false}
        className="font-body font-medium text-black"
      >
        {label}
      </a>
    </div>
  );
};

export default NavItem;
