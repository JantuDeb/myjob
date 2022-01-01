import React  from 'react'
import { Navbar3 } from './Navbar'


export default function NoApplication() {
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
                    <p>0 application </p>
                </div>
                
            </div>
        </>
            
    )
}
    
