<script lang="ts" setup>
defineOptions({
  name: 'Features',
});
</script>

<template>
  <div class="bg-mm-300 py-24">
    <div class="bg-transparent">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div class="flex flex-col items-center justify-center">
          <h2 class="text-lg font-semibold text-mm-600">Nuestros servicios</h2>
          <p
            class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Soluciones Tecnológicas para una Protección Integral
          </p>
          <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500 text-center">
            Descubre nuestras innovadoras herramientas de seguridad y
            comunicación, diseñadas para ofrecer protección total y optimizar la
            eficiencia en tu hogar y negocio.
          </p>
        </div>

        <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div class="relative lg:row-span-2 group">
            <div
              class="absolute inset-px rounded-lg bg-white group-hover:bg-mm-600 lg:rounded-l-[2rem]"
            />
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
            >
              <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
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
                  Equipos para monitoreo y análisis de video 24/7, con
                  tecnología avanzada y soluciones integrales para diversas
                  necesidades de seguridad.
                </p>
              </div>

              <NuxtImg
                alt="radiocomunicaciones"
                class="size-full object-cover object-top mt-8 xl:mt-10"
                src="/servicios/cctv5.jpg"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"
            ></div>
          </div>
          <div class="relative max-lg:row-start-1 group">
            <div
              class="absolute inset-px rounded-lg bg-white group-hover:bg-mm-600 max-lg:rounded-t-[2rem]"
            ></div>
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
            >
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
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
              </div>
              <div class="pt-6 lg:pt-8 xl:mt-2">
                <NuxtImg
                  alt=""
                  class="w-full max-h-72 size-full object-cover object-top"
                  src="/servicios/radiocomunicacion.png"
                />
              </div>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"
            ></div>
          </div>
          <div
            class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group"
          >
            <div
              class="absolute inset-px rounded-lg bg-white group-hover:bg-mm-600"
            ></div>
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
            >
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
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
              <div class="[container-type:inline-size] pt-6 lg:pt-2">
                <NuxtImg
                  alt=""
                  class="w-full max-h-72 size-full object-cover object-top"
                  src="/servicios/control.png"
                />
              </div>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
            ></div>
          </div>
          <div class="relative lg:row-span-2 group">
            <div
              class="absolute inset-px rounded-lg bg-white group-hover:bg-mm-600 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            ></div>
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
            >
              <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
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
                  Sistema de protección confiable con medidas de seguridad
                  personalizadas, acceso remoto, almacenamiento de video y
                  verificación de intrusión de alta calidad.
                </p>
              </div>

              <NuxtImg
                alt=""
                class="size-full object-cover object-top mt-8 xl:mt-10"
                src="/servicios/alarm.jpg"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            ></div>
          </div>
        </div>
        <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div class="relative lg:row-span-2 group">
            <div
              class="absolute inset-px rounded-lg group-hover:bg-mm-600 bg-white lg:rounded-l-[2rem]"
            />
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
            >
              <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
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
                  Tecnologías para rastrear y gestionar activos, que incluyen
                  seguimiento por GPS, datos operativos mediante telemática, y
                  conectividad a través de IoT para una visión integral y en
                  tiempo real.
                </p>
              </div>

              <NuxtImg
                alt="radiocomunicaciones"
                class="size-full object-cover object-top mt-10"
                src="/servicios/gps.jpg"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"
            ></div>
          </div>
          <div class="relative max-lg:row-start-1 group">
            <div
              class="absolute inset-px rounded-lg group-hover:bg-mm-600 bg-white max-lg:rounded-t-[2rem]"
            ></div>
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
            >
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
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
                  Implementación y gestión de redes inalámbricas, telefonía IP y
                  videoconferencia, con soluciones para asegurar y optimizar la
                  infraestructura tecnológica.
                </p>
              </div>
              <div class="pt-6 lg:pt-10">
                <NuxtImg
                  alt=""
                  class="w-full max-lg:max-w-xs max-h-56"
                  src="/servicios/redes.jpg"
                />
              </div>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"
            ></div>
          </div>
          <div
            class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group"
          >
            <div
              class="absolute inset-px rounded-lg bg-white group-hover:bg-mm-600"
            ></div>
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
            >
              <div class="px-8 pt-8 sm:px-10 sm:pt-10">
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
                  eficientes para áreas sin red eléctrica, con equipos de bajo
                  consumo y protección para exteriores
                </p>
              </div>
              <div class="pt-6 lg:pt-10 xl:mt-7">
                <NuxtImg
                  alt=""
                  class="w-full max-lg:max-w-xs max-h-56"
                  src="/servicios/energia.jpg"
                />
              </div>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
            ></div>
          </div>
          <div class="relative lg:row-span-2 group">
            <div
              class="absolute inset-px rounded-lg group-hover:bg-mm-600 bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            ></div>
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
            >
              <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
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
                  instalación de equipos de comunicación inalámbrica y sistemas
                  de seguridad, garantizando su funcionamiento óptimo.
                </p>
              </div>

              <NuxtImg
                alt=""
                class="size-full object-cover object-top mt-10"
                src="/servicios/mantenimiento.jpg"
              />
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mt-24">
      <h6
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Nuestras marcas destacadas
      </h6>
    </div>
    <TrustedMarks />
  </div>
</template>

<style scoped></style>
