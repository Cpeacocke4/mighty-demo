import Text from "../common/Text";
import { SensorType } from "../../types/SensorType";
import { DataTableColumnType } from "./Table";

type Column = DataTableColumnType<SensorType>;

const columnText = (text: string | number) => <Text text={text} />;

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
    <div className="bg-green px-5 rounded-xl">
      <p className="font-heading font-medium text-black">{sensor.status}</p>
    </div>
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
