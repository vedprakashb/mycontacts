import React from 'react';
import { Link } from 'react-router-dom';
const Header = props =>{
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-5m 
        navbar-dark bg-danger mb-3 py0">
    <div className= "conttainer">
    <a href="/" className ="navbar-brand">{branding}</a>
    <div>
        <ul className ="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to ="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to ="/contact/add" className="nav-link">Add</Link>
            </li>
            <li className="nav-item">
                <Link to ="/contact/edit/:id" className="nav-link">Edit</Link>
            </li>
            <li className="nav-item">
                <Link to ="/about" className="nav-link">About</Link>
            </li>
        </ul>
    </div>
</div>
        </nav>

        
    )
}

export default Header;