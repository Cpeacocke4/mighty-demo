import { useQuery } from "@tanstack/react-query";
import dashboardGetAllData from "./dashboard-get-all-data";
import toast from "react-hot-toast";

const DASHBOARD_DATA = "DASHBAORD_DATA";

const useDashboardGetAllData = () => {
  const query = useQuery({
    queryKey: [DASHBOARD_DATA],
    queryFn: dashboardGetAllData,
  });

  if (query.isError)
    toast.error(
      "Oops! There was an error fetching your data, please try again later."
    );

  return query;
};

export default useDashboardGetAllData;
