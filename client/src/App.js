import './App.css';
import Home from './components/Home';
import New from "./components/New";
import Ancient from './components/Ancient';
import Natural from './components/Natural';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/ancient" component={Ancient} />
      <Route exact path="/natural" component={Natural} />
    </>
    </Router>
  );
}

export default App;
