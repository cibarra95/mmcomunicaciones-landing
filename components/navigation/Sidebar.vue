<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

defineOptions({
  name: 'Sidebar',
});

const isOpen = defineModel({
  type: Boolean,
  required: true,
});

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

const ui = {
  wrapper: 'fixed inset-0 flex z-50',
  overlay: {
    base: 'fixed inset-0 transition-opacity',
    background: 'bg-gray-800/75',
    transition: {
      enter: 'ease-in-out duration-500',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in-out duration-500',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  base: 'relative flex-1 flex flex-col w-full focus:outline-none',
  background: 'bg-gray-900',
  ring: '',
  rounded: '',
  padding: '',
  shadow: 'shadow-xl',
  width: 'w-screen max-w-md',
  height: 'h-screen max-h-96',
  translate: {
    base: 'translate-x-0',
    left: '-translate-x-full rtl:translate-x-full',
    right: 'translate-x-full rtl:-translate-x-full',
    top: '-translate-y-full',
    bottom: 'translate-y-full',
  },
  transition: {
    enter: 'transform transition ease-in-out duration-300',
    leave: 'transform transition ease-in-out duration-200',
  },
};
</script>

<template>
  <USlideover v-model="isOpen" :ui="ui">
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
          class="text-white hover:opacity-60 transition-opacity"
          to="/"
          @click.self="closeSidebar"
        >
          Inicio
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="text-white hover:opacity-60 transition-opacity"
          to="/acerca"
          @click.self="closeSidebar"
        >
          Acerca de
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="text-white hover:opacity-60 transition-opacity"
          to="/contacto"
          @click.self="closeSidebar"
        >
          Contacto
        </NuxtLink>
      </li>
    </ul>
  </USlideover>
</template>
