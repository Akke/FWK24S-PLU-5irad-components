import styles from './WinScreen.module.css'
import RestartGameButton from '../RestartGameButton/RestartGameButton'

const WinScreen = ({ message }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button className={styles.button}>✖</button>
                <div className={styles.content}>
                    <h1 className={styles.text}>{message}</h1>
                    <RestartGameButton className={styles.restartBtn} />
                </div>
            </div>
        </div>
    )
}

export default WinScreen