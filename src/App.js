import React, { Component } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Route } from 'react-router-dom';
import { About, Project, Contact } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Route exact path="/" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
