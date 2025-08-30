import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();

    const { title, id, body } = post;
    return (
        <div>
            <h2>Details About Post Details:{id} .</h2>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;