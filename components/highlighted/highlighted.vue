<script lang="ts" setup>
defineComponent({
  name: 'Highlighted',
});

const items1 = [
  '/servicios/foto1.jpg',
  '/servicios/foto4.jpg',
  '/servicios/foto7.jpg',
] as string[];

const description1 = [
  'Sistema de videovigilancia en Ryder',
  'Sistema de videovigilancia en Minera Adularia Celaya',
  'Sistema de videovigilancia en Municipio San Francisco del Rincón',
] as object[];

const items2 = [
  '/servicios/tulum.jpg',
  '/servicios/mina.jpg',
  '/servicios/foto8.jpg',
] as string[];

const description2 = [
  'Sistema radiocomunicación y energía solar en Aeropuerto Internacional de Tulum',
  'Extension de cobertura de radiocomunicacion dentro de la mina, en Mina Santo Domingo en Chihuahua',
  'Sistema de radiocomunicación en C4 León, Guanajuato',
] as string[];

const items3 = [
  '/servicios/migracion.jpg',
  '/servicios/trenmaya.jpg',
  '/servicios/foto9.jpg',
] as string[];

const description3 = [
  'Capacitación en C4 para migración de radiocomunicación analogico-digital',
  'Instalación de torre y sistema de radiocomunicación en Tren Maya',
  'Renta de equipo de radiocuminicación para Rally México',
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
  }, 6000);

  setInterval(() => {
    if (!carouselRef1.value) return;

    if (carouselRef1.value.page === carouselRef1.value.pages) {
      return carouselRef1.value.select(0);
    }

    carouselRef1.value.next();
  }, 6500);
  setInterval(() => {
    if (!carouselRef2.value) return;

    if (carouselRef2.value.page === carouselRef2.value.pages) {
      return carouselRef2.value.select(0);
    }

    carouselRef2.value.next();
  }, 7000);
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
          v-slot="{ item, index }"
          :items="items1"
          :ui="{ item: 'basis-full' }"
          class="highlighted-carousel-first relative"
        >
          <NuxtImg
            :draggable="false"
            :src="item"
            class="object-cover"
            format="webp"
            height="800"
            width="600"
          />
          <div
            v-if="description1[index]"
            :key="index"
            class="absolute top-0 w-full h-24 bg-plantation-800/50 z-10 text-white p-4"
          >
            {{ description1[index] }}
          </div>
        </UCarousel>

        <UCarousel
          ref="carouselRef1"
          v-slot="{ item, index }"
          :items="items2"
          :ui="{ item: 'basis-full' }"
          class="highlighted-carousel-second"
        >
          <NuxtImg
            :draggable="false"
            :src="item"
            class="object-cover"
            format="webp"
            height="800"
            width="600"
          />
          <div
            v-if="description2[index]"
            :key="index"
            class="absolute top-0 w-full h-24 bg-plantation-800/50 z-10 text-white p-4"
          >
            {{ description2[index] }}
          </div>
        </UCarousel>

        <UCarousel
          ref="carouselRef2"
          v-slot="{ item, index }"
          :items="items3"
          :ui="{ item: 'basis-full' }"
          class="highlighted-carousel-third"
        >
          <NuxtImg
            :draggable="false"
            :src="item"
            class="object-cover"
            format="webp"
            height="800"
            width="600"
          />
          <div
            v-if="description3[index]"
            :key="index"
            class="absolute top-0 w-full h-24 bg-plantation-800/50 z-10 text-white p-4"
          >
            {{ description3[index] }}
          </div>
        </UCarousel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.highlighted {
  &-container {
    @apply py-24 sm:py-32;
  }

  &-responsive {
    @apply mx-auto max-w-7xl px-6 lg:px-8;
  }

  &-text {
    @apply mx-auto max-w-2xl lg:mx-0;

    &-color {
      @apply text-5xl font-bold tracking-tight bg-gradient-to-r from-mm-600 to-mm-500 inline-block text-transparent bg-clip-text;
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
      @apply w-full h-80  rounded-lg overflow-hidden;
    }

    &-third {
      @apply w-full h-80  rounded-lg overflow-hidden block md:hidden lg:block;
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
