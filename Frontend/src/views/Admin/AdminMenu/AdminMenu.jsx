import React, { useEffect, useState } from "react";
import "./adminMenu.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function AdminMenu() {
  const [datas, setdata] = useState([]);
  useEffect(() => {
    datalar();
  }, []);
  async function getProducts() {
    const response = await fetch("http://localhost:3000/menu");
    const movies = await response.json();
    return movies;
  }
  async function deleteId(id) {
    const response = await fetch("http://localhost:3000/menu/" + id, {
      method: "delete",
    });
    datalar();
  }

  async function datalar() {
    let datam = await getProducts();
    setdata(datam);
  }

  return (
    <>
      <div className="adminMenu">
        <Formik
          initialValues={{
            name: "",
            category: "",
            image: "",
            description: "",
            price: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            category: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            image: Yup.string().required("Required"),
            description:
              Yup.string()
              .required("Required"),
            price: Yup.number().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              fetch("http://localhost:3000/menu", {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(values),
              });
            }, 400);
          }}
        >
          <Form className="menuForm">
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>

            
           <div><label htmlFor="category">Category</label>
            <Field name="category" type="text" />
            <ErrorMessage name="category" /></div>
            
             <div><label htmlFor="image">Image</label>
            <Field name="image" type="text" />
            <ErrorMessage name="image" /></div>
            
             <div><label htmlFor="description">Description</label>
            <Field name="description" type="text" />
            <ErrorMessage name="description" /></div>
            
             <div><label htmlFor="price">Price</label>
            <Field name="price" type="text" />
            <ErrorMessage name="price" /></div>
            
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <table>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
          {datas.map((x) => (
            <tr key={x._id}>
              <td>
               {x.name}
              </td>
              <td>{x.category}</td>
              <td><img src={x.image} alt="" /></td>
              <td>{x.description}</td>
              <td>{x.price}</td>
              <td>
                <button>
                  <Link>Edit</Link>
                </button>
              </td>
              <td>
                <button onClick={()=>deleteId(x._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default AdminMenu;
