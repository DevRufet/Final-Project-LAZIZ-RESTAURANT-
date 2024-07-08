import React, { useEffect, useState } from "react";
import "./comment.scss";
import { useParams } from "react-router-dom";
function Comment() {
  let { id } = useParams();
  const [datas, setdata] = useState({});
  const [mydata, setmydata] = useState([]);
  const [inp1, setinp1] = useState("");
  useEffect(() => {
    datalar();
    datalars();
  }, []);
  async function getProducts(id) {
    const response = await fetch("http://localhost:3000/blog/" + id);
    const movies = await response.json();
    return movies;
  }
  async function getComments(id) {
    const response = await fetch('http://localhost:3000/comment/'+id);
    const movies = await response.json();
    return movies;
  }
  async function datalars() {
    let datams = await getComments(id);
    setmydata(datams);
  }
  console.log(mydata);
  async function postComment() {
    const response = await fetch("http://localhost:3000/comment", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({categoryId: id, comment: inp1 }),
    });
    datalars()
  }

  async function datalar() {
    let datam = await getProducts(id);
    setdata(datam);
  }
  return (
    <>
      <section id="heroBlogSec">
        <h1>BLOG</h1>
      </section>
      <section className="commentImgSec">
        <div className="commentImgCtr">
          {
            <div className="commentItemsImgs" key={datas._id}>
              <div>
                <img src={datas.image} alt="" />
              </div>
              <h1>{datas.name}</h1>
              <p>{datas.description}</p>
            </div>
          }
        </div>
        <section className="blogCommentSec">
          <div className="blogCommentDesc">
            <i class="fa-solid fa-comment"></i> Leave A Comment
          </div>
          <div className="commentDirect">
            <input
              type="text"
              value={inp1}
              onChange={(e) => setinp1(e.target.value)}
            />
            <button onClick={() => postComment()}>
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          {
            
            <div>{mydata.comment}</div>
            
          }
        </section>
      </section>
    </>
  );
}

export default Comment;
