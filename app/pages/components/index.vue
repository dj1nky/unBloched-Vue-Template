<script setup>
import { NuxtImg } from "#components";
import unButton from "@/components/unButton/unButton.vue";
import unContentImage from "@/components/unContentImage/unContentImage.vue";
import unDiv from "@/components/unDiv/unDiv.vue";
import unForm from "@/components/unForm/unForm.vue";
import unFormattedText from "@/components/unFormattedText/unFormattedText.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useHeaderStore } from "~/stores/pageDetails.js";
import { getImage } from "~/utils/graphics";
import ToastLayout from "./ToastLayout/ToastLayout.vue";
import EN from "./en.json";
import schema from "./schema.json";

const store = useHeaderStore();
</script>

<template>
  <DefaultLayout>
    <template #content>
      <unDiv
        animation="fade-in-up"
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
          animation="fade-in-down"
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
        <h1>Toast</h1>
        <ToastLayout />
      </unDiv>

      <unDiv
        id="imageContent"
        gap="gap-0"
      >
        <unContentImage
          animation
          class="bg-white text-black"
        >
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
          animation
          height="max-h-96"
          class="text-white"
        >
          <template #content>
            <unDiv class="p-6">
              <h1>
                Image Expanded Reversed different flexes Restricted height
              </h1>
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

        <unContentImage
          animation
          class="text-white"
        >
          <template #content>
            <unDiv class="p-6">
              <h1>Image Expanded Reversed different flexes</h1>
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
      </unDiv>

      <unDiv
        id="imageContentContainer"
        gap="gap-0"
      >
        <unContentImage
          container
          reverse
          animation
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
          height="max-h-96"
          animation
          class="bg-white text-black"
        >
          <template #content>
            <unDiv class="p-6">
              <h1>Image Contained Restricted Height</h1>
              <unFormattedText
                tag="p"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, natus beatae aut saepe nemo neque obcaecati sint dolorem consequatur cupiditate mollitia, autem, repellendus modi sapiente accusamus ex amet laborum doloremque nesciunt consectetur. A voluptates animi iste eligendi numquam? Delectus et sit corporis, nisi magnam veniam impedit quia necessitatibus perferendis cumque."
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
