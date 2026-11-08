<script setup>
import UiDiv from "../ui-div/ui-div.vue";
import UiImage from "../ui-image/ui-image.vue";
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
