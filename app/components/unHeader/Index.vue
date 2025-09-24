<script setup>
import unHeaderDesktop from "./unHeaderDesktop.vue";
import unHeaderMobile from "./unHeaderMobile.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
import unImageLink from "../unImageLink/unImageLink.vue";
import { getImage } from "~/utils/graphics";
</script>

<template>
  <unDiv header>
    <unDiv container>
      <unDiv
        direction="row"
        class="items-center justify-between text-white"
      >
        <unImageLink
          border-radius="rounded-full"
          class="my-4"
          :src="getImage('logo')"
          to="/"
        />
        <unHeaderDesktop />
        <unHeaderMobile />
      </unDiv>
    </unDiv>
  </unDiv>
</template>
