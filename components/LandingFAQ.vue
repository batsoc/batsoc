<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <landing-section-header
          :h2="cData.h2"
          :heading="cData.heading"
          :subHeading="cData.subHeading"
        />

        <dl class="py-12 space-y-6 divide-y divide-gray-200 sm:py-16">
          <LandingFAQSingle
            v-for="q in cData.questions"
            :key="q.question"
            :question="q.question"
            :answer="q.answer"
            :cData="cData"
          />
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  props: {
    cData: {
      type: Object,
      required: true,
    },
  },
  components: {
    ChevronDownIcon,
  },
}
</script>