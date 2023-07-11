import Navbar from "./Adminpages/Navbar";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Footer from "./Adminpages/Footer";
import "./App.css";
import RouteRegistration from "./Adminpages/RouteRegistration";
import Default from "./Adminpages/Default";
import Generaterepot from "./Adminpages/Generaterepot";
import Login from "./Adminpages/Login";
import Profile from "./Adminpages/Profile";
import NewProfile from "./Adminpages/NewProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/CP" element={<Login />} />
          <Route path="/default" element={<Default />} />
          <Route path="/visitorentry" element={<RouteRegistration />} />
          <Route path="/reportpage" element={<Generaterepot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newProfile" element={<NewProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
