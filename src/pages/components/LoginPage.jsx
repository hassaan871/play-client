import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // const API_URL = "http://20.244.2.32:5000/api/v1/user/login";
            const API_URL = "http://localhost:5000/api/v1/user/login";
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if(data.success) {
                localStorage.setItem("token", data.token);
                setMessage(data.message);
                navigate("/home");
            }else{
                setMessage("Login failed: "+data.message);
            }
        } catch (error) {
            console.log(error);
            setMessage("An error occurred: "+error.message);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>LogIn</h1>
            <div>
                <label htmlFor="email">Email: </label>
            <input 
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setemail(event.target.value)}
                required
            />
             </div>
             <div>
                <label htmlFor="password">Password: </label>
            <input 
                type="password"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            </div>
            <button type="submit">Log In</button>
            </form>
            { message && <p>{message}</p>}
        </div>
    )
}

export default LoginPage;