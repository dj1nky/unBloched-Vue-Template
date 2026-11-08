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
  - [Tailwind CSS v4](https://tailwindcss.com/) (via [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite))
  - [Sass](https://sass-lang.com/) (SCSS support)
- **Animation**
  - `ui-animate`: scroll-reveal wrapper (no animation library needed)
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

## Using this repo as a layer (new sites)

This repo is a [Nuxt layer](https://nuxt.com/docs/getting-started/layers). Sites extend a **pinned git tag**, so old sites never change until you bump the tag.

### Create a new site

1. Copy the `starter/` folder to a new project and `git init`.
2. In `nuxt.config.ts`, set your GitHub user in the `extends` URL. The version is the `designSystemVersion` constant at the top of that file.
3. `npm install && npm run dev`. Open `/design-system` to browse every component.

### Update a site

Change `designSystemVersion` at the top of the site's `nuxt.config.ts` (`"1.0.0"` to `"1.1.0"`), reinstall, and read `CHANGELOG.md` for breaking changes. The version also shows in the design system sidebar.

### Release a change (you run these yourself)

```bash
git tag v1.1.0
git push origin v1.1.0
```

Patch = tweak, minor = new component, major = breaking prop or behaviour change.

### Overriding in a site

- Put a file at the same path (`app/components/ui-footer/ui-footer.vue`) and the site's version wins wherever the component is auto-imported (use `<ui-footer />` without a manual import).
- Cloudinary: set `runtimeConfig.public.cloudinaryCloudName` and `companyName` in the site's `nuxt.config.ts`.
- Private repo: `export GIGET_AUTH=<github token>` before installing.

### Rules for code inside the layer

- Use **relative imports** (never `~/` or `@/`) in layer files: those aliases point at the consuming site.
- Import `defineStore` from `#imports`, not `pinia`, so the site and layer share one Pinia.

## Design System Page

The home page (`app/pages/design-system`) is a living design system: colour, type and breakpoint tokens (read live from `tailwind.css`), every `ui-*` component with a demo, props table and usage snippet, the animation primitive, and the composables/packages in use.

- When you add a component, add an entry to `app/pages/design-system/registry.js` and a demo in `components/Components/Components.vue`.
- For a real site, replace this page with your own home page.

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
import { NuxtImg } from "#components";
import { useRouter } from "vue-router";
import UiButton from "@/components/ui-button/ui-button.vue";
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
