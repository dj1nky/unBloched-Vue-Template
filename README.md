# unBloched Vue Template

A modern Vue 3 + Nuxt 3 template with comprehensive development tooling, automated formatting, and Git hooks for code quality enforcement.

## Features & Stack

- **Framework & Core**
  - [Vue 3](https://vuejs.org/) (with [vue-router](https://router.vuejs.org/))
  - [Nuxt 3](https://nuxt.com/) (App framework)
  - [Vite](https://vitejs.dev/) (Build tool)
  - [TypeScript](https://www.typescriptlang.org/)
- **State Management**
  - [Pinia](https://pinia.vuejs.org/) (with [@pinia/nuxt](https://github.com/vuejs/pinia/tree/v2/packages/nuxt))
- **CSS & PostCSS**
  - [Tailwind CSS v4](https://tailwindcss.com/) (with [@nuxtjs/tailwindcss](https://tailwindcss.com/docs/guides/nuxtjs) and [@tailwindcss/vite](https://github.com/nuxt-modules/tailwindcss))
  - [Sass](https://sass-lang.com/) (SCSS support)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [PostCSS](https://postcss.org/)
- **Image Optimization**
  - [@nuxt/image](https://image.nuxt.com/)
- **Code Quality & Formatting**
  - [ESLint](https://eslint.org/) with Vue 3, TypeScript, and import ordering rules
  - [Prettier](https://prettier.io/) with Vue support and import sorting
  - [Husky](https://typicode.github.io/husky/) for Git hooks
  - [lint-staged](https://github.com/okonet/lint-staged) for pre-commit linting
- **Import Management**
  - [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) - Automatic import sorting
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) - Import validation and ordering

## Development Setup

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Code Quality & Formatting

This template includes comprehensive code quality tools that automatically enforce consistent code style and catch errors.

### Format-on-Save Configuration

The template is configured for automatic formatting on save in VS Code:

- **Vue Component Attributes**: Preserves manual line breaks when you format props and classes
- **Import Ordering**: Automatically sorts imports in this order:
  1. Vue core (`vue`, `vue-router`)
  2. Nuxt/Vue ecosystem (`#components`, `#app`, `#imports`)
  3. Nuxt framework (`nuxt`, `@nuxt/*`)
  4. Project imports (`@/*`, `~/*`)
  5. Relative imports (current directory `./` before parent `../`)
- **Alphabetical Sorting**: Within each group, imports are sorted alphabetically

### Available Scripts

```bash
# Format all files with Prettier
npm run format

# Run ESLint with auto-fix
npm run lint

# Check ESLint errors without fixing (used by Git hooks)
npm run lint:check
```

### Import Ordering Rules

The project enforces a specific import order that keeps Vue composition API imports at the top:

```javascript
// ✅ Correct order
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { NuxtImg } from "#components";
import unButton from "@/components/unButton/unButton.vue";
import { useStore } from "~/stores/example.js";
import LocalComponent from "./LocalComponent.vue";
import ParentComponent from "../ParentComponent.vue";
```

## Git Hooks & Quality Gates

### Pre-commit Hook

Automatically runs on every commit:

- ✅ Runs ESLint with auto-fix on staged files
- ✅ Formats code with Prettier
- ❌ **Blocks commit** if there are unfixable ESLint errors

### Pre-push Hook

Runs before every push to remote:

- 🔍 Checks entire codebase for ESLint errors
- ❌ **Blocks push** if any ESLint errors exist
- 🖱️ Provides clickable file links in terminal to jump to errors

### Bypassing Hooks (Not Recommended)

```bash
# Skip pre-commit hook
git commit --no-verify -m "message"

# Skip pre-push hook
git push --no-verify
```

## VS Code Integration

The template includes VS Code settings for optimal development experience:

### Extensions Recommended

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Settings Configured

- Format on save enabled
- ESLint auto-fix on save
- Vue file formatting with Prettier
- Terminal file links enabled for clickable error navigation

## Troubleshooting

### Import Order Conflicts

If you see red squiggly lines about import order:

1. Run `npm run lint` to auto-fix
2. If issues persist, manually reorder imports according to the rules above
3. Save the file to trigger format-on-save

### Git Hook Issues

If commits/pushes are blocked:

1. Check the terminal output for specific errors
2. Click on file paths in terminal to navigate directly to errors
3. Run `npm run lint` to auto-fix issues
4. Fix remaining errors manually

### VS Code Not Formatting

1. Ensure Prettier extension is installed
2. Check that `.vscode/settings.json` is present
3. Verify `"editor.formatOnSave": true` is set
4. Restart VS Code if needed

## Package Management

### Outdated Packages

Some dependencies may become out of date over time. To check for outdated packages:

```bash
npm outdated
```

To update all packages to their latest versions:

```bash
npm update
```

> **⚠️ Warning:** Review breaking changes before upgrading major versions, especially for Vue, Nuxt, and ESLint plugins.

## Contributing

This template enforces code quality through automated tools. When contributing:

1. **Code will be automatically formatted** on save
2. **Commits are validated** by pre-commit hooks
3. **Pushes are blocked** if ESLint errors exist
4. **Follow the import ordering** rules for consistency

The goal is to maintain high code quality and consistency across the entire codebase.
