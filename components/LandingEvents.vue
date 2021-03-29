<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative px-4 pb-20 bg-white sm:px-6 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <landing-section-header
        :h2="headingData.h2"
        :heading="headingData.heading"
        :subHeading="headingData.subHeading"
      />
      <div
        class="grid max-w-lg gap-5 mx-auto mt-12 auto-rows-max lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="event in getFutureEvents()"
          :key="event.slug"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div class="flex-shrink-0">
            <base-img
              img-class="w-full h-48"
              :src="event.img ? event.img : '/img/fox1.jpg'"
              :alt="event.title"
              size="md"
            />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="flex items-center text-sm text-gray-500">
                <calendar-icon class="w-5 h-5 mr-2"></calendar-icon>
                {{ getDateFormatted(event.eventAt) }}
                <!-- <span
                  class="ml-1"
                  title="If you set the date to 2099, it becomes 'Ongoing'. You can use for hiring Volonteers."
                >
                  Ongoing</span
                > -->
              </p>

              <p
                class="flex items-center mt-3 text-sm text-gray-500"
                v-if="event.location"
              >
                <map-pin-icon class="w-5 h-5 mr-2"></map-pin-icon>
                {{ event.location }}
              </p>

              <div class="block mt-3">
                <p class="text-xl font-semibold text-gray-900">
                  {{ event.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">{{ event.excerpt }}</p>
              </div>
            </div>
            <div class="flex items-center mt-6" v-if="event.url">
              <a :href="event.url" class="w-full btn btn-secondary btn-outline">
                Go to event details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="getPastEvents().length > 0">
      <landing-section-header id="events" h2="Past Bat Society Events" />
      <landing-events-past
        class="max-w-3xl mx-auto mt-8"
        :past-events="getPastEvents()"
      />
    </div>
  </div>
</template>

<script>
import { CalendarIcon, MapPinIcon } from 'vue-feather-icons'
export default {
  props: {
    cData: {
      type: Array,
      required: true,
    },
    headingData: {
      type: Object,
      required: true,
    },
  },
  components: {
    CalendarIcon,
    MapPinIcon,
  },
  methods: {
    getFutureEvents() {
      return this.cData.filter((event) => {
        return new Date(event.eventAt) > new Date()
      })
    },
    getPastEvents() {
      return this.cData.filter((event) => {
        return new Date(event.eventAt) < new Date()
      })
    },
    getDateFormatted(dateStr) {
      return this.$dayjs(dateStr)
        .tz('Australia/Brisbane')
        .format('dddd, MMMM MM, YYYY HH:mm (Z)')
    },
  },
}
</script>