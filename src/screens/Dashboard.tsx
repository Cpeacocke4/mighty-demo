import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/loading-state/Loading";
import {
  address,
  humidity,
  placement,
  sensorId,
  sensorStatus,
  temperature,
} from "../components/table/SensorColumns";
import Table from "../components/table/Table";
import Widget from "../components/Widget";
import useDashboardGetAllData from "../utils/useDashboardGetAllData";

const Dashboard = () => {
  const { data, error, isLoading } = useDashboardGetAllData();

  if (error) return <ErrorMsg />;

  if (isLoading || !data) return <Loading />;

  const keyValuesData = data.keyValues;
  const keyValues = (
    <div className="flex flex-row h-full w-full space-x-4">
      {keyValuesData.map((keyValue) => {
        const { name, value, unit } = keyValue;
        return <Widget key={name} title={name} value={value} unit={unit} />;
      })}
    </div>
  );

  const sensorsTable = (
    <div className="flex-column">
      <h2 className="font-heading text-4xl text-purple">Sensors</h2>
      <p className="font-body text-black">
        Track all of your installed sensors
      </p>
      <Table
        data={data.indoorSensors}
        columns={[
          sensorId,
          address,
          placement,
          sensorStatus,
          temperature,
          humidity,
        ]}
      />
    </div>
  );

  return (
    <div className="min-h-screen flex-column p-10 space-y-4">
      {keyValues}
      {sensorsTable}
    </div>
  );
};

export default Dashboard;
