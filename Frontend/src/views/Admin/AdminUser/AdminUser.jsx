import React, { useContext, useEffect, useState } from "react";
import "./adminUser.scss";
import { AuthContext } from "../../../context/Auth";
import { Link } from "react-router-dom";

function AdminUser() {
  const [datas, setdatas] = useState([]);
  const { token } = useContext(AuthContext);
  useEffect(() => {
    // datalar();
    getAllproducts()
  }, []);
  console.log(datas);
  async function getAllproducts() {
    const res = await fetch("http://localhost:3000/users", {
      headers: { Authorization: token },
    });
    const data = await res.json();
    setdatas(data)
  }
  // deleteId
  async function deleted(id) {
    const res = await fetch("http://localhost:3000/users/"+id, {
      method:'delete',
      headers: { Authorization: token },
    });
    getAllproducts()
  }
  // async function deleteId(id) {
  //   const response = await fetch('http://localhost:3000/'+id,{
  //       method:"delete"
  //   });
  // datalar()

  // }

  // async function datalar() {
  //   let datam = await getAllproducts();
  //   setdatas(datam);
  // }
  return (
    <>
      <div className="userTable">
        <table>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th></th>
            <th></th>
          </tr>
          {datas.map((x) => {
            return (
              <tr key={x._id}>
                <td className="blogImg">{x.email}</td>
                <td className="blogName">{x.password}</td>
                <td className="blogDesc">{x.role}</td>
                <td className="blogRem">
                  <button onClick={()=>deleted(x._id)}>Remove</button>
                </td>
                <td className="blogRem">
                  <button><Link to={`/admin/edit/${x._id}`}>Edit</Link></button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default AdminUser;
