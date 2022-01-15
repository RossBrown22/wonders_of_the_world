const Ancient = () => {
    return (
        <>
            <h1>Ancient Wonders</h1>
            <button className="button" type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/";
            }}>🏠<br />Home</button>
            
            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/quiz";
            }}>📝<br />Quiz</button>
        </>
    );
}

export default Ancient;