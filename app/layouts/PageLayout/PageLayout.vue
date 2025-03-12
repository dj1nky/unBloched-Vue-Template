<script setup lang="ts">
import AppContainer from "~/components/AppContainer/AppContainer.vue";
import AppFlex from "~/components/AppFlex/AppFlex.vue";
import AppGrid from "~/components/AppGrid/AppGrid.vue";

const props = defineProps({
  bgColour: {
    type: String,
    default: "bg-dark",
  },
});
</script>

<template>
  <AppContainer
    class="p-12"
    :class="props.bgColour"
  >
    <AppGrid class="bg-light p-12">
      <AppFlex class="bg-maroon p-6 text-white">
        <h1>Col Span 3</h1>
      </AppFlex>
      <AppFlex class="bg-light-green p-6 text-white">
        <h2 class="font-bold uppercase">
          Col Span 3
        </h2>
      </AppFlex>
    </AppGrid>
  </AppContainer>
</template>

<style scoped></style>
