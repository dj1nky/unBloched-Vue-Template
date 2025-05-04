<script setup lang="ts">
import AppLayout from "~/layouts/PageLayout/PageLayout.vue";
import AppContent from '@/components/AppContent/AppContent.vue';
import EN from "./index/en.json"

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
      <AppContent
        :tag="'h1'"
        class="font-bold"
        :text="EN.body.header"
      />
      <AppContent
        class="text-xl"
        :text="EN.body.description"
      />
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