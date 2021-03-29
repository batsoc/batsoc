<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="overflow-hidden bg-white shadow sm:rounded-md">
    <ul class="divide-y divide-gray-200">
      <li v-for="event in pastEvents" :key="event.id">
        <a :href="event.url" target="_blank" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between w-full">
              <p class="text-sm font-medium text-gray-600 truncate">
                <span class="font-bold">{{ event.name.text }}</span>
                {{ event.description.text }}
              </p>
              <!-- <div class="flex flex-shrink-0 ml-2">
                <p
                  class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                >
                  Full-time
                </p>
              </div> -->
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="flex items-center text-sm text-gray-500">
                  <calendar-icon class="w-5 h-5 mr-2"></calendar-icon>
                  {{ event.start.utc | formatDate(event.start.timezone) }}
                </p>
                <p
                  v-if="event.venue && event.venue.address"
                  class="flex items-center mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-6"
                >
                  <map-pin-icon class="w-5 h-5 mr-2"></map-pin-icon>
                  {{ event.venue.address.localized_address_display }}
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { CalendarIcon, MapPinIcon } from 'vue-feather-icons'
export default {
  props: {
    pastEvents: {
      type: Array,
      required: true,
    },
  },
  components: {
    CalendarIcon,
    MapPinIcon,
  },
}
</script>