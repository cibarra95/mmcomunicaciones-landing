<script lang="ts" setup>
useHead({
  meta: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
});

useSeoMeta({
  titleTemplate: 'mm-comunicaciones',
  title: 'mm-comunicaciones',
  ogTitle: 'mm-comunicaciones',
  description: '',
  ogDescription: 'mm-comunicaciones',
  ogType: 'website',
  ogUrl: 'https://mm-comunicaciones.com.mx',
  ogSiteName: 'mm-comunicaciones',
  ogImageAlt: 'mm-comunicaciones',
  ogLocale: 'es_MX',
});
</script>

<template>
  <div class="min-h-screen text-gray-800 bg-mm-300">
    <NuxtLayout>
      <NuxtPage class="mx-auto max-w-7xl" />
    </NuxtLayout>
  </div>
</template>
