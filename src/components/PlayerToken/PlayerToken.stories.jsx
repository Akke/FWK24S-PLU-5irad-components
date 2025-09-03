import PlayerToken from "./PlayerToken";

const meta = {
    title: "Components/PlayerToken",
    component: PlayerToken,
};

export default meta;

const TokenWrapper = ({ color }) => (
    <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayerToken color={color} />
    </div>
);

export const Default = {
    args: {
        color: 'black',
    },
    render: (args) => <TokenWrapper {...args} />,
};

export const Pink = {
    args: { color: 'pink' },
    render: (args) => <TokenWrapper {...args} />,
};

export const Blue = {
    args: { color: 'lightBlue' },
    render: (args) => <TokenWrapper {...args} />,
};