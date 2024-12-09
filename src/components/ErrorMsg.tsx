const ErrorMsg = () => {
  return (
    <div className="flex h-[75vh] w-auto justify-center">
      <div className="flex flex-col self-center items-center">
        <p className="text-3xl text-error font-body">Oh no!</p>
        <p className="text-xl font-body text-black">
          There was an error fetching the data
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
