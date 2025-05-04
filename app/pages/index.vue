<script setup lang="ts">
import AppLayout from "~/layouts/PageLayout/PageLayout.vue";
import EN from "./index/en.json"

// Use EN directly for your text
const localizedText = computed(() => EN.body.description);

const parts = computed(() => {
  // First, split the text by both italic and color markers
  // Use a regex that captures both marker types
  const splitRegex = /(\*[^*]+\*|#[^#]+#)/g;
  const rawParts = localizedText.value.split(splitRegex);
  
  // Transform each part into a structured object
  return rawParts.map(part => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return {
        type: 'italic',
        content: part.slice(1, -1) // Remove the * markers
      };
    } else if (part.startsWith('#') && part.endsWith('#')) {
      return {
        type: 'colored',
        content: part.slice(1, -1) // Remove the # markers
      };
    } else {
      return {
        type: 'normal',
        content: part
      };
    }
  });
});
</script>

<template>
  <AppLayout>
    <AppGrid>
      <AppCard :col-span="3">
        <h1>Home</h1>
      </AppCard>
      <AppCard :col-span="9">
        <h1>Header 9</h1>
      </AppCard>
    </AppGrid>

    <AppCard class="flex-grow">
      <h1>
        <span
          v-for="(part, index) in parts"
          :key="index"
        >
          <span v-if="part.type === 'normal'">{{ part.content }}</span>
          <em v-else-if="part.type === 'italic'">{{ part.content }}</em>
          <span
            v-else-if="part.type === 'colored'"
            class="colored"
          >{{ part.content }}</span>
        </span>
      </h1>
    </AppCard>

    <AppCard class="mt-auto">
      <h1>Footer</h1>
    </AppCard>
  </AppLayout>
</template>

<style scoped>
.highlight {
  color: #3b82f6; /* Tailwind blue-500 */
  font-weight: bold;
}

.colored {
  color: #3b82f6; /* Tailwind blue-500 */
  font-weight: bold;
}
</style>