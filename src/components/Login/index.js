import React, {useState, useEffect} from "react";
import "./style.css";

export default function Login({
    login,
    signup,
    loginData,
    signupData,
    setLoginData,
    setSignupData
}) {
    const [showLogin, setShowLogin] = useState(true);
    useEffect(() => {
        console.log("logindata", loginData);
    }, [loginData]);

    const loginSubmit = (e) => {
        e.preventDefault();
        console.log("hello loginsubmit", loginData);
        login(loginData);
    };

    const signupSubmit = (e) => {
        e.preventDefault();
        console.log("seval is married", signupData)
        signup(signupData);

        setSignupData({username: "", password: ""}).then((data) => {
            console.log(data, "this is hayden from sign in");
        });
    };

    return (
        <div className="form-modal">
            <div className="form-toggle">
                <button id="login-toggle"
                    onClick={
                        () => setShowLogin(true)
                }>
                    log in
                </button>
                <button id="signup-toggle"
                    onClick={
                        () => setShowLogin(false)
                }>
                    sign up
                </button>
            </div>
            {
            showLogin ? (
                <div id="login-form"
                    onSubmit={
                        (e) => loginSubmit(e)
                }>
                    <form>
                        <input type="text"
                            value={
                                loginData.username
                            }
                            onChange={
                                (e) => setLoginData({
                                    ...loginData,
                                    username: e.target.value
                                })
                            }
                            placeholder="Enter username"/>
                        <input type="password"
                            value={
                                loginData.password
                            }
                            onChange={
                                (e) => setLoginData({
                                    ...loginData,
                                    password: e.target.value
                                })
                            }
                            placeholder="Enter password"/>
                        <button type="submit" className="btn login">
                            login
                        </button>

                        <hr/>
                    </form>
                </div>
            ) : (
                <div id="signup-form"
                    onSubmit={
                        (e) => signupSubmit(e)
                }>
                    <form>
                        <input type="text"
                            value={
                                signupData.username
                            }
                            onChange={
                                (e) => setSignupData({
                                    ...signupData,
                                    username: e.target.value
                                })
                            }
                            placeholder="Enter your Username"/>
                        <input type="password"
                            value={
                                signupData.password
                            }
                            onChange={
                                (e) => setSignupData({
                                    ...signupData,
                                    password: e.target.value
                                })
                            }
                            placeholder="Create password"/>
                        <button type="submit" className="btn login">
                            Create Account
                        </button>

                        <hr/>
                    </form>
                </div>
            )
        } </div>
    );
}
