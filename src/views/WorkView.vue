<script setup>
    import MainContainer from "@/components/layout/MainContainer.vue"
    const github_base =  'https://github.com/jeffhappens'
    const projects = [
        {
            name: 'JS Tetris!',
            description: 'It\'s the classic Tetris game written in vanilla JavaScript.',
            highlights: 'N/A',
            url: 'https://tetris.jeffreymills.me',
            repoUrl: ['tetris']
        },
        {
            name: 'Flex Job Listings',
            description: 'Flex Job Listings is a job listing website for job seekers who are pursuing remote work, and employers who are seeking remote candidates. Job seekers can browse listings for free, and employers can post/manage listings for a fee.',
            highlights: 'This web application is a standalone Vue3 front-end that communicates with a standalone REST API that I developed using the latest version of the Laravel PHP framework. The Stripe API is used for payments, VUEX is used for client state, and Vue Router powers client-side routing.',
            url: 'https://www.flexjoblistings.com',
            repoUrl: [
                'spa.jobs',
                'api.jobs',
            ]
        },
        {
            name: 'SVAXA',
            description: 'SVAXA is an international dating website available in 6 different languages. It features real-time text chat with translations, a video chat component, and stripe integration for payments',
            highlights: 'SVAXA uses VueJS for the front-end and Laravel for the backend. It integrates the Stripe API for payments, the Twilio Conversations/Video API\'s for text and video chat, the DeepL API for real-time translations, AMCharts for plotting on a map.',
            url: 'https://www.svaxa.com',
            repoUrl: []
        },
        {
            name: '321 Launch',
            description: '"Follow Your Nola" was an advertising campaign created by the New Orleans Tourism &amp; Marketing Corporation (NOTMC). NOTMC chose Skuba Design Studio, my employer at the time, to develop the web component of the campaign. I participated in the development of iterations 1 and 2, and I was the sole developer of iteration 3.',
            highlights: 'Follow Your NOLA is a monolithic application powered by AngularJS on the front-end, and Laravel on the backend. It makes heavy use of the Google Maps API. Follow Your NOLA was a Webby honoree for Best Travel Website.',
            url: 'http://www.321launch.com',
            caseStudy: 'https://www.skubadesign.com/work/workPageView/321-launch-custom-website-design-and-development',
            repoUrl: []
        },
        {
            name: 'Follow your NOLA',
            description: '"Follow Your Nola" was an advertising campaign created by the New Orleans Tourism &amp; Marketing Corporation (NOTMC). NOTMC chose Skuba Design Studio, my employer at the time, to develop the web component of the campaign. I participated in the development of iterations 1 and 2, and I was the sole developer of iteration 3.',
            highlights: 'Follow Your NOLA is a monolithic application powered by AngularJS on the front-end, and Laravel on the backend. It makes heavy use of the Google Maps API. Follow Your NOLA was a Webby honoree for Best Travel Website.',
            url: 'https://www.followyournola.com',
            caseStudy: 'https://www.skubadesign.com/work/workPageView/follow-your-nola-website-design-and-development',
            repoUrl: [],
            screenshot: 'screenshot-fyn.png'
        },


    ]
</script>

<template>
    <main-container>
        <div class="w-1/2 my-8 py-2 border-b-2 border-amber-400">
            <h1 class="text-4xl font-semibold">Notable Projects</h1>
        </div>
        <div
            v-for="project in projects"
            :key="project"
            class="p-6 rounded-sm shadow text-gray-700 mb-6">
            <h2 class="text-2xl font-semibold text-gray-800 my-2">{{ project.name }}</h2>
            <p>{{ project.description }}</p>
            <h3 class="text-md font-semibold mt-4">Tech Description:</h3>
            <p>{{ project.highlights }}</p>

            <div v-if="project.caseStudy" class="my-4">
                <p class="font-semibold">Case Study:</p>
                <p>
                    <a
                        class="text-amber-500 underline"
                        :href="project.caseStudy">
                        {{ project.caseStudy }}
                    </a>
                </p>
            </div>
            <div class="my-4">
                <p class="font-semibold">Web:</p>
                <p>
                    <a
                        class="text-amber-500 underline"
                        :href="project.url">
                        {{ project.url }}
                    </a>
                </p>
            </div>

            <div v-if="project.repoUrl.length">
                <p class="font-semibold">GitHub:</p>
                <p>
                    <a
                        v-for="repo in project.repoUrl"
                        :key="repo"
                        class="text-amber-500 underline block"
                        :href="`${github_base}/${repo}`">
                        {{ github_base}}/{{ repo }}
                    </a>
                </p>
            </div>
        </div>
    </main-container>

</template>