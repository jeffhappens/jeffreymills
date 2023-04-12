<script setup>
    import { defineProps } from 'vue'
    const github_base =  'https://github.com/jeffhappens'
    const props = defineProps(['project'])
</script>
<template>

    <div class="md:flex md:flex-row-reverse gap-5 items-start justify-between mb-2 p-6">

        <img class="md:w-1/3 rounded-lg mb-8 md:mb-0" :src="`/img/${props.project.screenshot}`">

        <div class="flex-1">
            <h2 class="text-2xl font-semibold text-gray-800 my-2">{{ props.project.name }}</h2>
            <p>{{ props.project.description }}</p>
        </div>
        
    </div>

    <div class="bg-gray-50 p-6">

        <div class="mb-4">
            <h3 class="text-lg font-semibold">Tech Description:</h3>
            <p>{{ props.project.highlights }}</p>
        </div>

        <div v-if="props.project.caseStudy" class="mb-4">
            <p class="font-semibold">Case Study:</p>
            <p>
                <a
                    class="text-amber-500 underline"
                    :href="props.project.caseStudy">
                    {{ props.project.caseStudy }}
                </a>
            </p>
        </div>

        <div v-if="props.project.awards" class="mb-4">
            <p class="font-semibold">Awards:</p>
            <p>{{ props.project.awards.name }}</p>
            <p>
                <a
                    class="text-amber-500 underline"
                    :href="props.project.awards.url">
                    {{ props.project.awards.url }}
                </a>
            </p>
        </div>

        <div class="md:flex items-start gap-10">
            <div class="">
                <p class="font-semibold">Web:</p>
                <p>
                    <a
                        class="text-amber-500 underline"
                        :href="props.project.url">
                        {{ props.project.url }}
                    </a>
                </p>
            </div>

            <div v-if="project.repoUrl.length">
                <p class="font-semibold">GitHub:</p>
                <p>
                    <a
                        v-for="repo in props.project.repoUrl"
                        :key="repo"
                        class="text-amber-500 underline block"
                        :href="`${github_base}/${repo}`">
                        {{ github_base}}/{{ repo }}
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>