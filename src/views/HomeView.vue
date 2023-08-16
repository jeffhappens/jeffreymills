<template>
  <div class="home relative overflow-x-hidden">
    <div class="bg">
      <div class="rect"></div>
    </div>

    <main-container class="h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      
      <aside class="greeting font-bold text-2xl text-gray-600 lg:text-3xl mb-8">
        <p>Hi, I'm Jeff</p>
      </aside>

      <section class="message font-bold text-5xl md:text-6xl lg:text-7xl max-w-4xl">
        <h1>I develop cutting edge websites and apps using modern tools like Laravel and VueJS.</h1>
        <aside class="subtext mt-4 text-lg text-amber-500 font-semibold lg:text-xl">
            <p>Let's turn your next design into a working product.</p>
            <p class="flex items-center gap-4 my-8 font-normal text-base text-white">
                <router-link
                    v-for="link in links"
                    :key="link"
                    :to="link.href"
                    :title="link.title"
                    role="button"
                    :aria-label="`Navigate to the ${link.label} section`"
                    class="bg-sky-500 px-2 py-1 rounded-sm transition hover:bg-sky-400">
                    {{ link.label }}
                </router-link>
            </p>
        </aside>
    </section>

    </main-container>
  </div>
</template>

<script setup>
import MainContainer from "../components/layout/MainContainer.vue";
const links = [
    { label: 'My Work', href: '/work', title: 'View the projects that I am most proud of.' },
    { label: 'About Me', href: '/about', title: 'Get to know more about me.' },
    { label: 'Get in Touch', href: '/contact', title: 'Contact Me.' },
]
// @ is an alias to /src«
</script>

<style scoped>
.greeting,
.message,
.subtext {
  opacity: 0;
  animation-delay: 1500ms;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-direction: alternate;
}
.greeting {
  animation-name: slideInLeft;
}
.message {
  animation-name: slideInRight;
}
.subtext {
  animation-name: slideInBottom;
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
  transition: 0.3s ease all;
  /* width: 100%; */
  height: 5px;
  background: #f8f8f8;

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
    height: 5px;
  }
  to {
    height: 100%;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-2%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(150%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
