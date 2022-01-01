import axios from 'axios';
import React, {useState} from 'react'
import { Navbar3 } from './Navbar';


export default function Post() {


    const initialValues = {
        jobtitle: '',
        jobdescription: '',
        joblocation: '',
    }

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem('activeToken');
        
        const finalValues = {
            title: formValues.jobtitle,
            description: formValues.jobdescription,
            location: formValues.joblocation,  
        };

        axios.post("https://jobs-api.squareboat.info/api/v1/jobs", finalValues, {headers: {'Authorization': token}})
        .then(res => {
            console.log(res);
            console.log(res.data);
           
            window.location.href = "/postedjobs";
        })
        .catch(err => {
            alert("Fill the correct details / Check your inputs");
        });

    }



    return (

        <>
            <Navbar3 />
            <header> 
                    <p>Home &gt; Post a job</p>
            </header>
        

        <div className="container form_container">
        <form onSubmit={handleSubmit}>

           
            <h2>Post a Job</h2>
            <div className="mb-3">
                <label htmlFor="jobtitle" className="form-label" >Job title*</label>
                <input 
                    type="text" 
                    name='jobtitle'
                    className="form-control"  
                    placeholder="Enter your job title"
                    value = {formValues.jobtitle}
                    onChange={handleChange} 
                    required
                    />
                
            </div>

            <div className="mb-3">
                
                <label htmlFor="jobdescription" className="form-label">Description*</label>
                <input 
                    type="text" 
                    name='jobdescription'
                    className="form-control jobdescription" 
                    placeholder="Ener your description" 
                
                    value={formValues.jobdescription} 
                    onChange={handleChange} 
                    required
                    />
                
            </div>

            <div className="mb-3">
                
                <label htmlFor="joblocation" className="form-label">Location*</label>
                <input 
                    type="text" 
                    name='joblocation'
                    className="form-control" 
                    placeholder="Ener your location" 
                
                    value={formValues.joblocation} 
                    onChange={handleChange} 
                    required
                    />
                
            </div>

            <button >Post</button>
        </form>
    </div>
</>
    )
}
