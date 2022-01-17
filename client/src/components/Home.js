import UsersContainer from '../containers/UsersContainer';
import PopUpWindow from './PopUpWindow';
import './Home.css'
import { useState } from 'react';

const Home = ({addFormUser, createUser, currentUser, formUser}) => {
    const [popUpOpen, setPopUpOpen] = useState(false)
    
    const togglePopUpWindow = () => {
        setPopUpOpen(!popUpOpen)
    }

    return (
        <div className="home-page">
            <div className="home-page-content">
            <h1>Wonders of the World</h1>
            <img src={"/img/Rotating_globe.gif"}></img>
            <button className="sign-in-button" type="button" onClick={togglePopUpWindow}>Sign-in</button> 
            {popUpOpen && <PopUpWindow content={<UsersContainer addFormUser={addFormUser} createUser={createUser} currentUser={currentUser} formUser={formUser}/>} handlePopUpClose={togglePopUpWindow}/>}
            </div>
            <div className='front-btn'>
                <a href="/new"><button type="button"><span>🕌<br />New</span></button></a>
                <a href="/ancient"><button type="button"><span>🏛<br />Ancient</span></button></a>
                <a href="/natural"><button type="button"><span>🏔<br />Natural</span></button></a>
            </div>
        </div>
    )
}

export default Home;