import { useState } from "react";
import BookPage from "./BookPage";

const Login = () => {
   
   const [ loggedIn, setLoggedIn ] = useState(false);
   
   const handleClick = () => {
        setLoggedIn(!loggedIn);
   } 

    return (
        <div> 
            <button onClick={handleClick}>
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
    )
}

    

export default Login;