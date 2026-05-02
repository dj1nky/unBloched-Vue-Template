<script setup>
import UiButton from "@/components/ui-button/ui-button.vue";
import UiFormattedText from "@/components/ui-formatted-text/ui-formatted-text.vue";
import UiIcon from "@/components/ui-icon/ui-icon.vue";
import UiImage from "@/components/ui-image/ui-image.vue";
import PageLayout from "@/layouts/PageLayout.vue";
import UiDiv from "~/components/ui-div/ui-div.vue";
import UiForm from "~/components/ui-form/ui-form.vue";
import EN from "./en.json";
import schema from "./schema.json";
import ToastLayout from "../../layouts/ToastLayout.vue";

const sampleText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur cupiditate mollitia.";
</script>

<template>
  <page-layout page-title="Patterns">
    <template #content>
      <ui-div
        animation="fade-in-up"
        card
        class="p-6 text-black"
      >
        <h1 class="large-h1 font-bold">
          {{ EN.body.header }}
        </h1>
        <ui-formatted-text
          tag="p"
          :text="EN.body.description"
          animation="fade-in-down"
          text-color="blue"
        />
      </ui-div>

      <ui-div id="form">
        <ui-formatted-text
          tag="h2"
          class="text-white"
          :text="schema.formTitle"
        />
        <ui-form :schema="schema" />
      </ui-div>

      <ui-div
        id="buttons"
        class="text-white"
      >
        <h1>Buttons</h1>
        <ui-div
          direction="md:flex-row flex-col"
          class="text-black"
          gap="gap-4"
        >
          <ui-div
            class="p-6"
            card
            grow
          >
            Primary + Link
            <ui-button
              text="Default Button with link"
              link="https://google.com.au"
            />
            <ui-button
              text="Secondary Button with link"
              variant="secondary"
              link="https://google.com.au"
            />
          </ui-div>
          <ui-div
            class="p-6"
            card
            grow
          >
            Disabled
            <ui-button
              disabled
              text="Disabled Button"
            />
            <ui-button
              disabled
              text="Disabled Button"
            />
          </ui-div>
          <ui-div
            class="p-6"
            card
            grow
          >
            Variants
            <ui-button
              variant="tertiary"
              text="Tertiary Button"
            />
            <ui-button
              variant="secondary"
              text="Secondary Button"
            />
          </ui-div>
        </ui-div>
      </ui-div>

      <ui-div
        id="toast"
        card
        class="p-6"
      >
        <h1>Toast</h1>
        <toast-layout />
      </ui-div>

      <ui-div
        id="imageContent"
        gap="gap-0"
      >
        <ui-div
          div="flex"
          gap="gap-0"
          class="h-auto overflow-hidden bg-white text-black"
          direction="md:flex-row flex-col"
          animation="fade-in"
        >
          <ui-div
            class="p-4 md:p-12"
            animation="fade-in-up"
          >
            <h1>Image + Content</h1>
            <ui-formatted-text
              tag="p"
              :text="sampleText"
            />
          </ui-div>
          <ui-div>
            <ui-image
              class="h-full w-full object-cover"
              img="new-york"
            />
          </ui-div>
        </ui-div>

        <ui-div
          div="flex"
          gap="gap-0"
          class="h-auto overflow-hidden text-white"
          direction="md:flex-row flex-col"
          animation="fade-in"
        >
          <ui-div
            class="p-4 md:order-last md:p-12"
            animation="fade-in-up"
          >
            <h1>Reversed Layout Animated</h1>
            <ui-formatted-text
              tag="p"
              :text="sampleText"
            />
          </ui-div>
          <ui-div>
            <ui-image
              lottie
              class="h-full w-full object-cover"
              img="images/astronaut.lottie"
            />
          </ui-div>
        </ui-div>
      </ui-div>

      <ui-div
        id="imageContentContainer"
        gap="gap-0"
      >
        <ui-div
          div="flex"
          gap="gap-0"
          class="relative left-1/2 h-auto w-screen max-w-none -translate-x-1/2 overflow-hidden bg-white text-black"
          direction="md:flex-row flex-col"
          animation="fade-in"
        >
          <ui-div
            class="p-4 md:p-12"
            animation="fade-in-up"
          >
            <h1>Expanded / Full Bleed</h1>
            <ui-formatted-text
              tag="p"
              :text="sampleText"
            />
          </ui-div>
          <ui-div>
            <ui-image
              class="h-full w-full object-cover"
              img="new-york"
            />
          </ui-div>
        </ui-div>

        <ui-div
          class="py-12 text-white"
          direction="md:flex-row flex-col"
        >
          <ui-icon icon-name="material-symbols:air-freshener-outline" />
          <ui-icon icon-name="material-symbols:alarm-rounded" />
          <ui-icon icon-name="material-symbols:allergies-rounded" />
          <ui-icon icon-name="material-symbols:ar-on-you-sharp" />
          <ui-icon icon-name="material-symbols:artist-rounded" />
        </ui-div>
      </ui-div>
    </template>
  </page-layout>
</template>
