import BoardRow from './BoardRow';
import BoardProvider from '../../../mock/BoardProvider';

const meta = {
  title: 'Board/BoardRow',
  component: BoardRow,
  decorators: [
    (Story) => (
      <BoardProvider>
        <Story />
      </BoardProvider>
    ),
  ],
};

export default meta;

const RowWrapper = ({ rowData }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex' }}>
    <BoardRow rowData={rowData} rowNum={1} />
  </div>
)

export const Default = {
  args: { rowData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  render: (args) => <RowWrapper {...args} />
};

export const Mix = {
  args: { rowData: [0, 1, 2, 0, 0, 2, 0, 1, 0, 0] },
  render: (args) => <RowWrapper {...args} />
};

export const PinkOnly = {
  args: { rowData: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
  render: (args) => <RowWrapper {...args} />
};

export const BlueOnly = {
  args: { rowData: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] },
  render: (args) => <RowWrapper {...args} />
};