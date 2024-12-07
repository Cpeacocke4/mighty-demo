import { useQuery } from "@tanstack/react-query";
import dashboardGetAllData from "./dashboard-get-all-data";

const DASHBOARD_DATA = "DASHBAORD_DATA";

const useDashboardGetAllData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [DASHBOARD_DATA],
    queryFn: dashboardGetAllData,
  });

  return {
    data,
    error,
    isLoading,
  };
};

export default useDashboardGetAllData;
