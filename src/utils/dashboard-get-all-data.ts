import { DashboardDataType } from "../types/DashboardDataType";
import get from "./get";

const dashboardGetAllData = (): Promise<DashboardDataType> =>
  get("https://api.mighty.se/dashboard");

export default dashboardGetAllData;
