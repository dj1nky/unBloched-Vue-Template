<script setup>
import UiDiv from "../../../../components/ui-div/ui-div.vue";
import { COMPONENTS, SECTIONS } from "../../registry.js";
</script>

<template>
  <aside class="md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0">
    <ui-div
      class="h-full overflow-y-auto border-gray-200 bg-white p-5 md:border-r"
      gap="gap-6"
    >
      <ui-div gap="gap-1">
        <h4 class="font-bold">Design System</h4>
        <p class="text-sm text-gray-500">unBloched Vue Template</p>
      </ui-div>

      <nav>
        <ui-div gap="gap-1">
          <a
            v-for="section in SECTIONS"
            :key="section.id"
            :href="`#${section.id}`"
            class="rounded px-2 py-1 text-sm hover:bg-gray-100"
          >
            {{ section.label }}
          </a>
        </ui-div>
      </nav>

      <ui-div gap="gap-2">
        <p class="text-xs text-gray-500 uppercase">Components</p>
        <ui-div gap="gap-0">
          <a
            v-for="item in COMPONENTS"
            :key="item.id"
            :href="`#${item.id}`"
            class="rounded px-2 py-1 font-mono text-xs hover:bg-gray-100"
          >
            {{ item.id }}
          </a>
        </ui-div>
      </ui-div>
    </ui-div>
  </aside>
</template>
