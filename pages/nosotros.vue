<script lang="ts" setup>
const timeline = [
  {
    name: 'Fundaron la empresa',
    description:
      'Nuestra empresa, fundada en 1991 en León, Guanajuato, inició con la venta de antenas parabólicas.',
    date: '1991',
    dateTime: '2021-08',
  },
  {
    name: 'Expansión',
    description:
      'Recibieron el reconocimiento como distribuidor ELITE ORO, destacándose en el sector con marcas líderes como Kenwood, Motorola y Icom.',
    date: '1995',
    dateTime: '2021-12',
  },
  {
    name: 'Nueva era',
    description:
      'Realizamos una de las instalaciones más grandes de Latinoamérica para el municipio de León, mejorando servicios de mensajería, localización vehicular y datos vía radio.',
    date: '2008',
    dateTime: '2022-02',
  },
  {
    name: 'Nuevas Instalaciones',
    description:
      'Ampliamos nuestras instalaciones y capacidad para implementar nuevos sistemas, incluyendo videovigilancia, red inalámbrica, sistema audiovisual, energía solar, y tecnología GPS y GPRS.',
    date: '2012',
    dateTime: '2022-02',
  },
  {
    name: 'Grandes proyectos',
    description:
      'Participamos en la cobertura de radiocomunicación con energía solar para el Tren Maya y el Aeropuerto de Tulum, además de obtener el distintivo Marca GTO para impulsar nuestras ventas a nivel nacional.',
    date: '2023',
    dateTime: '2022-12',
  },
];
</script>

<template>
  <div>
    <!-- Header -->

    <main class="isolate">
      <!-- Hero section -->
      <div
        class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-mm-700/20 pt-14"
      >
        <div
          aria-hidden="true"
          class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-mm-500/50 shadow-xl shadow-mm-600/10 ring-1 ring-mm-300 sm:-mr-80 lg:-mr-96"
        />
        <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div
            class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
          >
            <h1
              class="max-w-2xl text-4xl font-bold tracking-tight text-mm-600 sm:text-6xl lg:col-span-2 xl:col-auto"
            >
              Líderes en Tecnología Inalámbrica y Sistemas de Seguridad.
            </h1>
            <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p class="text-lg leading-8 text-white text-justify pt-16">
                Somos una empresa dedicada a ofrecer un amplio portafolio de
                productos de vanguardia en comunicación inalámbrica y sistemas
                de seguridad, proporcionando soluciones profesionales que se
                adaptan de manera eficiente a las necesidades específicas de
                cada cliente, siempre a precios competitivos.
              </p>
            </div>
            <NuxtImg
              alt="equipo"
              class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              src="/servicios/equipo3.jpg"
            />
          </div>
        </div>
        <div
          class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-mm-500/30 sm:h-32"
        />
      </div>

      <!-- Timeline section -->
      <div class="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <div v-for="item in timeline" :key="item.name">
            <time
              :datetime="item.dateTime"
              class="flex items-center text-sm font-semibold leading-6 text-mm-600"
            >
              <svg
                aria-hidden="true"
                class="mr-4 h-1 w-1 flex-none"
                viewBox="0 0 4 4"
              >
                <circle cx="2" cy="2" fill="currentColor" r="2" />
              </svg>
              {{ item.date }}
              <span
                aria-hidden="true"
                class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
              />
            </time>
            <p
              class="mt-6 text-lg font-semibold leading-8 tracking-tight text-mm-500"
            >
              {{ item.name }}
            </p>
            <p class="mt-1 text-sm leading-7 text-gray-600">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
        <div
          class="relative isolate overflow-hidden bg-mm-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2
            class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Marcas que confían en nostros
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Con más de 30 años de experiencia, trabajamos continuamente para
            mejorar nuestros servicios y demostrar nuestro compromiso con
            nuestros clientes, esforzándonos por cumplir y superar sus
            expectativas.
          </p>
          <TrustedLogos />
          <div
            aria-hidden="true"
            class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
          >
            <div
              class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-mm-500 to-mm-300 opacity-25"
              style="
                clip-path: polygon(
                  73.6% 51.7%,
                  91.7% 11.8%,
                  100% 46.4%,
                  97.4% 82.2%,
                  92.5% 84.9%,
                  75.7% 64%,
                  55.3% 47.5%,
                  46.5% 49.4%,
                  45% 62.9%,
                  50.3% 87.2%,
                  21.3% 64.1%,
                  0.1% 100%,
                  5.4% 51.1%,
                  21.4% 63.9%,
                  58.9% 0.2%,
                  73.6% 51.7%
                );
              "
            />
          </div>
        </div>
      </div>

      <!-- Content section -->
      <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-32 sm:mt-40">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Misión y Visión
          </h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Brindar soluciones innovadoras en comunicación inalámbrica y
                  sistemas de seguridad, centradas en la satisfacción del
                  cliente. Logramos esto a través de un equipo altamente
                  capacitado, utilizando la tecnología más avanzada y asegurando
                  la máxima calidad en nuestros productos y servicios.
                </p>
                <p class="mt-10">
                  Expandir nuestra presencia a nivel local, estatal y nacional,
                  superando las expectativas de nuestros clientes en cuanto a
                  costo, calidad y tiempos de entrega. Nos comprometemos a
                  ofrecer productos de vanguardia y soluciones innovadoras que
                  impulsen el crecimiento y la satisfacción del cliente.
                </p>
              </div>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-8 xl:w-80">
                <div class="flex flex-col-reverse gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    de trayectoria
                  </dt>
                  <dd
                    class="text-5xl font-semibold tracking-tight text-gray-900"
                  >
                    +30 años
                  </dd>
                </div>
                <div class="flex flex-col-reverse gap-y-4">
                  <dt class="text-base leading-7 text-gray-600">
                    obtenida en 2023
                  </dt>
                  <dd
                    class="text-5xl font-semibold tracking-tight text-gray-900"
                  >
                    Marca GTO
                  </dd>
                </div>
                <div>
                  <NuxtImg alt="gto" src="/servicios/gto.png" />
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <!-- Image section -->
      <div class="my-32 sm:my-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <NuxtImg
          alt="equipo"
          class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          src="/servicios/equipo4.jpeg"
        />
      </div>
    </main>
  </div>
</template>
