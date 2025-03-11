<script lang="ts" setup></script>

<template>
  <div class="py-12 lg:py-24 px-6 lg:px-12">
    <div class="relative isolate rounded-2xl bg-mm-500/15">
      <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div
          class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
        >
          <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">
              Manten el contacto
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Escríbenos o llámanos para recibir actualizaciones y soporte.
              Estamos aquí para responder tus preguntas y ayudarte a mejorar tu
              seguridad.
            </p>
            <dl class="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Address</span>
                  <svg
                    aria-hidden="true"
                    class="h-7 w-6 text-gray-400"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </dt>
                <dd>
                  Benemérito de las Américas 201 John F.<br />Kennedy #201, CP.
                  37410
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Telephone</span>
                  <svg
                    aria-hidden="true"
                    class="h-7 w-6 text-gray-400"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </dt>
                <dd>
                  <ULink class="hover:text-mm-500" to="tel:+524777771140">
                    +52 477 7771140
                  </ULink>
                </dd>
              </div>
              <div class="flex gap-x-4">
                <dt class="flex-none">
                  <span class="sr-only">Email</span>
                  <svg
                    aria-hidden="true"
                    class="h-7 w-6 text-gray-400"
                    data-slot="icon"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </dt>
                <dd>
                  <ULink
                    class="text-mm-500 hover:text-mm-600"
                    to="mailto:ventas@mm-comunicaciones.com.mx"
                  >
                    ventas@mm-comunicaciones.com.mx
                  </ULink>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-x-4 p-10">
          <iframe
            allowfullscreen=""
            class="mt-6 w-full h-80"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8878458899962!2d-101.70809192396736!3d21.11703708055439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf7fc7314419%3A0x86b773afd12be214!2sBenem%C3%A9rito%20de%20Las%20Americas%20201%2C%20John%20F.%20Kennedy%2C%2037410%20Le%C3%B3n%20de%20los%20Aldama%2C%20Gto.!5e0!3m2!1ses!2smx!4v1724201778633!5m2!1ses!2smx"
            style="border: 0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
