<template>
  <div class="px-4 pt-16 text-center md:pt-24 sm:px-8">
    <h2 class="text-base font-semibold tracking-wide text-mango-500 uppercase">
      {{ h2 }}
    </h2>
    <p
      class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
      v-if="heading"
    >
      {{ heading }}
    </p>
    <p
      class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto"
      v-if="subHeading"
    >
      {{ subHeading }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    h2: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
    },
    subHeading: {
      type: String,
    },
  },
}
</script>