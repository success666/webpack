import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Home from './components/home/home';
import About from './components/about//about';


const BasicExample = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default BasicExample;
