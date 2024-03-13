import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import './App.css';
import Navbar from './Pages/0Components/Navbar/Navbar';

const App = () => {
    return (
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
    )
}

export default App;