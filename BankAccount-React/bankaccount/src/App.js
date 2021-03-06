import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from '../node_modules/react-router-dom/Route';
import UserAcc from './components/UserAcc';


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/:account_id" component={UserAcc} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
