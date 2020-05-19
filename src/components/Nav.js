import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav-center">
            Nav Center
            </div>
            <ul>
                <li><Link to='/home'>Home</Link> </li>
                <li><Link to='/rooms'>Rooms</Link> </li>
            </ul>
        </nav>
    )
};
export default Nav
