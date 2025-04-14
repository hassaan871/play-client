import { useState } from "react";


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
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, fullName, password })
            });

            const data = await response.json();
            if(data.success){
                setMessage(data.message);
            }else{
                setMessage("SignUp Failed: "+data.message);
            }
        } catch (error) {
            console.error(error);
            setMessage("An error occured: "+error.message);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <div>
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
                <div>
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
                <div>
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
                <div>
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
                <button type="submit">Sign up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default SignupPage;