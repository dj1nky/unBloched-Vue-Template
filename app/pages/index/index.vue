<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unFormattedText from "@/components/unFormattedText/unFormattedText.vue";
import unContentImage from "~/components/unContentImage/unContentImage.vue";
import unDiv from "@/components/unDiv/unDiv.vue";
import img from "/images/ny.webp";
import EN from "./en.json";
</script>

<template>
  <DefaultLayout>
    <unDiv
      class="md:py-24"
      :container="true"
    >
      <unDiv>
        <h1 class="large-h1 font-bold">
          {{ EN.body.header }}
        </h1>
        <unFormattedText
          :tag="'p'"
          :text="EN.body.description"
        />
      </unDiv>
      <unDiv
        :grid-cols="12"
        class="text-center text-black"
        div="grid"
      >
        <unDiv
          class="p-6"
          :card="true"
          :col-span="4"
        >
          Grid Item 1
        </unDiv>
        <unDiv
          class="p-6"
          :card="true"
          :col-span="4"
        >
          Grid Item 2
        </unDiv>
        <unDiv
          class="p-6"
          :card="true"
          :col-span="4"
        >
          Grid Item 3
        </unDiv>
      </unDiv>
    </unDiv>
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
          class="object-cover object-top md:h-84"
          :src="img"
        />
      </template>
    </unContentImage>

    <unContentImage
      :container="true"
      :reverse="true"
      height="h-auto"
      class="bg-white text-black"
    >
      <template #content>
        <unDiv class="p-6">
          <h1>Image Contained Reversed</h1>
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
          class="object-cover object-top md:h-84"
          :src="img"
        />
      </template>
    </unContentImage>
  </DefaultLayout>
</template>
