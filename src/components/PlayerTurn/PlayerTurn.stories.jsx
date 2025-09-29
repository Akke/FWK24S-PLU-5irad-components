import PlayerTurn from './PlayerTurn';

const meta = {
  title: 'Components/PlayerTurn',
  component: PlayerTurn,
};

export default meta;

export const PlayerX = {
  args: { player: 1 }
};

export const PlayerO = {
  args: { player: 2 }
};

export const InvalidPlayer = {
  args: { }
};