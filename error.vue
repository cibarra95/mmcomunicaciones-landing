<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
  <main
    class="grid min-h-screen place-items-center bg-mm-300 px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <p class="text-base font-semibold text-mm-500">
        {{ error.statusCode }}
      </p>
      <h1
        class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
      >
        {{ error.statusMessage }}
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        {{ error.url }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <UButton
          color="primary"
          size="xl"
          variant="solid"
          @click.prevent="handleError"
        >
          Inicio
        </UButton>
        <UButton
          color="orange"
          size="xl"
          to="/contacto"
          variant="outline"
          @click.prevent="handleError"
        >
          Contactanos
        </UButton>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
