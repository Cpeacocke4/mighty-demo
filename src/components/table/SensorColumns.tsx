import { SensorType } from "../../types/SensorType";
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
  render: (sensor) => (
    <p className="font-heading font-medium text-black bg-green px-5 w-min rounded-xl">
      {sensor.status}
    </p>
  ),
};

export const temperature: Column = {
  title: "Temperature",
  render: (sensor) => columnText(sensor.temperature),
};

export const humidity: Column = {
  title: "Humidity",
  render: (sensor) => columnText(sensor.humidity),
};
