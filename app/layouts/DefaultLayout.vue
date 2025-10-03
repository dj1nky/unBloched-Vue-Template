<script setup>
import unDiv from "~/components/unDiv/unDiv.vue";
import unFooter from "~/components/unFooter/unFooter.vue";
import unHeader from "~/components/unHeader/Index.vue";
import unToast from "~/components/unToast/unToast.vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <unHeader />
  <slot name="image">
    <unDiv
      v-if="props.image"
      animation="fade-in"
    >
      <NuxtImg
        class="object-cover object-top md:h-108"
        :src="props.image"
        preload
      />
    </unDiv>
  </slot>
  <unDiv
    :gap="12"
    class="mt-6 flex min-h-screen flex-col"
  >
    <slot name="content" />
  </unDiv>
  <unFooter />
  <unToast />
</template>

<style scoped></style>
