<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unFormattedText from "@/components/unFormattedText/unFormattedText.vue";
import unDiv from "@/components/unDiv/unDiv.vue";
import EN from "./en.json";
</script>

<template>
  <DefaultLayout>
    <unDiv :container="true">
      <unDiv>
        <h1 class="large-h1 font-bold">
          {{ EN.body.header }}
        </h1>
        <unFormattedText
          :tag="'p'"
          :text="EN.body.description"
        />
      </unDiv>
      <unDiv
        :grid-cols="12"
        class="text-center text-black"
        div="grid"
      >
        <unDiv
          class="p-6"
          :card="true"
          :col-span="4"
        >
          Grid Item 1
        </unDiv>
        <unDiv
          class="p-6"
          :card="true"
          :col-span="4"
        >
          Grid Item 2
        </unDiv>
        <unDiv
          class="p-6"
          :card="true"
          :col-span="4"
        >
          Grid Item 3
        </unDiv>
      </unDiv>
    </unDiv>
  </DefaultLayout>
</template>
