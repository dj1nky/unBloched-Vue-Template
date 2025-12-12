<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
import { getImage } from "~/utils/graphics";
</script>

<template>
  <DefaultLayout :image="getImage('ny')">
    <template #content>
      <AppDiv container></AppDiv>
    </template>
  </DefaultLayout>
</template>
