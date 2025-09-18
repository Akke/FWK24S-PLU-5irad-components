import BoardRow from "../BoardRow/BoardRow";
import styles from './Board.module.css';

const Board = ({ tiles }) => {
    return (
        <div className={styles.boardContainer}>
            {tiles.map((row, i) => (
                <BoardRow key={i} row={row} />
            ))}
        </div>
    )
};

export default Board;