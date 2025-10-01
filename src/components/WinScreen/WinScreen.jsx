import styles from './WinScreen.module.css'
import RestartGameButton from '../RestartGameButton/RestartGameButton'

const WinScreen = ({ message, handleClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <button className={styles.button} onClick={handleClose}>✖</button>
                <div className={styles.content}>
                    <h1 className={styles.text}>{message}</h1>
                    <RestartGameButton className={styles.restartBtn} />
                </div>
            </div>
        </div>
    )
}

export default WinScreen