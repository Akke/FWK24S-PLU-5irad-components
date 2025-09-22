import BoardRow from "../BoardRow/BoardRow";
import styles from './Board.module.css';

const Board = ({ tiles, useApi }) => {
    return (
        <div className={styles.boardContainer}>
            {tiles.map((row, i) => (
                <BoardRow key={i} column={i} row={row} useApi={useApi} />
            ))}
        </div>
    )
};

export default Board;