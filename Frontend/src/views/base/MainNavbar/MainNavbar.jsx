import React, { useContext, useState } from "react";
import "./mainNavbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
function MainNavbar() {
  const { token, logOut, decoded } = useContext(AuthContext);
  const [exist, setexist] = useState(false);
  function isexist() {
    setexist(!exist);
  }
  return (
    <>
      <header>
        <nav id="heroNav">
          <div className="navCtr">
            <div>
              <p>LAZIZ</p>
              <span>RESTAURANT</span>
            </div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/reservation"}>Reservation</Link>
              </li>
              <li>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
            <button className="btn" onClick={() => isexist()}>
            <i class="fa-solid fa-bars"></i>
        </button>
        
            <button >
           <Link to={'/register'}> <i class="fa-solid fa-user-tie"></i></Link>
             
            </button>
            {token ? (
              <>
                <button onClick={logOut}><i class="fa-solid fa-right-to-bracket"></i></button>
              </>
            ) : null}
          </div>
          {exist &&
        
        <ol> 
          <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/reservation"}>Reservation</Link>
              </li>
              <li>
                <Link to={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
        </ol>
        }
        </nav>
      </header>
    </>
  );
}

export default MainNavbar;
