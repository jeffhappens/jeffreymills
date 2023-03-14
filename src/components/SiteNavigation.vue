<script setup>
    
    import MainContainer from "./layout/MainContainer.vue"
    function toggleMobileMenu() {
        let mobileMenu = document.getElementById('mobile-menu')
        mobileMenu.classList.toggle('hidden')
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
        <div class="flex gap-7">
            <ul class="hidden items-center gap-2 text-gray-500 text-sm font-normal md:flex">
                <li><router-link to="/work">Work</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
            <ul class="flex items-center gap-2 text-gray-500 font-normal">
                <li class="cursor-pointer block md:hidden mr-2" @click="toggleMobileMenu">
                    <font-awesome-icon class="text-github-500 text-3xl" icon="fa-solid fa-close" />
                    <font-awesome-icon class="text-github-500 text-3xl" icon="fa-solid fa-bars" />
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jeffreyalanmills" title="View my LinkedIn Profile">
                        <font-awesome-icon class="text-linkedin-500 text-3xl" icon="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/jeffhappens" title="View my Github Profile">
                        <font-awesome-icon class="text-github-500 text-3xl" icon="fa-brands fa-square-github" />
                    </a>
                </li>
            </ul>
        </div>
    </main-container>
    <div id="mobile-menu" class="hidden md:hidden w-full">
        <main-container>
            <ul class="m-2 flex flex-col items-end gap-1 font-semibold">
                <li><router-link to="/work">Work</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </main-container>
    </div>
</template>

<style scoped>
    .router-link-active:not(.home) {
        @apply text-amber-500;
    }

</style>