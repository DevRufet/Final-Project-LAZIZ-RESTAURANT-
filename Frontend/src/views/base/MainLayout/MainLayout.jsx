import React from 'react'
import MainNavbar from '../MainNavbar/MainNavbar'
import Footer from '../MainFooter/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <MainNavbar></MainNavbar>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </>
  )
}

export default MainLayout
