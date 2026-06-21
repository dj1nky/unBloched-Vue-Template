<script setup>
import UiImage from "@/components/ui-image/ui-image.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
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
      </ui-div>
    </ui-div>
  </ui-div>
</template>
