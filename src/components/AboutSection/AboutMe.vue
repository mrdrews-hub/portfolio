<script setup>
defineProps({
  content: String
})
</script>
<template>
  <div class="text-justify md:text-center text-lg leading-relaxed">
    <p class="">
      {{ content }}
    </p>
  </div>
</template>
