<template>
  <a v-if="isExternal" :href="href" target="_blank" class="btn">
    <slot></slot>
  </a>
  <nuxt-link v-else :to="href" class="btn">
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
  },
}
</script>