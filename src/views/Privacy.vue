<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'

const faqs = [
  {
    question: "Information We Collect",
    answer: "Personal Information: We may collect personally identifiable information, such as your name, email address, postal address, and phone number, when you voluntarily submit it to us through our website. Usage Information: We automatically collect certain information about your device, browsing actions, and patterns. This may include your IP address, browser type, operating system, referring URLs, device identifiers, and pages visited.",
  },
  {
    question: "How We Use Your Information",
    answer: "We may use the information we collect from you for various purposes, including: to provide and maintain our services, to process your requests or transactions, to send you promotional or marketing communications, to improve our website and services, to respond to your inquiries and provide support.",
  },
  {
    question: "Disclosure of Your Information",
    answer: "We may share your personal information with third parties in the following circumstances: With service providers or business partners who assist us in delivering our services, when required by law or in response to a legal request, to protect our rights, privacy, safety, or property, or the public, in connection with a merger, acquisition, or sale of assets.",
  },
  {
    question: "Cookies and Tracking Technologies",
    answer: "We may use cookies and similar tracking technologies to collect and track information about your use of our website. You can control cookies through your browser settings.",
  },
  {
    question: "Your Choices",
    answer: "You have the following choices regarding your personal information: You can review and update your personal information by contacting us, you can opt out of receiving promotional emails from us by following the instructions in those emails, you can disable cookies in your browser settings.",
  },
  {
    question: "Security",
    answer: "We use reasonable administrative, technical, and physical measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.",
  },
  // More questions...
]
</script>
<template>
  <div class="mx-auto max-w-7xl pt-8">
    <div class="px-6 md:px-0 flex flex-col items-center text-center">         
     
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="hidden mt-12 text-xl tracking-xxl leading-7 text-gray-900 uppercase">Privacy Policy</h2>
        <p class="mt-16 drop-shadow-xl text-md tracking-wide leading-6 text-gray-900">This <span class="font-bold">Privacy Policy</span> is designed to help you understand how we collect, use, disclose, and safeguard your personal information. By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>
      </div>
      <div class="mt-12 text-left">
        <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          <div v-for="faq in faqs" :key="faq.question">
            <dt class="text-base font-semibold leading-7 text-gray-900">{{ faq.question }}</dt>
            <dd class="mt-2 drop-shadow-xl text-base leading-7 text-gray-800">{{ faq.answer }}</dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
  </div>
</template>
