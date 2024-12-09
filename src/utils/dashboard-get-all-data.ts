import { DashboardDataType } from "../types";
import get from "./get";

const dashboardGetAllData = (): Promise<DashboardDataType> =>
  get("https://api.mighty.se/dashboard");

export default dashboardGetAllData;
