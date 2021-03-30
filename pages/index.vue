<template>
  <div>
    <LazyHydrate never>
      <div>
        <landing-hero :cData="heroData" />
        <landing-logo-cloud :cData="logoCloudData" />
        <landing-features :cData="featuresData" />
        <LandingCTA :cData="cta1Data" class="mt-16" />
      </div>
    </LazyHydrate>

    <LazyHydrate when-idle>
      <landing-events id="events" :headingData="eventsHeadingData" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <LandingFAQ id="faq" :cData="faqData" />
    </LazyHydrate>

    <LazyHydrate never>
      <landing-team id="team" :cData="teamData" />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    LazyHydrate,
  },

  async asyncData({ $content, $axios }) {
    const heroData = await $content('landing-page/hero').fetch()
    const logoCloudData = await $content('landing-page/logo-cloud').fetch()
    const featuresData = await $content('landing-page/features').fetch()

    const cta1Data = await $content('landing-page/cta1').fetch()

    const eventsHeadingData = await $content(
      'landing-page/events-heading'
    ).fetch()

    const faqData = await $content('landing-page/faq').fetch()

    const teamData = await $content('landing-page/team').fetch()

    return {
      heroData,
      logoCloudData,
      featuresData,
      cta1Data,
      eventsHeadingData,
      faqData,
      teamData,
    }
  },
}
</script>


