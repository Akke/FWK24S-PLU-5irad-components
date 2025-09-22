import BoardRow from "../BoardRow/BoardRow";
import styles from './Board.module.css';

const Board = ({ tiles }) => {
    return (
        <div className={styles.boardContainer}>
            {tiles.map((rowData, i) => (
                <BoardRow key={i} rowNum={i} rowData={rowData} />
            ))}
        </div>
    )
};

export default Board;