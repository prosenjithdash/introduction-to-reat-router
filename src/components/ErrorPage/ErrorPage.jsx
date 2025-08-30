import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h1>OOPS !!! </h1>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <h6>Go back to home</h6>
                    <Link to='/'>Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;