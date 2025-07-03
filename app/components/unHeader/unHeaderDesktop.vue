<script setup>
import EN from "./en.json";
import unDiv from "../unDiv/unDiv.vue";
import { useRoute } from "#app";
import { ref } from "vue";
import { handleSubLinkClick } from "./utils/handleSubLinkClick";
import { navigateTo } from "#app";

const chevronDownIconWhite = "/icons/singleChevronWhite.svg";
const chevronDownIconBlack = "/icons/singleChevron.svg";

const route = useRoute();
const hoveredIndex = ref(null);

const isActive = (path) => {
  // Ensure the path starts with a slash for proper comparison
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return route.path === normalizedPath;
};

const handleMouseEnter = (index) => {
  hoveredIndex.value = index;
};

const handleMouseLeave = () => {
  hoveredIndex.value = null;
};
</script>

<template>
  <unDiv
    tag="header"
    class="hidden items-center justify-between py-6 lg:flex"
    direction="row"
  >
    <nav>
      <unDiv
        direction="row"
        tag="ul"
        gap="gap-4"
      >
        <li
          v-for="(item, index) in EN"
          :key="index"
          class="relative"
          :class="{
            'bg-dark rounded-lg hover:bg-white':
              isActive(item.ROUTE) && hoveredIndex !== index,
            'bg-dark hover:rounded-t-lg':
              isActive(item.ROUTE) && item.SUB_LINKS,
            'bg-dark hover:rounded-lg': isActive(item.ROUTE) && !item.SUB_LINKS,
            'hover:rounded-t-lg hover:bg-white hover:text-black':
              !isActive(item.ROUTE) && item.SUB_LINKS,
            'hover:rounded-lg hover:bg-white hover:text-black':
              !isActive(item.ROUTE) && !item.SUB_LINKS,
          }"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
        >
          <NuxtLink
            :to="item.ROUTE"
            class="block p-2 text-2xl"
          >
            <unDiv
              direction="row"
              gap="0"
              class="items-center gap-2"
            >
              {{ item.LABEL }}
              <NuxtImg
                v-if="item.SUB_LINKS"
                :src="
                  hoveredIndex === index && !isActive(item.ROUTE)
                    ? chevronDownIconBlack
                    : chevronDownIconWhite
                "
                class="h-5 w-5"
              />
            </unDiv>
          </NuxtLink>
          <unDiv
            v-if="
              hoveredIndex === index &&
                item.SUB_LINKS &&
                item.SUB_LINKS.length > 0
            "
            gap="0"
            class="absolute right-0 z-10 pt-0.5"
          >
            <NuxtLink
              v-for="(subLink, innerIndex) in item.SUB_LINKS"
              :key="innerIndex"
              :to="subLink.ROUTE"
              class="w-52 border-b-1 border-gray-200 bg-white px-4 py-3 text-lg text-black shadow-xl first:rounded-tl last:rounded-b hover:bg-gray-200 hover:font-bold"
              @click="handleSubLinkClick($event, subLink, route, navigateTo)"
            >
              {{ subLink.LABEL }}
            </NuxtLink>
          </unDiv>
        </li>
      </unDiv>
    </nav>
  </unDiv>
</template>

<style scoped></style>
