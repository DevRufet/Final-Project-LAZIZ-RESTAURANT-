import React from "react";
import './mainNavbar.scss'
import { Link } from "react-router-dom";
function MainNavbar() {
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
                 <li><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/menu'}>Menu</Link></li>
                 <li><Link to={'/reservation'}>Reservation</Link></li>
                 <li><Link to={'/gallery'}>Gallery</Link></li>
                 <li><Link to={'/about'}>About</Link></li>
                 <li><Link to={'/blog'}>Blog</Link></li>
                 <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
                <button>
                <i class="fa-solid fa-user-tie"></i>
                </button>
            </div>
        </nav>
      </header>
    </>
  );
}

export default MainNavbar;
