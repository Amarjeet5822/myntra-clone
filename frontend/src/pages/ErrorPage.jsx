import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("ErrorPage:[error] = ", error);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-red-600 p-5">
      <h1 className="text-5xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="mt-2">
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="mt-6">
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Go back to Home
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/contact" className="text-blue-500 underline">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
