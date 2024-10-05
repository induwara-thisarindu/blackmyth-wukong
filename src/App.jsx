import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import ReviewPage from './components/ReviewPage.jsx';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'


const App = () => {
    useGSAP(() => {
        gsap.set("body", { opacity: 0 });

        gsap.to("body", {
            opacity: 1,
            duration: 1.5,
        });
    }, []);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <About />
                        <Gallery />
                        <Footer />
                    </>
                } />

                <Route path="/review" element={<ReviewPage />} />
            </Routes>
        </Router>
    );
};

export default App;


