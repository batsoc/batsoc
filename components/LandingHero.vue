<template>
  <div class="relative bg-navy-500">
    <main class="lg:relative">
      <div
        class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left"
      >
        <div class="px-4 lg:w-7/12 sm:px-8 xl:pr-16">
          <h1
            class="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline"> {{ cData.h1Line1 }} </span>
            <span class="block text-orange-500 xl:inline">
              {{ cData.h1Line2 }}
            </span>
          </h1>

          <p
            class="max-w-md mx-auto mt-3 text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            {{ cData.subHeading }}
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 mr-2" v-for="btn in cData.buttons" :key="btn.url">
              <a
                :href="btn.url"
                class="btn btn-lg"
                :class="[btn.isPrimary ? 'btn-primary' : 'btn-outline']"
              >
                {{ btn.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:h-full"
      >
        <base-img
          class="absolute inset-0 w-full h-full"
          :src="cData.img"
          :alt="`${cData.h1Line1} ${cData.h1Line2}`"
        />
      </div>
    </main>
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