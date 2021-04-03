<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-limegreen-300">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <a
          :href="logo.url"
          target="_blank"
          class="flex items-center justify-center h-full col-span-1 md:col-span-2 lg:col-span-1 opacity-70 hover:opacity-100"
          v-for="logo in cData.logos"
          :key="logo.img"
        >
          <base-img
            class="w-auto rounded max-h-16"
            :src="logo.img"
            :alt="logo.alt"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cData: {
      type: Object,
      required: true,
    },
  },
}
</script>