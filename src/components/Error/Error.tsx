import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="error-page">
      <h1 className="error-heading">Oops, there's nothing here!</h1>
      <p className="redirect-message">Redirecting you to the home page...</p>
    </div>
  );
};

export default Error;
