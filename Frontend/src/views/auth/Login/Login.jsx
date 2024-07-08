import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../../context/Auth.jsx";
import "./login.scss";
// import { AuthContext } from "../../../context/Auth";
function Login() {
  // const {settoken,setdecoded}=useContext(AuthContext)
  // const {settoken,setdecoded}=useContext(AuthContext)
  const { settoken, setdecoded } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <section id="heroLogin">
        <div className="loginGeneral">
          <p>Welcome</p>

         
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={(values) => {
                fetch("http://localhost:3000/login/", {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify(values),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    const tokenDecoded = jwtDecode(data.token);

                    console.log(tokenDecoded);
                    Cookies.set("token", data.token, { expires: 1 });
                    settoken(data.token);
                    setdecoded(tokenDecoded);
                    navigate("/");
                  })
                  .catch(function (res) {
                    console.log(res);
                  });
              }}
            >
              <Form className="loginFormItems">
                <label htmlFor="email">Email Address:</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />

                <label htmlFor="password">Password:</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password"/>

                <button type="submit">Submit</button>
              </Form>
            </Formik>
         
          <div className="loginRegister">
            <span>Don't have an account yet?</span>
            <Link to={"/Register"}>Register</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
