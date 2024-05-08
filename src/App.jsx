import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home.jsx';
import Contacts from './Contacts.jsx';
import Careers from './Careers.jsx';
import About from './About.jsx';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
