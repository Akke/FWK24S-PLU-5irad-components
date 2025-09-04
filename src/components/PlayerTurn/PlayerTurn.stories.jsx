import PlayerTurn from './PlayerTurn';

const meta = {
  title: 'Components/PlayerTurn',
  component: PlayerTurn,
};

export default meta;

export const Default = {
  args: {}
};

export const Opponent = {
  args: { username: 'Player O', isOpponent: true }
};