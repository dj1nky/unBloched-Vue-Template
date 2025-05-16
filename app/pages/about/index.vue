<script setup lang="ts">
import AppLayout from "~/layouts/PageLayout/PageLayout.vue";
import AppForm from "~/components/AppForm/AppForm.vue";
import schema from "./schema.json";
</script>

<template>
  <AppLayout>
    <AppGrid>
      <AppCard :col-span="3">
        <h1>About</h1>
      </AppCard>
      <AppCard :col-span="9">
        <h1>Header 9</h1>
      </AppCard>
    </AppGrid>

    <AppCard class="flex-grow">
      <AppForm
        :button-text="schema.submitButtonText"
        :title="schema.formTitle"
        :schema="schema.fields"
      />
    </AppCard>

    <AppCard class="mt-auto">
      <h1>Footer</h1>
    </AppCard>
  </AppLayout>
</template>
