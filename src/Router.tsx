import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./screens/Dashboard";
import ScreenContainer from "./screens/ScreenContainer";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<ScreenContainer />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
