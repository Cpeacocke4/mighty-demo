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

  return <Line data={data} />;
};

export default LineGraph;
