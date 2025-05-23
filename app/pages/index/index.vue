<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unFormattedText from "@/components/unFormattedText/unFormattedText.vue";
import EN from "./en.json";
</script>

<template>
  <DefaultLayout>
    <template #default>
      <unDiv class="p-6">
        <h1 class="large-h1 font-bold">
          {{ EN.body.header }}
        </h1>
        <unFormattedText
          :tag="'p'"
          :text="EN.body.description"
        />
      </unDiv>
    </template>
    <template #content>
      <unDiv class="p-6">
        Grid Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        autem earum dolorem numquam porro fugiat excepturi minus quod ratione
        maxime.
      </unDiv>
    </template>
  </DefaultLayout>
</template>
