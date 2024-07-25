import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
  return (
   <>
   
   <section id="heroLogin">
        <div className="loginGeneral">
          
            
              <p>Register</p>
            

            
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                  password: Yup.string().required("Required"),
                })}
                onSubmit={(values) => {
                  fetch("http://localhost:3000/register", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      navigate('/login')
                    
                    })
                    .catch(function (res) {
                      console.log(res);
                    });
                }}
              >
                <Form className="loginFormItems">
                  <label htmlFor="email">Email Address</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" />

                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" />
                  <ErrorMessage name="password" />

                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            
            <div className="loginRegister">
              <span>Do you already have an account?</span>
              <Link to={"/login"}>Login</Link>
            </div>
          
</div>
          
        
      </section>
   
   </>
  )
}

export default Register
