import BoardSquare from "../BoardSquare/BoardSquare";
import styles from './BoardRow.module.css';

const BoardRow = ({ row, column, useApi }) => {
    return (
        <div className={styles.boardRowContainer}>
            {row.map((tile, i) => (
                <BoardSquare key={i} colNum={column} rowNum={i} tile={tile} useApi={useApi} />
            ))}
        </div>
    )
};

export default BoardRow;