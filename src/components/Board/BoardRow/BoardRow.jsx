import { BoardSquare } from "../BoardSquare/BoardSquare";
import styles from './BoardRow.module.css';

export const BoardRow = () => {
    return (
        <div className={styles.boardRowContainer}>
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
            <BoardSquare />
        </div>
    )
};