import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import HeroSection from './Hero';
import Footer from './Footer';
import ProjectsSection from './Project';
import ContactSection from './Contact';
import Navbar from './Navbar';
import Skill from './Skill';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Navbar/>
 <HeroSection/>
 <About/>
 <Skill/>
 <ProjectsSection/>
<ContactSection/>
 <Footer/>
 </>
);



