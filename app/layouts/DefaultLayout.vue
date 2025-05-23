<script setup lang="ts">
import unHeader from "@/components/unHeader/unHeader.vue";
import unFooter from "~/components/unFooter/unFooter.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
</script>

<template>
  <unHeader />
  <unDiv
    class="my-6 flex min-h-screen flex-col"
    :container="true"
  >
    <unDiv
      class="flex-grow p-6"
      :card="true"
    >
      <slot />
    </unDiv>
    <unDiv
      div="grid"
      :grid-cols="12"
    >
      <unDiv
        class="p-6"
        :card="true"
        :col-span="4"
      >
        <slot name="content" />
      </unDiv>
      <unDiv
        class="p-6"
        :card="true"
        :col-span="4"
      >
        <slot name="content" />
      </unDiv>
      <unDiv
        class="p-6"
        :col-span="4"
        :card="true"
      >
        <slot name="content" />
      </unDiv>
    </unDiv>
    <unFooter />
  </unDiv>
</template>

<style scoped></style>
