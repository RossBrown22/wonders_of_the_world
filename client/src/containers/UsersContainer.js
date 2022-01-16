import { useState, useEffect } from "react";
import SignInForm from "../components/SignInForm";
import UsersService from "../services/UsersService";

const UsersContainer = () => {
    
    const [users, setUsers] = useState([])
    const [formUser, setFormUser] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        UsersService.getUsers()
        .then(users => setUsers(users))
    }, []);

    useEffect(() => {
        console.log("hello");
        checkIfRegistered() 
    }, [formUser])

    const addFormUser = (submittedUser) => {
        setFormUser(submittedUser)
    }

    const checkIfRegistered = () => {
        const foundUser = users.find(element => element.name == formUser.name);
        setCurrentUser(foundUser)
    }

    return(
        <div>
            {formUser ? null : <>
                <h2>Check if Registered</h2>
                <SignInForm onSignInSubmit={addFormUser} />
                </> }
            {currentUser ? <h2>Welcome to our website {currentUser.name}!</h2> : null }
            {(!currentUser && formUser) ? <h2>Display Registration Form</h2> :  null}
            
            
        </div>
    )
}

export default UsersContainer;