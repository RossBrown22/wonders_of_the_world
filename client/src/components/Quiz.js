const Quiz = () => {
    return (
        <>
            <h1>Test Yourself!</h1>
            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/";
            }}>🏠<br />Home</button>

            <h2>Reward for completeing 1 test = 🥉</h2>
            <h2>Reward for completeing 2 tests = 🥈</h2>
            <h2>Reward for completeing all tests = 🥇</h2>
        </>
    );
}

export default Quiz;