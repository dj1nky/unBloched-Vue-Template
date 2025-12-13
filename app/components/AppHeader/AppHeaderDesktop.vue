<script setup>
import { computed, ref } from "vue";
import { navigateTo, useRoute } from "#app";
import { NuxtLink } from "#components";
import AppDiv from "~/components/AppDiv/AppDiv.vue";
import AppIcon from "~/components/AppIcon/AppIcon.vue";
import { useHandleSubLinkClick } from "./composables/useHandleSubLinkClick";
import { useNavItemClasses } from "./composables/useNavItemClasses";
import EN from "./en.json";

const { handleSubLinkClick } = useHandleSubLinkClick();
const { getNavItemClasses } = useNavItemClasses();

const route = useRoute();
const hoveredIndex = ref(null);

const isActive = path => {
  // Ensure the path starts with a slash for proper comparison
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return route.path === normalizedPath;
};

const handleMouseEnter = index => {
  hoveredIndex.value = index;
};

const handleMouseLeave = () => {
  hoveredIndex.value = null;
};

const navItemClasses = computed(() => {
  return (item, index) =>
    getNavItemClasses(item, index, isActive, hoveredIndex.value);
});
</script>

<template>
  <AppDiv
    tag="header"
    class="hidden items-center justify-between py-6 lg:flex"
    direction="row"
  >
    <nav>
      <AppDiv
        direction="row"
        tag="ul"
        gap="gap-4"
      >
        <li
          v-for="(item, index) in EN"
          :key="index"
          class="relative"
          :class="navItemClasses(item, index)"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
        >
          <NuxtLink
            :to="item.ROUTE"
            class="block p-2 text-2xl"
          >
            <AppDiv
              direction="row"
              gap="gap-0"
              class="items-center gap-2 px-2"
            >
              {{ item.LABEL }}
              <AppIcon
                v-if="item.SUB_LINKS"
                class="h-5 w-5"
                :icon-color="
                  hoveredIndex === index && !isActive(item.ROUTE)
                    ? 'text-black'
                    : ''
                "
                icon-name="material-symbols:keyboard-arrow-down-rounded"
              ></AppIcon>
            </AppDiv>
          </NuxtLink>
          <AppDiv
            v-if="
              hoveredIndex === index &&
              item.SUB_LINKS &&
              item.SUB_LINKS.length > 0
            "
            gap="gap-0"
            class="absolute right-0 z-10 pt-0.5"
          >
            <NuxtLink
              v-for="(subLink, innerIndex) in item.SUB_LINKS"
              :key="innerIndex"
              :to="subLink.ROUTE"
              class="w-52 border-b-1 border-gray-200 bg-white px-4 py-3 text-lg text-black shadow-xl first:rounded-tl last:rounded-b hover:bg-gray-200 hover:font-bold"
              @click="
                handleSubLinkClick($event, subLink, route, navigateTo, null)
              "
            >
              {{ subLink.LABEL }}
            </NuxtLink>
          </AppDiv>
        </li>
      </AppDiv>
    </nav>
  </AppDiv>
</template>

<style scoped></style>
