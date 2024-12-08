import Title from "../components/common/Title";
import Text from "../components/common/Text";
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
import LineGraph from "../components/graph/LineGraph";

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
    <div>
      <Title title="Sensors" />
      <Text text="Track all of your installed sensors" />
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

  const temperatureChart = (
    <div className="h-max w-full">
      <Title title="Tempureture" />
      <Text text="Average indoor and outdoor temperature over the last 7 months" />
      <LineGraph data={data.chart} />
    </div>
  );

  return (
    <div className="min-h-screen w-full flex-column p-10 space-y-4">
      {keyValues}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-4">
        {sensorsTable}
        {temperatureChart}
      </div>
    </div>
  );
};

export default Dashboard;
