<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unFormattedText from "@/components/unFormattedText/unFormattedText.vue";
import EN from "./en.json";
</script>

<template>
  <DefaultLayout>
    <h1 class="large-h1 font-bold">
      {{ EN.body.header }}
    </h1>
    <unFormattedText :tag="'p'" :text="EN.body.description" />
  </DefaultLayout>
</template>
