import React, { useEffect, useState } from 'react'
import './adminContact.scss'
function AdminContact() {
    const [datas, setdata] = useState([]);
  useEffect(() => {
datalar()

  }, []);
  async function getProducts() {
    const response = await fetch('http://localhost:3000/contact');
    const movies = await response.json();
    return movies;
  }
  async function deleteId(id) {
    const response = await fetch('http://localhost:3000/contact/'+id,{
        method:"delete"
    });
  datalar()
   
  }
  
  async function datalar(){
    let datam=await getProducts()
    setdata(datam)
  }
  return (
    <div className='adminContact'>
      <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Message</th>
    <th></th>
  </tr>
  
     {
        datas.map((x)=>(
         <tr key={x._id}>
       <td >{x.name}</td>
       <td >{x.email}</td>
       <td >{x.phone}</td>
       <td >{x.message}</td>
       <td >
         <button onClick={()=>deleteId(x._id)}>Remove</button>
       </td>
     </tr>
        ))
     }

    
  

  
  
</table>
    </div>
  )
}

export default AdminContact
