import styles from "./LoginForm.module.css";
import Username from "./Username";
import Password from "./Password";
import Button from "./Button";

const LoginForm = ({ onSubmit, setUsername, setPassword }) => {
    return (
        <div className={styles["login-form"]}>
            <h1>Login</h1>

            <form action="POST" onSubmit={onSubmit}>
                <Username onBlur={setUsername} />
                <Password onChange={setPassword} />
                <Button value="Sign in" />
            </form>
        </div>
    );
}

export default LoginForm;