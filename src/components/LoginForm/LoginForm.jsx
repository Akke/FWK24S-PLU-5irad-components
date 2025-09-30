import styles from "./LoginForm.module.css";
import Username from "./Username";
import Password from "./Password";
import Button from "./Button";

const LoginForm = ({ onSubmit, setUsername, setPassword }) => {
    return (
        <div className={styles["login-form"]}>
            <div className={styles.descr}>
                <h1>Welcome to Gomoku Online</h1>
                <p>Challenge your friends or test your skills against others in the classic five-in-a-row strategy game.</p>
                <p>Log in to create games, place your tokens, and track your progress.</p>
            </div>
            <form action="POST" onSubmit={onSubmit}>
                <Username onBlur={setUsername} />
                <Password onChange={setPassword} />
                <Button value="Sign in" />
                <button
                    className={styles.register}
                    type="button"
                    onClick={() => navigate("/register")}
                >
                    Register an account
                </button>
            </form>
        </div>
    );
}

export default LoginForm;