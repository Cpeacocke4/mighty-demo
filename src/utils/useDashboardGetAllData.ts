import { useQuery } from "@tanstack/react-query";
import dashboardGetAllData from "./dashboard-get-all-data";

const DASHBOARD_DATA = "DASHBAORD_DATA";

const useDashboardGetAllData = () => {
  const query = useQuery({
    queryKey: [DASHBOARD_DATA],
    queryFn: dashboardGetAllData,
  });

  return query;
};

export default useDashboardGetAllData;
