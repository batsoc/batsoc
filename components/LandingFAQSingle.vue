<template>
  <div class="pt-6">
    <dt class="text-lg">
      <!-- Expand/collapse question button -->
      <button
        class="flex items-start justify-between w-full text-left text-gray-400"
        @click="isOpen = !isOpen"
      >
        <span class="font-medium text-gray-900">
          {{ question }}
        </span>
        <span class="flex items-center ml-6 h-7">
          <!--
            Expand/collapse icon, toggle classes based on question open state.
            Open: "-rotate-180", Closed: "rotate-0"
          -->
          <chevron-down-icon
            class="w-6 h-6"
            :class="[isOpen ? 'transform -rotate-180' : '']"
          ></chevron-down-icon>
        </span>
      </button>
    </dt>
    <dd class="pr-12 mt-2" v-show="isOpen">
      <NuxtContent :document="answer" class="text-base prose text-gray-500" />
    </dd>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: Object,
      required: true,
    },
    cData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
    ChevronDownIcon,
  },
}
</script>