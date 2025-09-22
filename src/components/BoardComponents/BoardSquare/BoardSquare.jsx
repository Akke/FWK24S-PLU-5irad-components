import styles from "./BoardSquare.module.css";
import PlayerToken from "../PlayerToken/PlayerToken";
import { useSound } from 'react-sounds';
import customSound from '../../../assets/sounds/166186__drminky__menu-screen-mouse-over.wav';
import { useParams } from "react-router-dom";

const BoardSquare = ({ colNum, rowNum, tile = 0, useApi }) => {
    const { play } = useSound(customSound);
    const { fillTile } = useApi();
    const { gameId } = useParams();

    const handleClick = () => {
        console.log(gameId)

        fillTile(gameId, rowNum, colNum);
    }

    return (
        <div className={styles.boardSquareContainer} onMouseOver={() => play()} onClick={handleClick}>
            {tile !== 0 ?
                <div className={styles.coinContainer}>
                    <PlayerToken tile={tile} />
                </div>
                : <div className={styles.coinContainer}></div>
            }
        </div>
    )
}

export default BoardSquare;