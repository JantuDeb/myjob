import React from 'react'
import { Navbar3 } from './Navbar'
import { Link } from 'react-router-dom'

export default function PostjobPage() {
    return (
        <>
            <Navbar3 />
            <header className='lessheight'>
                <p>Home </p>
                <h2>Jobs posted by you</h2>
            </header>

            <button className='btn-blue'><Link to='/post'>Post a Job</Link></button>
        </>
    )
}
