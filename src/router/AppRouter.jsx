import React from "react";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";




//todo MoviDetail compenenti dinamik bir yapiya sahip oldugu icin. path kisminda /: var..

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/navbar" element={<Navbar />}/> */}
          <Route path="/register" element={<Register />} />
          <Route path="/details/:" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
