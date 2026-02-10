# Contributing to AI Tools Aggregator

Thank you for your interest in contributing! 🎉

## Ways to Contribute

### 1. Submit a Tool
- Use the [Submit Tool](https://ai-tools-aggregator.vercel.app/submit) form
- Or create a PR adding your tool to `data/tools.json`

### 2. Report Bugs
- Use [GitHub Issues](https://github.com/ben-saito/ai-tools-aggregator/issues)
- Use the Bug Report template
- Include screenshots and reproduction steps

### 3. Suggest Features
- Use [GitHub Issues](https://github.com/ben-saito/ai-tools-aggregator/issues)
- Use the Feature Request template
- Explain the use case and benefit

### 4. Improve Documentation
- Fix typos
- Add examples
- Clarify instructions
- Translate content

### 5. Contribute Code
- See [Development Guide](#development-guide) below

---

## Development Guide

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/ben-saito/ai-tools-aggregator.git
cd ai-tools-aggregator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
├── pages/          # File-based routing
├── lib/            # Utilities and data handling
└── styles/         # Global styles

data/
├── tools.json      # Tools database
└── schema.json     # Data schema
```

### Adding a Tool

Edit `data/tools.json`:

```json
{
  "id": "unique-id",
  "name": "Tool Name",
  "url": "https://tool.com",
  "category": "Text Generation",
  "description": "Brief description (max 150 chars)",
  "pricing": "freemium",
  "tags": ["tag1", "tag2"],
  "featured": false,
  "premium": false,
  "logoUrl": "https://tool.com/logo.png",
  "addedAt": "2026-02-10"
}
```

### Code Style

- Use TypeScript for type safety
- Follow Prettier formatting
- Write semantic HTML
- Use Tailwind CSS utility classes
- Keep components small and focused

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```
feat: add filter by pricing model

- Add dropdown filter in header
- Filter tools by free/freemium/paid
- Update URL params for sharing
```

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Make your changes
4. Test locally (`npm run build`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to your fork (`git push origin feat/amazing-feature`)
7. Open a Pull Request

### PR Guidelines

- Keep PRs focused and small
- Update documentation if needed
- Add screenshots for UI changes
- Test on multiple devices/browsers
- Link related issues

---

## Community

- **Discord**: [Join our community](#) (coming soon)
- **Twitter**: [@aitools_agg](#) (coming soon)
- **Email**: hello@aitools.directory

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Questions?

Feel free to open an issue or reach out to the maintainers!

Thank you for making AI Tools Aggregator better! 🙏
