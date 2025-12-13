<script setup>
import AppButton from "@/components/AppButton/AppButton.vue";
import AppContentImage from "@/components/AppContentImage/AppContentImage.vue";
import AppFormattedText from "@/components/AppFormattedText/AppFormattedText.vue";
import AppImage from "@/components/AppImage/AppImage.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
import AppForm from "~/components/AppForm/AppForm.vue";
import { useHeaderStore } from "~/stores/pageDetails.js";
import EN from "./en.json";
import schema from "./schema.json";
import ToastLayout from "../../layouts/ToastLayout.vue";

const store = useHeaderStore();
</script>

<template>
  <DefaultLayout>
    <template #content>
      <AppDiv
        animation="fade-in-up"
        card
        container
        class="p-6 text-black"
      >
        <h1 class="large-h1 font-bold">
          {{ store.header }}
        </h1>
        <AppFormattedText
          tag="p"
          :text="EN.body.description"
          animation="fade-in-down"
          text-color="blue"
        />
        <h2>
          {{ store.body }}
        </h2>
      </AppDiv>
      <AppDiv
        id="form"
        container
      >
        <AppFormattedText
          tag="h2"
          class="text-white"
          :text="schema.formTitle"
        />

        <AppForm
          :button-text="schema.submitButtonText"
          :schema="schema.fields"
        />
      </AppDiv>
      <AppDiv
        id="buttons"
        class="text-white"
        container
      >
        <h1>Grid Buttons</h1>
        <AppDiv
          :grid-cols="12"
          class="text-center text-black"
          div="grid"
        >
          <AppDiv
            class="p-6"
            card
            :col-span="4"
          >
            Grid Item 1
            <AppButton
              text="Default Button with link"
              link="https://google.com.au"
            />
            <AppButton
              text="Secondary Button with link"
              secondary
              link="https://google.com.au"
            />
          </AppDiv>
          <AppDiv
            class="p-6"
            card
            :col-span="4"
          >
            Grid Item 2
            <AppButton
              disabled
              text="Disabled Button"
            />
            <AppButton
              disabled
              text="Disabled Button"
            />
          </AppDiv>
          <AppDiv
            class="p-6"
            card
            :col-span="4"
          >
            Grid Item 3
            <AppButton
              tertiary
              text="Tertiary Button"
            />
            <AppButton
              secondary
              text="Secondary Button"
            />
          </AppDiv>
        </AppDiv>
      </AppDiv>

      <AppDiv
        id="toast"
        class="p-6"
        container
        card
      >
        <h1>Toast</h1>
        <ToastLayout />
      </AppDiv>

      <AppDiv
        id="imageContent"
        gap="gap-0"
      >
        <AppContentImage
          animation
          class="bg-white text-black"
        >
          <template #content>
            <AppDiv class="p-6">
              <h1>Image Expanded</h1>
              <AppFormattedText
                :tag="'p'"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                  natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                  cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                  laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                  Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                  cumque."
              />
            </AppDiv>
          </template>
          <template #image>
            <AppImage
              class="h-full w-full object-cover"
              img="new-york"
            />
          </template>
        </AppContentImage>

        <AppContentImage
          reverse
          animation
          class="bg-white text-black"
        >
          <template #content>
            <AppDiv class="p-6">
              <h1>Image Expanded Reversed</h1>
              <AppFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                cumque."
              />
            </AppDiv>
          </template>
          <template #image>
            <AppImage
              class="h-full w-full object-cover"
              img="new-york"
            />
          </template>
        </AppContentImage>
      </AppDiv>

      <AppDiv
        id="imageContentContainer"
        gap="gap-0"
      >
        <AppContentImage
          container
          reverse
          animation
          class="text-white"
        >
          <template #content>
            <AppDiv class="p-6">
              <h1>Animated Image Contained Reversed</h1>
              <AppFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                  natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                  cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                  laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                  Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                  cumque."
              />
            </AppDiv>
          </template>
          <template #image>
            <AppImage
              lottie
              img="images/astronaut.lottie"
            />
          </template>
        </AppContentImage>

        <AppContentImage
          container
          animation
          class="text-white"
        >
          <template #content>
            <AppDiv class="p-6">
              <h1>Animated Image Contained</h1>
              <AppFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis cumque."
              />
            </AppDiv>
          </template>
          <template #image>
            <AppImage
              lottie
              img="images/astronaut.lottie"
            />
          </template>
        </AppContentImage>
      </AppDiv>
    </template>
  </DefaultLayout>
</template>
