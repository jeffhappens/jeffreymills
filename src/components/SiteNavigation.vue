<script setup>
import { useStore } from "vuex";
import MainContainer from "./layout/MainContainer.vue";

const store = useStore();

function toggleMenu() {
  store.dispatch("SET_MOBILE_MENU", !store.getters.mobileMenuState);
}
</script>

<template>
  <main-container class="h-14 font-bold flex items-center justify-between">
    <p class="text-lg leading-5">
      <router-link class="home" to="/">
        Jeff Mills /
        <span class="text-amber-500 block md:inline">Developer Portfolio.</span>
      </router-link>
    </p>

    <div class="flex items-center gap-5">
      <p
        @click="toggleMenu"
        class="md:hidden text-gray-500 text-sm underline-offset-4 underline"
      >
        MENU
      </p>
      <ul
        class=""
        :class="{
          'w-full p-4 absolute top-14 left-0 z-10 bg-gray-900 text-white flex justify-around font-normal':
            store.state.mobileMenu,
          'hidden p-4 items-center gap-2 text-sm font-normal md:flex md:static md:bg-white md:text-gray-900':
            !store.state.mobileMenu,
        }"
      >
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <ul class="flex items-center gap-2 text-gray-500 font-normal">
        <li>
          <a
            href="https://www.linkedin.com/in/jeffreyalanmills"
            title="View my LinkedIn Profile"
          >
            <font-awesome-icon
              class="text-linkedin-500 text-3xl"
              icon="fa-brands fa-linkedin"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/jeffhappens"
            title="View my Github Profile"
          >
            <font-awesome-icon
              class="text-github-500 text-3xl"
              icon="fa-brands fa-square-github"
            />
          </a>
        </li>
      </ul>
    </div>
  </main-container>
</template>

<style scoped>
.router-link-active:not(.home) {
  @apply text-amber-500;
}
</style>
