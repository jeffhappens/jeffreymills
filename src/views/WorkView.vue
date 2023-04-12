<script setup>
    import MainContainer from "@/components/layout/MainContainer.vue"
    
    const github_base =  'https://github.com/jeffhappens'
    const projects = [

        {
            name: 'Flex Job Listings',
            description: 'Flex Job Listings is a job listing website for job seekers who are pursuing remote work, and employers who are seeking remote candidates. Job seekers can browse listings for free, and employers can post/manage listings for a fee.',
            highlights: 'This web application is a standalone Vue3 front-end that communicates with a standalone REST API that I developed using the latest version of the Laravel PHP framework. The Stripe API is used for payments, VUEX is used for client state, and Vue Router powers client-side routing.',
            url: 'https://www.flexjoblistings.com',
            repoUrl: [
                'spa.jobs',
                'api.jobs',
            ],
            screenshot: 'screenshot-fjl.jpg'
        },
        {
            name: 'JS Tetris!',
            description: 'It\'s the classic Tetris game written in vanilla JavaScript.',
            highlights: 'This is a vanilla JavaScript game inspired by https://github.com/meth-meth-method/tetris. Most of the code game functionality is the same and it is understandable. I added some shiny graphics, instructions for controls, functions for calculating the level, and lines cleared, and also a panel with functionality to show the next tetrimino that is going to appear. And if you want sound, I included the theme song.',
            url: 'http://tetris.jeffreymills.me',
            repoUrl: ['tetris'],
            screenshot: 'screenshot-tetris.jpg'
        },

        {
            name: 'SVAXA',
            description: 'SVAXA is an international dating website available in 6 different languages. It features real-time text chat with translations, a video chat component, and Stripe integration for payments',
            highlights: 'SVAXA uses VueJS for the front-end and Laravel for the backend. It integrates the Stripe API for payments, the Twilio Conversations/Video API\'s for text and video chat, the DeepL API for real-time translations, AMCharts for plotting on a map.',
            url: 'https://www.svaxa.com',
            repoUrl: [],
            screenshot: 'screenshot-svaxa.jpg'
        },
        {
            name: '321 Launch',
            description: '',
            highlights: 'Expression Engine backend / AngularJS Front-end',
            url: 'http://www.321launch.com',
            caseStudy: 'https://www.skubadesign.com/work/workPageView/321-launch-custom-website-design-and-development',
            repoUrl: [],
            screenshot: 'screenshot-321.jpg'
        },
        {
            name: 'Follow your NOLA',
            description: 'Follow Your Nola was an advertising campaign created by the New Orleans Tourism & Marketing Corporation (NOTMC) designed to highlight the hidden gems that New Orleans had to offer. NOTMC chose Skuba Design Studio, my employer at the time, to develop the web component of the campaign. I participated in the development of iterations 1 and 2, and I was the sole developer of iteration 3.',
            highlights: 'Follow Your NOLA is a monolithic application powered by AngularJS on the front-end, and Laravel/MySQL on the backend. It makes heavy use of the Google Maps API.',
            awards: {
                name: 'Webby Awards: Honoree for Best Travel Website.',
                url: 'https://winners.webbyawards.com/2017/websites-and-mobile-sites/general-websites-and-mobile-sites/travel/25819/follow-your-nola',
            },
            
            url: 'https://www.followyournola.com',
            caseStudy: 'https://www.skubadesign.com/work/workPageView/follow-your-nola-website-design-and-development',
            repoUrl: [],
            screenshot: 'screenshot-fyn.jpg'
        },


    ]
</script>

<template>
    <main-container>
        <div class="w-1/2 my-8 py-2 border-b-2 border-amber-400">
            <h1 class="text-4xl font-semibold">I made these</h1>
        </div>
        <div
            v-for="project in projects"
            :key="project"
            class="p-6 rounded-sm shadow-md text-gray-700 mb-6">

            <div class="flex flex-row-reverse items-start justify-between gap-7 mb-10">
                <img class="w-1/4 rounded-md first-letter:shadow-sm" :src="`/img/${project.screenshot}`" />
                <div>
                    <h2 class="text-3xl font-semibold text-gray-800 my-2">{{ project.name }}</h2>
                    <p class="text-xl text-gray-500">{{ project.description }}</p>
                </div>

            </div>


            <h3 class="text-lg font-semibold mt-4">Technical Details:</h3>
            <p>{{ project.highlights }}</p>

            <div v-if="project.caseStudy" class="my-2">
                <p class="font-semibold">Case Study:</p>
                <p>
                    <a
                        class="text-amber-500 underline"
                        :href="project.caseStudy">
                        {{ project.caseStudy }}
                    </a>
                </p>
            </div>

            <div class="flex items-start gap-10">
            <div class="my-2">
                <p class="font-semibold">Web:</p>
                <p>
                    <a
                        class="text-amber-500 underline"
                        :href="project.url">
                        {{ project.url }}
                    </a>
                </p>
            </div>

            <div v-if="project.repoUrl.length" class="my-2">
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
        </div>
    </main-container>

</template>