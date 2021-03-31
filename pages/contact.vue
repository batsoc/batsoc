<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          orange: colors.purple,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
  <main class="min-h-screen bg-white">
    <!-- Header -->
    <div class="py-24 bg-gray-50 sm:py-32">
      <div
        class="max-w-md pl-4 pr-8 mx-auto sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h1
          class="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl"
        >
          {{ contactData.h1 }}
        </h1>
        <p
          class="max-w-3xl mx-auto mt-6 text-xl leading-normal text-center text-gray-500"
        >
          {{ contactData.subH1 }}
        </p>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <base-img
            class="object-cover w-full h-56 lg:absolute lg:h-full"
            :src="'fox5.jpg'"
            :alt="''"
          />
        </div>
      </div>
      <div
        class="relative px-4 py-16 sm:py-20 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
      >
        <div class="lg:pr-8">
          <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {{ contactData.h2 }}
            </h2>
            <p class="mt-4 text-lg text-gray-500 sm:mt-3">
              {{ contactData.subH2 }}
            </p>

            <base-alert
              v-if="isSuccess"
              class="mt-10 sm:col-span-2"
              text="Thank you  for contacting us. We'll be in touch soon :)"
              alertType="success"
            />

            <FormulateForm
              v-else
              v-model="form"
              class="grid grid-cols-1 mt-9 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              @submit="handleSubmit"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              method="POST"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                  >First name</label
                >
                <div class="mt-1">
                  <FormulateInput
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    validation="required"
                    validation-name="First name"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-sm font-medium text-gray-700"
                  >Last name</label
                >
                <div class="mt-1">
                  <FormulateInput
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <div class="mt-1">
                  <FormulateInput
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="block"
                    validation="required|email"
                    validation-name="Email"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700"
                    >How can we help you?</label
                  >
                  <span id="message_description" class="text-sm text-gray-500"
                    >Max. 500 characters</span
                  >
                </div>
                <div class="mt-1">
                  <FormulateInput
                    type="textarea"
                    id="message"
                    name="message"
                    aria-describedby="message_description"
                    rows="6"
                    validation="required|min:10,max:500,length"
                    validation-name="Message"
                  ></FormulateInput>
                </div>
              </div>

              <div class="sm:col-span-2">
                <div class="flex justify-between">
                  <label
                    for="how_did_you_hear_about_us"
                    class="block text-sm font-medium text-gray-700"
                    >How did you hear about us?</label
                  >
                  <span
                    id="hear_about_description"
                    class="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div class="mt-1">
                  <FormulateInput
                    type="text"
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    v-model="form.how_did_you_hear_about_us"
                  />
                </div>
              </div>
              <base-alert
                v-if="isFailed && !isSuccess"
                class="sm:col-span-2"
                text="Oops! Something went wrong. Please try again or email us."
                alert-type="danger"
              />
              <div class="text-right sm:col-span-2">
                <FormulateInput
                  type="submit"
                  label="Submit"
                  :disabled="isSubmitting"
                />
              </div>
            </FormulateForm>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-orange-400">
      <div
        class="max-w-md px-4 py-16 mx-auto text-center sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <h2 class="text-3xl font-extrabold sm:text-4xl">
          <span class="block text-white">Looking to volunteer?</span>
          <span class="block text-orange-900">Message us.</span>
        </h2>
        <a
          href="#"
          class="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-orange-600 bg-white border border-transparent rounded-md shadow-md hover:bg-orange-50 sm:w-auto"
        >
          <span>Send us a message, say hi!</span>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { metaFromCMS } from '@/utils/utils-meta'

// Tutorial at https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/

// I used Vue-Formulate https://vueformulate.com/guide/ for form validation and handling
// Styling in formulate.config.js
export default {
  data() {
    return {
      isSubmitting: false,
      isSuccess: false,
      isFailed: false,
      form: {},
    }
  },
  head() {
    return metaFromCMS(this.contactData, this.$route.path, this.$route.query)
  },
  async asyncData({ $content }) {
    const contactData = await $content('settings/contact-us').fetch()

    return {
      contactData,
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      this.isSubmitting = true

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          ...this.form,
        }),
      })
        .then(() => {
          console.log('Success')
          this.isSuccess = true
          // this.$router.push('thanks')
        })
        .catch(() => {
          console.log('Failed')
          this.isFailed = true
          // this.$router.push('404')
        })
        .finally(() => {
          this.isSubmitting = false
        })
    },
  },
}
</script>