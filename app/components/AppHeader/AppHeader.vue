<script setup>
import AppHeaderDesktop from "@/components/AppHeader/AppHeaderDesktop.vue";
import AppHeaderMobile from "@/components/AppHeader/AppHeaderMobile.vue";
import AppImage from "@/components/AppImage/AppImage.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
</script>

<template>
  <AppDiv header>
    <AppDiv container>
      <AppDiv
        direction="row"
        class="items-center justify-between text-white"
      >
        <AppImage
          class="my-4 w-16"
          rounded="rounded-full"
          :img="'logo'"
          link="/"
        />
        <AppHeaderDesktop />
        <AppHeaderMobile />
      </AppDiv>
    </AppDiv>
  </AppDiv>
</template>
