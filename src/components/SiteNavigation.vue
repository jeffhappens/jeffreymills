<script setup>
    import MainContainer from "./layout/MainContainer.vue"
</script>

<template>
    <main-container class="h-12 w-full font-bold flex items-center justify-between">
        <p class="text-xl">
            <router-link class="home" to="/">Jeff Mills / <span class="text-amber-500">Developer Portfolio.</span></router-link>
        </p>
        <ul class="flex items-center gap-4 text-gray-500 font-normal">
            <!-- <li><router-link to="/work">Work</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li> -->
            <li class="ml-8">
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
    </main-container>
</template>

<style scoped>
    .router-link-active:not(.home) {
        @apply text-amber-500;
    }

</style>