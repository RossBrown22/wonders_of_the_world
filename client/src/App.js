import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import New from "./components/New";
import Ancient from './components/Ancient';
import Natural from './components/Natural';
import Quiz from './components/Quiz';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/ancient" component={Ancient} />
      <Route exact path="/natural" component={Natural} />
      <Route exact path="/quiz" component={Quiz} />
    </>
    </Router>
  );
}

export default App;
