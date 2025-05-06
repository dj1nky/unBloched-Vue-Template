<script setup>
import EN from "./en.json";
import { useRoute } from "#app";

const route = useRoute();

const isActive = (path) => {
  // Ensure the path starts with a slash for proper comparison
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return route.path === normalizedPath;
};
</script>

<template>
  <header class="bg-amber-100 py-6">
    <div class="container mx-auto md:w-[75%]">
      <nav>
        <AppFlex
          :flex-direction="'flex-row'"
          :tag="'ul'"
        >
          <li
            v-for="(item, index) in EN"
            :key="index"
            class="hover:bg-orange rounded-lg p-2 text-xl"
            :class="{
              'bg-amber-700 text-white': isActive(item.ROUTE),
            }"
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
