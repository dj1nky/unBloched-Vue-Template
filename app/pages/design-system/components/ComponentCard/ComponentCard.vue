<script setup>
import { ref } from "vue";
import UiButton from "../../../../components/ui-button/ui-button.vue";
import UiDiv from "../../../../components/ui-div/ui-div.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const showCode = ref(false);
</script>

<template>
  <section
    :id="props.item.id"
    class="scroll-mt-6 rounded-lg border border-gray-200 bg-white"
  >
    <ui-div
      direction="row"
      class="items-start justify-between p-5"
      gap="gap-4"
    >
      <ui-div gap="gap-1">
        <ui-div
          direction="row"
          class="items-center"
          gap="gap-3"
        >
          <h3 class="font-mono">{{ props.item.id }}</h3>
          <span class="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            {{ props.item.group }}
          </span>
        </ui-div>
        <p class="text-gray-600">{{ props.item.description }}</p>
        <code class="text-xs text-gray-500">{{ props.item.file }}</code>
      </ui-div>
    </ui-div>

    <div class="border-y border-gray-200 bg-gray-50 p-5">
      <slot />
    </div>

    <ui-div
      class="p-5"
      gap="gap-4"
    >
      <div
        v-if="props.item.props.length"
        class="overflow-x-auto"
      >
        <table class="w-full text-left text-sm">
          <thead class="text-xs text-gray-500 uppercase">
            <tr>
              <th class="py-2 pr-4">Prop</th>
              <th class="py-2 pr-4">Type</th>
              <th class="py-2 pr-4">Default</th>
              <th class="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prop in props.item.props"
              :key="prop.name"
              class="border-t border-gray-100 align-top"
            >
              <td class="py-2 pr-4 font-mono text-indigo-600">
                {{ prop.name }}
              </td>
              <td class="py-2 pr-4 font-mono text-gray-600">{{ prop.type }}</td>
              <td class="py-2 pr-4 font-mono text-gray-600">
                {{ prop.default }}
              </td>
              <td class="py-2 text-gray-700">{{ prop.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ui-div
        direction="row"
        gap="gap-2"
      >
        <ui-button
          :text="showCode ? 'Hide usage' : 'Show usage'"
          variant="secondary"
          class="border border-gray-200 text-sm"
          @click="showCode = !showCode"
        />
      </ui-div>
      <pre
        v-if="showCode"
        class="bg-dark overflow-x-auto rounded-lg p-4 text-sm text-white"
      ><code>{{ props.item.usage }}</code></pre>
    </ui-div>
  </section>
</template>
