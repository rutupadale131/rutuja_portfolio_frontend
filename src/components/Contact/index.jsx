import { useState } from "react";
import {PuffLoader} from "react-spinners"
import Swal from "sweetalert2"
import "./index.css"

const Contact=()=>{
    const [inputFields,setInputFields]=useState({name:"",email:"",message:"",emptyFields:false,isLoading:false})
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setInputFields((prevFields)=>({
            ...prevFields,
            [name]:value
        }));
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log("submitted fields")
        const {name,email,message}=inputFields
        if(!name || !email || !message){
            setInputFields({emptyFields:true})
           return;
        }
        setInputFields({emptyFields:false,isLoading:true});
        const userFields={name,email,message}
        const url="https://rutujaportfoliobackend-production.up.railway.app/send-message"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userFields),
        }
        try{
            const response=await fetch(url,options)
            setInputFields({isLoading:false})
        if(response.status===200){
            const result=await response.json()
            console.log(result)
            Swal.fire({
                title:"Message sent successfully!",
                icon:"success",
                confirmButtonText:"OK"
            })
            setInputFields({name:"",email:"",message:""})
            
        }else{
            const result=await response.json()
            console.log(result)
            Swal.fire({
                title:"Failed to send message.",
                icon:"error",
                confirmButtonText:"OK"
            })
        }
        }catch(error){
            console.log(error)
        }
    }



    return (
        <div className="contact-bg">
            <h2>I'm excited to hear from you! Let's connect.</h2>
            <p className="contact-el">Mobile No: 9834065475</p>
            <p>Email: padalerutuja@gmail.com</p>
            <form className="msg-container" onSubmit={handleSubmit}>
                <p>Send a Message</p>
                <input 
                    type="text" 
                    className="input-el" 
                    placeholder="Your Name"
                    name="name"
                    value={inputFields.name}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    className="input-el" 
                    placeholder="Your E-mail"
                    name="email"
                    value={inputFields.email}
                    onChange={handleChange}
                />
                <textarea 
                    rows="10" 
                    className="msg-textarea" 
                    placeholder="Write your message here..."
                    name="message"
                    value={inputFields.message}
                    onChange={handleChange}
                />
                {inputFields.emptyFields && <p className="error-msg">*All fields are required. Please complete the form.</p>}
                {inputFields.isLoading && <PuffLoader color="#55c1d9"/>}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}

export default Contact;