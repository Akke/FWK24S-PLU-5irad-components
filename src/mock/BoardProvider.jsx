import { useState } from "react";
import { BoardCtx } from "../providers/BoardProvider/BoardCtx";

const BoardProvider = ({ children }) => {
    const [tiles, setTiles] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    
    const [gameover, setGameover] = useState(false);

    const setTile = async (gameId, row, column, token) => {
        if(getTile(row, column) != null || gameover) return;

        setTiles(prev => {
            const next = prev.map(r => r);     // shallow copy outer array
            next[row] = [...prev[row]];        // copy the row you’ll change
            next[row][column] = token;         // mutate the copied row
            return next;                       // return new top-level array
        });
    }

    const getTile = (row, column) => {
        const entry = tiles.find(item => {
            if(item[row]) {
                return item[row][column];
            }
        });

        return entry ? entry[row][column] : null;
    }

    const createBoard = async () => {
        setTiles([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]);

        const gameId = 1234;

        return gameId;
    }

    const validateBoard = async (gameId) => {
        return gameId != null;
    }

    return (
        <BoardCtx.Provider value={{ setTile, getTile, tiles, createBoard, validateBoard, setTiles }}>
            {children}
        </BoardCtx.Provider>
    );
}

export default BoardProvider;

