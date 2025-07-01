<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unForm from "~/components/unForm/unForm.vue";
import schema from "./schema.json";
import unFormattedText from "~/components/unFormattedText/unFormattedText.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
</script>

<template>
  <DefaultLayout>
    <unDiv container>
      <unFormattedText
        tag="h2"
        :text="schema.formTitle"
      />

      <unForm
        :button-text="schema.submitButtonText"
        :schema="schema.fields"
      />
    </unDiv>
  </DefaultLayout>
</template>
