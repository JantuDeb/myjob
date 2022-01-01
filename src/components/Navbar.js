import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">My<span className="bluetext">Jobs</span></Link></li>
                <li><button ><Link to="/Signup">Login/Signup</Link></button></li>
            </ul>
        </nav>
    )
};

export function Navbar2() {
    return (
        <nav>
            <ul>
                <li><Link to="/">My<span className="bluetext">Jobs</span></Link></li>
            </ul>
        </nav>
    )
};

export function Navbar3() {


    function handleClick(){
        localStorage.removeItem('activeToken');
        window.location.href = "/";
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">My<span className="bluetext">Jobs</span></Link></li>
                <li className='postjob'><Link to="/postjobpage">Post a Job</Link></li>
               
                <li><button onClick={handleClick}>Logout</button></li>
            </ul>
        </nav>
    )
};
