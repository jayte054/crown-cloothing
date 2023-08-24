import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
// import Navbar from './components/Navbar/navbar';
import MovieBody from './components/MovieBody/movieBody';
import Authpage from "./authentication/authPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element ={<Authpage />}/>
        <Route path="body" element={<MovieBody />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
