<script setup>
import { computed, useSlots } from "vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
import UiImage from "~/components/ui-image/ui-image.vue";
import UiPageTitle from "~/components/ui-page-title/ui-page-title.vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

const slots = useSlots();
const hasTitle = computed(() => Boolean(props.title || slots.title));
</script>

<template>
  <ui-div
    v-if="props.image"
    class="relative overflow-hidden"
    animation="fade-in"
    gap="gap-0"
  >
    <ui-image
      class="w-full object-cover object-top md:h-108"
      :img="props.image"
      preload
    />

    <ui-div
      v-if="hasTitle"
      class="absolute inset-0 bg-black/45"
      gap="gap-0"
    />

    <ui-div
      v-if="hasTitle"
      class="absolute inset-0 flex items-center justify-center"
      gap="gap-0"
    >
      <ui-div
        class="w-full items-center px-6 md:px-10"
        gap="gap-0"
      >
        <slot name="title">
          <ui-page-title
            :title="props.title"
            class="w-full text-center text-white"
          />
        </slot>
      </ui-div>
    </ui-div>
  </ui-div>
</template>
