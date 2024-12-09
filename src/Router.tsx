import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./screens/Dashboard";
import ScreenContainer from "./screens/ScreenContainer";
import Sensors from "./screens/Sensors";
import NotFoundMsg from "./components/NotFoundMsg";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<ScreenContainer />}>
        <Route index element={<Dashboard />} />
        <Route path="sensors" element={<Sensors />} />

        <Route path="*" element={<NotFoundMsg />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
