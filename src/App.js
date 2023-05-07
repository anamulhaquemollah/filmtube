import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, Movies, MovieInformation, Actors, Profile } from "./components";
import useStyle from "./style";

function App() {
  const classes = useStyle(); 
  return (
    <div className = {classes.root}>
      <CssBaseline />
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
