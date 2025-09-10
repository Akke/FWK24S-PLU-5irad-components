import styles from "./BoardSquare.module.css"
import PlayerToken from "../../PlayerToken/PlayerToken"
import { useContext, useEffect, useState } from "react"
import { BoardContext } from "../../../contexts/BoardProvider"

export const BoardSquare = ({ tile = 0, rowNumber, columnNumber }) => {
    const { onDropToken, getToken, gridData } = useContext(BoardContext);
    const [token, setToken] = useState(0);

    const handleClick = () => {
        const num = Math.floor(Math.random() * 2) + 1; // för debug
        onDropToken(num, rowNumber, columnNumber);
        console.log("Koordinater för bricka är -> row: ", rowNumber, " column: ", columnNumber);
    }

    useEffect(() => {
        if (gridData.length) {
            const tkn = getToken(rowNumber, columnNumber);
            if (tkn) {
                setToken(tkn);
            }
        }
    }, [gridData]);

    return (
        <div className={styles.boardSquareContainer} onClick={handleClick}>
            {token !== 0 ?
                <div className={styles.coinContainer}>
                    <PlayerToken tile={token} />
                </div>
                : <div className={styles.coinContainer}></div>
            }
        </div>
    )
}