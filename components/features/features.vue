<script lang="ts" setup>
import {
  BellAlertIcon,
  ChartBarIcon,
  FingerPrintIcon,
  SignalIcon,
  VideoCameraIcon,
  WifiIcon,
} from '@heroicons/vue/20/solid';

const features = [
  {
    name: 'Videovigilancia',
    description:
      'Nuestros equipos de videovigilanci,a de alto rendimiento están diseñados para todas las necesidades, desde monitoreo básico hasta análisis avanzado con imágenes a color 24/7. Ofrecemos soluciones integrales con tecnología de punta para cada sector, brindando un fuerte apoyo en seguridad específica y tranquilidad constante.',
    href: '#',
    icon: VideoCameraIcon,
  },
  {
    name: 'Control de Acceso',
    description:
      'Mejora la seguridad de tu hogar o negocio con nuestros sistemas de control de acceso avanzados. Desde biometría y lector de proximidad hasta cerraduras eléctricas y barreras vehiculares, nuestras soluciones personalizables incrementan la productividad y protegen tus áreas críticas con la mayor eficiencia.',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Alarmas',
    description:
      'Nuestros sistemas integrados de seguridad te permiten proteger tu hogar o negocio de manera inteligente y confiable. Con acceso remoto, almacenamiento de video y verificación de intrusiones de alta calidad, estarás conectado y protegido donde quiera que estés.',
    href: '#',
    icon: BellAlertIcon,
  },
  {
    name: 'Radiocomunicación',
    description:
      'Optimiza la comunicación de tu organización con nuestros sistemas de radiocomunicación profesional. Garantizamos la mejor tecnología en comunicación instantánea para aumentar la seguridad y la eficiencia operativa. Desde grandes distancias hasta cobertura extendida, mantenemos a tu equipo conectado de forma rápida y segura.',
    href: '#',
    icon: SignalIcon,
  },
  {
    name: 'Redes, Audio-Video',
    description:
      'Implementa redes inalámbricas robustas y sistemas de audio-video eficientes para una operación fluida en tu organización. Desde telefonía IP hasta videoconferencia y seguridad de redes, nuestras soluciones brindan el control total que necesitas para optimizar tu logística y operaciones diarias.',
    href: '#',
    icon: WifiIcon,
  },
  {
    name: 'IoT/GPS/Telemática y Señalización',
    description:
      'Monitorea y protege con nuestra amplia gama de dispositivos IoT, GPS y sistemas audiovisuales de señalización. Detecta vehículos, genera alertas en áreas de trabajo, y rastrea la ubicación de tus activos en tiempo real, maximizando la seguridad y el control de tus operaciones.',
    href: '#',
    icon: ChartBarIcon,
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
          Nuestros servicios
        </h2>
        <p class="mt-2 text-3x text-black font-bold tracking-tight sm:text-4xl">
          Soluciones Tecnológicas para una Protección Integral
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Descubre nuestras innovadoras herramientas de seguridad y
          comunicación, diseñadas para ofrecer protección total y optimizar la
          eficiencia en tu hogar y negocio.
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
              <p class="flex-auto text-justify">{{ feature.description }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
