import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from './global-style';
import Home from '../Home';
import Results from '../Results';

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
  </Router>
);

export default App;
