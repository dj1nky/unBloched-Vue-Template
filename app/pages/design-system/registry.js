// Single source of truth for the design system page.
// Add an entry here whenever a new ui-* component, composable or store is created.

export const SECTIONS = [
  { id: "foundations", label: "Foundations" },
  { id: "components", label: "Components" },
  { id: "animation", label: "Animation" },
  { id: "stack", label: "Stack" },
];

// Names only: values are read from the live CSS (tailwind.css @theme) at runtime
// so this page can never drift from the real tokens.
export const COLOR_TOKENS = [
  "yellow",
  "orange",
  "dark-orange",
  "burnt",
  "dark",
];

export const BREAKPOINT_TOKENS = ["xxs", "xs", "smd", "md", "lg", "xl", "xxl"];

export const TYPE_SCALE = [
  {
    label: "large-h1",
    classes: "large-h1 font-bold",
    note: "48/56, 32/40 on tablet",
  },
  { label: "h1", tag: "h1", note: "32/40, 24/32 on tablet" },
  { label: "h2", tag: "h2", note: "28/32, 22/28 on tablet" },
  { label: "h3", tag: "h3", note: "24/28, 20/24 on tablet" },
  { label: "h4", tag: "h4", note: "20/22, 18/22 on tablet" },
  { label: "p", tag: "p", note: "16/22, weight 300" },
];

