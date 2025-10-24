<script lang="ts" setup></script>

<template>
  <div class="bg-gradient-to-r from-mm-600 to-mm-500">
    <div
      class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8"
    >
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-white"
      >
        ¿Listo para sumergirte?<br />Contáctanos
      </h2>
      <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <a
          v-if="false"
          class="rounded-md bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          href="tel:+52 477 777 1140"
          target="_blank"
          >Llámanos
        </a>
        <UButton
          color="indigo"
          rel="noopener"
          size="xl"
          target="_blank"
          to="tel:+524777771140"
          variant="solid"
        >
          Llámanos
        </UButton>
        <UButton
          color="lime"
          rel="noopener"
          size="xl"
          target="_blank"
          to="https://wa.me/+524793000148?text=Hola,%20quiero%20más%20información"
          variant="solid"
        >
          WhatsApp
        </UButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
