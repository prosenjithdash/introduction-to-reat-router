import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();

    const { name, id, email, phone } = user;
    return (
        <div>
            <h2>Details About User Details:{ id} .</h2>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Phone:{ phone}</p>
        </div>
    );
};

export default UserDetails;