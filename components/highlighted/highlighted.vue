<script lang="ts" setup>
import { NuxtImg } from '#components';

defineComponent({
  name: 'Highlighted',
});

const items1 = [
  'cctv.jpg',
  'cameras.jpg',
  'drone.jpg',
  'cctv2.jpg',
] as string[];

const items2 = [
  'cctv.jpg',
  'cameras.jpg',
  'drone.jpg',
  'cctv2.jpg',
] as string[];

const items3 = [
  'cctv.jpg',
  'cameras.jpg',
  'drone.jpg',
  'cctv2.jpg',
] as string[];

const carouselRef = ref();
const carouselRef1 = ref();
const carouselRef2 = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 4000);

  setInterval(() => {
    if (!carouselRef1.value) return;

    if (carouselRef1.value.page === carouselRef1.value.pages) {
      return carouselRef1.value.select(0);
    }

    carouselRef1.value.next();
  }, 5000);
  setInterval(() => {
    if (!carouselRef2.value) return;

    if (carouselRef2.value.page === carouselRef2.value.pages) {
      return carouselRef2.value.select(0);
    }

    carouselRef2.value.next();
  }, 6000);
});
</script>

<template>
  <div class="highlighted-container">
    <div class="highlighted-responsive">
      <div class="highlighted-text">
        <h2 class="highlighted-text-color">Nuestros Trabajos</h2>
      </div>
      <div class="highlighted-carousel-container">
        <UCarousel
          ref="carouselRef"
          v-slot="{ item }"
          :items="items1"
          :ui="{ item: 'basis-full' }"
          class="highlighted-carousel-first"
        >
          <NuxtImg :draggable="false" :src="item" height="800" width="600" />
        </UCarousel>

        <UCarousel
          ref="carouselRef1"
          v-slot="{ item }"
          :items="items2"
          :ui="{ item: 'basis-full' }"
          class="highlighted-carousel-second"
        >
          <NuxtImg :draggable="false" :src="item" height="800" width="600" />
        </UCarousel>
        <UCarousel
          ref="carouselRef2"
          v-slot="{ item }"
          :items="items3"
          :ui="{ item: 'basis-full' }"
          class="highlighted-carousel-third"
        >
          <img :src="item" alt="trabajos" height="800" width="600" />
        </UCarousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.highlighted {
  &-container {
    @apply bg-white py-24 sm:py-32;
  }

  &-responsive {
    @apply mx-auto max-w-7xl px-6 lg:px-8;
  }

  &-text {
    @apply mx-auto max-w-2xl lg:mx-0;

    &-color {
      @apply text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-[#1B2450] via-[#7CAAF1] to-[#9AC0F6] inline-block text-transparent bg-clip-text;
    }
  }

  &-carousel-container {
    @apply mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3;
  }

  &-carousel {
    &-first {
      @apply w-full h-80  rounded-lg overflow-hidden;
    }

    &-second {
      @apply w-full h-80  rounded-lg overflow-hidden hidden sm:block;
    }

    &-third {
      @apply w-full h-80  rounded-lg overflow-hidden hidden lg:block;
    }
  }
}

.carousel_ {
  &_slide {
    padding: 5px;
  }

  &_viewport {
    perspective: 2000px;
  }

  &_track {
    transform-style: preserve-3d;
  }

  &_slide--sliding {
    transition: 0.5s;
  }

  &_slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  &_slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  &_slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  &_slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  &_slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }
}
</style>
