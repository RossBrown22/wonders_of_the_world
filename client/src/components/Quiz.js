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
            </section>
    </div>
    );
}

export default Quiz;