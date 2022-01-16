import './Home.css'

const Home = () => {
    return (
        <>
            <div className="home-page">
                <h1>The Wonders of The World</h1>
            <img src={"/img/Rotating_globe.gif"}></img>
            </div>
            <div className='front-btn'>
                <a href="/new"><button type="button"><span>🕌<br />New</span></button></a>
                <a href="/ancient"><button type="button"><span>🏛<br />Ancient</span></button></a>
                <a href="/natural"><button type="button"><span>🏔<br />Natural</span></button></a>
            </div>
        </>
    )
}

export default Home;