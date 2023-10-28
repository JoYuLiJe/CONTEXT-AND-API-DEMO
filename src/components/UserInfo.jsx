import { useState, useEffect } from 'react';
import fetchRandomUser from '../services/api';

const UserInfo = () => {
    // create state to store the user info
    const [user, setUser] = useState(null);


    // use useEffect to facilitate call to API on page load
    useEffect(() => {
        // if useEffect needs to do something async, make a new async helper function inside of useEffect rather than making useEffect itself async
        const getUser = async () => {
            // call fetchRandomUser to get the user data
            const userData = await fetchRandomUser();
            // set user to be the new userData
            setUser(userData)
        };

        // call getUser to run the above
        getUser();
     }, [])

    return (
        <div>
            <h2>UserInfo</h2> 
            {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
            <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
            <img src={user.picture.medium} alt={`user photo`}/>
            <p>Email: {user.email}</p>
        </div>
    )
}


export default UserInfo;
