import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './blocks/header/header';
import Footer from './blocks/footer/footer';
import Home from './containers/home/home'

const Home1 = function() {
  return (<h1>Homesdfssssssssssssssssssssssssssssssss</h1>);
}

ReactDOM.render((
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/music" component={Home1}/>
    </div>
  </Router>
), document.getElementById('react-container'));
