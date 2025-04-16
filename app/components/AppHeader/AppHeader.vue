<script setup lang="ts">
import EN from "./en.json"
import { useRoute } from '#app';

const route = useRoute();

// Check if route is active
const isActive = (path: string) => {
  // Ensure the path starts with a slash for proper comparison
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return route.path === normalizedPath;
};
</script>

<template>
  <header class="bg-amber-100 py-6">
    <div class="container mx-auto md:w-[75%]">
      <nav>
        <AppFlex :flex-direction="'flex-row'" :tag="'ul'">
          <li v-for="(item, index) in EN" :key="index" class="text-xl"
            :class="{ 'font-bold text-amber-700 border-b-2 border-amber-700': isActive(item.ROUTE) }"
            >
            <NuxtLink :to="item.ROUTE">
              {{ item.LABEL }}
            </NuxtLink>
          </li>
        </AppFlex>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>