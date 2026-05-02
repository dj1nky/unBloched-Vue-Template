<script setup>
import UiHeaderDesktop from "@/components/ui-header/ui-header-desktop.vue";
import UiHeaderMobile from "@/components/ui-header/ui-header-mobile.vue";
import UiImage from "@/components/ui-image/ui-image.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";

const props = defineProps({
  en: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <ui-div header>
    <ui-div container>
      <ui-div
        direction="row"
        class="items-center justify-between text-white"
      >
        <ui-image
          class="my-4 w-16"
          rounded="rounded-full"
          :img="'logo'"
          link="/"
        />
        <ui-header-desktop :en="props.en" />
        <ui-header-mobile :en="props.en" />
      </ui-div>
    </ui-div>
  </ui-div>
</template>
