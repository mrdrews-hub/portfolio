<script setup>
import { ref } from 'vue'

import ProfileCard from "../ProfileCard.vue";
import AboutMe from "./AboutMe.vue";
import AboutSkill from "./AboutSkill.vue";

const about = `
      Saya adalah seorang lulusan S1 Teknik Informatika STMIK
      Tasikmalaya,memiliki fashion di bidang teknologi khususnya web
      development.Saya senang dalam mencari dan mempelajari pengetahuan,
      tantangan, dan hal-hal baru untuk meningkatkan serta mengasah kemampuan saya. 😀
`

</script>

<template>
  <section class="text-gray-800 bg-gray-100 py-6 flex flex-col md:flex-row justify-center items-center my-28">
    <ProfileCard />
    <div
      class="content w-full md:w-[50%] h-max pb-8 bg-emerald-200 backdrop-blur-md pr-5 pl-10 -ml-6 z-0"
    >
      <div
        class="md:w-[75%] bg-red-400 rounded-bl-xl rounded-br-md rounded-tr-xl rounded-tl-md -mt-2 md:-mt-4 mx-auto"
      >
        <h2 class="text-xl text-center font-bold px-2 py-2">Halo, 👋</h2>
      </div>
      <div
        class="flex flex-col md:justify-center items-center h-full"
      >
      <div class="description mt-4">
        <AboutMe :content="about"/>
      </div>
      <div class="skill mt-12">
        <h1 class="text-center font-bold mb-4">Abilities:</h1>
        <AboutSkill  />
      </div>
      </div>
    </div>
  </section>
</template>
