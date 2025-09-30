import styles from './GameInfoBox.module.css';

const GameInfoBox = ({ isYourTurn, round }) => {
    if (typeof isYourTurn !== "boolean" || !round) {
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