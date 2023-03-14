<template>
    <div class="home relative overflow-x-hidden">

        <!-- <div class="bg">
            <div class="rect"></div>
        </div> -->

        <main-container class="h-[calc(100vh-3.5rem)] flex flex-col justify-evenly">
            
            <aside class="font-bold text-xl">
                <p>Hi, I'm Jeff</p>
            </aside>
            <section class="font-bold text-5xl">
                <h1>I develop cutting edge websites and apps using modern tools like Laravel and VueJS.</h1>
            </section>
            <aside class="text-lg text-gray-500">
                <p>I can turn your design into a working product.</p>
            </aside>
            
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
    animation-delay: 1500ms;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-direction: alternate;
}
.message {
    opacity: 0;
    animation-name: slideInLeft;
    animation-delay: 1500ms;
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
    /* width: 100%; */
    height: 50px;
    background: #eee;

    animation-name: fullWidth, fullHeight;
    animation-duration: 750ms;
    animation-delay: 250ms, 1000ms; /* add this */
    animation-timing-function: cubic-bezier(0.04, 0.65, 0.2, 1);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;



}

@keyframes fullWidth {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;

    }
}
@keyframes fullHeight {
    from {
        height: 50px;
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