export const COMPONENTS = [
  {
    id: "ui-animate",
    group: "Utility",
    file: "app/components/ui-animate/ui-animate.vue",
    description:
      "Reveal-on-scroll wrapper. Fades and eases its content into place the first time it enters the viewport. Respects prefers-reduced-motion.",
    props: [
      {
        name: "as",
        type: "String | Object",
        default: '"div"',
        description: "Tag or component to render.",
      },
      {
        name: "direction",
        type: "String",
        default: '"up"',
        description: "up, down, left, right or none (fade only).",
      },
      {
        name: "delay",
        type: "Number | String",
        default: "0",
        description: "Wait before starting, in ms. Use to stagger siblings.",
      },
      {
        name: "duration",
        type: "Number | String",
        default: "700",
        description: "Animation length, in ms.",
      },
      {
        name: "disabled",
        type: "Boolean",
        default: "false",
        description: "Render normally with no animation.",
      },
    ],
    usage: `<ui-animate direction="left" :delay="150">
  <p>Hello</p>
</ui-animate>

<ui-animate :as="UiDiv" gap="gap-3">
  ...
</ui-animate>`,
  },
  {
    id: "ui-div",
    group: "Layout",
    file: "app/components/ui-div/ui-div.vue",
    description:
      "The layout primitive. A flex or grid wrapper with gap, direction, container and card/header presets.",
    props: [
      {
        name: "div",
        type: "String",
        default: '"flex"',
        description: "flex or grid. Grid is stacked on mobile, grid from md.",
      },
      {
        name: "direction",
        type: "String",
        default: '"flex-col"',
        description: "Any Tailwind flex-direction class, responsive allowed.",
      },
      {
        name: "gap",
        type: "String",
        default: '"gap-6"',
        description: "Tailwind gap class.",
      },
      {
        name: "gridCols",
        type: "Number",
        default: "12",
        description: "Column count when div is grid.",
      },
      {
        name: "colSpan",
        type: "Number",
        default: "6",
        description: "Columns this element spans inside a grid.",
      },
      {
        name: "container",
        type: "Boolean",
        default: "false",
        description: "Centred, width-limited page container.",
      },
      {
        name: "card",
        type: "Boolean",
        default: "false",
        description: "Gradient card preset from styles.js.",
      },
      {
        name: "header",
        type: "Boolean",
        default: "false",
        description: "Gradient header preset from styles.js.",
      },
      {
        name: "grow",
        type: "Boolean",
        default: "false",
        description: "Adds grow.",
      },
      {
        name: "tag",
        type: "String",
        default: '"div"',
        description: "HTML tag to render.",
      },
    ],
    usage: `<ui-div div="grid" :grid-cols="12">
  <ui-div :col-span="8">Main</ui-div>
  <ui-div :col-span="4">Aside</ui-div>
</ui-div>`,
  },
  {
    id: "ui-button",
    group: "Actions",
    file: "app/components/ui-button/ui-button.vue",
    description:
      "Button or link. Renders a NuxtLink when link is set. Variants live in ui-button/styles.js.",
    props: [
      {
        name: "text",
        type: "String",
        default: '""',
        description: "Label. The default slot is rendered after it.",
      },
      {
        name: "variant",
        type: "String",
        default: '"primary"',
        description: "primary, secondary or tertiary.",
      },
      {
        name: "link",
        type: "String",
        default: '""',
        description: "Renders a NuxtLink (new tab) instead of a button.",
      },
      {
        name: "type",
        type: "String",
        default: '"button"',
        description: "Native button type (use submit in forms).",
      },
      {
        name: "bgColor",
        type: "String",
        default: '""',
        description: "Tailwind background class override.",
      },
      {
        name: "disabled",
        type: "Boolean",
        default: "false",
        description: "Disables the control and applies the disabled style.",
      },
    ],
    usage: `<ui-button text="Save" variant="primary" @click="save" />
<ui-button text="Docs" link="/docs" variant="secondary" />`,
  },
  {
    id: "ui-input",
    group: "Forms",
    file: "app/components/ui-input/ui-input.vue",
    description:
      "Labelled field with validation state. One component for text, email, textarea, select and checkbox.",
    props: [
      {
        name: "modelValue",
        type: "String | Number | Boolean",
        default: '""',
        description: "v-model value.",
      },
      {
        name: "type",
        type: "String",
        default: '""',
        description: "Any input type, plus textarea, select and checkbox.",
      },
      {
        name: "label",
        type: "String",
        default: '""',
        description: "Field label.",
      },
      {
        name: "sublabel",
        type: "String",
        default: '""',
        description: "Small helper text under the label.",
      },
      {
        name: "placeholder",
        type: "String",
        default: '""',
        description: "Placeholder (checkbox text for checkbox).",
      },
      {
        name: "error",
        type: "String",
        default: '""',
        description: "Error message. Turns the field red.",
      },
      {
        name: "options",
        type: "Array",
        default: "[]",
        description: "Select options (strings or objects).",
      },
      {
        name: "rows / maxlength",
        type: "Number",
        default: "4 / 255",
        description: "Textarea sizing and character limit.",
      },
    ],
    usage: `<ui-input
  v-model="email"
  type="email"
  label="Email"
  :error="errors.email"
/>`,
  },
  {
    id: "ui-form",
    group: "Forms",
    file: "app/components/ui-form/ui-form.vue",
    description:
      "Schema-driven form. Builds ui-input fields, validates them and shows toasts on submit.",
    props: [
      {
        name: "schema",
        type: "Object",
        default: "required",
        description:
          "{ fields: [{ id, name, type, label, span, validations }], submitButtonText, successMessage, errorMessage }. Validation types: empty, minLength, email, phone, checkbox, dob.",
      },
    ],
    usage: `<ui-form :schema="{
  submitButtonText: 'Send',
  successMessage: 'Sent!',
  errorMessage: 'Fix the errors',
  fields: [
    { id: 'email', name: 'email', type: 'email', label: 'Email', span: 12,
      validations: [{ type: 'email', message: 'Invalid email' }] },
  ],
}" />`,
  },
  {
    id: "ui-toast",
    group: "Feedback",
    file: "app/components/ui-toast/ui-toast.vue",
    description:
      "Toast renderer. Mounted once in PageLayout and driven by the toast Pinia store.",
    props: [
      {
        name: "toasts",
        type: "Array",
        default: "[]",
        description: "Active toasts from the store.",
      },
      {
        name: "@close",
        type: "Event",
        default: "",
        description: "Emitted with the toast id.",
      },
    ],
    usage: `const toast = useToastStore();
toast.success("Saved");
toast.error("Something broke");`,
  },
  {
    id: "ui-icon",
    group: "Media",
    file: "app/components/ui-icon/ui-icon.vue",
    description: "Iconify icon (any icon set, loaded on demand).",
    props: [
      {
        name: "iconName",
        type: "String",
        default: '""',
        description: "Iconify name, e.g. mdi:home.",
      },
      {
        name: "iconColor",
        type: "String",
        default: '"text-white"',
        description: "Tailwind text colour class.",
      },
    ],
    usage: `<ui-icon icon-name="mdi:home" icon-color="text-dark" />`,
  },
  {
    id: "ui-image",
    group: "Media",
    file: "app/components/ui-image/ui-image.vue",
    description:
      "Image via Cloudinary (or /public paths) rendered through NuxtImg. Also plays .lottie files.",
    props: [
      {
        name: "img",
        type: "String",
        default: '""',
        description: "Cloudinary path, or a /public path.",
      },
      { name: "alt", type: "String", default: '""', description: "Alt text." },
      {
        name: "link",
        type: "String",
        default: '""',
        description: "Wraps the image in a NuxtLink.",
      },
      {
        name: "lottie",
        type: "Boolean",
        default: "false",
        description: "Render img as a dotLottie animation.",
      },
      {
        name: "rounded",
        type: "String",
        default: '""',
        description: "Tailwind rounded class.",
      },
    ],
    usage: `<ui-image img="hero/banner" alt="Banner" rounded="rounded-lg" />`,
  },
  {
    id: "ui-hero",
    group: "Sections",
    file: "app/components/ui-hero/ui-hero.vue",
    description:
      "Full-width hero image with optional overlaid title. Fades in with ui-animate.",
    props: [
      {
        name: "image",
        type: "String",
        default: '""',
        description:
          "Image path passed to ui-image. Nothing renders without it.",
      },
      {
        name: "title",
        type: "String",
        default: '""',
        description: "Overlay title. Or use the title slot.",
      },
    ],
    usage: `<ui-hero image="hero/banner" title="Welcome" />`,
  },
  {
    id: "ui-page-title",
    group: "Typography",
    file: "app/components/ui-page-title/ui-page-title.vue",
    description: "The page h1 using the large-h1 scale.",
    props: [
      {
        name: "title",
        type: "String",
        default: '""',
        description: "Title text. Or use the default slot.",
      },
    ],
    usage: `<ui-page-title title="About us" />`,
  },
  {
    id: "ui-formatted-text",
    group: "Typography",
    file: "app/components/ui-formatted-text/ui-formatted-text.vue",
    description:
      "Text with inline markup. Wrap words in <color> and <em> tags to colour or italicise them (parsed by useFormatText).",
    props: [
      {
        name: "text",
        type: "String",
        default: "",
        description: "Source string using the formatting markers.",
      },
      {
        name: "tag",
        type: "String",
        default: '"p"',
        description: "Wrapper tag.",
      },
      {
        name: "textColor",
        type: "String",
        default: '"yellow"',
        description: "Colour for coloured parts.",
      },
      {
        name: "textSize",
        type: "String",
        default: '""',
        description: "Tailwind text size class.",
      },
    ],
    usage: `<ui-formatted-text
  tag="h2"
  text="Build <color>faster</color> with <em>less</em>"
  text-color="#fc5404"
/>`,
  },
  {
    id: "ui-header",
    group: "Sections",
    file: "app/components/ui-header/ui-header.vue",
    description:
      "Site header with logo. Navigation copy lives in ui-header/en.json.",
    props: [],
    usage: `<ui-header />`,
  },
  {
    id: "ui-footer",
    group: "Sections",
    file: "app/components/ui-footer/ui-footer.vue",
    description: "Site footer.",
    props: [],
    usage: `<ui-footer />`,
  },
];

