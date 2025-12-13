<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
import { useGraphics } from "~/composables/useGraphics";

const { getImage } = useGraphics();
</script>

<template>
  <DefaultLayout :image="getImage('ny')">
    <template #content>
      <AppDiv container></AppDiv>
    </template>
  </DefaultLayout>
</template>
