import React, { useState } from 'react';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Contact from './components/ContactComponent';
import Menu from './components/MenuComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { DISHES } from './shared/dishes'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  //let [dishes, setDishes] = useState(DISHES);
  let dishes = DISHES;
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/menu" element={<Menu dishes={dishes} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}
