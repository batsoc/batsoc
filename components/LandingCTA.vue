<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-steel-900">
    <div
      class="h-56 bg-steel-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <base-img
        class="object-cover w-full h-full"
        :src="cData.img"
        :alt="cData.h2"
      />
    </div>
    <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2
          class="text-base font-semibold tracking-wider text-gray-300 uppercase"
        >
          {{ cData.h2 }}
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          {{ cData.heading }}
        </p>
        <p class="mt-3 text-lg text-gray-300">
          {{ cData.ctaText }}
        </p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <nuxt-link :to="cData.btnUrl" class="btn btn-primary btn-lg">
              {{ cData.btnLabel }}
            </nuxt-link>
          </div>
        </div>
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