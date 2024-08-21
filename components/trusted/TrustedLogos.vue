<script lang="ts" setup></script>

<template>
  <div class="bg-mm-300 py-24 sm:py-32 px-6 sm:px-4">
    <div class="flex items-center justify-center">
      <h3
        class="mb-8 text-3xl font-bold tracking-tight bg-gradient-to-r from-mm-600 to-mm-500 inline-block text-transparent bg-clip-text"
      >
        Clientes que confían en nuestra experiencia
      </h3>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
      >
        <div class="bg-mm-500/30 p-8 sm:p-10">
          <NuxtImg
            alt="Pirelli"
            class="max-h-12 w-full object-contain"
            format="webp"
            height="48"
            src="/pirelli.png"
            width="158"
          />
        </div>
        <div class="bg-mm-500/30 p-6 sm:p-10">
          <NuxtImg
            alt="dinamica"
            class="max-h-12 w-full object-contain"
            format="webp"
            height="48"
            src="/dinamica.png"
            width="158"
          />
        </div>
        <div class="bg-mm-500/30 p-6 sm:p-10">
          <NuxtImg
            alt="santo-domingo"
            class="max-h-12 w-full object-contain"
            format="webp"
            height="48"
            src="/santodomingo.png"
            width="158"
          />
        </div>
        <div class="bg-mm-500/30 p-6 sm:p-10">
          <NuxtImg
            alt="Laravel"
            class="max-h-12 w-full object-contain"
            format="webp"
            height="48"
            src="/poliforum.png"
            width="120"
          />
        </div>
        <div class="bg-mm-500/30 p-6 sm:p-10">
          <NuxtImg
            alt="SavvyCal"
            class="max-h-12 w-full object-contain"
            format="webp"
            height="50"
            src="/plazamayor.png"
            width="65"
          />
        </div>
        <div class="bg-mm-500/30 p-6 sm:p-10">
          <NuxtImg
            alt="Statamic"
            class="max-h-12 w-full object-contain"
            format="webp"
            height="48"
            src="/bomberos.png"
            width="90"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
