<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unForm from "~/components/unForm/unForm.vue";
import schema from "./schema.json";
</script>

<template>
  <DefaultLayout>
    <template #default>
      <unForm
        :button-text="schema.submitButtonText"
        :title="schema.formTitle"
        :schema="schema.fields"
      />
    </template>

    <template #content>
      <unDiv class="p-6">
        FORM Grid Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nobis autem earum dolorem numquam porro fugiat excepturi minus quod
        ratione maxime.
      </unDiv>
    </template>
  </DefaultLayout>
</template>
