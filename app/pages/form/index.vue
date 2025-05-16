<script setup lang="ts">
import AppLayout from "~/layouts/PageLayout/PageLayout.vue";
import AppForm from "~/components/AppForm/AppForm.vue";
import schema from "./schema.json";
</script>

<template>
  <AppLayout>
    <AppForm
      :button-text="schema.submitButtonText"
      :title="schema.formTitle"
      :schema="schema.fields"
    />
  </AppLayout>
</template>
