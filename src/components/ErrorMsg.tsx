const ErrorMsg = () => {
  return (
    <div className="flex h-[75vh] w-auto justify-center items-center">
      <div className="flex-column self-center">
        <p className="text-3xl text-errorfont-body">Oh no!</p>
        <p className="text-xl font-body text-black">
          There was an error fetching the data
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
