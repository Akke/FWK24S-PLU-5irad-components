import { BoardSquare } from "../BoardSquare/BoardSquare";
import styles from './BoardRow.module.css';

export const BoardRow = ({ row, rowNumber }) => {
    return (
        <div className={styles.boardRowContainer}>
            {row.map((tile, i) => (
                <BoardSquare key={i} tile={tile} columnNumber={i} rowNumber={rowNumber} />
            ))}
        </div>
    )
};