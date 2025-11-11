import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Powra Gaming Wiki",
  description: "Community-driven gaming wikis for multiple games",
  base: '/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Games',
        items: [
          { text: 'Game Alpha', link: '/game-alpha/' },
          { text: 'Game Beta', link: '/game-beta/' },
          { text: 'Game Gamma', link: '/game-gamma/' }
        ]
      }
    ],

    sidebar: {
      '/game-alpha/': [
        {
          text: 'Game Alpha',
          items: [
            { text: 'Introduction', link: '/game-alpha/' },
            { text: 'Getting Started', link: '/game-alpha/getting-started' },
            {
              text: 'Guides',
              items: [
                { text: 'Beginner Guide', link: '/game-alpha/guides/beginner' },
                { text: 'Advanced Strategies', link: '/game-alpha/guides/advanced' }
              ]
            },
            {
              text: 'Characters',
              items: [
                { text: 'Character List', link: '/game-alpha/characters/' },
                { text: 'Tier List', link: '/game-alpha/characters/tier-list' }
              ]
            },
            { text: 'Items & Equipment', link: '/game-alpha/items' },
            { text: 'Lore', link: '/game-alpha/lore' }
          ]
        }
      ],
      '/game-beta/': [
        {
          text: 'Game Beta',
          items: [
            { text: 'Introduction', link: '/game-beta/' },
            { text: 'Getting Started', link: '/game-beta/getting-started' },
            {
              text: 'Guides',
              items: [
                { text: 'Beginner Guide', link: '/game-beta/guides/beginner' },
                { text: 'Advanced Strategies', link: '/game-beta/guides/advanced' }
              ]
            },
            { text: 'Maps', link: '/game-beta/maps' },
            { text: 'Weapons', link: '/game-beta/weapons' }
          ]
        }
      ],
      '/game-gamma/': [
        {
          text: 'Game Gamma',
          items: [
            { text: 'Introduction', link: '/game-gamma/' },
            { text: 'Getting Started', link: '/game-gamma/getting-started' },
            {
              text: 'Guides',
              items: [
                { text: 'Beginner Guide', link: '/game-gamma/guides/beginner' },
                { text: 'Resource Management', link: '/game-gamma/guides/resources' }
              ]
            },
            { text: 'Building', link: '/game-gamma/building' },
            { text: 'Crafting', link: '/game-gamma/crafting' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bcoughlin/powra-wiki-content' }
    ],

    editLink: {
      pattern: 'https://github.com/bcoughlin/powra-wiki-content/edit/main/docs/:path',
      text: 'Suggest an edit to this page'
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Community-driven content. Suggest edits via GitHub.',
      copyright: 'Copyright © 2025 Powra Gaming'
    }
  }
})
