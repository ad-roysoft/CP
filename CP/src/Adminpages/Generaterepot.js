import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadReport } from "../redux/DataStore";
import { useState } from "react";

const Generaterepot = () => {
  const { login } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const [report, setSetReport] = useState({
    fromDate: "",
    toDate: ""
  });
  const handleChangeforDownload = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setSetReport({
      ...report,
      [name]: value,
    });
  }
  const doDownload = () => {
    dispatch(downloadReport(report, login));
  };
  return (
    <div className="routeregistration_container">
      <div className="container mt-5 pt-5">
        <div
          className="row"
          style={{
            backgroundColor: "#f6fff8",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <div className="col-md-6 px-5 mb-3">
            <div className="d-flex">
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  Date From
                </label>
              </div>
              <div className="col-8">
                <input
                  type="date"                  
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="From Date"
                  name="fromDate"
                  value={report && report.fromDate}
                  onChange={handleChangeforDownload}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 px-5 mb-3">
            <div className="d-flex">
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  Date To
                </label>
              </div>
              <div className="col-8">
                <input
                  type="date"
                  name="toDate"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                  value={report && report.toDate}
                  onChange={handleChangeforDownload}
                />
              </div>
            </div>
          </div>        
          
          <div className="d-flex ">
            <button
              type="button"
              className="btn btn-outline-info btn-md"
              onClick={() => [doDownload()]}
              style={{
                marginLeft: "40px",
              }}
            >
              Download Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generaterepot;
