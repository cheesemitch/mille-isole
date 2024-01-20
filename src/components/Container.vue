<template>
  <div>
    <div class="relative isolate overflow-hidden">
      <img src="/images/leaf.jpg" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="relative min-h-screen pb-48">
          <slot></slot>
        </div>  
      
    </div>
  </div>
</template>