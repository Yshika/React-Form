import React from 'react';
import './Create.css'
function View(props) {

  return (
    <div >
      <h2 style={{textDecoration:"underline", margin:"5px 0px 10px 0px"}}> Details </h2>
      <div className="table-responsive" style={{overflowX:"auto"}}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Category</th>
            <th colSpan="5">Technology</th>
          </tr>
        </thead>
        <tbody>
          {
            props.users.map((user, idx) => (< tr key={idx} >
              <td><img src={user.image} alt="Uploaded" height="30"/></td>
              <td> {user.name} </td>
              <td> {user.gender} </td>
              <td> {user.email} </td>
              <td> {user.mno} </td>
              <td> {user.category} </td>
              <td> {user.C && "C"}</td>
              <td> {user.Cplus && "C++"}</td>
              <td> {user.Java && "Java"}</td>
              <td> {user.Python && "Python"}</td>
              <td> {user.JavaScript && "JavaScript"} </td>
            </tr>))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default View;