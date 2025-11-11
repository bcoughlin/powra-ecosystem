# Powra Gaming Wiki - Project Planning

**Date**: November 11, 2025  
**Project**: Static Gaming Wiki Site  
**Target Domain**: wiki.powra.ai

## Project Overview

The Powra Gaming Wiki is a static website designed to provide comprehensive gaming content across multiple games. The site will serve as a community-driven knowledge base for game guides, strategies, character information, and more.

## Requirements & Goals

### Core Requirements

1. **Multi-Game Support**: The wiki must support multiple game sections with independent navigation and content organization
2. **Static Site Generation**: Content should be statically generated for optimal performance and simple hosting
3. **User-Friendly Content Management**: Content creators should be able to write in Markdown
4. **Search Functionality**: Built-in search to help users find information quickly
5. **Mobile Responsive**: Accessible on all devices
6. **Community Contributions**: Enable users to suggest edits and improvements

### Future Enhancements (Phase 2)

1. **Authentication System**: Integration with the existing `powra-auth` service
2. **User-Specific Features**:
   - Bookmarks and favorites
   - Personal notes on pages
   - Reading history
   - Contribution tracking
3. **Discussion/Comments**: Community discussion on wiki pages
4. **Content Versioning**: Track changes across game patches/updates

## Technology Selection

### VitePress (Selected)

**GitHub Stars**: 16.3k  
**Maintained By**: Vue.js core team (Evan You)

#### Rationale
- Modern, fast static site generator built on Vite
- Excellent documentation-focused default theme
- Built-in local search (no external services needed)
- Easy sidebar configuration for multiple sections
- Clean, content-focused design (less "code docs" feel than alternatives)
- Active maintenance and strong community
- Vue 3 based - can add dynamic features later if needed

#### Alternatives Considered
1. **Docusaurus** (56k stars) - React-based, more "code docs" oriented
2. **Nextra** (11k stars) - Next.js based, good but smaller community
3. **MkDocs Material** (20k stars) - Python-based, simple but less flexible for future enhancements

## Architecture

### Code Repository Strategy

To support community contributions while keeping the site code private:

1. **Private Repository**: `powra-ecosystem/powra-wiki` (this repo)
   - Contains VitePress configuration
   - Build scripts and deployment configuration
   - Site theme and custom components

2. **Public Content Repository** (future): `bcoughlin/powra-wiki-content`
   - Contains only markdown content files
   - Users submit pull requests here
   - Can be synced to private repo via submodule or CI/CD

### Project Structure

```
powra-wiki/
├── docs/                       # Content root
│   ├── .vitepress/
│   │   └── config.mts         # Site configuration
│   ├── public/                 # Static assets (images, etc.)
│   ├── index.md                # Homepage
│   ├── game-alpha/             # Game-specific sections
│   ├── game-beta/
│   └── game-gamma/
├── package.json
├── README.md
└── PLANNING.md (this file)
```

### Game Section Organization

Each game follows a consistent structure:

```
game-name/
├── index.md                    # Game overview
├── getting-started.md          # New player guide
├── guides/
│   ├── beginner.md
│   └── advanced.md
├── characters/                 # (if applicable)
├── items/                      # (if applicable)
└── [game-specific sections]
```

## Initial Games

### Game Alpha
- **Content Type**: Character-based game
- **Sections**: Characters, Items, Guides, Lore
- **Target Audience**: Competitive and casual players

### Game Beta
- **Content Type**: Tactical/shooter game
- **Sections**: Maps, Weapons, Strategies
- **Target Audience**: Competitive players

### Game Gamma
- **Content Type**: Building/survival game
- **Sections**: Building, Crafting, Resources
- **Target Audience**: Creative and survival players

## Key Features Implemented

### 1. Navigation
- Top navigation with dropdown for game selection
- Per-game sidebar navigation
- Breadcrumb navigation (built into VitePress theme)

### 2. Search
- Local search powered by VitePress (no external service needed)
- Searches across all content
- Keyboard shortcut support

### 3. Content Features
- Markdown with frontmatter
- Code syntax highlighting
- Custom containers (tips, warnings, info boxes)
- Tables and lists
- Image support

### 4. Edit Suggestions
- "Suggest an edit" link on every page
- Pre-configured to point to future public content repository
- Opens GitHub in edit mode for easy contributions

