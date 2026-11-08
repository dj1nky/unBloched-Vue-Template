<script setup>
import { onMounted, ref } from "vue";
import UiDiv from "../../../../components/ui-div/ui-div.vue";
import { BREAKPOINT_TOKENS, COLOR_TOKENS, TYPE_SCALE } from "../../registry.js";

// Values are read from the live CSS so they always match tailwind.css.
const colors = ref(COLOR_TOKENS.map(name => ({ name, value: "" })));
const breakpoints = ref(BREAKPOINT_TOKENS.map(name => ({ name, value: "" })));

onMounted(() => {
  const css = getComputedStyle(document.documentElement);
  colors.value = COLOR_TOKENS.map(name => ({
    name,
    value: css.getPropertyValue(`--color-${name}`).trim(),
  }));
  breakpoints.value = BREAKPOINT_TOKENS.map(name => ({
    name,
    value: css.getPropertyValue(`--breakpoint-${name}`).trim(),
  }));
});
</script>

<template>
  <ui-div gap="gap-8">
    <ui-div gap="gap-3">
      <h3>Colours</h3>
      <p class="text-gray-600">
        Defined in
        <code>assets/css/tailwind.css</code>
        under @theme. Use as
        <code>bg-orange</code>
        ,
        <code>text-dark</code>
        etc. Tailwind's default palette (gray, indigo, red...) is also
        available.
      </p>
      <ui-div
        direction="row"
        class="flex-wrap"
        gap="gap-4"
      >
        <div
          v-for="color in colors"
          :key="color.name"
          class="w-36 overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <div
            class="h-16"
            :style="{ backgroundColor: color.value }"
          />
          <div class="p-2 text-xs">
            <p class="font-mono font-bold">{{ color.name }}</p>
            <p class="font-mono text-gray-500">{{ color.value || "..." }}</p>
          </div>
        </div>
      </ui-div>
    </ui-div>

    <ui-div gap="gap-3">
      <h3>Typography</h3>
      <p class="text-gray-600">
        Base styles in
        <code>assets/scss/styles.scss</code>
        . Font: Roboto.
      </p>
      <ui-div
        class="rounded-lg border border-gray-200 bg-white p-5"
        gap="gap-4"
      >
        <div
          v-for="entry in TYPE_SCALE"
          :key="entry.label"
          class="flex flex-col gap-1 border-b border-gray-100 pb-3 last:border-0 last:pb-0 md:flex-row md:items-baseline md:justify-between"
        >
          <component
            :is="entry.tag || 'p'"
            :class="entry.classes"
          >
            {{ entry.label }}: The quick brown fox
          </component>
          <span class="text-xs whitespace-nowrap text-gray-500">
            {{ entry.note }}
          </span>
        </div>
      </ui-div>
    </ui-div>

    <ui-div gap="gap-3">
      <h3>Breakpoints</h3>
      <p class="text-gray-600">
        The default Tailwind breakpoints are replaced. Use these prefixes only.
      </p>
      <ui-div
        direction="row"
        class="flex-wrap"
        gap="gap-3"
      >
        <div
          v-for="bp in breakpoints"
          :key="bp.name"
          class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center"
        >
          <p class="font-mono font-bold">{{ bp.name }}:</p>
          <p class="font-mono text-xs text-gray-500">{{ bp.value || "..." }}</p>
        </div>
      </ui-div>
    </ui-div>
  </ui-div>
</template>
