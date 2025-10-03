<script setup>
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import unDiv from "~/components/unDiv/unDiv.vue";
import { getImage } from "~/utils/graphics";
</script>

<template>
  <DefaultLayout :image="getImage('ny')">
    <template #content>
      <unDiv container>
        <h1>unBloched Vue Template</h1>
      </unDiv>
    </template>
  </DefaultLayout>
</template>
