import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from "../redux/DataStore";
import { useState, useEffect } from "react";
import { searchProfile } from "../redux/DataStore";

const NewProfile = () => {
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
    pageName: "newProfile",
  });

  useEffect(() => {
    setMyProfile("");
    dispatch(searchProfile(myProfile, login));
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
                  Password
                </label>
              </div>
              <div className="col-4 d-flex">
                <label
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  {myProfile.newPwd}
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
              <div className="col-8">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="title"
                  value={myProfile && myProfile.title}
                  onChange={handleChange}
                >
                  {myProfile !== null ? (
                    myProfile.titles ? (
                      myProfile.titles.map((obj, id) => (
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
                  value={myProfile && myProfile.name}
                  onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
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
                  Surname
                </label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="surName"
                  value={myProfile && myProfile.surName}
                  onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Surname"
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
                  Role
                </label>
              </div>
              <div className="col-8">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="type"
                  value={myProfile && myProfile.type}
                  onChange={handleChange}
                >
                  {myProfile !== null ? (
                    myProfile.types ? (
                      myProfile.types.map((obj, id) => (
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
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  Mobile No
                </label>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  name="phone"
                  value={myProfile && myProfile.phone}
                  onChange={handleChange}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Mobile Number"
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
                  Department
                </label>
              </div>
              <div className="col-8">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="dept"
                  value={myProfile && myProfile.dept}
                  onChange={handleChange}
                >
                  {myProfile !== null ? (
                    myProfile.depts ? (
                      myProfile.depts.map((obj, id) => (
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
                  htmlFor="inputState"
                  className="form-label"
                  style={{ fontWeight: "350", marginLeft: "5px" }}
                >
                  HOD Name
                </label>
              </div>
              <div className="col-8">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="hodName"
                  value={myProfile && myProfile.hodName}
                  onChange={handleChange}
                >
                  {myProfile !== null ? (
                    myProfile.hodNames ? (
                      myProfile.hodNames.map((obj, id) => (
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

export default NewProfile;
