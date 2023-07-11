import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search, save } from "../redux/DataStore";
import Alert from "../spiner/Alert";
import "./routeRegistration.css";
const RouteRegistration = () => {
  const [showdiv, setshowdiv] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.app }));
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
    pageName: "newVisiting",
  });

  //console.log(user && user.visiting);

  useEffect(() => {
    setVisiting(user.visiting);
    console.log(visiting);
  }, [user]);

  const [searchbynumber, setsearchbynumber] = useState({
    pageName: "newVisiting",
    mobileNo: "",
  });

  const getDiv = () => {
    if (searchbynumber.mobileNo === "") {
      setshowdiv(false);
    } else {
      setshowdiv(true);
    }
  };

  const doSave = () => {
    dispatch(save(visiting));
  };

  setTimeout(() => {}, 3000);

  const doSearch = () => {
    setVisiting("");
    dispatch(search(searchbynumber));
  };
  const handleChangeforsave = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setVisiting({
      ...visiting,
      [name]: value,
    });

    console.log(name);
    console.log(value);
    console.log(visiting);
  };
  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setsearchbynumber({ ...searchbynumber, [name]: value });
  };

  return (
    <div className="routeregistration_container">
      <div className="container mt-5 pt-5">
        <div>
          {user.isError == "Y" && <Alert />}
          <div className=" search-bar ">
            <div>
              <label
                htmlFor="inputState"
                className="form-label ph-number"
                style={{ fontWeight: "350", marginLeft: "5px" }}
              >
                <h6 style={{ marginBottom: "0" }}>Phone Number</h6>
              </label>
            </div>

            <div>
              <input
                type="text"
                name="mobileNo"
                value={searchbynumber.mobileNo}
                onChange={handleChange}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-info btn-md"
                onClick={() => [doSearch(), getDiv()]}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {showdiv && (
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
                <div className="col-8">
                  <input
                    type="text"
                    name="name"
                    value={visiting && visiting.name}
                    onChange={handleChangeforsave}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3 ">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <p
                    htmlFor="inputState"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Depertment
                  </p>
                </div>
                <div className="col-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="dept"
                    value={visiting && visiting.dept}
                    onChange={handleChangeforsave}
                  >
                    {user !== null ? (
                      user.visiting ? (
                        user.visiting.depts.map((obj, id) => (
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
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Phone Number
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    name="mobileNo"
                    value={visiting && visiting.mobileNo}
                    onChange={handleChangeforsave}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Visitor Image
                  </label>
                </div>
                <div className="col-8">
                  <input
                    className="form-control bg-light text-dark"
                    type="file"
                    //value={}
                    //name="photo"
                    //onChange={handleChange}
                    aria-label="Disabled input example"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Vehicle Number
                  </label>
                </div>
                <div className="col-8">
                  <input
                    className="form-control bg-light text-dark"
                    type="text"
                    name="carNo"
                    value={visiting && visiting.carNo}
                    onChange={handleChangeforsave}
                    aria-label="Disabled input example"
                    placeholder="Vehicle Number"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Number of Visitor
                  </label>
                </div>
                <div className="col-8">
                  <input
                    className="form-control bg-light text-dark"
                    type="text"
                    name="noOfVisitor"
                    value={visiting && visiting.noOfVisitor}
                    onChange={handleChangeforsave}
                    aria-label="Disabled input example"
                    placeholder="Number of visitor"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Gate In Time
                  </label>
                </div>
                <div className="col-8">
                  <input
                    className="form-control bg-light text-dark"
                    type="time"
                    name="gateInTime"
                    value={visiting && visiting.gateInTime}
                    onChange={handleChangeforsave}
                    aria-label="Disabled input example"
                    placeholder="In Time"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Gate Out Time
                  </label>
                </div>
                <div className="col-8">
                  <input
                    className="form-control bg-light text-dark"
                    type="time"
                    name="gateOutTime"
                    value={visiting && visiting.gateOutTime}
                    onChange={handleChangeforsave}
                    aria-label="Disabled input example"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
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
                    onChange={handleChangeforsave}
                    placeholder="Remarks"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Number of Meal
                  </label>
                </div>
                <div className="col-8">
                  <input
                    className="form-control bg-light text-dark"
                    type="text"
                    name="noOfMeal"
                    value={visiting && visiting.noOfMeal}
                    onChange={handleChangeforsave}
                    placeholder="Number of Meal"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Address
                  </label>
                </div>
                <div className="col-8">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="address"
                    value={visiting && visiting.address}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Purpose
                  </label>
                </div>
                <div className="col-8">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="purpose"
                    value={visiting && visiting.purpose}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Gate in date
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="gateInDate"
                    value={visiting && visiting.gateInDate}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Depertment In time
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="time"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="deptInTime"
                    value={visiting && visiting.deptInTime}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Depertment out Time
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="time"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="deptOutTime"
                    value={visiting && visiting.deptOutTime}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Company
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="company"
                    value={visiting && visiting.company}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Contact Person
                  </label>
                </div>
                <div className="col-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="contactPerson"
                    value={visiting && visiting.contactPerson}
                    onChange={handleChangeforsave}
                  >
                    {user !== null ? (
                      user.visiting ? (
                        user.visiting.contactPersons.map((obj, id) => (
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
            </div>
            <div className="col-md-6 px-5 mb-3 ">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <p
                    htmlFor="inputState"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Reference Contact Person
                  </p>
                </div>
                <div className="col-8">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="HODcontactPerson"
                    value={visiting && visiting.HODcontactPerson}
                    onChange={handleChangeforsave}
                  >
                    {user !== null ? (
                      user.visiting ? (
                        user.visiting.hodcontactPersons.map((obj, id) => (
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
            </div>
            <div className="col-md-6 px-5 mb-3">
              <div className="d-flex">
                <div className="col-4 d-flex">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    style={{ fontWeight: "350", marginLeft: "5px" }}
                  >
                    Photo Id Number
                  </label>
                </div>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="photoIdNo"
                    value={visiting && visiting.photoIdNo}
                    onChange={handleChangeforsave}
                  />
                </div>
              </div>
            </div>

            <div className="d-flex ">
              <button
                type="button"
                className="btn btn-outline-info btn-md"
                onClick={() => doSave(visiting)}
                style={{
                  marginLeft: "40px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RouteRegistration;
