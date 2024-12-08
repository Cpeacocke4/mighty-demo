import { ChartType } from "./ChartType";
import { SensorType } from "./SensorType";

export type DashboardDataType = {
  name: string;
  keyValues: {
    name: string;
    value: number;
    unit?: string;
  }[];
  chart: ChartType;
  indoorSensors: SensorType[];
};
