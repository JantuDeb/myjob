import React from 'react'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import Reset from './components/Reset';
import Post from './components/Post';
import PostjobPage from './components/PostjobPage';
import Application from './components/Application';
import Postedjobs from './components/Postedjobs';



export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/postjobpage" element={<PostjobPage />} />
                    <Route path="/postedjobs" element={<Postedjobs />} />
                    <Route path="/postjobPages" element={<PostjobPage />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/application" element={<Application />} />
                    
                </Routes>
            </Router>
        
        </>
    )
}
