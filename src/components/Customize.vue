<template>
  
    <div>
    <div
      class="relative flex flex-col items-center bg-slate-100/50 w-[365px] h-[780px] rounded-3xl shadow-xl ring-1 mt-2 ring-slate-900/5"
      style="transform: translateZ(0px); opacity: 1"
    >
      <div
        class="absolute flex flex-col items-center  overflow-hidden justify-center ring-1 ring-slate-900/5 w-[350px] h-[765px] rounded-2xl ml-[0px] mt-[7px] bg-fit bg-bottom bg-no-repeat"
      >
        <div class="absolute w-[100%] h-[100%]">
          

          <div class="flex flex-col items-center">
            <p
          class="font-inter text-base mt-4 font-semibold leading-2 text-slate-700"
        >
          Step three
        </p>
        <h1
          class="font-inter font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
        >
          Customize
        </h1>
    
          </div>

          <Fabric></Fabric>
        </div>
       
        
      </div>
    </div>
  </div>
  
</template>

<script setup>
import Fabric from './Fabric.vue';

</script>

<style lang="scss" scoped>

</style>