import React, { useState } from 'react';
import { Navbar2 } from './Navbar';

import { Link } from "react-router-dom";
import axios from 'axios';


export default function Login() {

    const [errorMsg , setErrorMsg] = useState('');


    const initialValues = {usergmail: "", password : ""}
    const [formValues, setFormValues] = useState(initialValues);


    const handleChange =(e) =>
    {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value});
    }

    // On clicking button
    const handleSubmit= (e) => {
        e.preventDefault();  //preventing page from reloading
        
        let userDetails = {
            email: formValues.usergmail,
            password: formValues.password
        };

        axios.post("https://jobs-api.squareboat.info/api/v1/auth/login", userDetails)
        .then(res => {  
            
            let activeToken = res.data.data.token;

            localStorage.setItem('activeToken', activeToken);
            window.location.href = "/postedjobs";
        })
        .catch(err => {
            setErrorMsg("Incorrect email address or password");
        });

    }




    return (
        <>

            <Navbar2 />
            <header>
            </header>

        <div className="container form_container">
        <form onSubmit={handleSubmit}>

           
            <h2>Login</h2>
            <div className="mb-3">
                <label htmlFor="usergmail" className="form-label" >Email address</label>
                <input 
                    type="email" 
                    name='usergmail'
                    className="form-control"  
                    placeholder="Enter your email"
                    value = {formValues.usergmail}
                    onChange={handleChange} 
                    required
                    />
                
            </div>

            <div className="mb-3">
                
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <p  className="form-text form-text-right-align"><Link to="/forgotpassword">Forgot your password?</Link></p>
                <input 
                    type="password" 
                    name='password'
                    className="form-control" 
                    placeholder="Enter your password" 
                
                    value={formValues.password} 
                    onChange={handleChange} 
                    required
                    />
                    <h5 id='errormsg'>{errorMsg}</h5>
                
            </div>

            <button >Login</button>

            <p>New to MyJobs? <Link to="/signup">Create an account</Link></p>
        </form>
    </div>
        </>
    )
}
