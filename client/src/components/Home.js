const Home = () => {
    return (
        <>
            <h1>The Wonders of The World</h1>
            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/new";
            }}>New</button>

            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/ancient";
            }}>Ancient</button>
        </>
    )
}

export default Home;