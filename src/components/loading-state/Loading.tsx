import LoadingAnimation from "./LoadingAnimation";

const Loading = () => (
  <div className="flex h-[75vh] w-auto justify-center">
    <div className="flex-column self-center">
      <LoadingAnimation />
      <p className="text-xl font-body text-black text-center">Loading...</p>
    </div>
  </div>
);

export default Loading;
