<template>
  <div>
    <landing-hero :cData="heroData" />
    <landing-logo-cloud :cData="logoCloudData" />
    <landing-features :cData="featuresData" />

    <LandingCTA :cData="cta1Data" class="mt-16" />

    <landing-events
      id="events"
      :eventsFutureData="eventsFutureData"
      :eventsPastData="eventsFutureData"
      :headingData="eventsHeadingData"
    />

    <LandingFAQ id="faq" :cData="faqData" />

    <landing-team id="team" :cData="teamData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventsFutureData: { events: [] },
      eventsPastData: { events: [] },
    }
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
  mounted() {
    this.getEventsFutureData()
    this.getEventsPastData()
  },
  methods: {
    getEventsFutureData() {
      this.$axios
        .$get('/.netlify/functions/get_events')
        .then((res) => {
          this.eventsFutureData = res
        })
        .catch((err) => {
          console.error('Cannot load future events data', err)
        })
    },
    getEventsPastData() {
      this.$axios
        .$get('/.netlify/functions/get_events?time_filter=past')
        .then((res) => {
          this.eventsPastData = res
        })
        .catch((err) => {
          console.error('Cannot load past events data', err)
        })
    },
  },
}
</script>


