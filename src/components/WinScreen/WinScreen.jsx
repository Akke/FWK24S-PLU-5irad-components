import styles from './WinScreen.module.css'
// import {RestartButton} from 

const WinScreen = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button className={styles.button}>✖</button>
                <h1 className={styles.text}>You won!</h1>
                {/* <RestartButton/> */}
            </div>
        </div>
    )
}

export default WinScreen