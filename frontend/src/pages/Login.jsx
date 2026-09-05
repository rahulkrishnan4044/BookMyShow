import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { url } from "../assets/url";


function Login() {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [IsLogin,SetIsLogin] = useState(true)


    const handleLogin=async(e)=>{
        e.preventDefault();

        try{
            const response = await fetch(`${url}/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type" : "application/json",
                    },
                body:JSON.stringify({
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
            const token = data.token 
            localStorage.setItem("token",token)
            localStorage.setItem("IsLogin",IsLogin)
            alert("Login Succesfull!")
            navigate("/BookMyShow")

        }catch(error){
            console.log(error);
            alert(error)
            
        }
    }
    return(
        <div className="loginBox" >
            <form onSubmit={handleLogin} className="login">
                <h1>Login</h1>
                <input type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}  />
                <input type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}  />
                <div className="loginLink">
                    <span>Don't have an account?</span>
                    <Link to="/register">Register</Link>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login