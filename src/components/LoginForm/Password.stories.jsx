import Password from './Password';

const meta = {
  component: Password,
};

export default meta;

export const Default = {
  args: {
    onChange: (value) => console.log(value)
  }
};