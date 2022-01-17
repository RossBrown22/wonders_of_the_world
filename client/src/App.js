import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import New from "./components/New";
import Ancient from './components/Ancient';
import Natural from './components/Natural';
import Quiz from './components/Quiz';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersService from './services/UsersService';

function App() {
  const [users, setUsers] = useState([])
  const [formUser, setFormUser] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
      UsersService.getUsers()
      .then(users => setUsers(users))
  }, []);

  useEffect(() => {
      checkIfRegistered() 
  }, [formUser])

  const addFormUser = (submittedUser) => {
      setFormUser(submittedUser)
  }

  const checkIfRegistered = () => {
    const foundUser = users.find(element => element.name == formUser.name);
    setCurrentUser(foundUser)
  }

  const createUser = (newUser) => {
    UsersService.postUser(newUser)
    .then(savedUser => setUsers([...users, savedUser]))
    setCurrentUser(newUser)
  }

  return (
    <div className='background-img'>
    <Router>
    <>
      <Route exact path="/" render={() => {
        return <Home addFormUser={addFormUser} createUser={createUser} currentUser={currentUser} formUser={formUser}/>}} />
      <Route exact path="/new" component={New} />
      <Route exact path="/ancient" component={Ancient} />
      <Route exact path="/natural" component={Natural} />
      <Route exact path="/quiz" component={Quiz} />
    </>
    </Router>
    </div>
  );
}

export default App;
