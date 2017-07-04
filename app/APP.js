import "font-awesome/css/font-awesome.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './blocks/header/header';
import Footer from './blocks/footer/footer';
import Home from './containers/home/home';
import Board from './containers/board/board';
import { Provider } from "react-redux";
import configureStore from "./store/store"

const Home1 = function() {
  return (<h1>Homesdfssssssssssssssssssssssssssssssss</h1>);
}

ReactDOM.render((
  <Provider store={configureStore()}>
    <Router>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/music" component={Board}/>
      </div>
    </Router>
  </Provider>
), document.getElementById('react-container'));
