<script setup>
import EN from "./en.json";
import unDiv from "../unDiv/unDiv.vue";
import { useRoute } from "#app";
import { ref } from "vue";

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

const handleSubLinkClick = (event, subLink) => {
  // Check if it's an anchor link (contains #)
  if (subLink.ROUTE.includes("#")) {
    event.preventDefault();
    const [path, anchor] = subLink.ROUTE.split("#");

    // If we're not on the target page, navigate first
    if (route.path !== path) {
      navigateTo(subLink.ROUTE);
    } else {
      // We're already on the page, just scroll to the anchor
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }
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
          class="relative rounded-lg"
          :class="{
            'bg-dark': isActive(item.ROUTE),
            'hover:bg-white hover:text-black': !isActive(item.ROUTE),
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
            class="absolute left-0 z-10"
          >
            <NuxtLink
              v-for="(subLink, innerIndex) in item.SUB_LINKS"
              :key="innerIndex"
              :to="subLink.ROUTE"
              class="border border-gray-200 bg-white px-4 py-3 text-lg whitespace-pre text-black shadow-lg first:rounded-t last:rounded-b hover:bg-gray-200"
              @click="handleSubLinkClick($event, subLink)"
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
