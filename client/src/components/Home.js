import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <h1>The Wonders of The World</h1>
            <a href="/new"><button type="button">🕌<br />New</button></a>
            <a href="/ancient"><button type="button">🏛<br />Ancient</button></a>
            <a href="/natural"><button type="button">🏔<br />Natural</button></a>
        <img src={"/img/Rotating_globe.gif"}></img>
        </div>
    )
}

export default Home;