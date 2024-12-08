import { Outlet } from "react-router";
import MenuBar from "../components/menu-bar/MenuBar";

const ScreenContainer = () => (
  <div className="min-h-screen bg-bg">
    <MenuBar />
    <Outlet />
  </div>
);

export default ScreenContainer;
