import React from 'react';

//import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ships from './components/Ships';
import People from './components/People';
import Films from './components/Films';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App" style={{backgroundColor: "black"}}>
    <Router >
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/ships' component={Ships}/>
          <Route path='/people' component={People}/>
          <Route path='/films' component={Films}/>
          <Route path='/vehicles' component={Vehicles}/>
          <Route path='/species' component={Species}/>
          <Route path='/planets' component={Planets}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
