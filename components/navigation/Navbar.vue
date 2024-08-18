<script lang="ts" setup>
const navigation = inject<Ref<NavItem[]>>('navigation', ref([]));

const links = [
  {
    label: 'Docs',
    icon: 'i-heroicons-book-open',
    to: '/getting-started',
  },
  {
    label: 'Pro',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/pro',
  },
  {
    label: 'Releases',
    icon: 'i-heroicons-rocket-launch',
    to: '/releases',
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        color="gray"
        icon="i-simple-icons-github"
        target="_blank"
        to="https://github.com/nuxt/ui"
        variant="ghost"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
