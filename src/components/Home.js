import React from 'react'
import  Navbar  from './Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
       <>
            <Navbar />

                <header className='bigheader'>
                    <div className='flex'>
                    <h1>Welcome to <br /> My<span class="bluetext">Jobs</span></h1>
                    
                    <button ><Link to='/login'>Login</Link></button>
                    </div>

                    <img src={require('./img/pic1.png')} alt="Person pic" />

                </header>

                <div class="container homecontainer">
                        <h1>Why us</h1>

                        <div>
                            <h3>Get More <br /> Visibility</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos soluta porro dolor sit amet
                            </p>
                        </div>

                        <div>
                            <h3>Organize Your <br /> Candidates</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos soluta porro dolor sit amet
                            </p>
                        </div>

                        <div>
                            <h3>Verify Their <br /> Abilities</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos soluta porro dolor sit amet
                            </p>
                        </div>
                    </div>

       </>
    )
}
