import WinScreen from "./WinScreen";

const meta = {
    name: "components/EndScreen",
    component: WinScreen,
}

export default meta

export const Default = {
    args: { message: "You won!" }
}

export const Lose = {
    args: { message: "You lost" }
}

export const Draw = {
    args: { message: "It's a draw" }
}