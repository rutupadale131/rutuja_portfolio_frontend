import { Link } from "react-router-dom";
import "./index.css"

const About =()=>{
    return (
        <div className="about-bg">
            <div className="about-me-text-container">
            <h1 className="about-me-h1">About Me</h1>
                <div className="about-me-content">
                <p className="about-me-p">
                Hi, I'm Rutuja Padale, a full-stack web developer and UI/UX designer based in Pune, India. I specialize in building dynamic and user-friendly web applications that seamlessly blend aesthetics with functionality.<br/>

My tech stack includes React.js, Node.js, Express.js, Framer Motion, and authentication/security using JWT and bcrypt. I have experience working with REST APIs and integrating third-party services to enhance application functionality. Additionally, I can work with SQL databases, ensuring efficient data management and seamless backend operations.
<br/>
With a strong foundation in UI/UX design, I focus on crafting intuitive digital experiences that prioritize usability. I thrive in collaborative environments, constantly exploring new technologies and refining my skills to stay ahead in the ever-evolving tech landscape. Every project is an opportunity to innovate, learn, and contribute to meaningful digital solutions.
<br/>With every project, I push my creative and technical boundaries, refining my skills to build solutions that are not only functional but also meaningful and impactful for users.
                </p>
           
            <Link to={"/certifications"}>
            <button className="certifications-button">Certifications</button>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default About;
