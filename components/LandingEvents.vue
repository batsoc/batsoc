<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative px-4 pb-20 bg-white sm:px-6 lg:pb-28 lg:px-8">
    <div
      class="relative mx-auto max-w-7xl"
      v-if="eventsFutureData.events.length > 0"
    >
      <landing-section-header
        :h2="headingData.h2"
        :heading="headingData.heading"
        :subHeading="headingData.subHeading"
      />
      <div
        class="grid max-w-lg gap-12 mx-auto mt-12 auto-rows-max md:max-w-none lg:gap-8"
        :class="{
          'lg:grid-cols-3': eventsFutureData.events.length > 2,
          'lg:grid-cols-2 lg:max-w-3xl': eventsFutureData.events.length == 2,
        }"
      >
        <div
          v-for="event in eventsFutureData.events"
          :key="event.id"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div class="flex-shrink-0">
            <base-img
              class="w-full h-48"
              :src="event.logo ? event.logo.url : '/img/fox1.jpg'"
              :alt="event.name.text"
            />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="flex items-center text-sm text-gray-500">
                <calendar-icon class="w-5 h-5 mr-2"></calendar-icon>
                {{ event.start.utc | formatDate(event.start.timezone) }}
                <!-- <span
                  class="ml-1"
                  title="If you set the date to 2099, it becomes 'Ongoing'. You can use for hiring Volonteers."
                >
                  Ongoing</span
                > -->
              </p>

              <p
                class="flex items-center mt-3 text-sm text-gray-500"
                v-if="event.venue && event.venue.address"
              >
                <map-pin-icon class="w-5 h-5 mr-2"></map-pin-icon>
                {{ event.venue.address.localized_address_display }}
              </p>

              <div class="block mt-3">
                <p class="text-xl font-semibold text-gray-900">
                  {{ event.name.text }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ event.description.text }}
                </p>
              </div>
            </div>
            <div class="flex items-center mt-6" v-if="event.url">
              <a
                :href="event.url"
                target="_blank"
                class="w-full btn btn-secondary btn-outline"
              >
                Go to event details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="eventsPastData.events.length > 0">
      <landing-section-header id="events" h2="Past Bat Society Events" />
      <landing-events-past
        class="max-w-3xl mx-auto mt-8"
        :past-events="eventsPastData.events"
      />
    </div>
  </div>
</template>

<script>
import { CalendarIcon, MapPinIcon } from 'vue-feather-icons'
export default {
  data() {
    return {
      eventsFutureData: { events: [] },
      eventsPastData: { events: [] },
    }
  },
  props: {
    headingData: {
      type: Object,
      required: true,
    },
  },
  components: {
    CalendarIcon,
    MapPinIcon,
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
        .$get(
          '/.netlify/functions/get_events?time_filter=past&order_by=start_desc'
        )
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