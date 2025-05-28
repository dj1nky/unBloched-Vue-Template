<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unForm from "~/components/unForm/unForm.vue";
import schema from "./schema.json";
</script>

<template>
  <DefaultLayout>
    <unForm
      :container="true"
      :button-text="schema.submitButtonText"
      :title="schema.formTitle"
      :schema="schema.fields"
    />
  </DefaultLayout>
</template>
