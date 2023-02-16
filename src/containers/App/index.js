import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from './global-style';
import Home from '../Home';
import Form from '../Form';
import Results from '../Results';

const App = () => (
  <Router>
    <GlobalStyle />
    <Routes>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
    </Routes>
  </Router>
);

export default App;
