// see https://medium.com/@vinodugale219/add-date-filter-in-nuxtjs-7dead1373d7c

import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('formatDate', (dateStr, timezone = 'Australia/Brisbane') => {
  return dayjs(dateStr).tz(timezone).format('dddd, MMMM DD, YYYY HH:mm (Z)')
})
