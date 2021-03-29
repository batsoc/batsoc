<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
  <div class="bg-white">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {{ cData.h2 }}
          </h2>
          <p class="text-xl text-gray-500">
            {{ cData.aboutText }}
          </p>

          <!-- <div class="flex justify-start pt-4">
            <img
              class="h-64"
              src="../static/img/logo-orig-512.png"
              alt="BatSoc Logo"
            />
          </div> -->
        </div>
        <div class="lg:col-span-2">
          <ul
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            <li v-for="m in cData.members" :key="m.name">
              <div class="space-y-4">
                <!-- <div class="aspect-w-3 aspect-h-2"> -->
                <base-img
                  v-if="m.img"
                  class="block aspect-w-3 aspect-h-2"
                  img-class="object-cover rounded-lg shadow-lg"
                  :src="m.img"
                  :alt="`${m.name}, ${m.name}`"
                  size="md"
                />
                <!-- </div> -->
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>{{ m.name }}</h3>
                  <p class="text-navy-500">{{ m.title }}</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">
                    {{ m.desc }}
                  </p>
                </div>

                <ul class="flex space-x-5">
                  <li v-if="m.instagram">
                    <a
                      :href="'https://instagram.com/' + m.instagram"
                      target="_blank"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only">Instagram</span>
                      <instagram-icon
                        size="1.5x"
                        class="w-5 h-5"
                      ></instagram-icon>
                    </a>
                  </li>
                  <li v-if="m.twitter">
                    <a
                      :href="'https://twitter.com/' + m.instagram"
                      target="_blank"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only">Twitter</span>
                      <twitter-icon size="1.5x" class="w-5 h-5"></twitter-icon>
                    </a>
                  </li>
                  <li v-if="m.websiteUrl">
                    <a
                      :href="m.websiteUrl"
                      target="_blank"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <span class="sr-only">Website</span>
                      <globe-icon size="1.5x" class="w-5 h-5"></globe-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TwitterIcon, InstagramIcon, GlobeIcon } from 'vue-feather-icons'

export default {
  props: {
    cData: {
      type: Object,
      required: true,
    },
  },
  components: {
    TwitterIcon,
    InstagramIcon,
    GlobeIcon,
  },
}
</script>