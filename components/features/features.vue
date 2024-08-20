<script lang="ts" setup>
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/vue/20/solid';

const features = [
  {
    name: 'Despliegue rápido',
    description:
      'Despliega tus aplicaciones de forma rápida y eficiente con nuestra tecnología avanzada. Asegura la máxima disponibilidad y rendimiento.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Certificados SSL',
    description:
      'Protege tus datos con certificados SSL de alta seguridad, garantizando conexiones seguras para tus comunicaciones y aplicaciones.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Colas simples',
    description:
      'Gestiona tus tareas de comunicación y seguridad de manera eficiente con nuestras colas simples, optimizando tus procesos.',
    href: '#',
    icon: ArrowPathIcon,
  },
];
</script>

<template>
  <div class="bg-mm-300 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2
          class="text-base font-semibold leading-7 tracking-tight bg-gradient-to-r from-mm-600 to-mm-500 inline-block text-transparent bg-clip-text"
        >
          Despliega más rápido
        </h2>
        <p class="mt-2 text-3x text-black font-bold tracking-tight sm:text-4xl">
          Todo lo que necesitas para desplegar tu sistema de seguridad
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Mantén tus comunicaciones seguras y tu red protegida con nuestras
          soluciones. Estamos aquí para garantizar la tranquilidad y efectividad
          en cada paso de tu despliegue.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col"
          >
            <dt
              class="flex items-center gap-x-3 text-base font-semibold leading-7"
            >
              <component
                :is="feature.icon"
                aria-hidden="true"
                class="h-5 w-5 flex-none text-mm-500"
              />
              {{ feature.name }}
            </dt>
            <dd
              class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700"
            >
              <p class="flex-auto">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
