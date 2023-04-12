<script setup>
    import MainContainer from "@/components/layout/MainContainer.vue"
    import PageHeadline from "@/components/PageHeadline.vue"
</script>

<template>
    <main-container>
        <PageHeadline text="About Me." />

        <div class="text-gray-400 text-3xl font-semibold mb-6">
            <h3>"Learn how to build websites" they said.</h3>
            <h3>"It's so easy" they said.</h3>
        </div>

        <p class="text-lg font-semibold text-gray-700">Well it wasn't, but nothing worth doing ever is.</p>
    </main-container>
</template>