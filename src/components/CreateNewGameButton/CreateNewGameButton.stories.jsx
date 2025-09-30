import withBoard from "../../decorators/withBoard";
import BoardProvider from "../../mock/BoardProvider";
import CreateNewGameButton from "./CreateNewGameButton";

const meta = {
    title: "components/CreateNewGameButton",
    component: CreateNewGameButton,
    decorators:[withBoard],
}

export default meta;

export const Default = {
    parameters: {},
    args: {   
        onRedirect: () => console.log("Successfully created game."),
    },
    render: (args) => {
        return (
            <BoardProvider>
                <CreateNewGameButton {...args} />
            </BoardProvider>
        )
    }
};