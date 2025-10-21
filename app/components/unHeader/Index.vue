<script setup>
import unDiv from "@/components/unDiv/unDiv.vue";
import unHeaderDesktop from "@/components/unHeader/unHeaderDesktop.vue";
import unHeaderMobile from "@/components/unHeader/unHeaderMobile.vue";
import unImageLink from "@/components/unImageLink/unImageLink.vue";
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
