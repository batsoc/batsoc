<template>
  <div>
    <landing-hero :cData="heroData" />
    <landing-logo-cloud :cData="logoCloudData" />
    <landing-features :cData="featuresData" />

    <LandingCTA :cData="cta1Data" class="mt-16" />

    <landing-events
      id="events"
      :cData="eventsData"
      :headingData="eventsHeadingData"
    />

    <LandingFAQ id="faq" :cData="faqData" />

    <landing-team id="team" :cData="teamData" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const heroData = await $content('landing-page/hero').fetch()
    const logoCloudData = await $content('landing-page/logo-cloud').fetch()
    const featuresData = await $content('landing-page/features').fetch()

    const cta1Data = await $content('landing-page/cta1').fetch()

    const eventsHeadingData = await $content(
      'landing-page/events-heading'
    ).fetch()

    // const now = process.server ? new Date().valueOf() : new Date().toJSON()
    var eventsData = await $content('events')
      .sortBy('eventAt', 'desc')
      .limit(10)
      .fetch()
      .catch((err) => {
        console.error('Cannot load events')
      })
    eventsData = eventsData.reverse()

    const faqData = await $content('landing-page/faq').fetch()

    const teamData = await $content('landing-page/team').fetch()

    return {
      heroData,
      logoCloudData,
      featuresData,
      cta1Data,
      eventsHeadingData,
      eventsData,
      faqData,
      teamData,
    }
  },
}
</script>


