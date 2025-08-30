import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import  './Posts.css'
const Posts = () => {

    // Get posts data.

    const posts = useLoaderData()
    return (
        <div>
            <h2>All Posts: {posts.length}</h2>
            <div className="postsStyle">
                {
                    posts.map((post, index)=> <Post key={index} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;