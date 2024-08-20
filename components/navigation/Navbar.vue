<script lang="ts" setup>
defineOptions({
  name: 'Navbar',
});
const sidebarIsOpen = ref(false);
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b border-solid py-2 border-gray-900 bg-white/40 sm:py-3 backdrop-blur-xl h-[68px]"
  >
    <div class="m-auto container px-6 sm:px-0">
      <nav class="flex items-center justify-between font-semibold">
        <NuxtLink to="/">
          <img alt="logo" class="h-10 w-auto" src="../../public/logo.png" />
        </NuxtLink>
        <div
          class="flex flex-row-reverse gap-3 items-center sm:flex-row h-[36px]"
        >
          <ul class="hidden grid-flow-col gap-6 text-sm font-medium sm:grid">
            <li>
              <NuxtLink
                class="text-mm-600 hover:text-mm-500 transition-opacity"
                to="/acerca"
              >
                Acerca de
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-mm-600 hover:text-mm-500 transition-opacity"
                to="/contacto"
              >
                Contacto
              </NuxtLink>
            </li>
          </ul>
          <UButton
            class="rounded-full sm:hidden"
            color="gray"
            size="md"
            trailing-icon="heroicons:bars-3"
            variant="ghost"
            @click="sidebarIsOpen = true"
          />
        </div>
      </nav>
    </div>
  </header>
  <Sidebar v-model="sidebarIsOpen" />
</template>
