import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:7000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:7000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then( () => {
            history.push('/');
        } )
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <br/>
                    <h4>by {blog.author}</h4>
                    <br/>
                    <hr/><br/>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;