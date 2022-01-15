const Natural = () => {
    return (
        <>
            <h1>Natural Wonders</h1>
            <button type="button" onClick={(e) => {
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

export default Natural;