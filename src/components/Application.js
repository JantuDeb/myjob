import React , {useState, useEffect} from 'react'
import { Navbar3 } from './Navbar'
import axios from 'axios';


export default function Application() {

    const [posts , setPosts] = useState([]);
    useEffect(() => {
        axios.get("https://jobs-api.squareboat.info/api/v1/recruiters/jobs/5452304b-82f8-4095-822b-f41136a0955d/candidates",{ headers: { Authorization: localStorage.getItem('activeToken') } })
        .then(res => { setPosts(res.data.data.data) })
    }, [])

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
                    <h3>No application available!</h3>
                </div>
                <
            </div>
        </>
            
    )
}
