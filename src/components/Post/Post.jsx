import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const postStyle = {
        border: '5px solid green',
        padding: '20px',
        borderRadius: '20px'
    }
    const { id, title, body } = post;
    return (
        <div style={postStyle}>
            <p>Id: {id}</p>
            <p>{title}</p>
            <span>{body}</span>
            <br /><br />
            <Link to={`/post/${id}`}><button>More Details</button></Link>
        </div>
    );
};

export default Post;