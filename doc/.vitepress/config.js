import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mty UI',
  description: 'A Material You UI and components library for Vue3.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/README' },
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Checkbox', link: '/Checkbox' },
          { text: 'Chip', link: '/Chip' },
          { text: 'CommonButton', link: '/CommonButton' },
          { text: 'FAB', link: '/FAB' },
          { text: 'IconButton', link: '/IconButton' },
          { text: 'SegmentedButton', link: '/SegmentedButton' },
          { text: 'TextField', link: '/TextField' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/WitchElaina/mty-ui',
      },
    ],
  },
  base: '/mty-ui/',
});
