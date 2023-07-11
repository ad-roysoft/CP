import React from "react";

const Spiner = () => {
  return (
    <div>
      <div className=" d-flex align-items-center justify-content-center mt-4">
        <div
          className="spinner-border "
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
