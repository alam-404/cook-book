import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-center text-6xl text-gray-500">
                {error.status} | {error.statusText.toUpperCase()}
            </h1>
            <div className="text-2xl mt-4 text-justify">
            <p>
                Ayy!!! You are on a wrong path.
            </p>
            <p>
                Hurry back to <Link to='/' className="text-blue-500">HOME</Link>
            </p>
            </div>
        </div>
    );
};

export default ErrorPage;