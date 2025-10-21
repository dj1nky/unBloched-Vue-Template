<script setup>
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";

import unDiv from "@/components/unDiv/unDiv.vue";

import { getIcon } from "~/utils/graphics";

import EN from "./en.json";
import { handleSubLinkClick } from "./utils/handleSubLinkClick";

const isOpen = ref(false);
const openSubLink = ref(new Set());
const router = useRouter();

const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

const navWidth = computed(() => (isOpen.value ? "100%" : "0"));

// Prevent body scroll when mobile nav is open
watch(isOpen, val => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const toggleSubLink = index => {
  if (openSubLink.value.has(index)) {
    openSubLink.value.delete(index);
    openSubLink.value = new Set(openSubLink.value); // force reactivity
  } else {
    openSubLink.value.add(index);
    openSubLink.value = new Set(openSubLink.value);
  }
};

const closeNav = () => {
  isOpen.value = false;
  document.body.style.overflow = "";
};
</script>

<template>
  <unDiv
    class="py-4 lg:hidden"
    tag="section"
  >
    <unDiv
      v-if="isOpen"
      :class="{ overlay: isOpen }"
      @click="closeNav"
    />
    <unDiv
      :style="{ width: navWidth }"
      class="overlay bg-[#21242C] pt-8"
      gap="gap-0"
    >
      <unDiv
        v-for="(item, index) in EN"
        :key="index"
        gap="gap-0"
        class="overlay-content line"
        container
      >
        <unDiv
          gap="gap-4"
          class="justify-between"
          direction="row"
        >
          <template v-if="item.SUB_LINKS">
            <NuxtLink
              class="text-2xl font-light tracking-tighter text-inherit uppercase italic select-none"
              :to="item.ROUTE || '#'"
              @click="closeNav"
            >
              {{ item.LABEL }}
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink
              class="text-2xl font-light tracking-tighter text-inherit uppercase italic"
              :to="item.ROUTE"
              @click="closeNav"
            >
              {{ item.LABEL }}
            </NuxtLink>
          </template>
          <NuxtImg
            v-if="item.SUB_LINKS"
            class="w-6"
            :src="openSubLink.has(index) ? getIcon('minus') : getIcon('plus')"
            @click.stop="toggleSubLink(index)"
          />
        </unDiv>
        <unDiv
          v-if="item.SUB_LINKS && openSubLink.has(index)"
          tag="ul"
          gap="gap-4"
          class="sub-links-list my-4"
        >
          <NuxtLink
            v-for="(subLink, innerIndex) in item.SUB_LINKS"
            :key="innerIndex"
            :to="subLink.ROUTE"
            class="hover:text-yellow text-gray-400"
            @click="
              handleSubLinkClick($event, subLink, router, router.push, closeNav)
            "
          >
            {{ subLink.LABEL }}
          </NuxtLink>
        </unDiv>
      </unDiv>
    </unDiv>

    <unDiv class="rounded-md">
      <span
        class="hamburger relative"
        :class="{ 'is-active': isOpen }"
        @click="toggleNav"
      >
        <span class="bg-white" />
        <span class="bg-white" />
        <span class="bg-white" />
      </span>
    </unDiv>
  </unDiv>
</template>

<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 40;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.2s;
}

.overlay-content {
  position: relative;
  top: 5%;
  width: 100%;
}

.overlay a {
  text-decoration: none;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #fff9a4;
}

.hamburger {
  display: inline-block;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 50;
}

.hamburger span {
  height: 4px;
  display: block;
  margin: 7px 0;
  margin-left: auto;
  border-radius: 4px;
  transition:
    background 0.2s,
    transform 0.4s ease;
}

.hamburger span:nth-child(1) {
  width: 40px;
}

.hamburger span:nth-child(2) {
  width: 35px;
}

.hamburger span:nth-child(3) {
  width: 28px;
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
  border-radius: 4px;
  width: 35px;
}

.hamburger.is-active span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
  border-radius: 4px;
  width: 35px;
}

.line:not(:last-child)::after {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  margin: 1rem 0;
  border-radius: 2px;
  background: linear-gradient(to right, #fa7166, #f6339a);
  opacity: 0.7;
}

.sub-links-list {
  list-style: none;
}

.sub-links-list li::before {
  content: "-";
  color: #f6339a;
  font-weight: bold;
  display: inline-block;
  width: 1em;
}
</style>
