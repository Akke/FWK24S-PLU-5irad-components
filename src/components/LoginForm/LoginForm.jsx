import { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        
        console.log("Form has been submitted");
    }

    return (
        <div className={styles["login-form"]}>
            <h1>Login</h1>

            <form action="POST" onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}

export default LoginForm;