import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <Projects />
    <Skills />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
