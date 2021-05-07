<template>
  <a v-if="isExternal" :href="href" target="_blank" class="btn">
    <slot></slot>
  </a>
  <nuxt-link v-else :to="href" class="btn" v-scroll-to="scrollTo">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: ['href'],
  computed: {
    isExternal() {
      return this.href.startsWith('http')
    },
    scrollTo() {
      console.log(this.href.includes('#') ? this.href.split('#')[1] : null)
      return this.href.includes('#') ? this.href.split('#')[1] : null
    },
  },
}
</script>