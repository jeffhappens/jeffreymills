<script setup>
    import MainContainer from "@/components/layout/MainContainer.vue"
    import PageHeadline from "@/components/PageHeadline.vue"
</script>

<template>
    <main-container>
        <PageHeadline text="Let's get in touch." />

        <div>
            <p class="my-10 text-3xl text-gray-500">
                I would love to talk to you about your next project!
                <br>
                Please get in touch with me in one of the following ways:</p>
            <ul class="text-3xl text-gray-700">
                <li class="my-2">
                    <span class="text-amber-500 font-bold block md:inline-block w-[100px]">Email:</span>
                    <a href="mailto:jeffrey.mills@outlook.com">jeffrey.mills@outlook.com</a>
                </li>
            </ul>
        </div>
    </main-container>
</template>