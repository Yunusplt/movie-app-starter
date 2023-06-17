import React from "react";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import PrivateRouter from "./PrivateRouter";

//todo MoviDetail compenenti dinamik bir yapiya sahip oldugu icin. path kisminda /: var..

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/navbar" element={<Navbar />}/> */}
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
