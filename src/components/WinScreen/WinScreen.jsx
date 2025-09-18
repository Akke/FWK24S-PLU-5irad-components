import styles from './WinScreen.module.css'
import RestartGameButton from '../RestartGameButton/RestartGameButton'

const WinScreen = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button className={styles.button}>✖</button>
                <div className={styles.content}>
                    <h1 className={styles.text}>You won!</h1>
                    <RestartGameButton className={styles.restartBtn} />
                </div>
            </div>
        </div>
    )
}

export default WinScreen