import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { url } from "../assets/url";


function Register() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleRegister=async(e)=>{
        e.preventDefault();

        try{
            const response = await fetch(`${url}/api/auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await response.json()
            if (!response.ok) {
                
                console.log(data.message);
                alert(data.message)
                return
            }
            alert("Registered Successfully!!")

        }catch(error){
            console.log(error);
            alert(error)
            
        }
        navigate("/login")
    }
    return(
        <div className="registerBox">
            <form onSubmit={handleRegister} className="register">
                <h1>Register</h1>
                <input type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}  />

                <input type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}  />

                <input type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}  />
                <div className="registerLink">
                    <span>Already have an Account?</span>
                    <Link to="/login">Login</Link>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;