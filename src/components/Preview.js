import React from 'react';

const Preview = (props) => {

    const onSubmit = () => {
        var user=props.User;
              user.image=props.Image;
        //console.log("Data is submitted", props.User);
        props.fill(user);
    };
    //console.log("Preview Called")
    return (
        <div className="my-3">
            <div className="table-responsive" style={{ overflowX: "auto" }}>
                <table className="table table-striped" width="50%">
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
                        <tr>
                            <td> <img src={props.Image} height="30" alt="Uploaded"/></td>
                            <td> {props.User.name} </td>
                            <td> {props.User.gender} </td>
                            <td> {props.User.email} </td>
                            <td> {props.User.mno} </td>
                            <td> {props.User.category} </td>
                            <td> {props.User.C && "C"}</td>
                            <td> {props.User.Cplus && "C++"}</td>
                            <td> {props.User.Java && "Java"}</td>
                            <td> {props.User.Python && "Python"}</td>
                            <td> {props.User.JavaScript && "JavaScript"} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <input type="submit" onClick={onSubmit}></input>
        </div>

    );
}

export default Preview;