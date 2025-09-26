/** @type { import('@storybook/react-vite').Preview } */
import BoardProvider from '../src/contexts/BoardProvider';
import '../src/styles/StylesProvider.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  decorators: [
    // 1. Themes-addon
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    // 2. Din BoardProvider
    (Story) => (
      <BoardProvider>
        <Story />
      </BoardProvider>
    ),
  ]
}

export default preview;