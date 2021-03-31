<template>
  <div>
    <navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('netlifycms', ['siteSettings']),
  },
  // site-wide headers
  head() {
    return {
      meta: [
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `@${this.siteSettings.twitter}`,
        },
      ],
    }
  },
}
</script>
