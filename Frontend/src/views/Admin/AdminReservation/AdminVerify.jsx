import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./adminVerify.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function AdminVerify() {
  // let { id } = useParams();
  // const [email, setEmail] = useState();
  // const [subject, setSubject] = useState();
  // const [message, setMessage] = useState();
  const form = useRef();

  function alert() {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mesaj göndərildi!",
      showConfirmButton: true,
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hujnc5o", "template_pv3o3fk", form.current, {
        publicKey: "1rfMXVYKzfNc2RxZO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

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
  // const sendMail = () => {
  //   axios
  //     .get("http://localhost:5173/", {
  //       params: {
  //         email,
  //         subject,
  //         message,
  //       },
  //     })
  //     .then(() => {
  //       //success
  //       console.log("success");
  //     })
  //     .catch(() => {
  //       console.log("failure");
  //     });
  // };
  return (
    <>
      <div className="adminVerify">
        <form action="" onSubmit={() => sendEmail()} ref={form}>
          <div>
            <label htmlFor="">To</label>

            <input
              name="user_email"
              type="email"
              placeholder="Recipient Email"
            />
          </div>
          <div>
            <label htmlFor="">Subject</label>
            <input name="user_name" type="text" placeholder="Subject" />
          </div>

          <div>
            <label htmlFor="">Message</label>
            <textarea placeholder="Message" name="message"/>
          </div>

          <button>Send Email</button>
        </form>
      </div>
    </>
  );
}

export default AdminVerify;
