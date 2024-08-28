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
];
</script>

<template>
  <div class="">
    <Marquee
      :fade="true"
      class="gap-[3rem] [--duration:30s] [--gap:3rem]"
      inner-class-name=""
    >
      <div v-for="(item, index) in images" :key="index" class="h-[800px]">
        <NuxtImg :src="item" alt="images" fit="fill" format="webp" />
      </div>
    </Marquee>
  </div>
</template>

<style scoped></style>
