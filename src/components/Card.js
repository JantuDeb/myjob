import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <>
            <div className='container jobscontainer'>
                <h2>{props.title}</h2>
                <p>{props.discription}</p>
                <h3>{props.location}</h3>
                <button className='jobbutton'><Link to="/application"><span className='blackcolor'>View application</span></Link></button>
            </div> 
        </>
    )
}
