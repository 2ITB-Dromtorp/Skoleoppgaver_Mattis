import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div id='navbar'>
                <Link className='nav_button' to="/select">SELECT</Link>
                <Link className='nav_button' to="/update">UPDATE</Link>
                <Link className='nav_button' to="/insert">INSERT</Link>
                <Link className='nav_button' to="/delete">DELETE</Link>
            </div>
            <div id='outlet'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;