<template>
  <div>
    <div
      class="relative flex flex-col items-center bg-slate-100/50 w-[365px] h-[620px] rounded-3xl shadow-xl ring-1 mt-2 ring-slate-900/5"
    >
      <div
        class="absolute flex flex-col items-center overflow-hidden justify-center ring-1 ring-slate-900/5 w-[350px] h-[605px] rounded-2xl ml-[0px] mt-[7px] bg-fit bg-bottom bg-no-repeat"
      >
        <div
          class="flex flex-row gap-10 items-start"
          :style="{
            transform: `translateX(${position}px)`,
            transitionDuration: '500ms',
          }"
        >
          <div v-motion-pop class="relative w-[300px] h-[600px]">
            <div class="flex flex-col ml-2 mt-4 items-left">
              <p
                class="font-inter text-base mt-4 font-semibold leading-2 text-slate-700"
              >
                Step two
              </p>
              <h1
                class="font-inter font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
              >
                Product
              </h1>
              <p
                class="font-inter m-5 text-base font-medium text-center px-4 leading-7 text-slate-700"
              >
                Choose product to customize.
              </p>
            </div>
            <div
              class="relative bg-transparent w-[305px] h-[335px] mt-2 rounded-3xl shadow-xl ring-1 ring-slate-900/5"
              style="transform: translateZ(0px); opacity: 1"
            >
              <div
                class="absolute flex flex-col items-start bg-slate-50 ring-1 ring-slate-900/5 w-[290px] h-[320px] rounded-2xl ml-[7px] mt-[7px] bg-fit bg-bottom bg-no-repeat"
              >
                <div class="pt-0 space-y-5">
                  <div>
                    <label
                      for=""
                      class="font-inter text-md font-semibold mt-2 px-4 leading-7 text-slate-700"
                      >Product brand</label
                    >
                    <div class="mt-4">
                      <select
                        @change="addPhoneToCanvas"
                        class="w-[250px] m-3 p-2 bg-slate-50 text-slate-700 focus:bg-slate-50/20 outline-slate-700/20 outline-offset-8 focus:text-cyan-700 rounded-lg shadow-xl focus-visible:ring-1 -my-4 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                      >
                        <option value="Huawei">Huawei</option>
                        <option value="Samsung">Samsung</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex flex-col items-start m-2 notvalid">
                    <label
                      for=""
                      class="font-inter text-md font-semibold mt-2 px-4 leading-7 text-slate-700"
                      >Product model</label
                    >
                    <div class="mt-4">
                      <select
                        class="w-[250px] m-3 p-2 bg-slate-50 text-slate-700 focus:bg-slate-50/20 outline-slate-700/20 outline-offset-8 focus:text-cyan-700 rounded-lg shadow-xl focus-visible:ring-1 -my-4 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                      >
                        <option value="Mate 10 Pro">Mate 10 Pro</option>
                        <option value="Mate 20">Mate 20</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex flex-col items-start m-2 valid">
                    <label
                      for=""
                      class="font-inter text-md font-semibold mt-2 px-4 leading-7 text-slate-700"
                      >Type of case</label
                    >
                    <div class="mt-4">
                      <select
                        class="w-[250px] m-3 p-2 bg-slate-100 text-slate-700 focus:bg-slate-50 outline-slate-700/20 outline-offset-8 focus:text-cyan-700 rounded-lg shadow-xl focus-visible:ring-1 -my-4 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                      >
                        <option value="Hard Case">Hard Case</option>
                        <option value="Soft Case">Soft Case</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="absolute right-[0px] -bottom-1 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
            >
              <div
                @click="moveLeft"
                class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
              >
                <p
                  class="text-center text-base font-inter font-bold text-slate-100"
                >
                  Next
                </p>
              </div>
            </div>
          </div>
          <div class="relative w-[300px] p-2 h-[600px]">
            <div class="flex flex-col ml-2 mt-4 items-left">
              <p
                class="font-inter text-base mt-4 font-semibold leading-2 text-slate-700"
              >
                Step two
              </p>
              <h1
                class="font-inter font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
              >
                Add Images
              </h1>
              <p
                class="font-inter my-5 text-base whitespace-nowrap font-medium text-center leading-7 text-slate-700"
              >
                Upload your images to customize.
              </p>
            </div>
            <div
              class="bg-transparent w-[305px] h-[175px] mt-2 rounded-3xl shadow-xl ring-1 ring-slate-900/5"
              style="transform: translateZ(0px); opacity: 1"
            >
              <div
                class="absolute flex flex-col items-start bg-slate-50 ring-1 ring-slate-900/5 w-[290px] h-[160px] rounded-2xl ml-[7px] mt-[7px] bg-fit bg-bottom bg-no-repeat"
              >
                <div class="pt-0 space-y-5">
                  <div class="flex flex-col items-start m-2">
                    <div
                      class="absolute left-[40%] -bottom-10 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
                    >
                      <div
                        class="px-2 py-1  border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
                      >
                        <p
                          class="px-1 mb-2 animate-pulse text-center text-3xl font-inter font-extrabold leading-none tracking-tight text-slate-100"
                        >
                          +
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="absolute left-[10px] -bottom-1 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
            >
              <div
                @click="moveRight"
                class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
              >
                <p
                  class="text-center text-base font-inter font-bold text-slate-100"
                >
                  Back
                </p>
              </div>
            </div>
            <div
              class="absolute right-[0px] -bottom-1 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
            >
              <div
                @click="moveLeft"
                class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
              >
                <p
                  class="text-center text-base font-inter font-bold text-slate-100"
                >
                  Next
                </p>
              </div>
            </div>
          </div>
          <div class="relative flex flex-col mt-10 w-[380px] h-[600px]">
            <!-- <div class="flex flex-col items-start ml-4">
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
            </div> -->

            <Fabric></Fabric>
            <div
              class="absolute left-[20px] bottom-8 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
            >
              <div
                @click="moveRight"
                class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
              >
                <p
                  class="text-center text-base font-inter font-bold text-slate-100"
                >
                  Back
                </p>
              </div>
            </div>
            <div
              class="absolute right-[50px] bottom-8 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
            >
              <div
                @click="moveLeft"
                class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
              >
                <p
                  class="text-center text-base font-inter font-bold text-slate-100"
                >
                  Finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Fabric from "./Fabric.vue";

const position = ref(380);

const moveLeft = () => {
  position.value -= 350;
};
const moveRight = () => {
  position.value += 350;
};
</script>

<style></style>
