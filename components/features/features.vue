<script lang="ts" setup>
defineOptions({
  name: 'Features',
});
</script>

<template>
  <div class="bg-mm-300 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="relative bg-transparent">
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
            Descubre nuestras innovadoras herramientas de seguridad y
            comunicación, diseñadas para ofrecer protección total y optimizar la
            eficiencia en tu hogar y negocio.
          </p>
          <div class="mt-20">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
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
                      Equipos de alto rendimiento para monitoreo y análisis de
                      video 24/7, con tecnología avanzada y soluciones
                      integrales para diversas necesidades de seguridad.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
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
                      Sistema de radiocomunicación avanzado que mejora la
                      eficiencia y seguridad con comunicación instantánea,
                      cobertura extendida y radios confiables.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
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
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
                    <div>
                      <span
                        class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                      >
                        <UIcon
                          class="text-white group-hover:text-plantation-700 h-10 w-10"
                          name="mdi:alarm-light"
                        />
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                    >
                      Alarmas/Intrusión
                    </h3>
                    <p
                      class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                    >
                      Sistema integrado que ofrece protección confiable y
                      medidas de seguridad adaptadas a riesgos específicos, con
                      acceso remoto, almacenamiento de video y verificación de
                      intrusión de alta calidad.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
                    <div>
                      <span
                        class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                      >
                        <UIcon
                          class="text-white group-hover:text-plantation-700 h-10 w-10"
                          name="heroicons:globe-americas-16-solid"
                        />
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                    >
                      IoT/GPS/Telemática
                    </h3>
                    <p
                      class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                    >
                      Tecnologías para rastrear y gestionar activos, que
                      incluyen seguimiento por GPS, datos operativos mediante
                      telemática, y conectividad a través de IoT para una visión
                      integral y en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
                    <div>
                      <span
                        class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                      >
                        <UIcon
                          class="text-white group-hover:text-plantation-700 h-10 w-10"
                          name="material-symbols-light:wifi-sharp"
                        />
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                    >
                      Redes e IT
                    </h3>
                    <p
                      class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                    >
                      Implementación y gestión de redes inalámbricas, telefonía
                      IP y videoconferencia, con soluciones para asegurar y
                      optimizar la infraestructura tecnológica.
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
                    <div>
                      <span
                        class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                      >
                        <UIcon
                          class="text-white group-hover:text-plantation-700 h-10 w-10"
                          name="material-symbols-light:energy-program-saving"
                        />
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                    >
                      Energía
                    </h3>
                    <p
                      class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                    >
                      Ofrecemos soluciones de energía solar y fuentes de poder
                      eficientes para áreas sin red eléctrica, con equipos de
                      bajo consumo y protección para exteriores
                    </p>
                  </div>
                </div>
              </div>
              <div class="pt-6 group">
                <div
                  class="transition-all group-hover:ease-in-out group-hover:delay-200 flow-root rounded-lg group-hover:bg-plantation-800 bg-gray-50 px-6 pb-8 border border-gray-200 shadow"
                >
                  <div class="-mt-6 h-[250px]">
                    <div>
                      <span
                        class="transition-all group-hover:ease-in-out group-hover:delay-150 inline-flex items-center justify-center rounded-xl group-hover:bg-plantation-400 bg-plantation-600 p-3 shadow-lg"
                      >
                        <UIcon
                          class="text-white group-hover:text-plantation-700 h-10 w-10"
                          name="heroicons:wrench-screwdriver-16-solid"
                        />
                      </span>
                    </div>
                    <h3
                      class="mt-8 text-lg font-semibold leading-8 tracking-tight group-hover:text-white text-gray-900"
                    >
                      Soporte técnico
                    </h3>
                    <p
                      class="my-5 text-base leading-7 text-gray-600 group-hover:text-gray-300"
                    >
                      Personal especializado para la reparación, mantenimiento e
                      instalación de equipos de comunicación inalámbrica y
                      sistemas de seguridad, garantizando su funcionamiento
                      óptimo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
