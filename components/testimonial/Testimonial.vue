<script lang="ts" setup>
defineOptions({ name: 'Testimonial' });
</script>

<template>
  <div class="relative overflow-hidden bg-transparent pb-32 pt-16">
    <div class="relative">
      <div
        class="xl:mx-auto xl:grid xl:max-w-7xl xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-24 xl:px-8"
      >
        <div
          class="mx-auto max-w-xl px-6 xl:mx-0 xl:max-w-none xl:px-0 xl:py-16"
        >
          <div>
            <div>
              <span
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-mm-500"
              >
                <UIcon
                  class="h-8 w-8 text-white"
                  name="heroicons:wrench-screwdriver"
                />
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Siempre al día con el soporte al cliente
              </h2>
              <p class="mt-4 text-xl text-gray-500">
                Ofrecemos un soporte al cliente eficiente y personalizado,
                asegurando respuestas rápidas y soluciones efectivas para
                mantener la satisfacción de tus clientes en todo momento.
              </p>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p class="text-base text-gray-500">
                  &ldquo;MM Comunicaciones nos brindó un servicio de CCTV
                  excepcional, con equipos de alta calidad y un soporte técnico
                  siempre disponible. Nos sentimos mucho más seguros y confiamos
                  plenamente en su profesionalismo.&rdquo;
                </p>
              </div>
              <footer class="mt-3">
                <div class="flex items-center space-x-3">
                  <div class="flex-shrink-0">
                    <img
                      alt=""
                      class="h-6 w-6 rounded-full"
                      src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                  </div>
                  <div class="text-base font-medium text-gray-700">
                    Fernando
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 xl:mt-0">
          <div
            class="-mr-48 pl-6 md:-mr-16 xl:relative xl:m-0 xl:h-full xl:px-0"
          >
            <NuxtImg
              alt="cctv3"
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 xl:absolute xl:left-0 xl:h-full xl:w-auto xl:max-w-none"
              src="/hero/reparacion.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div
        class="xl:mx-auto xl:grid xl:max-w-7xl xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-24 xl:px-8"
      >
        <div
          class="mx-auto max-w-xl px-6 xl:col-start-2 xl:mx-0 xl:max-w-none xl:px-0 xl:py-32"
        >
          <div>
            <div>
              <span
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-mm-500"
              >
                <svg
                  aria-hidden="true"
                  class="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                Vuélvete socio andear
              </h2>
              <p class="mt-4 text-xl text-gray-500">
                Con nuestros avanzados sistemas de alarmas, soluciones de
                control de acceso y sistemas de videovigilancia, garantizamos
                una defensa sólida contra amenazas potenciales.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 xl:col-start-1 xl:mt-0">
          <div
            class="-ml-48 pr-6 md:-ml-16 xl:relative xl:m-0 xl:h-full xl:px-0"
          >
            <NuxtImg
              alt="cctv3"
              class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 xl:absolute xl:-left-44 xl:h-full xl:w-auto xl:max-w-none"
              src="/hero/cctv3.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
