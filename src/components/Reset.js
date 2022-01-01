import React, {useState} from 'react'
import Navbar from './Navbar';
import axios from 'axios';

export default function Reset() {


    const initialValues = {
        newpassword: "",
        confirmpassword: "",
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
        
        if(formValues.newpassword !== formValues.confirmpassword)
        {
            alert("Password Mismatch");
        }
        else{

            let finalValue ={
                password: formValues.newpassword,
                confirmPassword : formValues.confirmpassword,
                token: localStorage.getItem('resetToken')
            };
            

            axios.post('https://jobs-api.squareboat.info/api/v1/auth/resetpassword', finalValue)
            .then(res => {
                console.log(res.data);
                alert("Password Updated Successfully");
                window.location.href = "/login";
            })
            .catch(err => {
                console.log(err.response);
                alert("Password Change Failed");
            });
        }
    };


    return (

        <>

            <Navbar />
            <header></header>

        <div className="container form_container">
            <form onSubmit={handleSubmit}>

                <h2>Forgot your password?</h2>
                <p className="alignleft">Enter your new password below.</p>
                <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label" >New password</label>
                    <input 
                        type="text"
                        name="newpassword"
                        className="form-control"    
                        placeholder="Enter your password (min 8 characters)" 
                        value={formValues.newpassword}
                        onChange={handleChange}
                        required
                        />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label" >Confirm new password</label>
                    <input 
                    type="text" 
                    name="confirmpassword"
                    className="form-control" 
                    placeholder="Enter your password (min 8 characters)" 
                    value={formValues.confirmpassword}
                    onChange={handleChange}
                    required
                    /> 
                </div>

                <button>Reset</button>
 
            </form>
        </div>
    </>
    )
}
