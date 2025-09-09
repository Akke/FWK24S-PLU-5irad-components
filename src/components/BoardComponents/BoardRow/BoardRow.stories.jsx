import { BoardRow } from './BoardRow';

const meta = {
  title: 'Board/BoardRow',
  component: BoardRow,
};

export default meta;

const RowWrapper = ({ row }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex' }}>
    <BoardRow row={row} />
  </div>
)

export const Default = {
  args: { row: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  render: (args) => <RowWrapper {...args} />
};

export const Mix = {
  args: { row: [0, 1, 2, 0, 0, 2, 0, 1, 0, 0] },
  render: (args) => <RowWrapper {...args} />
};

export const PinkOnly = {
  args: { row: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  render: (args) => <RowWrapper {...args} />
};

export const BlueOnly = {
  args: { row: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
  render: (args) => <RowWrapper {...args} />
};