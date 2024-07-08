import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./menu.scss";
import { useEffect } from "react";
function Menu() {
  const [menu, setMenu] = useState([]);
  const [lunch, setlunch] = useState([]);
  const [dinner, setdinner] = useState([]);
  const [inp1, setinp1] = useState("");
  useEffect(() => {
    datalar();
    datalarlunch();
    datalardinner()
  }, []);
  console.log(menu);
  async function menuShow() {
    const res = await fetch("http://localhost:3000/menu");
    const data = await res.json();
    return data;
  }
  async function datalar() {
    let datam = await menuShow();
    setMenu(datam);
  }
  async function lunchShow() {
    const res = await fetch("http://localhost:3000/categories/lunch");
    const data = await res.json();
    return data;
  }
  async function datalarlunch() {
    let datam = await lunchShow();
    setlunch(datam);
  }
  async function dinnerShow() {
    const res = await fetch("http://localhost:3000/categories/dinner");
    const data = await res.json();
    return data;
  }
  async function datalardinner() {
    let datam = await dinnerShow();
    setdinner(datam);
  }
  function az(item) {
    setMenu(
      menu.toSorted((a, b) =>
        a[item] > b[item] ? 1 : b[item] > a[item] ? -1 : 0
      )
    );
  }
  function za(item) {
    setMenu(
      menu.toSorted((a, b) =>
        a[item] < b[item] ? 1 : b[item] < a[item] ? -1 : 0
      )
    );
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
      {/* <section>
        <div className="menu" >
          {menu.map((x)=>(
            <div className="menu1" key={x._id}>
              <img src={x.image} alt="" />
              <h3>{x.price}</h3>
              <h2>{x.name}</h2>

            </div>
          ))}


        </div>
      </section> */}
      <section id="menuCategorySec">
        <div className="categorySearch">
          <input
            type="text"
            placeholder="Search By Name..."
            value={inp1}
            onChange={(e) => setinp1(e.target.value)}
          />
          <button onClick={() => az("price")}>
            Price <i class="fa-solid fa-arrow-up"></i>
          </button>
          <button onClick={() => za("price")}>
            Price <i class="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <div className="menuCategoryCtr">
          {menu
            .filter((x) => x.name.toLowerCase().includes(inp1.toLowerCase()))
            .map((x) => (
              <div className="categoryCtrItems">
                <div className="categoryCtrImg">
                  <img src={x.image} alt="" />
                </div>
                <div className="ctrItemsItem">
                  <h1>{x.name}</h1>
                  <p>{x.description}</p>
                  <span>${x.price}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section id="heroLunchSec">
        <h1>LUNCH</h1>

      </section>
      <section id="menuCategorySec">
       
        <div className="menuCategoryCtr">
          {lunch
            .filter((x) => x.name.toLowerCase().includes(inp1.toLowerCase()))
            .map((x) => (
              <div className="categoryCtrItems">
                <div className="categoryCtrImg">
                  <img src={x.image} alt="" />
                </div>
                <div className="ctrItemsItem">
                  <h1>{x.name}</h1>
                  <p>{x.description}</p>
                  <span>${x.price}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
      <section id="heroDinnerSec">
        <h1>Dinner</h1>

      </section>
      <section id="menuCategorySec">
       
        <div className="menuCategoryCtr">
          {dinner
            .filter((x) => x.name.toLowerCase().includes(inp1.toLowerCase()))
            .map((x) => (
              <div className="categoryCtrItems">
                <div className="categoryCtrImg">
                  <img src={x.image} alt="" />
                </div>
                <div className="ctrItemsItem">
                  <h1>{x.name}</h1>
                  <p>{x.description}</p>
                  <span>${x.price}</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
