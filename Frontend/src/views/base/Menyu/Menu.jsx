import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import './menu.scss'
import { useEffect } from "react";
function Menu() {
  const [menu,setMenu] = useState([])
  useEffect(()=>{
menuShow()
  },[])

  async function menuShow() {
    const res = await fetch("http://localhost:3000/categories/lunch")
    const data = await res.json()
    setMenu(data)
  }
  return (
    <>
      <Helmet>
        <title>Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section id="menuSec">
         <h1>LAZIZ MENU</h1>
        
      </section>
      <section>
        <div className="menu" >
          {menu.map((x)=>(
            <div className="menu1" key={x._id}>
              <img src={x.image} alt="" />
              <h3>{x.price}</h3>
              <h2>{x.name}</h2>

            </div>
          ))}


        </div>
      </section>
    </>
  );
}

export default Menu;
