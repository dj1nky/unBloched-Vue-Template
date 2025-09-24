<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unForm from "~/components/unForm/unForm.vue";
import unContentImage from "@/components/unContentImage/unContentImage.vue";
import unButton from "@/components/unButton/unButton.vue";
import schema from "./schema.json";
import unFormattedText from "~/components/unFormattedText/unFormattedText.vue";
import ToastLayout from "./ToastLayout/ToastLayout.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
import { useHeaderStore } from "~/stores/pageDetails.js";
import { getImage } from "~/utils/graphics";
import EN from "./en.json";

const store = useHeaderStore();
</script>

<template>
  <DefaultLayout>
    <template #content>
      <unDiv
        card
        container
        class="p-6 text-black"
      >
        <h1 class="large-h1 font-bold">
          {{ store.header }}
        </h1>
        <unFormattedText
          tag="p"
          :text="EN.body.description"
          text-color="blue"
        />
        <h2>
          {{ store.body }}
        </h2>
      </unDiv>
      <unDiv
        id="form"
        container
      >
        <unFormattedText
          tag="h2"
          class="text-white"
          :text="schema.formTitle"
        />

        <unForm
          :button-text="schema.submitButtonText"
          :schema="schema.fields"
        />
      </unDiv>
      <unDiv
        id="buttons"
        class="text-white"
        container
      >
        <h1>Grid Buttons</h1>
        <unDiv
          :grid-cols="12"
          class="text-center text-black"
          div="grid"
        >
          <unDiv
            class="p-6"
            card
            :col-span="4"
          >
            Grid Item 1
            <unButton
              text="Default Button with link"
              link="https://google.com.au"
            />
            <unButton
              text="Secondary Button with link"
              secondary
              link="https://google.com.au"
            />
          </unDiv>
          <unDiv
            class="p-6"
            card
            :col-span="4"
          >
            Grid Item 2
            <unButton
              disabled
              text="Disabled Button"
            />
            <unButton
              disabled
              text="Disabled Button"
            />
          </unDiv>
          <unDiv
            class="p-6"
            card
            :col-span="4"
          >
            Grid Item 3
            <unButton
              tertiary
              text="Tertiary Button"
            />
            <unButton
              secondary
              text="Secondary Button"
            />
          </unDiv>
        </unDiv>
      </unDiv>

      <unDiv
        id="toast"
        class="p-6"
        container
        card
      >
        <h1 class="text-black">
          Toast
        </h1>
        <ToastLayout />
      </unDiv>

      <unDiv
        id="imageContent"
        :gap="0"
      >
        <unContentImage class="bg-white text-black">
          <template #content>
            <unDiv class="p-6">
              <h1>Image Expanded</h1>
              <unFormattedText
                :tag="'p'"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                  natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                  cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                  laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                  Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                  cumque."
              />
            </unDiv>
          </template>
          <template #image>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="getImage('ny')"
            />
          </template>
        </unContentImage>

        <unContentImage
          reverse
          class="bg-white text-black"
        >
          <template #content>
            <unDiv class="p-6">
              <h1>Image Expanded Reversed</h1>
              <unFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                cumque."
              />
            </unDiv>
          </template>
          <template #image>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="getImage('argyle', 'jpg')"
            />
          </template>
        </unContentImage>
      </unDiv>

      <unDiv
        id="imageContentContainer"
        :gap="0"
      >
        <unContentImage
          container
          reverse
          class="bg-white text-black"
        >
          <template #content>
            <unDiv class="p-6">
              <h1>Image Contained Reversed</h1>
              <unFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                  natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                  cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                  laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                  Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                  cumque."
              />
            </unDiv>
          </template>
          <template #image>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="getImage('ny')"
            />
          </template>
        </unContentImage>

        <unContentImage
          container
          class="bg-white text-black"
        >
          <template #content>
            <unDiv class="p-6">
              <h1>Image Contained</h1>
              <unFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, 
                  natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur 
                  cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet 
                  laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? 
                  Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis 
                  cumque."
              />
            </unDiv>
          </template>
          <template #image>
            <NuxtImg
              class="h-full w-full object-cover"
              :src="getImage('argyle', 'jpg')"
            />
          </template>
        </unContentImage>
      </unDiv>
    </template>
  </DefaultLayout>
</template>
