<script lang="ts" setup>
defineOptions({
  name: 'FeatImg',
});

defineProps({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inverse: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="grid md:grid-cols-2 md:gap-16 gap-8 mt-16 group">
    <div
      :class="{ 'order-2': inverse }"
      class="h-[500px] flex items-center justify-center"
    >
      <div class="flex flex-col">
        <dt class="flex items-center gap-x-3 text-2xl font-semibold leading-7">
          <UIcon
            :name="icon"
            aria-hidden="true"
            class="h-8 w-8 flex-none text-mm-500"
          />
          {{ name }}
        </dt>
        <dd
          class="mt-4 flex flex-auto flex-col text-xl leading-7 text-gray-700"
        >
          <p class="flex-auto text-justify">
            {{ description }}
          </p>
        </dd>
      </div>
    </div>
    <div class="h-[500px] relative flex items-center justify-center">
      <img
        alt="hola"
        class="z-10 rounded-xl"
        src="https://placehold.co/400x400"
      />
      <div
        class="transition ease-in-out delay-50 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-plantation-500 duration-300 absolute top-10 left-[40px] -rotate-[8deg] h-[400px] w-[400px] bg-plantation-400 rounded-xl"
      />
    </div>
  </div>
</template>

<style scoped></style>
