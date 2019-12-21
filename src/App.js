import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './nav';
import Dashboard from './dashboard';
import ProjectDetail from './projectdetail';
import SignIn from './signin';
import SignUp from './signup';
import CreateProject from './createproject';
import './index.css';

export class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
      <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/project/:id' component={ProjectDetail} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />
      </Switch>
      </div>
      </BrowserRouter>

    );
  }
};
