import React, { useContext } from "react";
import "./adminNavbar.scss";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
function AdminNavbar() {
    const navigate = useNavigate();
    const { token, logOut, decoded } = useContext(AuthContext);
  
  return (
    <>
   
      <header>
        <nav id="adminNav">
          <div className="adminIcon">
            <div>
              <p>LAZIZ</p>
              <span>RESTAURANT</span>
            </div>
            <button><i class="fa-solid fa-user-tie"></i><p>Admin Panel</p></button>
            
          </div>
          <div className="navOutlet">
               <div className="adminItem">
            <ul>
              <Link to={"/admin"}>Menu</Link>
              <Link to={"/admin/companies"}>Companies</Link>
              <Link to={"/admin/comment"}>Comment</Link>
              <Link to={"/admin/blog"}>Blog</Link>
              <Link to={"/admin/contact"}>Contact</Link>
              <Link to={"/admin/user"}>User</Link>
              <Link to={"/admin/reservation"}>Reservation</Link>
            </ul>
            <button onClick={()=>
                 navigate('/')
            }><i class="fa-solid fa-house"></i><p>Home</p></button>
          </div>
          <div className="navMax">
            <Outlet></Outlet>
          </div>
          </div>
       
        </nav>
      </header>
    </>
  );
}

export default AdminNavbar;
