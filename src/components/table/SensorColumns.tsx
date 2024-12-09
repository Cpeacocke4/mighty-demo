import { SensorType } from "../../types";
import StatusBadge from "../StatusBadge";
import Tooltip from "../Tooltip";
import { DataTableColumnType } from "./Table";

type Column = DataTableColumnType<SensorType>;

const columnText = (text: string | number) => (
  <p className="line-clamp-1 font-body text-sm text-black text-left">{text}</p>
);

export const sensorId: Column = {
  title: "ID",
  render: (sensor) => columnText(sensor.id),
};

export const address: Column = {
  title: "Address",
  render: (sensor) => (
    <>
      <div className="xs:block sm:hidden md:block lg:hidden xl:hidden">
        <Tooltip text={sensor.address}>{columnText(sensor.address)}</Tooltip>
      </div>
      <div className="xs:hidden sm:block md:hidden lg:block xl:block">
        {columnText(sensor.address)}
      </div>
    </>
  ),
};

export const placement: Column = {
  title: "Placement",
  render: (sensor) => (
    <>
      <div className="xs:block sm:hidden md:block lg:hidden xl:hidden">
        <Tooltip text={sensor.placement}>
          {columnText(sensor.placement)}
        </Tooltip>
      </div>
      <div className="xs:hidden sm:block md:hidden lg:block xl:block">
        {columnText(sensor.placement)}
      </div>
    </>
  ),
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
