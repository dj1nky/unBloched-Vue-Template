# Changelog

## v1.0.0

- Repo is now a Nuxt layer; sites extend a pinned tag (see `starter/`).
- Added `ui-animate` (scroll reveal); removed `useIntersectionAnimation`, `animation` props on `ui-div` and `ui-formatted-text`.
- Design system page at `/design-system`.
- Cloudinary cloud name and company name come from `runtimeConfig.public`.
- Layer files use relative imports; toast store imports `defineStore` from `#imports`.
