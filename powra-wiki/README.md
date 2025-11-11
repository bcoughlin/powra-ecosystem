# Powra Gaming Wiki

A static wiki site built with VitePress for gaming content across multiple games.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

The development server will run at `http://localhost:5173`

## Project Structure

```
powra-wiki/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          # VitePress configuration
│   ├── public/                  # Static assets
│   ├── index.md                 # Homepage
│   ├── game-alpha/              # Game Alpha wiki section
│   ├── game-beta/               # Game Beta wiki section
│   └── game-gamma/              # Game Gamma wiki section
├── package.json
└── README.md
```

## Adding New Games

To add a new game wiki:

1. Create a new directory in `docs/` (e.g., `docs/game-delta/`)
2. Add an `index.md` file in the new directory
3. Update `docs/.vitepress/config.mts`:
   - Add navigation item in `nav`
   - Add sidebar configuration in `sidebar`

## Content Organization

Each game section follows this structure:

```
game-name/
├── index.md              # Game overview
├── getting-started.md    # New player guide
├── guides/               # Strategy guides
│   ├── beginner.md
│   └── advanced.md
├── characters/           # Character information (if applicable)
├── items/                # Items and equipment (if applicable)
└── [other sections]
```

## Deployment

This site is designed to be deployed to `wiki.powra.ai`.

### Build Output

The production build outputs to `docs/.vitepress/dist/`

### Hosting Options

- **Static Hosting**: Vercel, Netlify, Cloudflare Pages
- **Traditional**: Nginx, Apache
- **CDN**: Any CDN that supports static files

## User Contributions

Future enhancement: Users can suggest edits via a public content repository. The "Edit this page" links are pre-configured to point to `bcoughlin/powra-wiki-content` (update this when the repo is created).

## Features

- 📝 Markdown-based content
- 🔍 Built-in local search
- 📱 Mobile responsive
- ⚡ Fast (powered by Vite)
- 🎨 Clean, customizable theme
- 🌐 Multiple game sections
- ✏️ Edit suggestions via GitHub

## Technology Stack

- **VitePress**: Static site generator
- **Vue 3**: Framework powering VitePress
- **Vite**: Build tool and dev server

## Future Enhancements

- User authentication (integration with powra-auth service)
- User-specific features (bookmarks, notes, etc.)
- Content versioning for game patches
- Community discussion integration
- Advanced search with filters
