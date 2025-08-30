import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {

    // useParams

    const {postId} = useParams();
    const navigate = useNavigate();

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1)
    }
    const post = useLoaderData();

    const { title, id, body } = post;
    return (
        <div>
            <h2>Details About Post Details:{id} .</h2>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;