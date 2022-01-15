const Natural = () => {
    return (
        <>
            <h1>Natural Wonders</h1>
            <button type="button" onClick={(e) => {
            e.preventDefault();
            window.location.href="http://localhost:3000/";
            }}>Home</button>
        </>
    );
}

export default Natural;