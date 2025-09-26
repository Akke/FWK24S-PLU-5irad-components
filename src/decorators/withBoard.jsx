import { BoardCtx } from "../providers/BoardProvider/BoardCtx";

const withBoard = (Story, context) => {
    const fakeBoard = {};

    return (
        <BoardCtx.Provider value={fakeBoard}>
            <Story {...context} />
        </BoardCtx.Provider>
    );
}

export default withBoard;