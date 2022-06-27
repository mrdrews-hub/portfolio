<script setup>

const skills = [
  {
    name: 'html5',
    image: '/src/assets/logo/html5.png'
  },
  {
    name: 'css3',
    image: '/src/assets/logo/css3.png'
  },
  {
    name: 'javascript',
    image: '/src/assets/logo/javascript.png'
  },
  {
    name: 'nodejs',
    image: '/src/assets/logo/nodejs.png'
  },
  {
    name: 'vuejs',
    image: '/src/assets/logo/vuejs.png'
  },
]
</script>
<template>
  <section id="skills">
    <div class="w-[90%] bg-emerald-300/50 mx-auto py-2 md:py-6 mt-4">
      <h2 class="text-center text-3xl md:text-4xl text-emerald-500 font-bold">Skills</h2>
    </div>
    <div class="skill-wrapper mt-16 md:w-[90%] flex flex-wrap gap-8 md:gap-x-56 xl:gap-x-80 md:gap-y-14 mx-auto justify-center items-center">
      <picture v-for="skill of skills" :key="skill.name">
        <img
          :src="skill.image"
          :alt="skill.name"
          class="w-[150px] md:w-[190px] grayscale hover:grayscale-0 hover:cursor-pointer transition-all"
        />
      </picture>
      <!-- <picture>
        <img
          src="@/assets/logo/css3.png"
          alt=""
          class="w-[110px] md:w-[220px]"
        />
      </picture>
      <picture>
        <img
          src="@/assets/logo/javascript.png"
          alt=""
          class="w-[110px] md:w-[220px]"
        />
      </picture>
      <picture>
        <img
          src="@/assets/logo/nodejs.png"
          alt=""
          class="w-[120px] md:w-[250px]"
        />
      </picture>
      <picture>
        <img
          src="@/assets/logo/vuejs.png"
          alt=""
          class="w-[150px] md:w-[250px]"
        />
      </picture> -->
    </div>
  </section>
</template>
