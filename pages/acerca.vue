<script lang="ts" setup>
const timeline = [
  {
    name: 'Fundaron la empresa',
    description:
      'Marcando el inicio de su trayectoria en el mercado de las comunicaciones.',
    date: '1991',
    dateTime: '2021-08',
  },
  {
    name: 'Reconocimiento',
    description:
      'Recibieron el reconocimiento como distribuidor ELITE ORO, destacándose en el sector con marcas líderes como Kenwood, Motorola y Icom.',
    date: '1998',
    dateTime: '2021-12',
  },
  {
    name: 'Nuevas Instalaciones',
    description:
      'Realizaron una de las instalaciones más grandes y robustas de Latinoamérica, lo que los posicionó como líderes en la región.',
    date: '2008',
    dateTime: '2022-02',
  },
  {
    name: 'Grandes proyectos',
    description:
      'Participaron en proyectos de gran relevancia nacional, como el Tren Maya y el Aeropuerto de Tulum, lo que reforzó su prestigio y crecimiento.',
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
              <p class="text-lg leading-8 text-white text-justify">
                Con más de 30 años de trayectoria, seguimos trabajando día a día
                para mejorar nuestros servicios y transmitirles que estamos
                comprometidos con nuestros clientes para seguir cumpliendo con
                sus expectativas y, si es posible, superarlas.
                <br />
                <br />
                Soluciones en materia de comunicación inalámbrica y sistemas de
                seguridad profesional
              </p>
            </div>
            <img
              alt=""
              class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
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
          class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
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
            <p class="mt-1 text-base leading-7 text-gray-600">
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
            Nuestros clientes nos aman
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit
            occaecat labore proident cillum in nisi adipisicing officia
            excepteur tempor deserunt.
          </p>
          <div
            class="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5"
          >
            <img
              alt="Transistor"
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              height="48"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              width="158"
            />
            <img
              alt="Reform"
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              height="48"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              width="158"
            />
            <img
              alt="Tuple"
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              height="48"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              width="158"
            />
            <img
              alt="SavvyCal"
              class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              height="48"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              width="158"
            />
            <img
              alt="Statamic"
              class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              height="48"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              width="158"
            />
          </div>
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
      <div class="my-32 overflow-hidden sm:my-40">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
          >
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2
                class="text-3xl font-bold tracking-tight text-mm-500 sm:text-4xl"
              >
                Nuestras personas
              </h2>
              <p class="mt-6 text-xl leading-8 text-gray-700">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem
                occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
                error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p class="mt-6 text-base leading-7 text-gray-700">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
            </div>
            <div
              class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
            >
              <div
                class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
              >
                <img
                  alt=""
                  class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                />
              </div>
              <div
                class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
              >
                <div
                  class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
                >
                  <img
                    alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  />
                </div>
                <div
                  class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
                >
                  <img
                    alt=""
                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                  />
                </div>
                <div
                  class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
                >
                  <img
                    alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
