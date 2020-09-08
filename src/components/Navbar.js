import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand" href="/users/create">Form</a>
                    <ul className="navbar-nav justify-content-center" style={{ margin: "auto" }}>
                        <li className="nav-item nav-link">
                            <Link to="/users/create" className="navbarlink">Create</Link></li>
                        <li className="nav-item nav-link">
                            <NavLink to="/users/view" className="navbarlink">View</NavLink></li>
                    </ul>
            </nav>

        </div>
    );
}

export default withRouter(Navbar);
//withRouter se koi bhi page pr ho tb bhi required page pr navigate krskte ho.
// bina iske props har page pr nhi show ho rha tha