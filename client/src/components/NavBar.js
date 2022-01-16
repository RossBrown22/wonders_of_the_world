import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    <button type="button">🏠<br />Home</button>
                </Link>
            </li>
            <li>
                <Link to="/new">
                    <button type="button">🕌<br />New</button>
                </Link>
            </li>
            <li>
                <Link to="/ancient">
                    <button type="button">🏛<br />Ancient</button>
                </Link>
            </li>
            <li>
                <Link to="/natural">
                    <button type="button">🏔<br />Natural</button>
                </Link>
            </li>
            <li>
                <Link to="/quiz">
                    <button type="button">📝<br />Quiz</button>
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;