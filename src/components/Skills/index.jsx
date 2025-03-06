import {v4 as uuidv4} from "uuid"
import "./index.css"

const techStackList=[
    {
        id:uuidv4(),
        name:"Frontend Development",
        skills:"ReactJs, HTML, CSS, Javascript, Framer Motion",
    },
    {
        id:uuidv4(),
        name:"Backend Development & Database",
        skills:"NodeJs, Express, JWT Authentication/Authorization, SQL, SQLite",
    },
    {
        id:uuidv4(),
        name:"Version Control & Deployment",
        skills:"Git, GitHub, Railway, Vercel",
    },
    {
        id:uuidv4(),
        name:"Other Technologies",
        skills:"API Integration, RestAPI, Full Stack CRUD,  Wireframing, Prototyping, Figma, SMTP",
    }
]

const softSkills=[
    {
        id:uuidv4(),
        title:"Teamwork",
        description:"Collaborative approach to solving problems effectively"
    },
    {
        id:uuidv4(),
        title:"Communication",
        description:"Ability to convey ideas clearly to clients and teams"
    },
    {
        id:uuidv4(),
        title:"Adapability",
        description:"Quick to learn and adapt to new tools, frameworks, and challenges"
    },
    {
        id:uuidv4(),
        title:"Problem-Solving",
        description:"Analytical approach to solving development and design challenges"
    }
]
console.log(techStackList,softSkills)

const Skills=()=>{
    return(
        <div className="skills-bg">
            <div className="skills-box">
                <h1 className="skills-heading">My Skills</h1>
            <div className="skill-container">
        
              
                <ul className="ul-container">
                    {techStackList.map(eachSkill=>{
                        return(
                            <li 
                            key={eachSkill.id} 
                            style={{listStyleType:"none"}}
                            className="skill-card"
                            >
                                <h3>{eachSkill.name}</h3>
                                <p>{eachSkill.skills}</p>
                            </li>
                        )
                    })}
                </ul>
         
                
                <ul className="ul-container">
                    {softSkills.map(eachSkill=>{
                        return(
                            <li 
                            key={eachSkill.id} 
                            style={{listStyleType:"none"}}
                            className="skill-card"
                            >
                                <h3>{eachSkill.title}</h3>
                                <p>{eachSkill.description}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Skills;