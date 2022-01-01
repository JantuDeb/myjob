
import React from 'react'


export default function Card(props) {

    function handleClick(e) {
        e.preventDefault();
        
            localStorage .setItem('specialKey', props.myKey);


            window.location.href = '/application';
        
    }

    return (
        <>
            <div className='container jobscontainer'>
                <h2>{props.title}</h2>
                <p  >{props.description}</p>
                <h3>{props.location}</h3>
                <button className='jobbutton' onClick={handleClick}><span className='blackcolor'>View application</span></button>
            </div> 
        </>
    )
}

export function ApplicationCard(props) {
    return (
        <>
            {
                <div className='container appcontainer'>
                <h3>{props.name}</h3>
                <h6>{props.email}</h6>
                <h5><strong>Skills</strong></h5>
                <p>{props.skills}</p>
            </div> }
        </>
    )
}
