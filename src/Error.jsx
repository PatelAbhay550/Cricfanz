import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Sorry Page requested is not available</p>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default Error;
