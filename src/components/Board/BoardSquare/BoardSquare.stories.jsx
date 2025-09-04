import { BoardSquare } from './BoardSquare';

const meta = {
  title: 'Board/BoardSquare',
  component: BoardSquare,
};

export default meta;

export const Default = {
  args: { tile: 0 }
};

export const Pink = {
  args: { tile: 1 }
};

export const Blue = {
  args: { tile: 2 }
};