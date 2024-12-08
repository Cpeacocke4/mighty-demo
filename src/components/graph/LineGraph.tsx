import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import { ChartType } from "../../types/ChartType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

type LineGraphProps = {
  data: ChartType;
};

const LineGraph = (props: LineGraphProps) => {
  const { data } = props;

  const options = {
    responsive: true,
  };

  return (
    <div className="flex grow bg-container p-5 rounded-md shadow-md mt-2">
      <Line data={data} style={{ width: "100%" }} options={options} />
    </div>
  );
};

export default LineGraph;
