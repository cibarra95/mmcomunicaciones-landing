<script lang="ts" setup>
defineOptions({
  name: 'TrustedMarks',
});

const logos = [
  { src: '/marcas/tplink.png', alt: 'Tp-Link' },
  { src: '/marcas/txpro.png', alt: 'Tx-pro' },
  { src: '/marcas/pttpro.png', alt: 'Pttpro' },
  { src: '/marcas/motorola.png', alt: 'Motorola' },
  { src: '/marcas/linkedpro.png', alt: 'LinkedPro' },
  { src: '/marcas/kenwood.png', alt: 'Kenwood' },
  { src: '/marcas/idis.png', alt: 'Idis' },
  { src: '/marcas/hikvision.png', alt: 'Hikvision' },
  { src: '/marcas/icom.png', alt: 'Icom' },
  { src: '/marcas/cyberpower.png', alt: 'Cyberpower' },
  { src: '/marcas/epcom.png', alt: 'Epcom' },
  { src: '/marcas/hytera.png', alt: 'Hytera' },
  { src: '/marcas/federalsignal.png', alt: 'Federal Signal' },
  { src: '/marcas/faac.png', alt: 'Faac' },
  { src: '/marcas/epever.png', alt: 'Epever' },
  { src: '/marcas/came.png', alt: 'Came' },
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
          v-for="(item, index) in logos"
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
