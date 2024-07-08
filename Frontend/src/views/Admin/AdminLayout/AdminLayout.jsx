import React, { useContext } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/Auth';

function AdminLayout() {
    const { token, logOut, decoded } = useContext(AuthContext);
    const navigate = useNavigate()
      
  return (
    <>
 
    <AdminNavbar></AdminNavbar>
   
    
    </>
  )
}

export default AdminLayout
