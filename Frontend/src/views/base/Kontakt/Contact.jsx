import React from "react";
import "./contact.scss";
function Contact() {
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
        <form action="">
          <div className="contactCtr">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <input type="text" />
            </div>
          </div>
          <div className="contactArea">
            <label htmlFor="">Message</label>
            <textarea name="" id=""></textarea>
          </div>

          <button>SUBMIT</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
