## The following boilerplate contains the following setup

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
- **Linting & Formatting**
  - [Stylelint](https://stylelint.io/) (with configs for Vue and SCSS)
  - [Stylelint Config Recommended](https://github.com/stylelint/stylelint-config-recommended)
  - [Stylelint Config Standard SCSS](https://github.com/stylelint-scss/stylelint-config-standard-scss)
  - [Stylelint Config Recommended Vue](https://github.com/ota-meshi/stylelint-config-recommended-vue)
  - [Prettier](https://prettier.io/) (with Tailwind plugin)
  - [Prettier Plugin TailwindCSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
  - [ESLint](https://eslint.org/) (with TypeScript, Prettier, and Vue plugins)
  - [ESLint Config Prettier](https://github.com/prettier/eslint-config-prettier)
  - [ESLint Plugin Prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [ESLint Plugin Vue](https://eslint.vuejs.org/)
  - [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)
- **Utilities**
  - [caniuse-lite](https://github.com/browserslist/caniuse-lite)
  - [@vue/compiler-sfc](https://github.com/vuejs/core/tree/main/packages/compiler-sfc)

- [VS Code Vue Snippets](https://github.com/sdras/vue-vscode-snippets)

### Outdated Packages

Some dependencies are out of date. To check for outdated packages, run:

```sh
npm outdated
```

Or, if using yarn:

```sh
yarn outdated
```

To update all packages to their latest versions:

```sh
npm update
```

Or, for yarn:

```sh
yarn upgrade
```

> **Tip:** Review breaking changes before upgrading major versions.
