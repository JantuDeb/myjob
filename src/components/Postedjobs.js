import axios from 'axios'
import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import { Navbar3 } from './Navbar'

export default function Postedjobs() {



    const [posts , setPosts] = useState([]);
    useEffect( () => {
        axios.get("https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=1", { headers: { Authorization: localStorage.getItem('activeToken') } })
        .then(res => { setPosts(res.data.data.data) })
    }, [])
        

    return (
        <>
            <Navbar3/>

            <header> 
                    <p>Home </p>
                    <h2>Jobs posted by you</h2>
            </header>

            { posts.map(post => (
                <Card
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    location={post.location}
                    />
                )
            )}
            
        </>
    )

    }
