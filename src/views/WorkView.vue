<script setup>
    import MainContainer from "@/components/layout/MainContainer.vue"
    import PageHeadline from "@/components/PageHeadline.vue"
    import WorkProject from "@/components/WorkProject.vue"
    import projects from '@/assets/projects.json'

</script>

<template>
    <main-container>
        
        <PageHeadline text="I made these." />

        <div
            v-for="project in projects"
            :key="project"
            class="rounded-lg shadow-lg text-gray-700 mb-14">

            <WorkProject :project="project" />

        </div>
    </main-container>

</template>