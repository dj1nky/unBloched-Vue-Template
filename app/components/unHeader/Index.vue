<script setup>
import unHeaderDesktop from "./unHeaderDesktop.vue";
import unHeaderMobile from "./unHeaderMobile.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
import unImageLink from "../unImageLink/unImageLink.vue";
const logo = "/images/logo.webp";
</script>

<template>
  <unDiv
    header
    direction="row"
  >
    <unDiv
      class="items-center justify-between"
      container
      direction="row"
    >
      <unImageLink
        border-radius="rounded-full"
        class="my-4"
        :src="logo"
        to="/"
      />
      <unHeaderDesktop />
      <unHeaderMobile />
    </unDiv>
  </unDiv>
</template>
