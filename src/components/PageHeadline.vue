<script setup>
    import { defineProps } from 'vue'
    const props = defineProps(['text'])
</script>
<template>
    <div class="w-3/4 md:w-1/2 my-8 py-2 border-b-2 border-amber-400">
        <h1 class="text-4xl font-semibold">{{ props.text }}</h1>
    </div>
</template>