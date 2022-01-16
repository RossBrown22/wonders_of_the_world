import QuizContainer from "../containers/QuizContainer";
import NavBar from "./NavBar";

const Quiz = () => {
    return (
        <div id="grid">
            <header id="header">
                <h1>Quiz</h1>
            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
              <QuizContainer />
              <h2>Reward for completeing 1 test = 🥉</h2>
            <h2>Reward for completeing 2 tests = 🥈</h2>
            <h2>Reward for completeing all tests = 🥇</h2>
            </section>
            <footer id="footer">
              <h3>Footer</h3>
            </footer>
    </div>
    );
}

export default Quiz;