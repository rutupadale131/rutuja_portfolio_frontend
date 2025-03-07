import { Component } from "react";
import { motion } from "motion/react"
import { FaGithubSquare,FaLinkedin,FaBehanceSquare} from "react-icons/fa";
import "./index.css"

class Home extends Component{
    render(){
        return (
            <section className="home-bg">
                <div className="intro-container">
                    <motion.div 
                    className="intro-text-container"
                    initial={{opacity:0.22, y:-30,}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1.5,ease:"easeIn"}}
                    >
                        <h1 className="intro-heading">Hi! It’s Rutuja Padale<br/>
                        I’m a <span className="text-highlight"> Web Developer &
                        a UX Designer</span>
                        </h1>
                        <p className="intro-paragraph">Welcome to my portfolio!I’m thrilled to have you here. This space showcases my journey as a web developer 
                            and UX designer, where creativity meets 
                            functionality. I specialize in crafting intuitive,
                            responsive, and visually appealing websites that
                            enhance user experiences.
                        </p>
                    </motion.div>
                    <motion.div 
                    initial={{scale:0.8,opacity:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{duration:1.5,ease:"easeIn"}}
                    className="links-container">
                     <a 
                     href="https://github.com/rutupadale131" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     
                     >
                        <FaGithubSquare size={30} className="link-icon"/>
                     </a>
                     <a 
                     href="https://www.linkedin.com/in/rutujapadale/"
                     target="_blank" 
                     rel="noopener noreferrer"
                    
                     >
                        <FaLinkedin size={30} className="link-icon"/>
                     </a>
                     <a 
                     href="https://www.behance.net/rutujapadale/projects"
                     target="_blank" 
                     rel="noopener noreferrer"
                   
                     >
                        <FaBehanceSquare size={30} className="link-icon"/>
                    </a>
                    </motion.div>
                    <a href="/Rutuja-Padale-Resume2025.pdf" download="Rutuja-Padale-Resume2025.pdf">
                    <motion.button 
                    initial={{opacity:0,scale:0.8}}
                    animate={{opacity:1,scale:1}}
                    transition={{duration:1.5,ease:"easeInOut",delay:0.3}}
                    className="download-cv-button">
                        Download CV
                    </motion.button>
                    </a>
                </div>
            </section>
        )
    }
}

export default Home