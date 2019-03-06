import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Portfolio from './components/portfolio/portfolio';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;