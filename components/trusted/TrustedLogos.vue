<script lang="ts" setup>
defineOptions({
  name: 'TrustedLogos',
});

const images = [
  { src: '/inicio/poliforum.png', alt: 'Poliforum' },
  { src: '/inicio/dinamica.png', alt: 'Dinámica' },
  { src: '/inicio/bomberos.png', alt: 'Bomberos' },
  { src: '/inicio/pirelli.png', alt: 'Pirelli' },
  { src: '/inicio/plazamayor.png', alt: 'Plaza Mayor' },
  { src: '/inicio/santodomingo.png', alt: 'Santo Domingo' },
  { src: '/inicio/akron.png', alt: 'Akron' },
  { src: '/inicio/altacia.png', alt: 'Altacia' },
  { src: '/inicio/andrea.png', alt: 'Andrea' },
  { src: '/inicio/castores.png', alt: 'Castores' },
  { src: '/inicio/cruzazul.png', alt: 'Cruz Azul' },
  { src: '/inicio/gova.png', alt: 'Gova' },
  { src: '/inicio/reyes.png', alt: 'Reyes' },
  { src: '/inicio/ryder.png', alt: 'Ryder' },
  { src: '/inicio/martinrea.png', alt: 'Martin Rea' },
  { src: '/inicio/ugn.png', alt: 'Ugn' },
  { src: '/inicio/sembradora.png', alt: 'Sembradora' },
];

defineProps({
  bg: {
    type: String,
    required: false,
    default: '',
  },
});
</script>

<template>
  <div :class="{ 'bg-plantation-300': bg }" class="bg-transparent">
    <div class="container mx-auto max-w-7xl">
      <Marquee
        :fade="true"
        class="gap-[3rem] [--duration:90s] [--gap:3rem]"
        inner-class-name=""
      >
        <div
          v-for="(item, index) in images"
          :key="index"
          class="w-40 h-40 flex items-center justify-center"
        >
          <NuxtImg :alt="item.alt" :src="item.src" format="webp" />
        </div>
      </Marquee>
    </div>
  </div>
</template>

<style scoped></style>
