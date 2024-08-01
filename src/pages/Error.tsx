import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>{error instanceof Error ? error.message : "normal error"}</h1>
    </>
  );
};

export default ErrorPage;
