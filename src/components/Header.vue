<script>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay, TransitionRoot, TransitionChild } from '@headlessui/vue'

export default {
  components: {
    Popover, PopoverButton, PopoverPanel, PopoverOverlay,
    TransitionRoot, TransitionChild,
    
  }
}
</script>
<template>
  <div>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between px-6 pt-14 lg:px-8" aria-label="Global">
        <div class="relative w-full z-10 flex justify-between items-center gap-16">
            <!--logo-->
            <router-link to="/" aria-label="Home" href="#" class="hidden items-center">
              <img class="h-8 w-auto" src="/images/logo_milleisole_2024.svg" alt="MILLE ISOLE">
            </router-link>
            <!--logo-->
            <!--Navigation Links-->
            <div class="absolute inset-0 flex flex-col items-center md:ml-4 md:pl-2 md:-mt-0.5 lg:mt-0 lg:ml-24 lg:pl-3 pt-8 justify-center">
              <img class="h-20 w-auto" src="/images/logo_milleisole_2024.svg" alt="" />
              <span class="text-2xl uppercase tracking-xxl">croatia</span>
            </div>
            <!--Navigation Links-->
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
              </div>
            </div>
          </div>
          <!--Navigation Buttons-->
          <div class="items-center hidden md:flex">
            <!--Mobile Navigation-->
            <Popover v-slot="{ open }" class="lg:hidden">
              <PopoverButton class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none"
                aria-label="Toggle site navigation">
                <div v-if="open">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6"><path d="M17 14l-5-5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-gray-900 dark:text-gray-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
              </PopoverButton>
              <TransitionRoot as="template" :show="open">
                <TransitionChild as="template"
                  enter="transition-all ease-linear duration-300" 
                  enter-from="opacity-0" 
                  enter-to="opacity-100" 
                  leave="transition-all ease-linear duration-100" 
                  leave-from="opacity-100" 
                  leave-to="opacity-0">
                  <PopoverOverlay class="fixed inset-0 z-0 bg-transparent backdrop-blur" />
                </TransitionChild>
              </TransitionRoot>
              <TransitionRoot as="template" :show="open">
                <TransitionChild as="template" 
                  enter="transition-all ease-in-out duration-250 transform" 
                  enter-from="-translate-y-12 opacity-0" 
                  enter-to="translate-y-0 opacity-100" 
                  leave="transition-all ease-in-out duration-200 transform"
                  leave-from="translate-y-0 opacity-100" 
                  leave-to="-translate-y-12 opacity-0">
                  <PopoverPanel class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-white pb-6 pt-32 shadow-2xl shadow-gray-900/20">
                    <div class="space-y-1 px-3">
                      <router-link to="/" href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Home</router-link>
                      <router-link to="/contact" href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Contact</router-link>
                      <router-link to="/imprint" href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Imprint</router-link>
                      <router-link to="/privacy" href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Privacy</router-link>
                    </div>
                    <div class="mt-8 flex flex-col gap-4 px-6">
                    </div>
                  </PopoverPanel>
                </TransitionChild>
              </TransitionRoot>
            </Popover>
            <router-link to="/contact" 
              class="hidden lg:flex text-gray-900 uppercase tracking-xl hover:text-gray-500">
              Contact
            </router-link>
          </div>
      </nav>
    </header>
  </div>
</template>