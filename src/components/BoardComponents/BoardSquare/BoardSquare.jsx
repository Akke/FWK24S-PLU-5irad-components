import styles from "./BoardSquare.module.css";
import PlayerToken from "../PlayerToken/PlayerToken";
import { useSound } from 'react-sounds';
import customSound from '../../../assets/sounds/166186__drminky__menu-screen-mouse-over.wav';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BoardContext } from "../../../../../FWK24S-PLU-fem-i-rad-frontend/src/providers/BoardProvider";

const BoardSquare = ({ colNum, rowNum, tile = 0 }) => {
    const { play } = useSound(customSound);
    const { setTile } = useContext(BoardContext);
    const { gameId } = useParams();

    const handleClick = () => {
        setTile(gameId, rowNum, colNum, 1);
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