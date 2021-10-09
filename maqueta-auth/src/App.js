import React, {Component} from 'react';
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render(){
    return(
      <Router>
        <NavbarComponent/ >
        
        <Switch>
          <Route path ="/" exact>
            <HomePage />
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

        </Switch>
        <FooterComponent/ >
      </Router >
    );
  }
}
export default App;

