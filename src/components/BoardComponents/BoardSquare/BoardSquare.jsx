import styles from "./BoardSquare.module.css";
import PlayerToken from "../PlayerToken/PlayerToken";
import { useSound } from 'react-sounds';
import customSound from '../../../assets/sounds/166186__drminky__menu-screen-mouse-over.wav';

export const BoardSquare = ({ tile = 0 }) => {
    const { play } = useSound(customSound);

    return (
        <div className={styles.boardSquareContainer} onMouseOver={() => play()}>
            {tile !== 0 ?
                <div className={styles.coinContainer}>
                    <PlayerToken tile={tile} />
                </div>
                : <div className={styles.coinContainer}></div>
            }
        </div>
    )
}