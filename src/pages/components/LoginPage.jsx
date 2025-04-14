import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css";

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

            // Axios POST requuest
            const response = await axios.post(API_URL, {
                email,
                password
            });

            const data = response.data;

            if (data.success) {
                localStorage.setItem("token", data.token);
                setMessage(data.message);
                navigate("/home");
            } else {
                setMessage("Login failed: " + data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage("Invalid username or password");
            } else {
                setMessage("An error occurred: " + error.message);
            }
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-title">Log In</h1>
                <div className="form-group">
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
                <div className="form-group">
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
                <button type="submit" className="login-button">Log In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default LoginPage;