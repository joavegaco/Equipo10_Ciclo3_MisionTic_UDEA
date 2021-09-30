import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './auth/LoginPage';
import RegisterPage from './register/RegisterPage';
import FooterComponent from './shared/components/footer/FooterComponent';
import NavbarComponent from './shared/components/header/NavbarComponent';
function App() {
  return (
    <Router>
      <NavbarComponent/ >
      
      <Switch>
        <Route path ="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/auth" exact>
          <LoginPage/> 
        </Route>
        <Route path="/register" exact>
          <RegisterPage/> 
        </Route>

      </Switch>
      <FooterComponent/ >
    </Router>
  );
}
export default App;

