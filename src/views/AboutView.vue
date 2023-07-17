<script setup>
    import MainContainer from "@/components/layout/MainContainer.vue"
    import PageHeadline from "@/components/PageHeadline.vue"
    import timeline from '@/assets/timeline.json'
</script>

<template>
    <main-container>
        <PageHeadline text="About Me." />

        <div class="flex items-start gap-10">

            <div class="w-1/3 text-gray-400 text-2xl font-semibold mb-6 self-start sticky top-10">
                <h3>"Learn how to build websites" they said. "It's easy" they said.</h3>
                <p class="mt-4 text-lg font-semibold text-gray-700">Well it wasn't, but nothing worth doing ever is.</p>
            </div>
            


            <div class="flex-1">
                <ol class="relative border-l border-gray-200">
                    <li class="mb-10 ml-4 p-2 transition hover:bg-amber-50" v-for="time in timeline" :key="time">
                        <div class="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{ time.date }}</time>
                        <h3 class="text-lg font-semibold text-gray-900">{{ time.title }}</h3>
                        <p class="mb-4 text-base font-normal text-gray-500">{{ time.description }}</p>
                        <p v-if="time.skills">
                            <span class="font-semibold block">Skills:</span>
                            {{ time.skills }}
                        </p>
                        <!-- <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> -->
                    </li>

                </ol>
            </div>
        </div>
    </main-container>
</template>