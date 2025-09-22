import BoardSquare from "../BoardSquare/BoardSquare";
import styles from './BoardRow.module.css';

const BoardRow = ({ rowData, rowNum }) => {
    return (
        <div className={styles.boardRowContainer}>
            {rowData.map((tile, colNum) => (
                <BoardSquare key={colNum} colNum={colNum} rowNum={rowNum} tile={tile} />
            ))}
        </div>
    )
};

export default BoardRow;