import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';


export default function ForgotPassword() {

    const initialValues = {sendemail: " "};
    const [formValues, setFormValues] =useState(initialValues);


    const handleChange = (e) =>{

        const {name, value}  = e.target;
        setFormValues({...formValues, [name]: value})
    }

    

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const finalValues = {
            "email": formValues.sendemail,
        };

        let url = "https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email="+formValues.sendemail;
        

        axios.get(url)
        .then(res => {
            
            let resetToken = res.data.data.token;

            localStorage.setItem("resetToken", resetToken);
            console.log(localStorage.getItem('resetToken'));
            window.location.href = "/reset";
            
        })
        .catch(err => {
            console.log(err.response);
            alert("No user found with this email");
        });
        
    }

  
    return (
        <>

            <Navbar />
            <header></header>

        <div className="container form_container">
            <form onSubmit={handleSubmit}>

                <h2>Forgot your password?</h2>
                <p className="alignleft">Enter the email associated with your account and we'll send you instruction to reset your password.</p>
                <div className="mb-3">
                    <label htmlFor="sendemail" className="form-label" >Email address</label>
                    <input 
                        type="email" 
                        name='sendemail'
                        className="form-control" 
                        placeholder="Enter your email" 
                        value={formValues.sendemail}
                        onChange={handleChange}
                        required
                        />   
                </div>

                <button >Submit</button>
            </form>
        </div>
    </>
    )


}

