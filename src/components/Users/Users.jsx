import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css'

//Load data Process 01
// For all document

// Load the data
// state
// const [load, setLoad] = useState([])
// useEffect(()=>{
// fatech(link)
// .then (res => res.json())
    // .then (data => setLoad(data))
// },[])

const Users = () => {

    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>All users : {users.length}</h2>

            <div className='users'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;