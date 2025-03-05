import { useParams ,useNavigate} from "react-router-dom"
import { useEffect } from "react";
import {motion} from "motion/react"
import { IoMdArrowRoundBack } from "react-icons/io";
import "./index.css"


const projectsList = [
    {
        id: 1,
        title: "Notes App",
        info: "A fast, lightweight, and feature-rich note-taking application with a sleek UI. It offers a smooth user experience with JWT-based authentication, secure storage, and RESTful APIs for efficient CRUD operations.",
        
        techStack: ["React.js", "Node.js", "Express", "SQLite", "JWT", "Framer Motion","Bcrypt","React Router", "Vercel", "Railway"],
        Features: [
            "🎨 Dark, modern, and clean UI with smooth animations using Framer Motion",
            "🛠️ Full stack CRUD functionality with REST API & JWT authorization",
            "🔐 Secure authentication with JWT, bcrypt password hashing & account deletion",
            "⚠️ SweetAlert confirmation popups for delete and logout actions",
            "🔍 Real-time search for instant note filtering",
            "🗂️ Notes are stored efficiently in SQLite for quick access",
            "🍪 JWT token verification stored securely in cookies",
            "🔗 Seamless navigation with React Router for dynamic page transitions",
            "📱 Fully responsive for mobile and desktop",
            "🚀 Deployed on Vercel (Frontend) & Railway (Backend)"
        ],
        gitLink:"https://github.com/rutupadale131/ruscribe-notes-app.git",
        liveLink:"https://ruscribe-notes-app.vercel.app/login"
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        info: "A modern and interactive portfolio website designed to showcase my journey, skills, and projects. Built with a clean UI, smooth animations, and an integrated contact form backed by a REST API.",
        
        techStack: ["React.js", "Node.js", "Express", "Framer Motion", "React Scroll", "React Router", "Vercel", "Railway"],
        Features: [
            "🎭 Smooth animations using Framer Motion",
            "📩 Contact form with backend API for message handling via SMTP",
            "🔗 Seamless navigation with React Router & React Scroll",
            "🌐 Responsive & modern UI with a clean dark theme",
            "🚀 Deployed on Vercel (Frontend) & Railway (Backend)"
        ],
        gitLink:"abcd",
        liveLink:null,
    },
    {
        id: 3,
        title: "CookHire UX Case Study",
        info: "A comprehensive UX case study for CookHire, a hiring platform for professional chefs and home cooks. Focused on enhancing user experience through research-driven insights and structured design solutions.",
       
        techStack: ["Figma", "Adobe XD", "UX Research", "Wireframing", "Prototyping"],
        Features: [
            "📌 Well-defined problem statement and user needs",
            "📊 Quantitative & qualitative analysis for data-driven insights",
            "⚖️ Competitive analysis to identify market gaps",
            "🧠 Empathy mapping & user journey creation",
            "👤 Persona development for targeted user experience",
            "🛤️ User flow, information architecture & wireframing",
            "🎨 Interactive high-fidelity prototypes"
        ],
        gitLink:null,
        liveLink:"https://www.behance.net/gallery/195056935/CookHire-UX-Case-Study"
    }
];





const ProjectView=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
   
    const navigate=useNavigate();
    const {id}=useParams();
    const projectId=parseInt(id);
    const projectInfo=projectsList.find(eachProject=>eachProject.id===projectId)
    console.log("projectInfo:",projectInfo)
    const {title,info,techStack,Features,gitLink,liveLink}=projectInfo
    return(
        <div className="project-view-bg">
            <motion.div 
            initial={{opacity:0,scale:0.8}}
            animate={{opacity:1,scale:1}}
            transition={{duration:2,ease:"easeInOut"}}
            className="project-content">
            <button onClick={()=>navigate(-1)}
                className="back-button"
                >
                <IoMdArrowRoundBack size={30}/>
            </button>
            
            <h1 className="project-title-pv">{title}</h1>
            <p>{info}</p>
            <h2>Tech Stack</h2>
            <div className="tech-stack-container">
            {techStack.map((eachItem,index)=>(
                    <span key={eachItem}>{eachItem}{index<techStack.length-1 && " | "}</span>
                ))}
            </div>
                
            
            <h2>Features</h2>
            <ul className="features-list">
                {Features.map(eachItem=>(
                    <li key={eachItem}>{eachItem}</li>
                ))}
            </ul>

            <div className="view-container">
            {gitLink!==null && 
            <a href={gitLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="view-link"
            >
                <button className="view-button">View on GitHub</button>
            </a>}
            {liveLink!==null &&
             <a href={liveLink}
             target="_blank" 
             rel="noopener noreferrer"
             className="view-link"
             >
                 <button className="view-button">View Live Project</button>
             </a>
            }
           </div>
           </motion.div>
        </div>
    )
}

export default ProjectView