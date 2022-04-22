import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./MainPage/Footer";
import Jumbotron from "./MainPage/Jumbotron";
import Navbar from "./MainPage/Navbar";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Contact from "./Pages/Contact";

ReactDOM.render(
    <BrowserRouter>
        <Jumbotron />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="index.html" element={<Home/>} />
            <Route path="user.html" element={<User/>} />
            <Route path="contact.html" element={<Contact/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    ,
    document.getElementById('root'));