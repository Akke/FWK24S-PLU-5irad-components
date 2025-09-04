import styles from "./PlayerTurn.module.css";

const PlayerTurn = ({ username = "Player X", isOpponent = false }) => {

    return (
        <div className={`${styles.playerTurn} ${isOpponent ? styles.opponent : ""}`}>
            <div className={styles.playerName}>{username}</div>
            <div className={styles.description}>Make your move</div>
        </div>
    );
}

export default PlayerTurn;