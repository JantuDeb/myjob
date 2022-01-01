import React, { useState } from 'react'
import { Navbar2 } from './Navbar';

import { Link } from "react-router-dom";
import axios from 'axios';

export default function Signup() {


    const initialValues = {
        choice: '',
        username:"",
        useremail: "",
        createpassword: "",
        confirmpassword: "",
        skills: ""

};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
            
        });
        
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formValues.createpassword !== formValues.confirmpassword){
            alert("Password Mismatch");
        }
        else
        {
            const finalValues = {  
                "email": formValues.useremail,
                "userRole": Number(formValues.choice),
                "password": formValues.createpassword,
                "confirmPassword": formValues.confirmpassword,
                "name": formValues.username,
                "skills": formValues.skills,

            };

            
            axios.post("https://jobs-api.squareboat.info/api/v1/auth/register", finalValues)
            .then(res => {
                

                let activeToken = res.data.data.token;
                localStorage.setItem('activeToken', activeToken);
               
                window.location.href = "/postjobpage";
            })
            .catch(err => {
                console.log(err.response);
                alert("You are already registered. Please try with other email id");
            });


        }
       }


    return (

        <>
            <Navbar2 />
            <header>
            </header>
        
        <div className="container form_container">
            <form onSubmit={handleSubmit}>


                <h2>Signup</h2>

                <div className="mb-3">
                    <label htmlFor="choice" name="choice">i'm a*</label><br />

                    <input 
                        type="radio" 
                        className="radio" 
                        name="choice" 
                        value="0" 
                        required
                        onChange={handleChange}
                        />
                    <label htmlFor="Recruiter" className='radio-label'>Recruiter</label>

                    <input 
                        type="radio" 
                        className="radio " 
                        name="choice" 
                        value="1" 
                        required
                        onChange={handleChange}
                        />
                    <label htmlFor="candidate" className='radio-label'>Candidate</label><br />
                </div>


                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label" >Full Name*</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        placeholder="Enter your full name"  
                        required
                        name = "username"
                        value={formValues.username}
                        onChange ={handleChange}
                        />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="useremail" className="form-label" >Email address*</label>
                    <input 
                        type="email"
                        name="useremail"
                        className="form-control"    
                        placeholder="Enter your email" 
                        required
                        value={formValues.useremail}
                        onChange ={handleChange}
                        />
                    
                </div>

                <div className="mb-3">
                    
                    <label htmlFor="createpassword" className="form-label passwordform">Create Password*</label>
                    <input 
                        type="password" 
                        name= "createpassword"
                        className="form-control passwordinput" 
                        placeholder="Enter your password (min 8 characters)" 
                        required
                        minLength={8}
                        value={formValues.userpassword}
                        onChange ={handleChange}
                        />
                    
                </div>

                
                <div className="mb-3">
                    
                    <label htmlFor="confirmpassword" className="form-label passwordform">Confirm Password*</label>
                    <input 
                        type="password" 
                        name= "confirmpassword"
                        className="form-control passwordinput" 
                        placeholder="Enter your password (min 8 characters)" 
                        required
                        minLength={8}
                        value={formValues.confirmpassword}
                        onChange ={handleChange}
                        />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="skills" className="form-label" >Skills</label>
                    <input 
                    type="text" 
                    name= "skills"
                    className="form-control"    
                    placeholder="Enter comma seperated skills" 
                    value={formValues.skills}
                    onChange ={handleChange}
                    />
                    
                </div>

                <button >Signup</button>

                <p>Have an account? <Link  to="/login">Login</Link></p>
            </form>
        </div>
    </>
    )
}
