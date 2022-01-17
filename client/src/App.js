import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import New from "./components/New";
import Ancient from './components/Ancient';
import Natural from './components/Natural';
import Quiz from './components/Quiz';
import Map from './components/Map';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersService from './services/UsersService';
import WondersService from './services/WondersService';

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





  const [wonders, setWonders] = useState([]);
  const [selectedWonder, setSelectedWonder] = useState(null);
  // const [filteredWonders, setFilteredWonders] = useState([]);
  

  useEffect(() => {
      WondersService.getWonders()
      .then(wonders => setWonders(wonders))
  }, []);

  // useEffect(() => {
  //     filterWonders()
  // }, [wonders]);

  // useEffect(() => {
  //     loadFirstWonder()
  // }, [filteredWonders]);

  // const loadFirstWonder = () => {
  //     const firstWonder = filteredWonders[0];
  //     setSelectedWonder(firstWonder);
  // };
  
  const onWonderSelected=(wonder) => {
      setSelectedWonder(wonder);
  };

  // const filterWonders = () => {
  //     const pathname = window.location.pathname;
  //     const result = wonders.filter(wonder => wonder.collection ===pathname);
  //     setFilteredWonders(result);
  // };





  return (
    <div className='background-img'>
    <Router>
    <>
      <Route exact path="/" render={() => {
        return <Home addFormUser={addFormUser} createUser={createUser} currentUser={currentUser} formUser={formUser}/>}} />
      <Route exact path="/new" render={() => {
        return <New wonders={wonders} selectedWonder={selectedWonder} onWonderSelected={onWonderSelected} /> }} />
      <Route exact path="/ancient" component={Ancient} />
      <Route exact path="/natural" component={Natural} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/map" render={() => {
        return <Map onWonderSelected={onWonderSelected} wonders={wonders}/>
      }} />
    </>
    </Router>
    </div>
  );
}

export default App;
