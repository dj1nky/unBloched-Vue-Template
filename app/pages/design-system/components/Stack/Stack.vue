<script setup>
import UiDiv from "../../../../components/ui-div/ui-div.vue";
import { COMPOSABLES, PACKAGES } from "../../registry.js";
</script>

<template>
  <ui-div
    div="grid"
    :grid-cols="12"
    gap="gap-6"
  >
    <ui-div
      :col-span="6"
      gap="gap-3"
    >
      <h3>Composables and stores</h3>
      <ui-div gap="gap-2">
        <div
          v-for="item in COMPOSABLES"
          :key="item.name"
          class="rounded-lg border border-gray-200 bg-white p-3"
        >
          <p class="font-mono text-sm font-bold">{{ item.name }}</p>
          <p class="text-sm text-gray-600">{{ item.description }}</p>
          <code class="text-xs text-gray-500">{{ item.file }}</code>
        </div>
      </ui-div>
    </ui-div>
    <ui-div
      :col-span="6"
      gap="gap-3"
    >
      <h3>Packages</h3>
      <ui-div gap="gap-2">
        <div
          v-for="pkg in PACKAGES"
          :key="pkg.name"
          class="rounded-lg border border-gray-200 bg-white p-3"
        >
          <p class="font-mono text-sm font-bold">{{ pkg.name }}</p>
          <p class="text-sm text-gray-600">{{ pkg.note }}</p>
        </div>
      </ui-div>
    </ui-div>
  </ui-div>
</template>
