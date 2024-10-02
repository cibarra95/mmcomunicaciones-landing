<script lang="ts" setup>
defineOptions({
  name: 'SemiFeat',
});
</script>

<template>
  <div class="relative bg-transparent py-24 sm:py-32 lg:py-40">
    <div
      class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-lg font-semibold text-mm-600">Nuestros servicios</h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Soluciones Tecnológicas para una Protección Integral
      </p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Descubre nuestras innovadoras herramientas de seguridad y comunicación,
        diseñadas para ofrecer protección total y optimizar la eficiencia en tu
        hogar y negocio.
      </p>
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6 group">
            <div
              class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                  >
                    <UIcon
                      class="text-white group-hover:text-plantation-700 h-10 w-10"
                      name="heroicons:video-camera-16-solid"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                >
                  Videovigilancia
                </h3>
                <p
                  class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                >
                  Equipos de alto rendimiento para monitoreo y análisis de video
                  24/7, con tecnología avanzada y soluciones integrales para
                  diversas necesidades de seguridad.
                </p>
                <NuxtLink
                  class="text-mm-500 group-hover:text-plantation-200 flex items-center justify-center space-x-2"
                  to="/servicios"
                >
                  <span>Ver más</span>
                  <UIcon name="heroicons:arrow-long-right-16-solid" />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="pt-6 group">
            <div
              class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                  >
                    <UIcon
                      class="text-white group-hover:text-plantation-700 h-10 w-10"
                      name="heroicons:signal-16-solid"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                >
                  Radiocomunicación
                </h3>
                <p
                  class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                >
                  Sistema de radiocomunicación avanzado que mejora la eficiencia
                  y seguridad con comunicación instantánea, cobertura extendida
                  y radios confiables.
                </p>
                <NuxtLink
                  class="text-mm-500 group-hover:text-plantation-200 flex items-center justify-center space-x-2"
                  to="/servicios"
                >
                  <span>Ver más</span>
                  <UIcon name="heroicons:arrow-long-right-16-solid" />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="pt-6 group">
            <div
              class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                  >
                    <UIcon
                      class="text-white group-hover:text-plantation-700 h-10 w-10"
                      name="heroicons:finger-print-16-solid"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                >
                  Control Acceso
                </h3>
                <p
                  class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                >
                  Sistemas para controlar el acceso a áreas específicas, con
                  tecnología avanzada en biometría, lectores de proximidad,
                  cerraduras eléctricas y barreras vehiculares.
                </p>
                <NuxtLink
                  class="text-mm-500 group-hover:text-plantation-200 flex items-center justify-center space-x-2"
                  to="/servicios"
                >
                  <span>Ver más</span>
                  <UIcon name="heroicons:arrow-long-right-16-solid" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
