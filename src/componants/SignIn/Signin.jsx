
import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from "../Footer/Footer";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInDetails, setsignInDetails] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleOnChange = ({ currentTarget: input }) => {
        setsignInDetails({ ...signInDetails, [input.name]: input.value });
    };
    // const URL =process.env.REACT_APP_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${process.env.REACT_APP_URL}/api/user/login`;
            const { data } = await axios.post(url, signInDetails);
            console.log(data);

            // Store user info in localStorage
            localStorage.setItem("userinfo", JSON.stringify(signInDetails.email));

            // Check if the user is an admin
            const adminEmail =process.env.REACT_APP_ADMIN_EMAIL;
            



            if (signInDetails.email === adminEmail) {
                localStorage.setItem("isAdmin", true);
            }


            // if (data.role === "admin") {
            //     localStorage.setItem("isAdmin", true);
            // }

            window.location = "/";
            window.location.href = document.referrer;
            toast();
        } catch (error) {
            if (
                
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                toast(error.response.data.message);
            }
        }
    };

    return (
        <div className="logindiv">
            <main className="main-sign_in_container">
                <form onSubmit={handleSubmit} className="sign-in-container">
                    <h3>Sign in</h3>
                    <div className="input-div">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={handleOnChange}
                            value={signInDetails.email}
                        />
                        <span><p className="error-paragraph">{error !== '' ? `Error: ${error}` : null}</p></span>
                    </div>
                    <div className="input-div">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            onChange={handleOnChange}
                            value={signInDetails.password}
                        />
                                                <span><p className="error-paragraph">{error !== '' ? `Error: ${error}` : null}</p></span>
                    </div>
                    <button className="sign-in-button running-border">Sign in</button>
                    <p className="sign-in-redirect-p">Don't have an account? <Link to="/sign-up">Sign up</Link></p>
                </form>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Login;
