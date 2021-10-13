import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoginPage from './auth/LoginPage';
import RegisterPage from './register/RegisterPage';
import ConfirmPassword from './confirm/ConfirmPassword';
import InputEmail from './mail/InputEmail';

import FooterComponent from './shared/components/footer/FooterComponent';
import NavbarComponent from './shared/components/header/NavbarComponent';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/AtomiumLogin.css';

import './assets/img/ImagologoAtomiumTransparente-01.png';
import HomePage from './home/HomePage';
import ForbidenComponent from './shared/components/forbiden/ForbidenComponent';


function App(){
  
    return(
      <Router>
        <NavbarComponent/ >
        
        <Switch>
          <Route path ="/" exact>
            <HomePage/>
          </Route>
          <Route path="/auth" exact>
            <LoginPage/> 
          </Route>
          <Route path="/register" exact>
            <RegisterPage/> 
          </Route>
          <Route path="/confirm" exact>
            <ConfirmPassword/> 
          </Route>
          <Route path="/mail" exact>
            <InputEmail/> 
          </Route>
          <Route path="/forbiden">
            <ForbidenComponent/>
          </Route>

        </Switch>
        <FooterComponent/ >
      </Router >
    );
  }

export default App;

