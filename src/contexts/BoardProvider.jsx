import { createContext, useEffect, useState } from "react";

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
    const [gridData, setGridData] = useState([]);

    const onDropToken = (tile, row, column) => {
        console.log("Tile: ", tile, "Row: ", row, " Column: ", column);

        if(getToken(row, column) != null) return;
        
        setGridData(prev => [...prev, {
            [row]: {
                [column]: tile
            }
        }]);
    }

    const getToken = (row, column) => {
        const entry = gridData.find(item => {
            if(item[row]) {
                return item[row][column];
            }
        });

        return entry ? entry[row][column] : null;
    }

    return (
        <BoardContext.Provider value={{ onDropToken, getToken, gridData }}>
            {children}
        </BoardContext.Provider>
    );
}

export default BoardProvider;