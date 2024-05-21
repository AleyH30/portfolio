import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import './App.css';
import Navbar from './Pages/0Components/Navbar/Navbar';
import Footer from './Pages/0Components/Footer/Footer';

const App = () => {
    return (
            <HashRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer/>
            </HashRouter>
    )
}

export default App;