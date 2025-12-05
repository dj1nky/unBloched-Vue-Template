<script setup>
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
  rounded: {
    type: String,
    default: "",
  },
});

const img = getImageUrl(props.img);
</script>

<template>
  <NuxtLink
    v-if="link"
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
