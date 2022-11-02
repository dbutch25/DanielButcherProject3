import { useState } from "react";
import BookPage from "./BookPage";

const Login = () => {
   
   const [ loggedIn, setLoggedIn ] = useState(false);
   
   const handleClick = () => {
        setLoggedIn(!loggedIn);
   } 

    return (
        <div className="wrapper">
            <div className="allForm">
                <form action="" method="Post" className="loginForm" >
                    <fieldset>
                    <div className="loginForm">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="loginForm">
                        <label htmlFor="email">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    </fieldset>
                </form>
                        <button className="logButton" onClick={handleClick}>
                            {
                                loggedIn
                                    ? 'Logout'
                                    : 'Login'
                            }
                        </button>
                        {
                            loggedIn ? <BookPage /> : null
                        }
            </div>
        </div>
    )
}

    

export default Login;