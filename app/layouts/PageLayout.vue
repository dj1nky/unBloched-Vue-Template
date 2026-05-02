<script setup>
import UiFooter from "@/components/ui-footer/ui-footer.vue";
import UiHero from "@/components/ui-hero/ui-hero.vue";
import UiPageTitle from "@/components/ui-page-title/ui-page-title.vue";
import UiToast from "@/components/ui-toast/ui-toast.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
import EN from "~/components/ui-header/en.json";
import UiHeader from "~/components/ui-header/ui-header.vue";
import { useToastStore } from "~/stores/toast.js";

const toastStore = useToastStore();

const props = defineProps({
  container: {
    type: Boolean,
    default: true,
  },
  heroTitle: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  pageTitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <ui-header :en="EN" />
  <slot name="image">
    <ui-hero
      :image="props.image"
      :title="props.heroTitle"
    />
  </slot>
  <ui-div
    gap="gap-12"
    class="mt-6 flex min-h-screen flex-col"
    :container="props.container"
  >
    <slot name="pageTitle">
      <ui-page-title
        class="text-white"
        :title="props.pageTitle"
      />
    </slot>
    <slot name="content" />
  </ui-div>
  <ui-footer />
  <ui-toast
    :toasts="toastStore.activeToasts"
    @close="toastStore.hideToast"
  />
</template>

<style scoped></style>
