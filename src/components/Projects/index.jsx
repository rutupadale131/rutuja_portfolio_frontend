import { Link } from "react-router-dom"
import notesAppBg from "../../assets/notesAppBg.jpg"
import portfolioBg from "../../assets/portfolioBg.jpg"
import uxBg from "../../assets/uxBg.png"
import "./index.css"

const projectsList=[
    {
        id:1,
        title:"Notes App",
        description:"A full-stack note-taking app with JWT authentication, CRUD operations, and smooth animations using Framer Motion.",
        image:notesAppBg,
    },
    {
        id:2,
        title:"Portfolio Website",
        description:"A full-stack personal portfolio website showcasing projects, skills, and achievements.",
        image:portfolioBg,
    },
    {
        id:3,
        title:"CookHire UX Case Study",
        description:"A UI/UX case study focused on designing an intuitive platform for hiring cooks efficiently.",
        image:uxBg,
    }
]
console.log(projectsList)

const Projects=()=>{
    return(
        <div className="projects-bg">
            <h2 className="project-h2">My Work</h2>
            <ul className="projects-container">
            {projectsList.map(eachProject=>{
                return(
                   <li 
                   key={eachProject.id}
                   
                   >
                    <Link to={`/project/${eachProject.id}`}
                     className="project-card"
                     style={{
                        backgroundImage:`url(${eachProject.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        
                       }}
                     >
                    <div className="project-description">
                    <p className="project-title">{eachProject.title}</p>
                        <p className="description">{eachProject.description}</p>
                    </div>
                    </Link>
                   </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Projects;