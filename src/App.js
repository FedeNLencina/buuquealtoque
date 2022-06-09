import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screen/home/Home";
import Login from "./screen/login/Login";
import Search from "./screen/search/Search";
import Register from "./screen/register/Register";
import Booking from "./screen/booking/Booking";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  );
}

