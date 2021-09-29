//file: src/webpages/index.js
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/mybooks" component = {MyBooks} />
            <Route path = "/favorites" component = {Favorites} />
        </Router>
    );
};
export default Webpages;