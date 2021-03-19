import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail'

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;

/*
<Route path="/Home">
<h1>Home</h1>
</Route>
<Route path="/home/introduction">
<h1>Introduction</h1>
</Route>
<Route path="/about">
<h1>About</h1>
</Route> */