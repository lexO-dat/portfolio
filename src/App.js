import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Terminal from './components/terminal/Terminal';
import IconSideNav from './components/Navbar/Navbar';
import Projects from './components/Projects';
import Home from './components/home';
import Resume from './components/Resume';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='bg-black'>
          <Routes>
            <Route
              path="/"
              element={<Home key="home" />}
            />
            <Route
              path="/terminal"
              element={<Terminal />}
            />
            <Route 
              path="/projects"
              element={<Projects />}
            />
            <Route 
              path="/resume"
              element={<Resume />}
            />
          </Routes>
      </div>
    </Router>
  );
}
