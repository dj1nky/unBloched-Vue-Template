<script setup>
import { ref, computed } from "vue";
import EN from "./en.json";
import unDiv from "../unDiv/unDiv.vue";

const isOpen = ref(false);

const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

const closeNav = () => {
  isOpen.value = false;
};

const navWidth = computed(() => (isOpen.value ? "100%" : "0"));
</script>

<template>
  <unDiv
    class="items-end lg:hidden"
    tag="section"
  >
    <unDiv
      v-if="isOpen"
      :class="{ overlay: isOpen }"
      @click="closeNav"
    />
    <unDiv
      :style="{ width: navWidth }"
      class="overlay"
      gap="0"
    >
      <unDiv
        v-for="item in EN"
        :key="item.id"
        class="overlay-content"
      >
        <NuxtLink
          :to="item.ROUTE"
          @click="closeNav"
        >
          {{ item.LABEL }}
        </NuxtLink>
      </unDiv>
    </unDiv>

    <unDiv class="rounded-md p-1.5">
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
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.2s;
}

.overlay-content {
  position: relative;
  top: 5%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  text-decoration: none;
  font-size: 36px;
  color: #f1f1f1;
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
</style>
