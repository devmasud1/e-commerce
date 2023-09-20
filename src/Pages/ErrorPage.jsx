import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <p>{error.statusText || error.message}</p> */}
      {error.status === 404 && (
        <div>
          <h4 className="text-3xl font-semibold mb-3">Page not found</h4>
          <Link to="/">
            <button>back to home page</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
