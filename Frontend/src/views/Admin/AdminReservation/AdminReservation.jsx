import React, { useEffect, useState } from 'react'
import './adminReservation.scss'
import { Link } from 'react-router-dom';
function AdminReservation() {
    const [datas, setdata] = useState([]);
  useEffect(() => {
datalar()

  }, []);
  async function getProducts() {
    const response = await fetch('http://localhost:3000/reservation');
    const movies = await response.json();
    return movies;
  }
  async function deleteId(id) {
    const response = await fetch('http://localhost:3000/reservation/'+id,{
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
    <div className='adminReservation'>
    <table>
  <tr>
    <th>Date</th>
    <th>Time</th>
    <th>People Count</th>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th></th>
    <th></th>
  </tr>
  {
           datas.map((x)=>(
            <tr key={x._id}>
          <td >{x.date}</td>
          <td >{x.time}</td>
          <td >{x.name}</td>
          <td >{x.phone}</td>
          <td >{x.email}</td>
          <td >{x.count}</td>
          <td ><button><Link to={`/admin/verify/${x._id}`}>Confirm</Link></button></td>
          <td >
            <button onClick={()=>deleteId(x._id)}>Remove</button>
          </td>
        </tr>
           ))
        }
 
</table>
    </div>
    
    </>
  )
}

export default AdminReservation