### 5. Theme & Design
- Clean, readable default theme
- Responsive design (mobile-first)
- Dark/light mode toggle
- Social links (GitHub)
- Custom footer

## Deployment Strategy

### Hosting Options

**Recommended**: Static hosting platforms
- Vercel (recommended for simplicity)
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

**Requirements**:
- Support for custom domain (wiki.powra.ai)
- HTTPS/SSL
- Automatic deployments from git pushes
- Preview deployments for PRs (optional but nice)

### Build Process

```bash
npm run docs:build  # Generates static files to docs/.vitepress/dist/
```

### Continuous Deployment

Suggested workflow:
1. Push to main branch
2. CI/CD runs build command
3. Deploy to hosting platform
4. Automatic cache invalidation

## Development Workflow

### Local Development

```bash
cd powra-wiki
npm install
npm run docs:dev  # Starts at http://localhost:5173
```

### Adding New Content

1. Create/edit Markdown files in appropriate game section
2. Update `config.mts` if adding new sidebar items
3. Test locally
4. Commit and push

### Adding New Game

1. Create new directory in `docs/`
2. Add `index.md` and initial pages
3. Update `docs/.vitepress/config.mts`:
   - Add navigation item in `nav` array
   - Add sidebar configuration in `sidebar` object
4. Test navigation and search

## Content Guidelines

### Writing Style
- Clear, concise language
- Assume reader has basic game knowledge (but not expert)
- Use screenshots/images where helpful
- Keep paragraphs short for readability
- Use headings to break up content

### Formatting
- Use proper heading hierarchy (h1 → h2 → h3)
- Utilize tables for stat comparisons
- Use tip/warning boxes for important information
- Include code blocks for game commands/configs

### SEO Considerations
- Descriptive page titles
- Meta descriptions (via frontmatter)
- Semantic HTML headings
- Image alt text

## Maintenance Plan

### Regular Updates
- Game patch notes and meta changes
- New content additions
- Broken link checks
- Image optimization

### Community Management
- Review pull requests from public content repo
- Respond to content suggestions
- Moderate discussions (future phase)

### Technical Maintenance
- Keep VitePress updated
- Monitor build times
- Update dependencies
- Performance monitoring

## Success Metrics

### Phase 1 (Static Site)
- Site performance (Core Web Vitals)
- Number of pages
- Search usage
- Mobile vs desktop traffic
- User engagement (time on site, pages per session)

### Phase 2 (With Auth)
- User registrations
- Community contributions
- User-generated bookmarks/notes
- Discussion participation

## Timeline

### Initial Launch (Current Phase)
- ✅ VitePress setup and configuration
- ✅ Sample content structure for 3 games
- ✅ Basic navigation and search
- 🔲 Content creation for initial games
- 🔲 Deployment to wiki.powra.ai

### Phase 2 (Future)
- Authentication integration
- User features (bookmarks, notes)
- Public content repository setup
- Community contribution workflow
- Discussion/comment system

## Notes & Decisions

### Why Not Open Source Everything?
The site code contains configuration, potential custom themes, and deployment secrets that should remain private. However, the actual wiki content can be open-sourced to enable community contributions while maintaining control over the presentation and infrastructure.

### Why Static Over Dynamic?
1. **Performance**: Static sites are incredibly fast
2. **Simplicity**: No server maintenance, databases, or backend complexity
3. **Scalability**: Can handle massive traffic with simple CDN
4. **Cost**: Hosting is cheap or free
5. **Security**: No backend = smaller attack surface
6. **Future Flexibility**: Can add dynamic features later via API integration

### Authentication Strategy (Future)
The static site can integrate with `powra-auth` service via:
- Client-side JavaScript for auth state
- API calls to backend for user-specific data
- Progressive enhancement (static content works without auth)
- Separation of concerns (static content + dynamic features)

## References

- VitePress Documentation: https://vitepress.dev
- VitePress GitHub: https://github.com/vuejs/vitepress
- Markdown Guide: https://www.markdownguide.org/
- Vue.js Documentation: https://vuejs.org/

## Contact & Ownership

**Owner**: bcoughlin  
**Repository**: powra-ecosystem  
**Wiki Subdirectory**: powra-wiki  
**Target URL**: https://wiki.powra.ai

---

*This document will be updated as the project evolves.*
