import { useState } from "react";

const SignInForm = ({onSignInSubmit}) => {
    
    const [name, setName] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleSignInFormSubmit = (evt) => {
        evt.preventDefault()

        onSignInSubmit({
            name: name
        })

        setName("")
    }

    return(
        <form onSubmit={handleSignInFormSubmit}>
            <input type="text" placeholder="Enter Name..." value={name} onChange={handleNameChange} required/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SignInForm;