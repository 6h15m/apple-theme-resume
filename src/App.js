import React, { Component } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Route } from 'react-router-dom';
import { About, Project, Contact, Detail } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Route exact path="/" component={About} />
        <Route path="/detail/:no?" component={Detail} />
        <Route path="/project/:tag?" component={Project} />

        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
