import React from 'react';
import './styles/Global.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import ProjectsPrev from './components/ProjectsPrev';
import Awards from './components/Awards';
import Club from './components/Club';
import Certificate from './components/Certificate';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <ProjectsPrev />
      <Awards />
      <Club />
      <Certificate />
      <Footer />
    </div>
  );
};

export default App;
