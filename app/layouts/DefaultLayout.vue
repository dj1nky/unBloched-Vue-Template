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
      :card="true"
      :grow="true"
    >
      <slot />
    </unDiv>
    <unDiv
      div="grid"
      :grid-cols="12"
    >
      <unDiv
        :card="true"
        :col-span="4"
      >
        <slot name="content" />
      </unDiv>
      <unDiv
        :card="true"
        :col-span="4"
      >
        <slot name="content" />
      </unDiv>
      <unDiv
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
