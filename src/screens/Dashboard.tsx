import Widget from "../components/Widget";
import useDashboardGetAllData from "../utils/useDashboardGetAllData";

const Dashboard = () => {
  const { data, error, isLoading } = useDashboardGetAllData();

  if (error) return <p>Oh no! There was an error fetching the data</p>;

  if (isLoading || !data) return <p>Loading...</p>;

  const keyValuesData = data.keyValues;
  const keyValues = (
    <div className="flex flex-row h-full w-full space-x-4">
      {keyValuesData.map((keyValue) => {
        const { name, value, unit } = keyValue;
        return <Widget key={name} title={name} value={value} unit={unit} />;
      })}
    </div>
  );

  return <div className="min-h-screen flex flex-wrap p-10">{keyValues}</div>;
};

export default Dashboard;
