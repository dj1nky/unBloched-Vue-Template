<script setup>
import { ref } from "vue";
import UiAnimate from "../../../../components/ui-animate/ui-animate.vue";
import UiButton from "../../../../components/ui-button/ui-button.vue";
import UiDiv from "../../../../components/ui-div/ui-div.vue";

const directions = ["up", "down", "left", "right", "none"];

// Changing the key remounts the demo so the reveal plays again.
const replayKey = ref(0);
</script>

<template>
  <ui-div gap="gap-4">
    <h3>ui-animate directions</h3>
    <p class="text-gray-600">
      Scroll-triggered reveal. Siblings below use an increasing
      <code>delay</code>
      to stagger.
    </p>
    <ui-button
      text="Replay"
      variant="tertiary"
      class="w-fit"
      @click="replayKey++"
    />
    <ui-div
      :key="replayKey"
      div="grid"
      :grid-cols="10"
      gap="gap-4"
    >
      <ui-animate
        v-for="(direction, index) in directions"
        :key="direction"
        :as="UiDiv"
        :direction="direction"
        :delay="index * 120"
        :col-span="2"
        class="items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center"
      >
        <p class="font-mono text-sm">{{ direction }}</p>
        <p class="text-xs text-gray-500">{{ index * 120 }}ms</p>
      </ui-animate>
    </ui-div>
  </ui-div>
</template>
