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
  { src: '/inicio/poliforum.png', alt: 'Poliforum' },
  { src: '/inicio/dinamica.png', alt: 'Dinámica' },
  { src: '/inicio/bomberos.png', alt: 'Bomberos' },
  { src: '/inicio/pirelli.png', alt: 'Pirelli' },
  { src: '/inicio/plazamayor.png', alt: 'Plaza Mayor' },
  { src: '/inicio/santodomingo.png', alt: 'Santo Domingo' },
];
</script>

<template>
  <Marquee
    :fade="true"
    class="gap-[3rem] [--duration:30s] [--gap:3rem]"
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
</template>

<style scoped></style>
