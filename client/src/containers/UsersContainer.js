import { useState, useEffect } from "react";
import SignInForm from "../components/SignInForm";
import UsersService from "../services/UsersService";

const UsersContainer = () => {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        UsersService.getUsers()
        .then(users => setUsers(users))
    }, [])
}

