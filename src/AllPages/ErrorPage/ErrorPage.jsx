import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const { status, error: err } = error;
  console.log(error);
  return (
    <div className="max-w-screen-xl mx-auto px-10 py-20 text-center ">
      <div className="">
        <h2 className="text-7xl font-extrabold mb-10 mt-14 text-red-400">Oops!</h2>
        {status === 404 ? <h2 className="text-2xl font-medium">404 - PAGE NOT POUND</h2> : ""}
        <h2 className="my-2">{err.message}</h2>
        <Link to={"/"}>
          <button className="btn bg-[#ea4646] hover:bg-[#d96a6a] text-white text-lg mt-5">goto HomePage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
