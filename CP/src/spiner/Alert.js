import React from "react";
import { useSelector } from "react-redux";

const Alert = () => {
  const { user} = useSelector((state) => ({ ...state.app }));

  console.log(user.errorList);

  return (
    <div className="px-5 ">
      <div className=" my-2" style={{ height: "20px" }}>
        <div
          className="alert alert-danger"
          role="alert"
          style={{ height: "500px" }}
        >
          <table class="table" >
          <tbody>
         {user && user.errorList.map((elm)=>{
          return<tr>
          <td>{elm.errorCode}</td>
          <td>{elm.errorMessage}</td>          
        </tr>
             })}
         
            
          </tbody>
        </table>

        
        </div>
      </div>
    </div>
  );
};

export default Alert;
