import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    
    const userStyle = {
        border: '5px solid red',
        padding: '10px',
        borderRadius:'10px'
    }
    const { id,name, email, phone } = user;
    return (
        <div style={userStyle}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <span>Phone:{phone}</span>
            <br />
            
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};
export default User;