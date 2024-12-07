import useDashboardGetAllData from "../utils/useDashboardGetAllData";

const Dashboard = () => {
  const { data } = useDashboardGetAllData();

  return <div>{data?.name}</div>;
};

export default Dashboard;
