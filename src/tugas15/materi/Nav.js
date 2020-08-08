import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/context">context</Link>
                </li>
            </ul>
        </>
    )
}

export default Nav