<template>
  <picture v-if="isURL()">
    <img :data-src="getSrc()" :class="['lazyload', imgClass]" :alt="alt" />
  </picture>

  <!-- For explanation of v-if v-else see https://vuejs.org/v2/guide/conditional.html -->
  <!--  -->
  <!-- SVGs: default is to include if smaller than 5kb -->
  <!-- For SVGs no img-class can be used, just class -->
  <div
    v-else-if="isSVG()"
    v-html="require('~/static/img/' + stripExtension(getSrc()) + '.svg?raw')"
  />

  <!-- if gif filetype, no reponsive sizes generated, just webp and compression -->
  <!-- Note: for GIF, the `size` property is ignored -->
  <picture v-else>
    <img
      :data-src="'/img/' + getSrc()"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>
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
    // classes to apply to inner <img> tag (tailwindcss and so on)
    // DOES NOT apply to .svg
    // Use as <BaseImage img-class="..." ... />
    imgClass: {
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
/* picture {
  @apply overflow-hidden;
} */

picture img {
  @apply object-cover;
}
</style>