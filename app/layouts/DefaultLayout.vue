<script setup>
import AppFooter from "@/components/AppFooter/AppFooter.vue";
import AppImage from "@/components/AppImage/AppImage.vue";
import AppToast from "@/components/AppToast/AppToast.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
import AppHeader from "~/components/AppHeader/AppHeader.vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <AppHeader />
  <slot name="image">
    <AppDiv
      v-if="props.image"
      animation="fade-in"
    >
      <AppImage
        class="object-cover object-top md:h-108"
        :img="props.image"
        preload
      />
    </AppDiv>
  </slot>
  <AppDiv
    gap="gap-12"
    class="mt-6 flex min-h-screen flex-col"
  >
    <slot name="content" />
  </AppDiv>
  <AppFooter />
  <AppToast />
</template>

<style scoped></style>
