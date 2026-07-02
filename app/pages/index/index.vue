<script setup>
import PageLayout from "@/layouts/PageLayout.vue";
</script>

<template>
  <page-layout>
    <template #left>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </template>
    <template #right>
      <h2>Right Side</h2>
      <p>This is some content on the right side of the page.</p>
    </template>
  </page-layout>
</template>
