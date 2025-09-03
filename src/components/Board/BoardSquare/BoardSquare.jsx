import styles from "./BoardSquare.module.css"
import PlayerToken from "../../PlayerToken/PlayerToken"

export const BoardSquare = () => {
    return (
        <div className={styles.boardSquareContainer}>
            <div className={styles.coinContainer}>
                <PlayerToken color={'red'} />
            </div>
        </div>
    )
}