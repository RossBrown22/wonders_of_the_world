import { useState, useEffect } from "react";
import RegistrationForm from "../components/RegistrationForm";
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

    const createUser = (newUser) => {
        UsersService.postUser(newUser)
        .then(savedUser => setUsers([...users, savedUser]))
        setCurrentUser(newUser)
    }

    return(
        <div>
            {formUser ? null : <>
                <h2>Sign In:</h2>
                <SignInForm onSignInSubmit={addFormUser} />
                </> }
            {currentUser ? <h2>Welcome to our website {currentUser.name}!</h2> : null }
            {(!currentUser && formUser) ? <>
                <h2>You are not registered</h2>
                <h3>Ask a grown-up to do this bit with you</h3>
                <RegistrationForm onRegistrationSubmit={createUser}/> </> :  null}
            
            
        </div>
    )
}

export default UsersContainer;