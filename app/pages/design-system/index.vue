<script setup>
import { useHead } from "#imports";
import Animations from "./components/Animations/Animations.vue";
import Components from "./components/Components/Components.vue";
import Foundations from "./components/Foundations/Foundations.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Stack from "./components/Stack/Stack.vue";
import UiAnimate from "../../components/ui-animate/ui-animate.vue";
import UiDiv from "../../components/ui-div/ui-div.vue";
import PageLayout from "../../layouts/PageLayout.vue";

useHead({ title: "Design System" });
</script>

<template>
  <page-layout>
    <div class="flex min-h-screen flex-col md:flex-row">
      <sidebar />
      <main class="min-w-0 flex-1 bg-gray-50">
        <ui-div
          class="mx-auto max-w-5xl p-6 md:p-10"
          gap="gap-16"
        >
          <ui-animate
            :as="UiDiv"
            direction="none"
            gap="gap-2"
          >
            <h1 class="large-h1 font-bold">Design System</h1>
            <p class="max-w-prose text-gray-600">
              Every token, component, composable and package in this template.
            </p>
          </ui-animate>

          <section
            id="foundations"
            class="scroll-mt-6"
          >
            <ui-div gap="gap-6">
              <h2>Foundations</h2>
              <foundations />
            </ui-div>
          </section>

          <section
            id="components"
            class="scroll-mt-6"
          >
            <ui-div gap="gap-6">
              <h2>Components</h2>
              <components />
            </ui-div>
          </section>

          <section
            id="animation"
            class="scroll-mt-6"
          >
            <ui-div gap="gap-6">
              <h2>Animation</h2>
              <animations />
            </ui-div>
          </section>

          <section
            id="stack"
            class="scroll-mt-6"
          >
            <ui-div gap="gap-6">
              <h2>Stack</h2>
              <stack />
            </ui-div>
          </section>
        </ui-div>
      </main>
    </div>
  </page-layout>
</template>
