const ErrorMsg = () => {
  return (
    <div className="flex h-[75vh] w-auto justify-center">
      <div className="flex-column self-center">
        <p className="text-3xl text-error text-center font-body">Oh no!</p>
        <p className="text-xl font-body text-black text-center">
          There was an error fetching the data
        </p>
      </div>
    </div>
  );
};

export default ErrorMsg;
