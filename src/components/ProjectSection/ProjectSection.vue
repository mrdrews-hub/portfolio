<script setup>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation';
import ProjectCard from './ProjectCard.vue'
</script>

<template>
<section id="project" class="max-w-[90%] mx-auto">
    <div class="bg-emerald-300/50 mx-auto py-2 md:py-6 mt-4 mb-14">
        <h2 class="text-center text-3xl md:text-4xl text-emerald-500 font-bold">Project Showcase</h2>
    </div>
    <!-- <div class="cardContainer my-4 flex flex-col md:flex-row justify-center gap-2 xl:gap-x-7">
        <ProjectCard 
            title="Landing Page Tiket.com"
            content="asdasdasd"
        />
        <ProjectCard 
            title="Landing Page Tiket.com"
            content="asdasdasd"
        />
        <ProjectCard 
            title="Landing Page Tiket.com"
            content="asdasdasd"
        />
    </div> -->
<Swiper
    :modules="[Navigation]"
    navigation
    :slides-per-view="3"
    :space-between="20"
>
    <SwiperSlide>
        <ProjectCard title="Landing Page Tiket.com" content="asdasdasd" />
    </SwiperSlide>
    <SwiperSlide>
        <ProjectCard title="Landing Page Tiket.com" content="asdasdasd" />
    </SwiperSlide>
    <SwiperSlide>
        <ProjectCard title="Landing Page Tiket.com" content="asdasdasd" />
    </SwiperSlide>
    <SwiperSlide>
        <ProjectCard title="Landing Page Tiket.com" content="asdasdasd" />
    </SwiperSlide>
</Swiper>
</section>
</template>