<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
  setTimeout(() => {
    gsap.fromTo("#cloud1", { x: -150 }, { x: 3000, duration: 18, repeat: -1 });
  }, 1500);
  gsap.fromTo("#cloud2", { x: -100 }, { x: 3000, duration: 24, repeat: -1, repeatDelay: 3 });
  gsap.to("#cloud3", { x: 200, duration: 10, repeat: -1, yoyo: true });
  gsap.to("#cloud4", { x: 100, duration: 14, repeat: -1, yoyo: true });
  gsap.to("#myName",{ duration: 3.5, ease: "elastic.out(1, 0.3)", y: -20,repeat: -1, repeatDelay: 4, yoyoEase:true });
  gsap.to("#status", { x: 50, duration: 10, repeat: -1, yoyo: true });
});
</script>
<template>
  <div class="jumbotron h-screen overflow-x-hidden">
    <div class="content h-5/6 w-screen relative">
      <div class="absolute top-32 left-0 right-0 mx-auto text-center z-40">
        <h1 class="text-5xl font-extrabold text-emerald-500" id="myName">
          ANDRE SAPUTRA
        </h1>
        <h2 class="text-2xl font-semibold font-mono mt-6 z-20" id="status">
          WEB DEVELOPER
        </h2>
      </div>
      <picture class="absolute bottom-6 -left-64 z-30" id="cloud1">
        <img
          src="../assets/jumbotron/Cloud1.png"
          type=""
          class="drop-shadow-md"
        />
      </picture>
      <picture class="absolute top-64 z-30" id="cloud2">
        <img
          src="../assets/jumbotron/Cloud2.png"
          type=""
          class="drop-shadow-md"
        />
      </picture>
      <picture class="absolute top-80 right-36" id="cloud3">
        <img
          src="../assets/jumbotron/Cloud3.png"
          type=""
          class="drop-shadow-md w-72"
        />
      </picture>
      <picture class="absolute top-28 left-32" id="cloud4">
        <img
          src="../assets/jumbotron/Cloud4.png"
          type=""
          class="drop-shadow-md w-44"
        />
      </picture>
    </div>
    <div
      class="h-[190px] max-w-md border-2 border-gray-400 rounded-tl-full rounded-tr-full bg-emerald-400 absolute bottom-0 left-36 -right-36 mx-auto z-20"
    >
      <img src="../assets/jumbotron/house1.png" alt="" class="absolute top-4 right-32" />
      <img src="../assets/jumbotron/tree1.png" alt="" class="absolute top-2 left-24 lg:left-32" />
      <img src="../assets/jumbotron/tree2.png" alt="" class="hidden lg:block lg:absolute bottom-10 lg:right-12" />
    </div>
    <div
      class="h-[190px] max-w-md border-2 border-gray-400 rounded-tl-full rounded-tr-full bg-emerald-500 absolute bottom-0 right-36 -left-36 mx-auto z-20"
    >
      <img src="../assets/jumbotron/house2.png" alt="" class="absolute top-16 left-40 lg:left-32" />
      <img src="../assets/jumbotron/tree3.png" alt="" class="absolute top-12 right-12 lg:right-28" />
      <img src="../assets/jumbotron/tree3.png" alt="" class="absolute -top-14 left-32 lg:right-28 w-12" />
    </div>
    <div
      class="h-[200px] max-w-md border-2 border-gray-400 rounded-tl-full rounded-tr-full bg-green-600 absolute bottom-24 left-0 right-0 mx-auto"
    >
      <img src="../assets/jumbotron/house3.png" alt="" class="absolute top-4 left-10 right-0 mx-auto" />
      <img src="../assets/jumbotron/flag.png" alt="" class="absolute -top-20 lg:-top-28 left-0 right-10 mx-auto origin-bottom z-30 drop-shadow-sm" />
    </div>
  </div>
</template>

<style>
.jumbotron {
  background: #d5eee6;
  /* background: linear-gradient(
    183deg,
    rgba(255, 251, 216, 1) 0%,
    rgba(209, 250, 229, 1) 64%
  ); */
}
/* .mountain {
  width: 360px;
  height: 190px;
  border-top-left-radius: 550px;
  border-top-right-radius: 550px;
  border: 1px solid gray;
  border-bottom: 0;
} */
</style>
