import Username from './Username';

const meta = {
  component: Username,
};

export default meta;

export const Default = {
  args: {
    onBlur: (value) => console.log(value)
  }
};