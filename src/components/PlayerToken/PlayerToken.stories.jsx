import PlayerToken from "./PlayerToken";

const meta = {
    title: "Board/PlayerToken",
    component: PlayerToken,
};

export default meta;

const TokenWrapper = ({ tile }) => (
    <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PlayerToken tile={tile} />
    </div>
);

export const Pink = {
    args: { tile: 1 },
    render: (args) => <TokenWrapper {...args} />,
};

export const Blue = {
    args: { tile: 2 },
    render: (args) => <TokenWrapper {...args} />,
};