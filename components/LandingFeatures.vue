<template>
  <div>
    <landing-section-header
      id="what-we-do"
      :h2="cData.h2"
      :heading="cData.heading"
      :subHeading="cData.subHeading"
    />

    <landing-feature-single
      v-for="(sub, index) in cData.subSections"
      :key="index"
      :heading="sub.heading"
      :is-img-on-left="index % 2 === 0"
      :img="sub.img"
      :text="sub.text"
      :btnLabel="sub.btnLabel"
      :btnUrl="sub.btnUrl"
    />
  </div>
</template>

<script>
export default {
  props: {
    cData: {
      type: Object,
      required: true,
    },
  },
}
</script>