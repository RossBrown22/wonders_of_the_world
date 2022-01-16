import UsersContainer from '../containers/UsersContainer';
import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <h1>The Wonders of The World</h1>
            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/new";
            }}>🕌<br />New</button>

            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/ancient";
            }}>🏛<br />Ancient</button>

            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/natural";
            }}>🏔<br />Natural</button>

            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/quiz";
            }}>📝<br />Quiz</button>

        <img src={"/img/Rotating_globe.gif"}></img>
        <UsersContainer />
        </div>
    )
}

export default Home;