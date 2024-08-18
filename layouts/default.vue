<script lang="ts" setup>
import Navbar from '~/components/navigation/Navbar.vue';
import Footer from '~/components/navigation/Footer.vue';
</script>

<template>
  <div class="h-full flex flex-col">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
