import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <a href="/"><img src="../images/logo.svg" alt="Beach Resort"/></a>
                </div>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/rooms'>Rooms</Link> </li>
                </ul>
            </div>
        </nav>
    )
};
export default Nav


