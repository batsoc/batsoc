<template>
  <footer class="bg-steel-900">
    <div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav
        class="flex flex-wrap justify-center -mx-5 -my-2"
        aria-label="Footer"
      >
        <div
          v-for="link in siteSettings.footerLinks"
          :key="link.label"
          class="px-5 py-2"
        >
          <nuxt-link
            :to="link.url"
            class="text-base text-gray-300 hover:text-gray-100"
          >
            {{ link.label }}
          </nuxt-link>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          :href="'https://facebook.com/' + siteSettings.facebook"
          class="text-gray-300 hover:text-gray-100"
          target="_blank"
        >
          <span class="sr-only">Facebook</span>
          <facebook-icon class="w-6 h-6"></facebook-icon>
        </a>

        <a
          :href="'https://instagram.com/' + siteSettings.instagram"
          class="text-gray-300 hover:text-gray-100"
          target="_blank"
        >
          <span class="sr-only">Instagram</span>
          <instagram-icon class="w-6 h-6"></instagram-icon>
        </a>
      </div>
      <p class="mt-8 text-base text-center text-gray-200">
        {{ siteSettings.orgName }} <br />
        {{ siteSettings.footerAddress }}
      </p>
      <p class="mt-8 text-base text-center text-gray-200">
        {{ siteSettings.footerText }}
      </p>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import { FacebookIcon, InstagramIcon } from 'vue-feather-icons'

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
  },
  computed: {
    ...mapState('netlifycms', ['siteSettings']),
  },
}
</script>