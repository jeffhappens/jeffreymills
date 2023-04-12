<script setup>
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()


    onMounted(() => {
        if(route.name === 'resume-download') {

            location.href = '/Jeffrey-Mills-Jr-Resume.pdf'

        }
    })

</script>

<template>
    <div></div>
    
</template>