import StartNewGame from "./StartNewGame";
import BoardProvider from "../../mock/BoardProvider";
import withBoard from "../../decorators/withBoard";

const meta = {
    title: "components/StartNewGame",
    component: StartNewGame,
    decorators:[withBoard],
}

export default meta;

export const Default = {
    parameters: {},
    args: {   
        onRedirect: () => console.log("Successful redirect."),
    },
    render: (args) => {
        return (
            <BoardProvider>
                <StartNewGame {...args} />
            </BoardProvider>
        )
    }
};