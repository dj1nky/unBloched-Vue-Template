# Changelog

## v1.0.1
- Fix: package now installs as a Nuxt layer (`name`, `main`, `sass` in dependencies, guarded lifecycle scripts). `v1.0.0` was tagged before these changes and cannot be used as a dependency.

## v1.0.0

- Repo is now a Nuxt layer published as `unbloched-design-system`; sites depend on a pinned git tag via `package.json` and `extends: ["unbloched-design-system"]` (see `starter/`).
- Added `ui-animate` (scroll reveal); removed `useIntersectionAnimation`, `animation` props on `ui-div` and `ui-formatted-text`.
- Design system page at `/design-system`.
- Cloudinary cloud name and company name come from `runtimeConfig.public`.
- Layer files use relative imports; toast store imports `defineStore` from `#imports`.
