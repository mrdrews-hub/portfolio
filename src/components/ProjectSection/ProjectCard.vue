<script setup>
defineProps({
  thumbnail: String,
  title: String,
  content: String,
  date: String,
  link: String,
});
</script>
<template>
  <div
    class="group relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4 max-w-md mb-12 drop-shadow-xl"
  >
    <img
      src="https://komerce.id/blog/wp-content/uploads/2021/04/tiket-1024x529.png"
      class="block w-full brightness-90"
    />
    <div
      class="absolute bottom-0 left-0 right-0 bg-black/50 overflow-hidden w-full h-1/4 group-hover:h-1/2 transition-all duration-500 flex justify-center"
    >
      <h2 class="text-xl font-bold text-center text-white absolute inset-x-0 mt-2">
        Landing Page Tiket.com
      </h2>
      <button
        class="px-6 py-2.5 bg-blue-600 absolute bottom-4 opacity-0 group-hover:opacity-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition-all duration-300 delay-150 ease-in-out"
      >
        Show more
      </button>
    </div>
  </div>

  <!-- <div class="card max-w-md relative h-[215px] hover:h-[420px] bg-slate-200 mx-3 my-7 flex flex-col shadow-md transition-all duration-300 ease-in-out border-2 border-gray-200">
    <div class="thumbnail relative -top-14">
        <img src="https://komerce.id/blog/wp-content/uploads/2021/04/tiket-1024x529.png" alt="" class="w-full">
    </div>
    <div class="card-content relative -mt-36 py-3 px-4 text-center opacity-0 transition-all ease-in-out hover:visible hover:opacity-100">
      <div class="card-title"><h2 class="font-bold text-xl my-2">{{ title }}</h2></div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ipsum doloribus dolor ad pariatur consequuntur dolorem laudantium corporis quasi veniam?
        </p>
    </div>
  </div> -->
  <!-- <div class="max-w-sm lg:mb-0">
        <div class="relative block bg-white rounded-lg shadow-lg">
          <div class="flex">
            <div
              class="relative overflow-hidden bg-no-repeat bg-cover bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4">
              <img src="https://komerce.id/blog/wp-content/uploads/2021/04/tiket-1024x529.png" class="w-full" />
              <a href="#!">
                <div
                  class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style="background-color: rgba(251, 251, 251, 0.15)"></div>
              </a>
            </div>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">{{title}}</h5>
            <p class="mb-4 pb-2">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna
              placerat vulputate. Ut vulputate est non quam dignissim
              elementum. Donec a ullamcorper diam.
            </p>
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
              more</a>
          </div>
        </div>
      </div> -->
</template>
