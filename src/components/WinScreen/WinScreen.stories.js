import WinScreen from "./WinScreen";

const meta = {
    name: "components/EndScreen",
    component: WinScreen,
}

export default meta

export const Default = {
    args: { message: "You won!", handleClose: () => console.log("closing dialog") }
}

export const Lose = {
    args: { message: "You lost", handleClose: () => console.log("closing dialog") }
}

export const Draw = {
    args: { message: "It's a draw", handleClose: () => console.log("closing dialog") }
}