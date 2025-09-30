import styles from './GameInfoBox.module.css';

const GameInfoBox = ({ isYourTurn, round }) => {
    if (typeof isYourTurn !== "boolean" || typeof round !== "number") {
        return <p>Invalid props!</p>
    }
    
    return (
        <div className={styles.gameInfoContainer}>
            <p className={styles.turnInfo}>{isYourTurn
                ? "Your turn"
                : "Other players turn"
            }</p>
            <p className={styles.roundInfo}>Round {round}</p>
        </div>
    )
}

export default GameInfoBox;