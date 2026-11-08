<script setup>
import { ref } from "vue";
import { ClientOnly } from "#components";
import UiAnimate from "../../../../components/ui-animate/ui-animate.vue";
import UiButton from "../../../../components/ui-button/ui-button.vue";
import UiDiv from "../../../../components/ui-div/ui-div.vue";
import UiFooter from "../../../../components/ui-footer/ui-footer.vue";
import UiForm from "../../../../components/ui-form/ui-form.vue";
import UiFormattedText from "../../../../components/ui-formatted-text/ui-formatted-text.vue";
import UiHeader from "../../../../components/ui-header/ui-header.vue";
import UiIcon from "../../../../components/ui-icon/ui-icon.vue";
import UiInput from "../../../../components/ui-input/ui-input.vue";
import UiPageTitle from "../../../../components/ui-page-title/ui-page-title.vue";
import { useToastStore } from "../../../../stores/toast.js";
import { COMPONENTS } from "../../registry.js";
import ComponentCard from "../ComponentCard/ComponentCard.vue";

const toastStore = useToastStore();

const byId = Object.fromEntries(COMPONENTS.map(item => [item.id, item]));

const text = ref("");
const email = ref("");
const choice = ref("");
const agreed = ref(false);

const formSchema = {
  submitButtonText: "Send",
  successMessage: "Form sent!",
  errorMessage: "Please fix the errors",
  fields: [
    {
      id: "name",
      name: "name",
      type: "text",
      label: "Name",
      span: 6,
      validations: [{ type: "empty", message: "Name is required" }],
    },
    {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      span: 6,
      validations: [
        { type: "empty", message: "Email is required" },
        { type: "email", message: "Enter a valid email" },
      ],
    },
  ],
};
</script>

<template>
  <ui-div gap="gap-6">
    <component-card :item="byId['ui-animate']">
      <ui-animate
        :key="'preview'"
        direction="up"
        class="w-fit rounded-lg bg-white p-4"
      >
        <p>I fade up when scrolled into view.</p>
      </ui-animate>
    </component-card>

    <component-card :item="byId['ui-div']">
      <ui-div
        div="grid"
        :grid-cols="12"
        gap="gap-3"
      >
        <ui-div
          :col-span="8"
          class="bg-orange rounded p-3"
        >
          <p>col-span 8</p>
        </ui-div>
        <ui-div
          :col-span="4"
          class="bg-yellow rounded p-3"
        >
          <p>col-span 4</p>
        </ui-div>
      </ui-div>
    </component-card>

    <component-card :item="byId['ui-button']">
      <ui-div
        direction="row"
        class="flex-wrap"
        gap="gap-3"
      >
        <ui-button
          text="Primary"
          variant="primary"
        />
        <ui-button
          text="Secondary"
          variant="secondary"
          class="border border-gray-200"
        />
        <ui-button
          text="Tertiary"
          variant="tertiary"
        />
        <ui-button
          text="Disabled"
          disabled
        />
      </ui-div>
    </component-card>

    <component-card :item="byId['ui-input']">
      <ui-div
        div="grid"
        :grid-cols="12"
        gap="gap-4"
      >
        <ui-input
          v-model="text"
          :col-span="6"
          label="Text"
          placeholder="Type here"
          type="text"
        />
        <ui-input
          v-model="email"
          label="With error"
          placeholder="you@example.com"
          type="email"
          :error="email && !email.includes('@') ? 'Enter a valid email' : ''"
        />
        <ui-input
          v-model="choice"
          label="Select"
          placeholder="Pick one"
          type="select"
          :options="['One', 'Two', 'Three']"
        />
        <ui-input
          v-model="agreed"
          label="Checkbox"
          placeholder="I agree"
          type="checkbox"
        />
      </ui-div>
    </component-card>

    <component-card :item="byId['ui-form']">
      <ui-form :schema="formSchema" />
    </component-card>

    <component-card :item="byId['ui-toast']">
      <ui-div
        direction="row"
        class="flex-wrap"
        gap="gap-3"
      >
        <ui-button
          text="Success"
          bg-color="bg-green-500"
          @click="toastStore.success('This is a success message!')"
        />
        <ui-button
          text="Error"
          bg-color="bg-red-500"
          @click="toastStore.error('This is an error message!')"
        />
        <ui-button
          text="Warning"
          bg-color="bg-yellow-500"
          @click="toastStore.warning('This is a warning message!')"
        />
        <ui-button
          text="Info"
          bg-color="bg-blue-500"
          @click="toastStore.info('This is an info message!')"
        />
      </ui-div>
    </component-card>

    <component-card :item="byId['ui-icon']">
      <ClientOnly>
        <ui-div
          direction="row"
          gap="gap-4"
        >
          <ui-icon
            icon-name="material-symbols:home-rounded"
            icon-color="text-dark"
          />
          <ui-icon
            icon-name="material-symbols:mail-rounded"
            icon-color="text-burnt"
          />
          <ui-icon
            icon-name="material-symbols:favorite-rounded"
            icon-color="text-indigo-500"
          />
        </ui-div>
      </ClientOnly>
    </component-card>

    <component-card :item="byId['ui-image']">
      <p class="text-sm text-gray-600">
        Needs a real Cloudinary asset or a file in /public/images, so there is
        no live preview in the template.
      </p>
    </component-card>

    <component-card :item="byId['ui-hero']">
      <p class="text-sm text-gray-600">
        Needs an image, so there is no live preview in the template.
      </p>
    </component-card>

    <component-card :item="byId['ui-page-title']">
      <ui-page-title title="Page title" />
    </component-card>

    <component-card :item="byId['ui-formatted-text']">
      <ui-formatted-text
        tag="h2"
        text="Build <color>faster</color> with <em>less</em>"
        text-color="#fc5404"
      />
    </component-card>

    <component-card :item="byId['ui-header']">
      <div class="overflow-hidden rounded-lg">
        <ui-header />
      </div>
    </component-card>

    <component-card :item="byId['ui-footer']">
      <div class="overflow-hidden rounded-lg">
        <ui-footer />
      </div>
    </component-card>
  </ui-div>
</template>
