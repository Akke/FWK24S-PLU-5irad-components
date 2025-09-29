import { BoardCtx } from "@akkelw/5irad-board-ctx";

const withBoard = (Story, context) => {
    const fakeBoard = {};

    return (
        <BoardCtx.Provider value={fakeBoard}>
            <Story {...context} />
        </BoardCtx.Provider>
    );
}

export default withBoard;