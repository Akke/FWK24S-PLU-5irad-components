import styles from "./PlayerTurn.module.css";

const PlayerTurn = ({ player }) => {
    if (player !== 1 && player !== 2) {
        return <p>This is a Guard, invalid player prop</p>
    }

    return (
        <div className={`${styles.playerTurn} ${player === 2 ? styles.playerCircle : ""}`}>
            <div className={styles.playerName}>{`Player ${player === 1 ? "X" : "O"}`}</div>
            <div className={styles.description}>Make your move</div>
        </div>
    );
}

export default PlayerTurn;