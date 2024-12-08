import { SensorType } from "./SensorType";

export type DashboardDataType = {
  name: string;
  keyValues: {
    name: string;
    value: number;
    unit?: string;
  }[];
  chart: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      fill: boolean;
      borderColor: string;
      tension: number;
    }[];
  };
  indoorSensors: SensorType[];
};
