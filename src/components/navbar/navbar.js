import React from 'react'
import ReactDOM from 'react-dom'
import "./navbar.css";
import Home from '../home/home';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
          
                        <i className="fa-solid fa-chart-column nav_icon"></i>
                     
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-auto">
                            <Link className="text-center nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="text-center nav-link" to="/projects">Projects</Link>
                            <Link className="text-center nav-link" to="/resume">Resume</Link>
                     
                         
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;