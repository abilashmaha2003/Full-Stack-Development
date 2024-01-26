import React from 'react'
import "./Layout.css";
import {Outlet,Link} from "react-router-dom";
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className='nav-bar'>
                <li>
                    <Link className='nav-link1' to="/">Home</Link>
                </li>
                <li>
                    <Link className='nav-link2' to="/about">About</Link>
                </li>
                <li>
                    <Link className='nav-link3' to="/contact">Contact</Link>
                </li>  
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
