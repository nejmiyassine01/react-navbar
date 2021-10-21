import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/Home/Home.component';
import About from './components/About/About.component';
import Services from './components/Services/Services.component';
import Sign from './components/Sign/Sign.component';
import Contact from './components/Contact/Contact.component';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/signup' component={Sign} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
