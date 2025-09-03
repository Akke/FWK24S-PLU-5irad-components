import { BoardRow } from "../BoardRow/BoardRow";
import styles from './Board.module.css';

export const Board = () => {
    console.log("Loaded")
    return (
        <div className={styles.boardContainer}>
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
            <BoardRow />
        </div>
    )
};
