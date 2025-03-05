import {v4 as uuidv4} from "uuid"
import { IoMdArrowRoundBack } from "react-icons/io";
import {useNavigate } from "react-router-dom"
import { useEffect} from "react";
import "./index.css"

const certificationsList = [
    {
        id: uuidv4(),
        title: "React.js Development",
        link: "https://drive.google.com/file/d/1Bzfn-lAMDw9NBoAq63uKOfsUM6J09zp0/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title: "Backend Development with Node.js & Express",
        link: "https://drive.google.com/file/d/1ycpIU93yohjcnpbeLDYUShyQhZa-vJeT/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title: "Python Programming Foundations",
        link: "https://drive.google.com/file/d/11WEPbpbY48WkhWbhc-9019F_DfyLSlIU/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title: "Version Control & Command Line Essentials (Git & Terminal)",
        link: "https://drive.google.com/file/d/1WyCuOI6EC_ZdRE0WWjWSArmm9HGYnYsD/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title: "Database Fundamentals & SQL",
        link: "https://drive.google.com/file/d/1JV3Xb9ffU0p_WYVFuG-1nMb9C9bMH4gZ/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title: "Responsive Web Development Essentials",
        link: "https://drive.google.com/file/d/1Cem0q6Ca7SB9hAKNr5ASUMqi7Q8CwR4r/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title: "Static Web Development Essentials",
        link: "https://drive.google.com/file/d/1vLC35Jw14KfZXxL9Oitlp5PlCZqbojYZ/view?usp=sharing"
    },
    {
        id: uuidv4(),
        title:"Certified UI/UX Designer – User Research & Prototyping",
        link:"https://drive.google.com/file/d/1012g3NAJRlX2U_aUxxxslwKnEZjLc4o6/view?usp=sharing"
    }]


const Certifications=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <div className="certifications-bg">
            <button
            onClick={()=>navigate(-1,{replace:true})}
            className="back-button-cert"
            >
                <IoMdArrowRoundBack size={30} />
            </button>
            <h1 className="certification-h1">Certifications</h1>
            <ul className="cert-list">
                {certificationsList.map(eachItem => (
                    <li key={eachItem.id}
                    className="cert-card"
                    >
                        <a href={eachItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-link"
                            >
                        <h2>{eachItem.title}</h2>
                        <a href={eachItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-cert-link"
                        >View Certificate</a>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Certifications