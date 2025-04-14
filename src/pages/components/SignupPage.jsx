import { useState } from "react";
import axios from "axios";
import "../styles/SignupPage.css";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // const API_URL = "http://20.244.2.32:5000/api/v1/user/signup";
            const API_URL = "http://localhost:5000/api/v1/user/signup";
            
            const response = await axios.post(API_URL, {
                username,
                email,
                fullName,
                password
            });
            const data = response.data;

            if(data.success){
                setMessage(data.message);
            }else{
                setMessage("SignUp Failed: "+data.message);
            }
        } catch (error) {
            console.error(error);
            if(error.response && error.response.status === 400) {
                setMessage("User already exists : "+ error.response.message);
            } else {
                setMessage("An error occured: "+error.message);
            }
        }
    };

    return(
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1 className="signup-title">Sign up</h1>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input 
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(event)=> setUsername(event.target.value)}
                    required
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    required
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name: </label>
                    <input 
                    type="text"
                    id="fullName"
                    placeholder="Enter fullName"
                    value={fullName}
                    onChange={(event)=> setFullName(event.target.value)}
                    required
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input 
                    type="text"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    required
                     />
                </div>
                <button className="signup-button" type="submit">Sign up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default SignupPage;