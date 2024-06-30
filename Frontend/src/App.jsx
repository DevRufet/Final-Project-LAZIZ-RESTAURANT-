import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./views/base/MainLayout/MainLayout";
import Home from "./views/base/Ev/Home";
import Blog from "./views/base/Blog/Blog";
import Contact from "./views/base/Kontakt/Contact";
import About from "./views/base/Haqqinda/About";
import Gallery from "./views/base/Qalareya/Gallery";
import Reservation from "./views/base/Rezervasiya/Reservation";
import Menu from "./views/base/Menyu/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservation" element={<Reservation/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Contact />} />
          </Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservation" element={<Reservation/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<Contact />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
