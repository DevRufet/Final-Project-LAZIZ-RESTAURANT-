import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "./views/base/MainLayout/MainLayout";
import Home from "./views/base/Ev/Home";
import Blog from "./views/base/Blog/Blog";
import Contact from "./views/base/Kontakt/Contact";
import About from "./views/base/Haqqinda/About";
import Gallery from "./views/base/Qalareya/Gallery";
import Reservation from "./views/base/Rezervasiya/Reservation";
import Menu from "./views/base/Menyu/Menu";
import AdminLayout from "./views/Admin/AdminLayout/AdminLayout";
import AdminMenu from "./views/Admin/AdminMenu/AdminMenu";
import AdminBlog from "./views/Admin/AdminBlog/AdminBlog";
import AdminComment from "./views/Admin/AdminComment/AdminComment";
import AdminReservation from "./views/Admin/AdminReservation/AdminReservation";
import AdminContact from "./views/Admin/AdminContact/AdinContact";
import AdminCompanies from "./views/Admin/AdminCompanies/AdminCompanies";
import AdminUser from "./views/Admin/AdminUser/AdminUser";
import AdminVerify from "./views/Admin/AdminReservation/AdminVerify";
import Comment from "./views/base/Comment/Comment";
import Register from "./views/auth/Register/Register";
import Login from "./views/auth/Login/Login";
import AuthProvider, { AuthContext } from "./context/Auth.jsx";
import AdminLogin from "./views/Admin/AdminLogin/AdminLogin";
import PrivateRoute from "./views/base/PrivateRoute/PrivateRoute";
import AdminEdit from "./views/Admin/AdminUser/AdminEdit.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/comment/:id" element={<Comment />} />
            </Route>
          
          <Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/*  */}
         
            <Route element={<PrivateRoute role={["admin"]} />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminMenu />} />
                <Route path="/admin/blog" element={<AdminBlog />} />
                <Route path="/admin/comment" element={<AdminComment />} />
                <Route
                  path="/admin/reservation"
                  element={<AdminReservation />}
                />
                <Route path="/admin/contact" element={<AdminContact />} />
                <Route path="/admin/companies" element={<AdminCompanies />} />
                <Route path="/admin/user" element={<AdminUser />} />
                <Route path="/admin/verify/:id" element={<AdminVerify />} />
                <Route path="/admin/edit/:id" element={<AdminEdit />} />
              </Route>
            </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
