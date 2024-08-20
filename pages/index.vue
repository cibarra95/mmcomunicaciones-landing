<script lang="ts" setup>
defineOptions({
  name: 'Index',
});
</script>

<template>
  <div
    class="mx-auto max-w-7xl grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8"
  >
    <div class="p-24 md:order-1 hidden md:block">
      <NuxtImg
        alt="Starship starts the engine"
        class="rounded-full transition-transform transform hover:scale-125"
        height="512"
        loading="lazy"
        src="/hero.jpg"
        width="512"
      />
    </div>

    <div class="px-5">
      <h1
        class="text-mm-500 text-5xl lg:text-6xl font-bold lg:tracking-tight bg-gradient-to-r from-mm-600 to-mm-500 inline-block text-transparent bg-clip-text"
      >
        Seguridad confiable, visión clara, tranquilidad garantizada
      </h1>
      <p class="text-black text-lg mt-4 max-w-xl">
        <wbr />
        Protege lo que más importa con tecnología de vigilancia avanzada.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <UButton
          :ui="{ rounded: 'rounded-md' }"
          color="primary"
          rel="noopener"
          size="lg"
          target="_self"
          to="/acerca"
          variant="solid"
        >
          Acerca de
        </UButton>
        <UButton
          color="amber"
          rel="noopener"
          size="lg"
          target="_self"
          to="/contacto"
          variant="outline"
        >
          Contactanos
        </UButton>
      </div>
    </div>
  </div>
  <Highlighted />
  <Features />
  <TrustedLogos />
  <CallMe />
</template>

<style scoped></style>
