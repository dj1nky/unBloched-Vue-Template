<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { NuxtImg, NuxtLink } from "#components";
import { useCloudinary } from "~/composables/useCloudinary.js";

const { getImageUrl } = useCloudinary();

const props = defineProps({
  alt: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  lottie: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String,
    default: "",
  },
});

const img = getImageUrl(props.img);
</script>

<template>
  <DotLottieVue
    v-if="lottie"
    autoplay
    loop
    :src="img"
  />
  <NuxtLink
    v-else-if="link"
    :to="link"
  >
    <NuxtImg
      :src="img"
      :alt="alt"
      :class="rounded"
      format="webp"
      loading="lazy"
    />
  </NuxtLink>
  <NuxtImg
    v-else
    :src="img"
    :alt="alt"
    :class="rounded"
    format="webp"
    loading="lazy"
  />
</template>
