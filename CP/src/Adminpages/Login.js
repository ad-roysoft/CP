import React from "react";
import "./login.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callLogin } from "../redux/DataStore";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useSelector((state) => ({ ...state.app }));


  console.log(login);

  useEffect(()=>{   
    if(login && login.token && login.status && login.status=='Y'){
    //navigate to default page
    console.log('going to deafult page');
    navigate('/default');
    }
    setUserLogin(login);
    console.log(login);
  },[login]);

  const handleChangeforSave = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  }
  const [userLogin, setUserLogin] = useState({
    loginId: "",
    pwd: ""
  });
  const doLogin = () => {
    dispatch(callLogin(userLogin));
  };


  return (
    <>
      <div className="container main_div">
        <div className="row sub_div">
          <div className="col-12 d-flex ">
            <div className="col-4">
              <label for="exampleInputEmail1" class="form-label">
                User Name
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="loginId"
                value={userLogin && userLogin.loginId}
                onChange={handleChangeforSave}
              />
            </div>
          </div>
          <div className="col-12 d-flex">
            <div className="col-4">
              <label for="exampleInputEmail1" class="form-label">
                password
              </label>
            </div>
            <div className="col-8">
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="pwd"
                value={userLogin && userLogin.pwd}
                onChange={handleChangeforSave}
              />
            </div>
          </div>
          <div>
            <button type="button" className=" login_btn btn btn-primary" onClick={() => [doLogin()]}>
              Login
            </button>
          </div>
          <div className="col-12 d-flex">
            <div className="col-4">
              <label for="exampleInputEmail1" class="form-label">
                {userLogin && userLogin.responseMsg}
              </label>
            </div>            
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
