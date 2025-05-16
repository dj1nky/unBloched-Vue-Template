<script setup lang="ts">
import AppLayout from "~/layouts/PageLayout/PageLayout.vue";
import AppFormattedText from "@/components/AppFormattedText/AppFormattedText.vue";
import EN from "./en.json";
</script>

<template>
  <AppLayout>
    <h1 class="large-h1 font-bold">
      {{ EN.body.header }}
    </h1>
    <AppFormattedText
      :tag="'p'"
      :text="EN.body.description"
    />
  </AppLayout>
</template>
