import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./screens/Dashboard";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
