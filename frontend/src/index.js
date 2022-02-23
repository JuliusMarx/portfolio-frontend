import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header'
import AboutMe from './components/aboutMe/aboutMe'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import Footer from './components/footer/footer'


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
