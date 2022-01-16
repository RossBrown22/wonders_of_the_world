import { useState } from "react";

const RegistrationForm = ({onRegistrationSubmit}) => {
    
    const [name, setName] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleRegistrationFormSubmit = (evt) => {
        evt.preventDefault()

        onRegistrationSubmit({
            name: name
        })

        setName("")
    }

    return(
        <form onSubmit={handleRegistrationFormSubmit}>
            <label for="name">Register: <span class="required_*">*</span></label><br/>
            <input type="text" name="name" placeholder="Enter Name..." value={name} onChange={handleNameChange} required/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default RegistrationForm;