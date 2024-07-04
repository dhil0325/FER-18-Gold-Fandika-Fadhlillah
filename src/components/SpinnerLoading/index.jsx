import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./style.css";
const SpinnerLoading = () => {
  return (
    <div className="spinner-loading">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
    </div>
  );
};

export default SpinnerLoading;
