import GameInfoBox from "./GameInfoBox";

const meta = {
    name: "component/GameInfoBox",
    component: GameInfoBox
}

export default meta;

export const Default = {
    args: {
        isYourTurn: true,
        round: 1
    }
}

export const OtherPlayersTurn = {
    args: {
        isYourTurn: false,
        round: 2
    }
}

export const InvalidProps = {
    args: {
    }
}