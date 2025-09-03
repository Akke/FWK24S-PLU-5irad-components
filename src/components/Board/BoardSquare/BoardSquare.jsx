import styles from "./BoardSquare.module.css"
import Coin from "../../Coin/Coin"

export const BoardSquare = () => {
    return (
        <div className={styles.boardSquareContainer}>
            <div className={styles.coinContainer}>
                <Coin color={'red'} />
            </div>
        </div>
    )
}