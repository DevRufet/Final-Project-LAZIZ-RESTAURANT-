import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./reservation.scss";
import { AuthContext } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";
function Reservation() {
  const { token, logOut, decoded } = useContext(AuthContext);
  const navigate=useNavigate()
  const [myinp1,setmyinp1]=useState('')
  const [myinp2,setmyinp2]=useState('')
  const [myinp3,setmyinp3]=useState('')
  const [myinp4,setmyinp4]=useState('')
  const [myinp5,setmyinp5]=useState('')
  const [myinp6,setmyinp6]=useState('')
  
  function handleSubmit(e){
    e.preventDefault()
    ReservationSave()
  }
  async function ReservationSave() {
    const response = await fetch("http://localhost:3000/reservation",{
      method:'post',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({date:myinp1,time:myinp2,count:myinp3,name:myinp4,phone:myinp5,email:myinp6})
    });
    const movies = await response.json();
    return movies;
  }
  return (
    <>
      <Helmet>
        <title>Reservation</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section id="heroReservation">
        <h1>RESERVATION</h1>
      </section>
      <section id="heroResHall">
        <h1>Reservation</h1>
        <p>BOOK TABLE</p>
        <form action="" className="resFormHall" onSubmit={(e)=> {token?handleSubmit(e):navigate('/login')}}>
          <div className="resFormHallItem">
            <div>
              <label htmlFor="">Date</label>
              <input type="date" required value={myinp1} onChange={(e)=>setmyinp1(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="">Time</label>
              <input type="text" required value={myinp2} onChange={(e)=>setmyinp2(e.target.value)} placeholder="Time.."/>
            </div>
            <div>
              <label htmlFor="">People Count</label>
              <input type="text" required value={myinp3} onChange={(e)=>setmyinp3(e.target.value)} placeholder="People Count..."/>
            </div>
          </div>
          <div className="resFormHallItems">
          <div>
              <label htmlFor="">Name</label>
              <input type="text" required value={myinp4} onChange={(e)=>setmyinp4(e.target.value)} placeholder="Name..." />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="text" required value={myinp5} onChange={(e)=>setmyinp5(e.target.value)} placeholder="Phone..."/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" required value={myinp6} onChange={(e)=>setmyinp6(e.target.value)} placeholder="Email..." />
            </div>
          </div>
          <button>GO RESERVATION</button>
        </form>
      </section>
    </>
  );
}

export default Reservation;