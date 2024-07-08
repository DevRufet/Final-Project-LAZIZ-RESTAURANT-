import React, { useEffect, useState } from "react";
import "./blog.scss";
import { Link } from "react-router-dom";
function Blog() {
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
      <section id="heroBlogSec">
        <h1>BLOG</h1>
      </section>
      <section className="blogImgSec">
        <div className="blogImgCtr">
          {
            datas.map((x)=>
            <div className="blogItemsImgs" key={x._id}> 
            <div>
              <img
                src={x.image}
                alt=""
              />
            </div>
            <h1>{x.name}</h1>
            <p>
             {x.description}
            </p>
            <span><Link to={`/comment/${x._id}`}>CONTINUE READING </Link><i class="fa-solid fa-arrow-right"></i></span>
          </div>
            )
          }
          
        </div>
      </section>
    </>
  );
}

export default Blog;
