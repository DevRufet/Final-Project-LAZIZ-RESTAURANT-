import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../../context/Auth.jsx";
import AdminLayout from "../AdminLayout/AdminLayout.jsx";

function AdminLogin() {
    const { token, logOut, decoded } = useContext(AuthContext);
    const navigate = useNavigate()
    function adminol(){
        {decoded && decoded.role === "Admin" ? (
            navigate("/admin/admins")
                  ) : navigate("/login")}
    }
  return (
   <>
   <input type="text" />
   <input type="text" />
   <button onClick={()=>adminol()}>Admin</button>
  
   
   </>
  )
}

export default AdminLogin
