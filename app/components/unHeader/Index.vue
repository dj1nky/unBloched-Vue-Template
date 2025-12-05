<script setup>
import unDiv from "@/components/unDiv/unDiv.vue";
import unHeaderDesktop from "@/components/unHeader/unHeaderDesktop.vue";
import unHeaderMobile from "@/components/unHeader/unHeaderMobile.vue";
import unImage from "@/components/unImage/unImage.vue";
</script>

<template>
  <unDiv header>
    <unDiv container>
      <unDiv
        direction="row"
        class="items-center justify-between text-white"
      >
        <unImage
          class="my-4 w-16"
          rounded="rounded-full"
          :img="'logo'"
          link="/"
        />
        <unHeaderDesktop />
        <unHeaderMobile />
      </unDiv>
    </unDiv>
  </unDiv>
</template>
