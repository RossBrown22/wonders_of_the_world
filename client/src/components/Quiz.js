import QuizContainer from "../containers/QuizContainer";
import NavBar from "./NavBar";

const Quiz = () => {
    return (
        <div id="grid">
            <header id="header">

            <img className="logo" src={"/img/wonderlogo.gif"}></img>
            <h1>Quiz</h1>

            </header>
            <nav id="nav-bar">
            <NavBar />
            </nav>
            <section id="content-1">
              <QuizContainer />
            </section>
            <footer id="footer">
              <h3>Footer</h3>
            </footer>
    </div>
    );
}

export default Quiz;