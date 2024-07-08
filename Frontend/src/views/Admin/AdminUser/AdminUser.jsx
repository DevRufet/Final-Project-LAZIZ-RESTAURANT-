import React, { useContext, useEffect, useState } from "react";
import "./adminUser.scss";
import { AuthContext } from "../../../context/Auth";

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
                  <button>Remove</button>
                </td>
                <td className="blogRem">
                  <button>Edit</button>
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
