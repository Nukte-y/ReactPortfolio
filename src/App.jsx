import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import HashRouter
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
