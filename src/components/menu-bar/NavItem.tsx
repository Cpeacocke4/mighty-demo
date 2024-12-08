type NavItemProps = {
  label: string;
  nav: string;
  active?: boolean;
};

const NavItem = (props: NavItemProps) => {
  const { label, nav, active } = props;
  return (
    <div className="bg-green rounded-xl px-5">
      <a href={nav} aria-current={active}>
        {label}
      </a>
    </div>
  );
};

NavItem.defaultProps = {
  active: false,
};

export default NavItem;
