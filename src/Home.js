// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data:blogs, isPending, error} = useFetch('http://localhost:7000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading..</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* // <BlogList blogs={blogs.filter( (blog) => blog.author === search )} title={searchTitle} /> */}
        </div>
    );
}
 
export default Home;