<template>
  <div class="relative bg-white shadow">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-3 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link to="/">
            <span class="sr-only">BatSoc</span>
            <logo class="h-12 sm:h-16" :orgName="siteSettings.orgName" />
          </nuxt-link>
        </div>

        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            aria-expanded="false"
            @click="mobileNavOpen = true"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav class="hidden space-x-10 md:flex">
          <nuxt-link
            v-for="navItem in siteSettings.navigation"
            :key="navItem.label"
            :to="navItem.url"
            class="text-base font-medium text-gray-500 hover:text-gray-900"
            @click="mobileNavOpen = false"
          >
            {{ navItem.label }}
          </nuxt-link>
        </nav>

        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a
            :href="siteSettings.nav_left_button.url"
            class="btn btn-primary"
            @click="mobileNavOpen = false"
          >
            {{ siteSettings.nav_left_button.label }}
          </a>
        </div>
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div
      class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
      :class="[mobileNavOpen ? 'block' : 'hidden']"
    >
      <div
        class="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
              <logo class="h-12" />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                @click="mobileNavOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-6">
              <nuxt-link
                v-for="navItem in siteSettings.navigation"
                :key="navItem.label"
                :to="navItem.url"
                class="flex items-center rounded-md hover:bg-gray-50"
                @click="mobileNavOpen = false"
              >
                <span class="text-base font-medium text-gray-900">
                  {{ navItem.label }}
                </span>
              </nuxt-link>
            </nav>
          </div>
        </div>
        <div class="px-5 py-6 space-y-6">
          <div>
            <a :href="siteSettings.nav_left_button.url" class="btn btn-primary">
              {{ siteSettings.nav_left_button.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      mobileNavOpen: false,
    }
  },
  computed: {
    // map current logoText and businessType from store
    ...mapState('netlifycms', ['siteSettings']),
  },
  mounted() {
    console.log(this.siteSettings)
  },
}
</script>
