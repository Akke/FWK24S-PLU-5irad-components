import styles from './RegisterForm.module.css'

const RegisterForm = ({ onSubmit, setUsername, setPassword }) => {
    return (
        <>
            <div className={styles['register-form']}>
                <form onSubmit={onSubmit}>
                    <input type='text' name='username' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}


export default RegisterForm