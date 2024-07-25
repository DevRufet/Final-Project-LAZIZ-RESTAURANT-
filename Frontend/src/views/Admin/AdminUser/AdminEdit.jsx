import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./adminUser.scss";
function AdminEdit() {
  let { id } = useParams();
  const [datas, setdatas] = useState(null);
  const { token } = useContext(AuthContext);
  const navigate=useNavigate()
  useEffect(() => {
    // datalar();
    getAllproducts(id);
  }, []);

  async function getAllproducts(id) {
    const res = await fetch("http://localhost:3000/users/" + id, {
      headers: { Authorization: token },
    });
    const data = await res.json();
    setdatas(data);
  }
  return (
    <>
      {datas ? (
        <Formik
          initialValues={{
            email: datas.email,
            password: datas.password,
            role: datas.role,
          }}
          validationSchema={Yup.object({
            email:
              Yup.string()
              .required("Required"),
            password:
              Yup.string()
              .required("Required"),
            role: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              fetch("http://localhost:3000/users/" + id, {
                method: "put",
                headers: {
                  Authorization: token,
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                  email: values.email,
                  password: values.password,
                  role: values.role,
                }),
              });
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="adminEditForm">
            <label htmlFor="email">Email:</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password:</label>
            <Field name="password" type="text" />
            <ErrorMessage name="password" />

            <label htmlFor="role">Role:</label>
            <Field name="role" type="text" />
            <ErrorMessage name="role" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      ) : null}
    </>
  );
}

export default AdminEdit;
