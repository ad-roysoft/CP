import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVisiting } from "../redux/DataStore";

const Modal = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const [visiting, setVisiting] = useState({
    id: "",
    gateInDate: "",
    gateInTime: "",
    gateOutTime: "",
    deptInTime: "",
    deptOutTime: "",
    mobileNo: "",
    company: "",
    name: "",
    purpose: "",
    dept: "",
    contactPerson: "",
    noOfVisitor: "",
    carNo: "",
    photoIdNo: "",
    address: "",
    status: "",
    remarks: "",
    noOfMeal: "",
    HODcontactPerson: "",
    photoRef: "",
    photo: "",
    pageName: "updateStatus",
  });

  useEffect(() => {
    setVisiting(props);
    console.log(visiting);
  }, [props]);
  console.log(visiting);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setVisiting({ ...visiting, [name]: value });
  };

  const doSave = (id) => {
    try {
      console.log(id);
      setVisiting({ ...visiting, [id]: id });
      visiting.id = id;
      visiting.pageName = "updateStatus";
      console.log(visiting);
      dispatch(saveVisiting(visiting));
    } catch (error) {
      console.log(visiting);
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Visiting Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container mt-2 pt-2">
                <div></div>

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
                          Name
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.name}</div>
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
                          Address
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.address}</div>
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
                          Company
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.company}</div>
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
                          contactPerson
                        </label>
                      </div>
                      <div className="col-8">
                        {props.visiting.contactPerson}
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
                          Depertment
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.dept}</div>
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
                          GateInDate
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.gateInDate}</div>
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
                          GateInTime
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.gateInTime}</div>
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
                          Purpose
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.purpose}</div>
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
                          Status
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.status}</div>
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
                          Mobile Number
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.mobileNo}</div>
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
                          Id
                        </label>
                      </div>
                      <div className="col-8">{props.visiting.id}</div>
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
                          Action
                        </label>
                      </div>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="status"
                        onChange={handleChange}
                      >
                        {props.visiting ? (
                          props.visiting.actions ? (
                            props.visiting.actions.map((obj, id) => (
                              <option value={obj.code} key={obj.id}>
                                {obj.value}
                              </option>
                            ))
                          ) : (
                            <option value=""></option>
                          )
                        ) : (
                          <option value=""></option>
                        )}
                      </select>
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
                          Remarks
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          className="form-control bg-light text-dark"
                          type="text"
                          name="remarks"
                          value={visiting && visiting.remarks}
                          onChange={handleChange}
                          placeholder="Remarks"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex ">
              <button
                type="button"
                className="btn btn-outline-info btn-md"
                onClick={() => doSave(props.visiting.id)}
                style={{
                  marginLeft: "40px",
                }}
              >
                Save
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
