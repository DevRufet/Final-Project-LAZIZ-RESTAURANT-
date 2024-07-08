import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './adminVerify.scss'
function AdminVerify() {
    let {id}=useParams()
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
//   useEffect(() => {
//     datalar()
    
//       }, []);
//   async function getProducts(id) {
//     const response = await fetch('http://localhost:3000/reservation/'+id);
//     const movies = await response.json();
//     return movies;
//   }
//   async function datalar(){
//     let datam=await getProducts()
//     setdata(datam)
//   }
  const sendMail = () => {
    axios
      .get("http://localhost:5173/", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        //success
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };
  return (
    <>
      <div className="adminVerify">
        <input
          type="text"
          placeholder="Recipient Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button onClick={sendMail}>Send Email</button>
      </div>
    </>
  );
}

export default AdminVerify;
