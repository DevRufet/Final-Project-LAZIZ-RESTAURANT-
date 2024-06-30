import React from "react";
import { Helmet } from "react-helmet-async";
import "./reservation.scss";
function Reservation() {
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
        <form action="" className="resFormHall">
          <div className="resFormHallItem">
            <div>
              <label htmlFor="">Date</label>
              <input type="date" />
            </div>
            <div>
              <label htmlFor="">Time</label>
              <input type="text" placeholder="Time.."/>
            </div>
            <div>
              <label htmlFor="">People Count</label>
              <input type="text" placeholder="People Count..."/>
            </div>
          </div>
          <div className="resFormHallItems">
          <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name..." />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="text" placeholder="Phone..."/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Email..." />
            </div>
          </div>
          <button>GO RESERVATION</button>
        </form>
      </section>
    </>
  );
}

export default Reservation;
