import Footer from './Footer';
import { MemoryRouter } from "react-router-dom";

const meta = {
  name: 'components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default = {
  args: {}
};