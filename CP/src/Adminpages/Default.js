import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/DataStore";
import Modal from "../spiner/Modal";
import { NavLink, link } from "react-router-dom";
import { save } from "../redux/DataStore";

const Default = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.app }));
  const { login } = useSelector((state) => ({ ...state.app }));
  const { navigateTo } = useSelector((state) => ({ ...state.app }));
  const [searchbynumber, setsearchbynumber] = useState({
    pageName: "visitingList",
    mobileNo: "",
  });
  const doSearch = () => {
    setVisitingList("");
    console.log(login.mobileNo);

    setsearchbynumber({
      ...searchbynumber,
      ["mobileNo"]: login.mobileNo,
    });
    searchbynumber.mobileNo = login.mobileNo;
    dispatch(search(searchbynumber));
  };
  useEffect(() => {
    console.log(user.visitingList);
    setVisitingList(user.visitingList);
    setSummaryList(user.summaryList);
    setMealSummary(user.mealSummary);
    console.log(visitingList);
  }, [user]);

  useEffect(() => {
    doSearch();
  }, []);

  useEffect(() => {
    if (navigateTo) {
      console.log("going to deafult page" + navigateTo);
      doSearch();
    }
  }, [navigateTo]);
  const [summaryList, setSummaryList] = useState([]);

  const [mealSummary, setMealSummary] = useState([]);
  const [visitingList, setVisitingList] = useState([]);

  const [visiting, setVisiting] = useState({
    id: "",
    status: "",
    pageName: "newVisiting",
  });
  const [getData, setGetData] = useState({});

  const setStatus = (elem) => (e) => {
    console.log(elem);
    console.log(e);
    let value = e.target.value;
    let visit =
      visitingList &&
      visitingList.filter((v) => {
        return v.id === elem.id;
      });

    setVisiting({
      ...visiting,
      ["status"]: value,
    });

    visit.status = value;
    console.log(visit);
  };

  const setRemarks = (e, elem) => {
    let value = e.target.value;
    //let visit = visitingList && visitingList.filter(v => {
    //    return v.id === elem.id;
    //  });
    elem.remarks = value;
  };

  const doSave = (elem) => {
    let visit =
      visitingList &&
      visitingList.filter((v) => {
        return v.id === elem.id;
      });
    console.log(visit);
    dispatch(save(visit));
  };
  return (
    <div>
      <div>
        <div className="container mt-5 pt-5">
          <div
            className="row"
            style={{
              backgroundColor: "#f6fff8",
              padding: "25px",
              borderRadius: "10px",
            }}
          >
            <Modal visiting={getData} />
            <div className="mealsummary">
              <h4>Meal Summary</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Visiting ID</th>
                    <th scope="col">Visiting Date</th>
                    <th scope="col">Visitor Name</th>
                    <th scope="col">Contact Person</th>
                    <th scope="col">HOD Contact Person</th>
                    <th scope="col">Meal Count</th>
                  </tr>
                </thead>
                <tbody>
                  {mealSummary &&
                    mealSummary.map((elem) => {
                      return (
                        <tr>
                          <td>{elem.visitingId}</td>
                          <td>{elem.visitingDate}</td>
                          <td>{elem.geustName}</td>
                          <td>{elem.geustForName}</td>
                          <td>{elem.HODcontactperson}</td>
                          <td>{elem.mealCount}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="summarylist">
              <h4>Visiting Summary</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryList &&
                    summaryList.map((elem) => {
                      return (
                        <tr>
                          <td>{elem.status}</td>
                          <td>{elem.count}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="Visitinglist">
              <h4>Visiting List</h4>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Visiting ID</th>
                    <th scope="col">Visiting Date</th>
                    <th scope="col">Visitor Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {visitingList &&
                    visitingList.map((elem) => {
                      return (
                        <tr>
                          <td>{elem.id}</td>
                          <td>{elem.gateInDate}</td>
                          <td>{elem.name}</td>
                          <td>{elem.mobileNo}</td>
                          <td>{elem.purpose}</td>
                          <td>{elem.status}</td>

                          <td>
                            <button
                              type="button"
                              className="btn btn-success btn-md"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() => setGetData(elem)}
                              style={{
                                marginLeft: "40px",
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
