import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../redux/DataStore";
import { useState, useEffect } from "react";
import { searchProfile } from "../redux/DataStore";

const Profile = () => {
  const { login } = useSelector((state) => ({ ...state.app }));
  const { profile } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const [myProfile, setMyProfile] = useState({
    userId: "",
    title: "",
    name: "",
    surName: "",
    type: "",
    phone: "",
    dept: "",
    hodName: "",
    reTypPwd: "",
    newPwd: "",
  });

  const doSearch = () => {
    dispatch(searchProfile(myProfile, login));
  };
  useEffect(() => {
    setMyProfile("");
    console.log(login.loginId);
    myProfile.userId = login.loginId;
    doSearch();
  }, []);

  useEffect(() => {
    console.log(profile);
    setMyProfile(profile);
    console.log(myProfile);
  }, [profile]);
  console.log(myProfile);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setMyProfile({
      ...myProfile,
      [name]: value,
    });
  };
  const saveMyProfile = () => {
    dispatch(saveProfile(myProfile, login));
  };
  return (
    <div className="routeregistration_container">
      <div className="container mt-5 pt-5">
        {login && login.ipRole == "IP99" && (
          <div className=" search-bar ">
            <div>
              <label
                htmlFor="inputState"
                className="form-label ph-number"
                style={{ fontWeight: "350", marginLeft: "5px" }}
              >
                <h6 style={{ marginBottom: "0" }}>Login ID</h6>
              </label>
            </div>

            <div>
              <input
                type="text"
                name="userId"
                value={myProfile.userId}
                onChange={handleChange}
                className="form-control"
                id="formGroupExampleInput"
              />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-info btn-md"
                onClick={() => [doSearch()]}
              >
                Search
              </button>
            </div>
          </div>
        )}
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
                  Login ID
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.userId}
                </label>
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
                  Title
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.title}
                </label>
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
                  Name
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.name}
                </label>
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
                  Surname
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.surName}
                </label>
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
                  Role
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.type}
                </label>
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
                  Mobile No
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.phone}
                </label>
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
                  Department
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.dept}
                </label>
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
                  HOD Name
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.hodName}
                </label>
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
                  New Password
                </label>
              </div>
              <div className="col-4 d-flex">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="newPwd"
                  onChange={handleChange}
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
                  Re Type Password
                </label>
              </div>
              <div className="col-4 d-flex">
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="reTypPwd"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="d-flex ">
            <button
              type="button"
              className="btn btn-outline-info btn-md"
              onClick={() => [saveMyProfile()]}
              style={{
                marginLeft: "40px",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
