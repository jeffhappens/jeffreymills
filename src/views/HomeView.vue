<template>
    <div class="home relative overflow-x-hidden">

        <div class="bg">
            <div class="rect"></div>
        </div>

        <main-container class="flex items-center h-[calc(100vh-3rem)] font-semibold text-3xl">
            
            <aside class="flex-1 greeting">
                <p>Hi, I'm Jeff</p>
            </aside>
            <section class="w-3/4 text-7xl font-bold message">
                <h1 class="mb-6">I develop cutting edge websites and apps using modern tools like Laravel and VueJS.</h1>
                <p class="text-2xl text-gray-500">I can turn your design into a working product.</p>

            </section>
            
        </main-container>
    </div>
</template>

<script setup>
    import MainContainer from '../components/layout/MainContainer.vue'
    // @ is an alias to /src

    // export default {
        //   name: 'HomeView',
    // }
</script>

<style scoped>

.greeting {
    opacity: 0;
    animation-name: slideDown;
    animation-delay: .15s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-direction: alternate;
}
.message {
    opacity: 0;
    animation-name: slideInLeft;
    animation-delay: .15s;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-direction: alternate;
}
.bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.rect {
    transition: .3s ease all;
    width: 100%;
    height: 0;
    background: #eee;



    animation-name: fullHeight;
    animation-duration: 500ms;
    animation-delay: 250ms; /* add this */
    animation-timing-function: cubic-bezier(0.04, 0.65, 0.2, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;



}

@keyframes fullWidth {
    0% {
        width: 25%;
    }
    100% {
        width: 85%;

    }
}
@keyframes fullHeight {
    from {
        height: 25%;
    }
    to {
        height: 100%;
    }
}


@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-200%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateY(15%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

</style>
