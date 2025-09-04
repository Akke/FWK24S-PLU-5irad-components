import { BoardSquare } from './BoardSquare';

const meta = {
  title: 'Board/BoardSquare',
  component: BoardSquare,
};

export default meta;

export const Default = {
  args: { tile: 0 }
};

export const Cross = {
  args: { tile: 1 }
};

export const Circle = {
  args: { tile: 2 }
};