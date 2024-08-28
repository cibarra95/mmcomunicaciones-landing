<script lang="ts" setup>
defineOptions({
  name: 'TrustedLogos',
});

const images = [
  '/inicio/poliforum.png',
  '/inicio/dinamica.png',
  '/inicio/bomberos.png',
  '/inicio/pirelli.png',
  '/inicio/plazamayor.png',
  '/inicio/santodomingo.png',
  '/inicio/poliforum.png',
  '/inicio/dinamica.png',
  '/inicio/bomberos.png',
  '/inicio/pirelli.png',
  '/inicio/plazamayor.png',
  '/inicio/santodomingo.png',
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
      <NuxtImg :src="item" alt="images" format="webp" />
    </div>
  </Marquee>
</template>

<style scoped></style>
