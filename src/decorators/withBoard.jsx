import { createContext } from "react";
import { BoardContext } from "../mock/BoardProvider";

const ContextProvider = createContext({});

const withBoard = (Story, context) => {
    const fakeBoard = {
        test: {}
    }

    return (
        <BoardContext value={fakeBoard}>
            <Story {...context} />
        </BoardContext>
    );
}

export default withBoard;