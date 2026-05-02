<script setup>
import PageLayout from "@/layouts/PageLayout.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
</script>

<template>
  <page-layout
    image="new-york"
    hero-title="Hero Title"
    page-title="Home Page"
  >
    <template #content>
      <ui-div container>test</ui-div>
    </template>
  </page-layout>
</template>
