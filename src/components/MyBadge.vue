<script setup>
defineProps({
    text: String,
    color: String,
    icon: String
})
</script>

<template>
  <div
    class="rounded-full bg-gray-300 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
    <div class="rounded-full w-9 h-9 max-w-none" alt="A">
        <svg role="img" :fill="color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path :d="icon"/></svg>
    </div>
    <span class="flex items-center px-3 py-2">
      {{ text }}
    </span>
  </div>
</template>