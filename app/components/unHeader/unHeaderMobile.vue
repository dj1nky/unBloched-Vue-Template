<script setup>
import { ref, computed, watch } from "vue";
import EN from "./en.json";
import unDiv from "../unDiv/unDiv.vue";
const plusIcon = "/icons/plus.svg";

const isOpen = ref(false);

const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

const closeNav = () => {
  isOpen.value = false;
};

const navWidth = computed(() => (isOpen.value ? "100%" : "0"));

// Prevent body scroll when mobile nav is open
watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
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
      class="overlay bg-[#21242C] pt-6"
      gap="0"
    >
      <unDiv
        v-for="item in EN"
        :key="item.id"
        gap="0"
        class="overlay-content line text-xl font-light tracking-tighter uppercase italic"
        container
      >
        <NuxtLink
          :to="item.ROUTE"
          @click="closeNav"
        >
          <unDiv
            gap="gap-4"
            class="justify-between"
            direction="row"
          >
            {{ item.LABEL }}
            <NuxtImg
              class="w-6"
              :src="plusIcon"
            />
          </unDiv>
        </NuxtLink>
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
  cursor: pointer;
  display: inline-block;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 50;
}

.hamburger span {
  height: 4px;
  display: block;
  margin: 7px 0;
  margin-right: auto;
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

.line:first-child::before {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  margin: 1rem 0;
  border-radius: 2px;
  @apply bg-gradient-to-r from-[#FA7166] to-[#f6339a];
  opacity: 0.8;
}

.line:last-child::after {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  margin: 1rem 0;
  border-radius: 2px;
  @apply bg-gradient-to-r from-[#FA7166] to-[#f6339a];
  opacity: 0.8;
}

.line:not(:last-child)::after {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  margin: 1rem 0;
  border-radius: 2px;
  @apply bg-gradient-to-r from-[#FA7166] to-[#f6339a];
  opacity: 0.7;
}
</style>
