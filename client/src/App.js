import './App.css';
import New from "./components/New";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <>
      <Route exact path="/New" component={New} />
    </>
    </Router>
  );
}

export default App;
