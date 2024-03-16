import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Norfs Ice Cream</Link>
        <h1>Logo</h1>
        <ul>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                <Link to="/account">Account</Link>
            </li>
        </ul>
    </nav>
}