import Title from "../components/common/Title";
import Text from "../components/common/Text";
import Table from "../components/table/Table";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/loading-state/Loading";
import useDashboardGetAllData from "../utils/useDashboardGetAllData";
import {
  address,
  humidity,
  placement,
  sensorId,
  sensorStatus,
  temperature,
} from "../components/table/SensorColumns";

const Sensors = () => {
  const { data, error, isLoading } = useDashboardGetAllData();

  if (error) return <ErrorMsg />;

  if (isLoading || !data) return <Loading />;

  return (
    <div className="min-h-screen w-full flex-column p-10 space-y-4">
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
};

export default Sensors;
