import axios from 'axios'
import React , {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Card from './Card'
import { Navbar3 } from './Navbar'

export default function Postedjobs() {

    const [currentPage, setCurrentPage] = useState(1);

    const [posts , setPosts] = useState([]);
    useEffect( () => {
        axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${currentPage}`, { headers: { Authorization: localStorage.getItem('activeToken') } })
        .then(res => { setPosts(res.data.data.data) })
    }, [currentPage])

    

    const handlePageClick = (data) => {
        

        let selected = data.selected + 1;
        setCurrentPage(selected)
    }

    return (
        <>
            <Navbar3/>

            <header> 
                    <p>Home </p>
                    <h2>Jobs posted by you</h2>
            </header>

            <div className='container '>
            { 
                posts.map(post => (
                <Card
                    key={post.id}
                    myKey={post.id}
                    title={post.title}
                    description={post.description}
                    location={post.location}
                    />
                )
            )}
            </div>

            
                <ReactPaginate 
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={4}
                
                pageRangeDisplayed={1}      //number displayed in middle of pagination
                onPageChange={handlePageClick}

                // bootstrap classes
                containerClassName={'pagination justify-content-center'}
                pageLinkClassName={'page-link'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
            
        </>
    )

    }
