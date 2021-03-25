import React from 'react';
import {Counter} from './components/counter/Counter';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Header} from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route exact path="/about" component={Header} />
      </Switch>
    </div>
  );
}

export default App;
