import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg navbar-light ">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link mr-4" to='/'>Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mr-4" to="#">Dental Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mr-4 ${window.location.pathname === '/appointment' ? 'text-solid' : 'text-light'}`} to="#">Reviews</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mr-4 ${window.location.pathname === '/appointment' ? 'text-solid' : 'text-light'}`} to="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mr-4 ${window.location.pathname === '/appointment' ? 'text-solid' : 'text-light'}`} to="#">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
    );
};

export default Navbar;