import styles from './RegisterForm.module.css'

const RegisterForm = () => {
    const onSubmit = (e) => {
        e.preventDefault()

        console.log('registration from submitted')
    }
    return(
        <>
            <div className={styles['register-form']}>
                <h1>Register</h1>
                <form action='POST' onSubmit={onSubmit}>
                    <input type='text' name='username' placeholder='Username'/>
                    <input type='password' name='password' placeholder='Password'/>
                    <button type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}


export default RegisterForm