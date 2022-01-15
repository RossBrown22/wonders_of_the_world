import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <h1>The Wonders of The World</h1>
            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/new";
            }}>New</button>

            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/ancient";
            }}>Ancient</button>

            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/natural";
            }}>Natural</button>

            <img src={"/img/Rotating_globe.gif"}></img>
        </div>
    )
}

export default Home;