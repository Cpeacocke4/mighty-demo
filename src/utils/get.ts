import axios from "axios";

const get = async (url: string) => {
  const result = await axios.get(url).catch((error) => {
    throw new Error(
      error?.response?.data?.message || "Whoops! Something went wrong..."
    );
  });

  return result.data;
};

export default get;
