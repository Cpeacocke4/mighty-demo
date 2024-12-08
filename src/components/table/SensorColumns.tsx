import { SensorType } from "../../types/SensorType";
import StatusBadge from "../StatusBadge";
import { DataTableColumnType } from "./Table";

type Column = DataTableColumnType<SensorType>;

const columnText = (text: string | number) => (
  <p className="line-clamp-1 font-body text-sm text-black">{text}</p>
);

export const sensorId: Column = {
  title: "ID",
  render: (sensor) => columnText(sensor.id),
};

export const address: Column = {
  title: "Address",
  render: (sensor) => columnText(sensor.address),
};

export const placement: Column = {
  title: "Placement",
  render: (sensor) => columnText(sensor.placement),
};

export const sensorStatus: Column = {
  title: "Status",
  render: (sensor) => <StatusBadge status={sensor.status} />,
};

export const temperature: Column = {
  title: "Temperature",
  render: (sensor) => columnText(sensor.temperature),
};

export const humidity: Column = {
  title: "Humidity",
  render: (sensor) => columnText(sensor.humidity),
};
