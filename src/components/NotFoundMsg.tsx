import { Link } from "react-router";

const NotFoundMsg = () => {
  return (
    <div className="flex h-[75vh] w-auto justify-center">
      <div className="flex flex-col self-center items-center">
        <p className="text-4xl font-heading  text-purple">404</p>

        <p className="text-lg font-body text-black">Oops! Page not found</p>
        <p className="text-md font-body text-grey">
          Looks like the page you're looking for doesn't exist or has been
          moved.
        </p>

        <Link className="w-max py-2 px-4 m-2 bg-green rounded-md" to="/">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundMsg;
