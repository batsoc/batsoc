<template>
  <img
    v-if="isURL()"
    :data-src="getSrc()"
    :class="['lazyload']"
    :alt="alt"
    src="/img/baseimg_placeholder.svg"
  />

  <!-- For explanation of v-if v-else see https://vuejs.org/v2/guide/conditional.html -->
  <!--  -->
  <!-- SVGs: default is to include if smaller than 5kb -->
  <img
    v-else-if="isSVG()"
    :src="require('~/static/img/' + stripExtension(getSrc()) + '.svg?data')"
    :alt="alt"
  />

  <!-- if gif filetype, no reponsive sizes generated, just webp and compression -->
  <!-- Note: for GIF, the `size` property is ignored -->
  <img
    v-else
    :data-src="'/img/' + getSrc()"
    :class="['lazyload']"
    :alt="alt"
    src="/img/baseimg_placeholder.svg"
  />
</template>

<script>
export default {
  props: {
    // the name of the image in ~/static/img folder
    // choosen automatic based on image extension
    // Use as: <BaseImage src="someimg.gif" ... />
    src: {
      type: String,
      default: '',
    },
    // img alt text
    alt: {
      type: String,
      default: '',
    },
  },
  methods: {
    isSVG() {
      return this.src.endsWith('.svg')
    },
    isURL() {
      return this.src.startsWith('http')
    },
    stripExtension(filename) {
      return filename.split('.').slice(0, -1).join('.')
    },
    getSrc() {
      return this.src.replace('/img/', '').replace('img/', '')
    },
  },
}
</script>

<style scoped>
img {
  @apply object-cover;
}
</style>