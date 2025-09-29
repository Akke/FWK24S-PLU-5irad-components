import GameInfoBox from "./GameInfoBox";

const meta = {
    name: "component/GameInfoBox",
    component: GameInfoBox
}

export default meta;

export const Default = {
    args: {
        playersTurn: true,
        round: 1
    }
}

export const OtherPlayersTurn = {
    args: {
        playersTurn: false,
        round: 2
    }
}

export const InvalidProps = {
    args: {
    }
}