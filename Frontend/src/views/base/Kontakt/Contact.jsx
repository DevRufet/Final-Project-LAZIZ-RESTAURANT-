import React, { useState } from "react";
import "./contact.scss";
function Contact() {
  const[inp1,setinp1]=useState('')
  const[inp2,setinp2]=useState('')
  const[inp3,setinp3]=useState('')
  const[inp4,setinp4]=useState('')
 function handleSubmit(e){
    e.preventDefault()
    ContactSave()
  }
  async function ContactSave() {
    const response = await fetch("http://localhost:3000/contact",{
      method:'post',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({name:inp1,email:inp2,phone:inp3,message:inp4})
    });
    const movies = await response.json();
    return movies;
  }
  return (
    <>
      <section id="heroContact">
        <h1>CONTACT</h1>
      </section>
      <section className="contactLoc">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24316.511514388116!2d49.839973!3d40.3741923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1719406439916!5m2!1sen!2saz"
          frameborder="0"
        ></iframe>
      </section>
      <section className="contactGo">
        <h1>SEND US A MESSAGE</h1>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <div className="contactCtr">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" required value={inp1} onChange={(e)=>setinp1(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" required value={inp2} onChange={(e)=>setinp2(e.target.value)} />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="text" required value={inp3} onChange={(e)=>setinp3(e.target.value)} />
            </div>
          </div>
          <div className="contactArea">
            <label htmlFor="">Message</label>
            <textarea name="" id="" required value={inp4} onChange={(e)=>setinp4(e.target.value)}></textarea>
          </div>

          <button>SUBMIT</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
