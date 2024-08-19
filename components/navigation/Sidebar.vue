<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

defineOptions({
  name: 'Sidebar',
});

const isOpen = defineModel({
  type: Boolean,
  default: true,
});

const slideoverUI = {
  width: 'max-w-screen',
  overlay: {
    transition: {
      enter: 'ease-in-out duration-150',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in-out duration-150',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  transition: {
    enter: 'transform transition ease-in-out duration-150',
    leave: 'transform transition ease-in-out duration-150',
  },
};

const breakpoints = useBreakpoints(breakpointsTailwind);

const smaller = breakpoints.greaterOrEqual('sm');

watch(
  smaller,
  (value) => {
    if (value) {
      isOpen.value = false;
    }
  },
  { immediate: true },
);

function closeSidebar() {
  setTimeout(() => {
    isOpen.value = false;
  }, 160);
}
</script>

<template>
  <USlideover v-model="isOpen" :ui="slideoverUI">
    <div class="absolute right-0 mx-6 my-2">
      <UButton
        class="rounded-full"
        color="gray"
        size="xl"
        trailing-icon="heroicons:x-mark-16-solid"
        variant="ghost"
        @click="isOpen = false"
      />
    </div>
    <ul
      class="margin-0 flex h-full flex-1 flex-col items-center justify-center space-y-5 text-2xl"
    >
      <li>
        <NuxtLink
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          to="/"
          @click.self="closeSidebar"
        >
          Inicio
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          to="/acerca"
          @click.self="closeSidebar"
        >
          Acerca de
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="text-gray-900 dark:text-white hover:opacity-60 transition-opacity"
          to="/contacto"
        >
          Contacto
        </NuxtLink>
      </li>
    </ul>
  </USlideover>
</template>
