import React , {useState, useEffect} from 'react'
import { Navbar3 } from './Navbar'
import axios from 'axios';

import {ApplicationCard} from './Card'


export default function Application() {

    const getKey = localStorage.getItem('specialKey');

    const [totalApplication, setTotalApplication] = useState([]);

    useEffect( () => {
        axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${getKey}/candidates`, { headers: { Authorization: localStorage.getItem('activeToken') } })
        .then(res => {
            
            setTotalApplication(res.data.data)
            
        })
    }, []);


 

    return (
        <>
            <Navbar3 />
            <header> 
                    <p>Home &gt; Post a job</p>
            </header>
        
            <div className='container application'>
                <h3>Applicants for this job</h3>
                <hr />

                <div>
                    <p>{totalApplication.length} application </p>
                </div>

                { 
                   totalApplication &&  totalApplication.map(application => (
                        <ApplicationCard 
                        key={application.id}
                        name={application.name} 
                        email={application.email} 
                        skills={application.skills}  

                        />
                    ))
                }


                
                
            </div>
        </>
            
    )
}
