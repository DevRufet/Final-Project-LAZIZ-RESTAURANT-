import React, { useEffect, useState } from "react";
import "./adminBlog.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function AdminBlog() {
  const [datas, setdata] = useState([]);
  useEffect(() => {
datalar()

  }, []);
  async function getProducts() {
    const response = await fetch('http://localhost:3000/blog');
    const movies = await response.json();
    return movies;
  }
  async function deleteId(id) {
    const response = await fetch('http://localhost:3000/blog/'+id,{
        method:"delete"
    });
  datalar()
   
  }
  
  async function datalar(){
    let datam=await getProducts()
    setdata(datam)
  }
 
  return (
    <>
      <div className="blogCon">
        
        <Formik 
          initialValues={{ name: "", image: "", description: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            image: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              fetch("http://localhost:3000/blog", {
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
          <Form className="blogForm">
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label htmlFor="image">Image:</label>
            <Field name="image" type="text" />
            <ErrorMessage name="image" />

            <label htmlFor="description">Description:</label>
            <Field name="description" type="Description" />
            <ErrorMessage name="description" />

            <button type="submit">Share Post</button>
          </Form>
        </Formik>
      
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
        </tr>
        {
           datas.map((x)=>(
            <tr key={x._id}>
          <td className="blogImg"><img src={x.image} alt="" /></td>
          <td className="blogName">{x.name}</td>
          <td className="blogDesc">{x.description}</td>
          <td className="blogRem">
            <button onClick={()=>deleteId(x._id)}>Remove</button>
          </td>
        </tr>
           ))
        }
        
      </table>
      </div>
    </>
  );
}

export default AdminBlog;
