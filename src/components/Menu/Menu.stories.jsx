import Menu from "./Menu";

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    router: { initialEntries: ["/"] }
  }
};

export default meta;

export const Default = {
  args: {}
};

export const LoginRoute = {
  parameters: {
    router: { initialEntries: ['/login'] },
  },
};