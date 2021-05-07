<template>
  <component
    :is="isExternal ? 'a' : 'nuxt-link'"
    :href="href"
    :to="getCleanHref()"
    class="flex items-center justify-center w-auto"
    :class="{ btn: !linkOnly }"
    v-scroll-to="scrollTo"
    :target="isExternal ? '_blank' : null"
  >
    <slot></slot>
    <external-link-icon v-if="isExternal" class="w-4 h-4 ml-2" />
  </component>
</template>

<script>
// import the btn styles
import '@/assets/css/base-btn.scss'

import { ExternalLinkIcon } from 'vue-feather-icons'

export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    // if true, 'btn' class will NOT be added
    linkOnly: {
      type: Boolean,
      default: false,
    },
  },
  components: { ExternalLinkIcon },
  computed: {
    isExternal() {
      return this.getCleanHref().startsWith('http')
    },
    scrollTo() {
      return !this.isExternal && this.href.includes('#')
        ? '#' + this.href.split('#')[1]
        : null
    },
  },
  methods: {
    getCleanHref() {
      return this.href.replace('https://batsoc.org.au/', '/')
    },
  },
}
</script>
