import styles from "./BoardSquare.module.css"
import PlayerToken from "../../PlayerToken/PlayerToken"

export const BoardSquare = ({ tile = 0 }) => {
    return (
        <div className={styles.boardSquareContainer}>
            {tile !== 0 ?
                <div className={styles.coinContainer}>
                    <PlayerToken tile={tile} />
                </div>
                : <div className={styles.coinContainer}></div>
            }
        </div>
    )
}