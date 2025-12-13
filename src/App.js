import React, {useState, useEffect} from 'react';
import './App.scss';
import Header from './components/2_layouts/Header';
import AboutMe from './components/2_layouts/AboutMe';
import MyWorks from './components/2_layouts/MyWorks';
import Contact from './components/2_layouts/Contact';
import Nav from './components/2_layouts/Nav';

function App() {
  const [NavOpen, setNavOpen] = useState(false);
  const triggerNav = (type) => {
    type === true ? setNavOpen(true) : setNavOpen(false);
  }
  return (
    <div className="App">
      <Header triggerNav={triggerNav} NavOpen={NavOpen} />
      <AboutMe />
      <MyWorks />
      <Contact />
      <Nav NavOpen={NavOpen} triggerNav={triggerNav}/>
    </div>
  );
}

export default App;
