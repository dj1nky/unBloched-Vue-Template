<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
</script>

<template>
  <DefaultLayout image="new-york">
    <template #content>
      <AppDiv container></AppDiv>
    </template>
  </DefaultLayout>
</template>
