import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Projects from './components/Projects';
import Home from './components/home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

export default function App() {
  return (
    <Router>
        <ScrollToTop />
        <div className='bg-black'>
          <Routes>
            <Route
              path="/"
              element={<Home key="home" />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />            <Route 
              path="/resume"
              element={<Resume />}
            />
            <Route 
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </div>
    </Router>
  );
}
