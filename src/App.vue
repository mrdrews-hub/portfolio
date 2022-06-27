<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";

const navBackground = ref();
const isMenuActive = ref(false)
const scrollY = ref(0)

const onClickMobileMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

const onScroll = (event) => {
  console.log(event);
}

onMounted(() => {
  window.addEventListener("scroll", (event) => {
    scrollY.value = window.scrollY
    if (window.scrollY > 100) {
      navBackground.value = ["bg-emerald-200/90", "backdrop-blur-md", 'border-b-2'];
    } else {
      navBackground.value = "";
    }
  });
  // # Hide element when click outside nav
  // const theElementContainer = document.getElementsByTagName("nav")[0];
  // document.addEventListener("click", function (event) {
  //   if (!theElementContainer.contains(event.target)) {
  //     document
  //       .getElementById("sideMenuHideOnMobile")
  //       .classList.add("-translate-y-full");
  //     document.getElementById("sideMenuHideOnMobile").classList.remove("mt-12");
  //     document
  //       .getElementById("sideMenuHideOnMobile")
  //       .classList.remove("shadow");
  //     document
  //       .getElementById("mobileMenuButtonOpen")
  //       .classList.remove("hidden");
  //     document.getElementById("mobileMenuButtonClose").classList.add("hidden");
  //   }
  // });
});
</script>

<template>
  <!-- <div class="px-4 md:px-16 sticky top-0 z-50"> -->
  <header class="bg-red-500">
    <nav
      class="fixed z-50 mx-auto inset-x-0 flex justify-between items-center"
      :class="navBackground"
      id="navigation"
    >
      <button
        id="mobileMenuButton"
        class="p-3 focus:outline-none md:hidden"
        title="Open side menu"
        @click="onClickMobileMenu"
      >
        <!-- SVG For "x" button -->
        <svg
          id="mobileMenuButtonClose"
          class="w-6 h-6"
          :class="{ hidden: !isMenuActive, shadow: isMenuActive }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <!-- SVG For "Menu burger" button -->
        <svg
          id="mobileMenuButtonOpen"
          class="w-6 h-6 z-40"
          :class="{ hidden: isMenuActive }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- List of nav item -->
      <div
        id="sideMenuHideOnMobile"
        sideMenuHideOnMobile
        :class="{ navBackground, 'mt-12': isMenuActive, shadow: isMenuActive, '-translate-y-full': !isMenuActive }"
        class="md:w-full md:py-7 md:pl-12 py-2 backdrop-blur-md z-40 rounded-bl-md flex gap-4 absolute top-0 transition-all duration-500 transform translate-x-0 w-1/2 left-0 px-3 flex-col md:flex-row md:translate-y-0 md:items-center md:text-lg font-serif font-bold"
      >
        <RouterLink
          to="/"
          href="#"
          class="hover:text-emerald-500 transition-all duration-500 py-1 sm:p-0"
          >Home</RouterLink
        >
        <RouterLink
          to="/"
          href="#"
          class="hover:text-emerald-500 transition-all duration-500 py-1 sm:p-0"
          >Project</RouterLink
        >
        <RouterLink
          to="/"
          href="#"
          class="hover:text-emerald-500 transition-all duration-500 py-1 sm:p-0"
          >Post</RouterLink
        >
        <RouterLink
          to="/"
          href="#"
          class="hover:text-emerald-500 transition-all duration-500 py-1 sm:p-0 pb-4"
          >About</RouterLink
        >
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style></style>