export const COMPOSABLES = [
  {
    name: "useCloudinary",
    file: "app/composables/useCloudinary.js",
    description:
      "Builds Cloudinary image URLs with width, quality, format and crop options.",
  },
  {
    name: "useToastStore",
    file: "app/stores/toast.js",
    description:
      "Pinia store: success, error, warning, info, showToast, clearAllToasts.",
  },
  {
    name: "useButtonLogic",
    file: "app/components/ui-button/composables/useButtonLogic.js",
    description: "Resolves button tag, attrs and classes.",
  },
  {
    name: "useValidate / useHandleSubmit",
    file: "app/components/ui-form/composables/",
    description: "Form validation and submit handling for ui-form.",
  },
  {
    name: "useFormatText",
    file: "app/components/ui-formatted-text/composables/useFormatText.js",
    description: "Parses formatting markers into renderable parts.",
  },
];

export const PACKAGES = [
  { name: "nuxt", note: "App framework (Vue 3, Vite, Nitro)" },
  {
    name: "tailwindcss + @tailwindcss/vite",
    note: "Styling, tokens in assets/css/tailwind.css",
  },
  { name: "sass", note: "Global typography in assets/scss/styles.scss" },
  { name: "pinia + @pinia/nuxt", note: "State (toast store)" },
  { name: "@nuxt/image", note: "NuxtImg optimisation" },
  { name: "@iconify/vue", note: "ui-icon" },
  { name: "@lottiefiles/dotlottie-vue", note: "ui-image lottie playback" },
  { name: "cloudinary + dotenv (dev)", note: "npm run upload:images" },
  {
    name: "eslint, prettier, husky, lint-staged",
    note: "Code quality and git hooks",
  },
];
