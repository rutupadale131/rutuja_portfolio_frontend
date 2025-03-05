import {Link} from 'react-scroll'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

import Home from "../Home"
import About from "../About"
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from "../Contact"


import "./index.css"

const Dashboard=()=>{
    const [isOpen, setIsOpen]=useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='dashboard-bg'
        style={{
            backgroundImage: `url('/images/darkBg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        }}
        >
            <div className="header">
             <h1 className='logo'>Rutuja.</h1>
             <div className="hamburger-menu" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
             <nav className={`nav-bar ${isOpen?"open":""}`}>
                <Link to="home" smooth={true} duration={500} offset={-250} className='nav-element'>Home</Link>
                <Link to="about" smooth={true} duration={500} className='nav-element'>About</Link>
                <Link to="skills" smooth={true} duration={500} className='nav-element'>Skills</Link>
                <Link to="projects" smooth={true} duration={500} className='nav-element'>Projects</Link>
                <Link to="contact" smooth={true} duration={500} className='nav-element'>Contact</Link>
             </nav>
            </div>

            <div id="home"><Home/></div>
            <div id="about"><About/></div>
            <div id="skills"><Skills/></div>
            <div id="projects"><Projects/></div>
            <div id="contact"><Contact/></div>
        </div>
    )
}

export default Dashboard;