import "./LoginForm.css";

const LoginForm = () => {
    return (
        <form action="POST" className="login-form">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;