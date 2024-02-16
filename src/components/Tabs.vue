

<template>
  <!-- component -->
  <div class="flex flex-col items-center py-5">
    <div class="flex w-[450px]">
      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="w-10 h-10 mx-auto bg-gray-400 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-white w-full">
              <svg
                class="w-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  opacity="0.5"
                  d="M14.0516 2C15.7318 1.99999 17.0627 1.99997 18.1043 2.14245C19.1762 2.28908 20.0438 2.59803 20.728 3.29418C21.4122 3.99033 21.7159 4.87308 21.86 5.9637C22 7.02342 22 8.37752 22 10.087V10.0871V13.913V13.913C22 15.6225 22 16.9766 21.86 18.0363C21.7159 19.1269 21.4122 20.0097 20.728 20.7058C20.0438 21.402 19.1762 21.7109 18.1043 21.8575C17.0627 22 15.7318 22 14.0517 22H14.0516H13.9484H13.9483C12.2681 22 10.9373 22 9.89575 21.8575C8.82382 21.7109 7.95621 21.402 7.27199 20.7058C6.58778 20.0097 6.28413 19.1269 6.14001 18.0363C5.99998 16.9766 5.99999 15.6225 6 13.913V13.9129V10.087V10.087C5.99999 8.3775 5.99998 7.02343 6.14001 5.9637C6.28413 4.87308 6.58778 3.99033 7.27199 3.29418C7.95621 2.59803 8.82382 2.28908 9.89575 2.14245C10.9373 1.99997 12.2682 1.99999 13.9484 2H13.9484H14.0516H14.0516Z"
                  fill="#1C274C"
                />
                <path
                  d="M12 18.25C11.5858 18.25 11.25 18.5858 11.25 19C11.25 19.4142 11.5858 19.75 12 19.75H17C17.4142 19.75 17.75 19.4142 17.75 19C17.75 18.5858 17.4142 18.25 17 18.25H12Z"
                  fill="#1C274C"
                />
                <path
                  d="M2 14.5C2 13.0955 2 12.3933 2.33706 11.8889C2.48298 11.6705 2.67048 11.483 2.88886 11.3371C3.39331 11 4.09554 11 5.5 11C6.90446 11 7.60669 11 8.11114 11.3371C8.32952 11.483 8.51702 11.6705 8.66294 11.8889C9 12.3933 9 13.0955 9 14.5V18.5C9 19.9045 9 20.6067 8.66294 21.1111C8.51702 21.3295 8.32952 21.517 8.11114 21.6629C7.60669 22 6.90446 22 5.5 22C4.09554 22 3.39331 22 2.88886 21.6629C2.67048 21.517 2.48298 21.3295 2.33706 21.1111C2 20.6067 2 19.9045 2 18.5V14.5Z"
                  fill="#1C274C"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">Product</div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="absolute flex align-center items-center align-middle content-center"
            style="
              width: calc(90% - 2.5rem - 1rem);
              top: 50%;
              transform: translate(-50%, -50%);
            "
          >
            <div
              class="w-full bg-gray-50 rounded-3xl shadow-xl ring-1 ring-slate-500/50 items-center align-middle align-center flex-1"
            >
              <div
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :variants="{ custom: { scale: 1 } }"
                :delay="500"
                class="w-full bg-gray-400 py-1 rounded mx-auto"
              ></div>
            </div>
          </div>
          <div class="w-10 h-10 mx-auto relative">
            <div
              v-motion
              :initial="{ opacity: 1, scale: 1 }"
              :enter="{ opacity: 1, scale: 0 }"
              :delay="300"
              class="absolute z-20 w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
            >
              <span class="text-center text-white w-full">
                <svg
                  class="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    opacity="0.5"
                    d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M17.5562 9.27246C17.096 9.27246 16.7229 9.63877 16.7229 10.0906C16.7229 10.5425 17.096 10.9088 17.5562 10.9088H18.6673C19.1276 10.9088 19.5007 10.5425 19.5007 10.0906C19.5007 9.63877 19.1276 9.27246 18.6673 9.27246H17.5562Z"
                    fill="#1C274C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0007 9.27246C9.69946 9.27246 7.83398 11.104 7.83398 13.3634C7.83398 15.6227 9.69946 17.4543 12.0007 17.4543C14.3018 17.4543 16.1673 15.6227 16.1673 13.3634C16.1673 11.104 14.3018 9.27246 12.0007 9.27246ZM12.0007 10.9088C10.6199 10.9088 9.50065 12.0078 9.50065 13.3634C9.50065 14.719 10.6199 15.8179 12.0007 15.8179C13.3814 15.8179 14.5007 14.719 14.5007 13.3634C14.5007 12.0078 13.3814 10.9088 12.0007 10.9088Z"
                    fill="#1C274C"
                  />
                </svg>
              </span>
            </div>

            <div
              v-motion
              :initial="{ opacity: 1, scale: 0 }"
              :enter="{ opacity: 1, scale: 1 }"
              :delay="500"
              :variants="{ custom: { scale: 3 } }"
              class="absolute w-10 h-10 mx-auto bg-slate-700/50 rounded-full text-lg text-white flex items-center"
            >
              <span class="text-center text-white w-full">
                <svg
                  class="w-full fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    opacity="0.5"
                    d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M17.5562 9.27246C17.096 9.27246 16.7229 9.63877 16.7229 10.0906C16.7229 10.5425 17.096 10.9088 17.5562 10.9088H18.6673C19.1276 10.9088 19.5007 10.5425 19.5007 10.0906C19.5007 9.63877 19.1276 9.27246 18.6673 9.27246H17.5562Z"
                    fill="#1C274C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0007 9.27246C9.69946 9.27246 7.83398 11.104 7.83398 13.3634C7.83398 15.6227 9.69946 17.4543 12.0007 17.4543C14.3018 17.4543 16.1673 15.6227 16.1673 13.3634C16.1673 11.104 14.3018 9.27246 12.0007 9.27246ZM12.0007 10.9088C10.6199 10.9088 9.50065 12.0078 9.50065 13.3634C9.50065 14.719 10.6199 15.8179 12.0007 15.8179C13.3814 15.8179 14.5007 14.719 14.5007 13.3634C14.5007 12.0078 13.3814 10.9088 12.0007 10.9088Z"
                    fill="#1C274C"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">Upload Images</div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="absolute flex align-center items-center align-middle content-center"
            style="
              width: calc(100% - 2.5rem - 1rem);
              top: 50%;
              transform: translate(-50%, -50%);
            "
          >
            <div
              class="w-full bg-gray-50 rounded-3xl shadow-xl ring-1 ring-slate-500/50 items-center align-middle align-center flex-1"
            >
              <div class="w-0 bg-gray-400 py-1 rounded" style="width: 0%"></div>
            </div>
          </div>

          <div
            class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-gray-600 w-full">
              <svg
                class="w-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">Customize</div>
      </div>

      <div class="w-1/4">
        <div class="relative mb-2">
          <div
            class="absolute flex align-center items-center align-middle content-center"
            style="
              width: calc(100% - 2.5rem - 1rem);
              top: 50%;
              transform: translate(-50%, -50%);
            "
          >
            <div
              class="w-full bg-gray-50 rounded-3xl shadow-xl ring-1 ring-slate-700/50 items-center align-middle align-center flex-1"
            >
              <div class="w-0 bg-gray-900 py-1 rounded" style="width: 0%"></div>
            </div>
          </div>

          <div
            class="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
          >
            <span class="text-center text-gray-600 w-full">
              <svg
                class="w-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  class="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="text-xs text-center md:text-base">Finish</div>
      </div>
    </div>
    <!-- <Fabric></Fabric> -->
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

            <div class="relative w-[340px] h-[500px] flex flex-col items-center">
    <canvas class="left-[0px] top-[0px]" ref="canvasRef"></canvas>
    <div class="absolute left-[280px] top-[40px] gap-3 flex flex-col m-3">
      <button @click="zoomInSelectedImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          />
        </svg>
      </button>
      <button @click="zoomOutSelectedImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
          />
        </svg>
      </button>
      <button @click="bringForward">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
          />
        </svg>
      </button>
      <button @click="sendBackwards">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
          />
        </svg>
      </button>
      <button @click="exportToPNG">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
        >
          <path
            d="M 6 4 L 6 28 L 26 28 L 26 20 L 24 22 L 24 26 L 8 26 L 8 6 L 24 6 L 24 10 L 26 12 L 26 4 Z M 22.40625 11 L 21 12.40625 L 23.5625 15 L 13.90625 15 L 13.90625 17 L 23.5625 17 L 21 19.59375 L 22.40625 21 L 26.71875 16.71875 L 27.40625 16 L 26.71875 15.28125 Z"
          />
        </svg>
      </button>
      <button @click="addCollage1" class="mt-10 -ml-4">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="60px"
          height="60px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
        >
          <g>
            <path
              fill="none"
              d="M63.5,10h-27c-3.033,0-5.5,2.467-5.5,5.5v69c0,3.032,2.467,5.5,5.5,5.5h27c3.032,0,5.5-2.468,5.5-5.5v-69
		C69,12.467,66.532,10,63.5,10z M36.71,21.164c-2.333,0-4.231-1.898-4.231-4.231c0-2.333,1.898-4.232,4.231-4.232
		s4.231,1.898,4.231,4.232C40.942,19.265,39.043,21.164,36.71,21.164z M44.114,18.713c-0.83,0-1.504-0.673-1.504-1.504
		c0-0.831,0.674-1.504,1.504-1.504s1.504,0.673,1.504,1.504C45.618,18.04,44.944,18.713,44.114,18.713z"
            />
            <circle fill="none" cx="36.71" cy="16.932" r="1.232" />
            <path
              fill="#3C3A40"
              d="M63.5,7h-27c-4.687,0-8.5,3.813-8.5,8.5v69c0,4.687,3.813,8.5,8.5,8.5h27c4.687,0,8.5-3.813,8.5-8.5v-69
		C72,10.813,68.187,7,63.5,7z M69,84.5c0,3.032-2.468,5.5-5.5,5.5h-27c-3.033,0-5.5-2.468-5.5-5.5v-69c0-3.033,2.467-5.5,5.5-5.5h27
		c3.032,0,5.5,2.467,5.5,5.5V84.5z"
            />
            <path
              fill="#3C3A40"
              d="M36.71,12.7c-2.333,0-4.231,1.898-4.231,4.232c0,2.333,1.898,4.231,4.231,4.231s4.231-1.898,4.231-4.231
		C40.942,14.599,39.043,12.7,36.71,12.7z M36.71,18.164c-0.679,0-1.231-0.552-1.231-1.231S36.031,15.7,36.71,15.7
		s1.231,0.553,1.231,1.232S37.39,18.164,36.71,18.164z"
            />
            <circle fill="#3C3A40" cx="44.114" cy="17.209" r="1.504" />
          </g>
        </svg>
      </button>
      <button class="-ml-4" @click="addCollage">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="60px"
          height="60px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
        >
          <g>
            <circle fill="none" cx="37.377" cy="16.932" r="1.232" />
            <path
              fill="none"
              d="M69,50V15.5c0-3.033-2.468-5.5-5.5-5.5h-27c-3.033,0-5.5,2.467-5.5,5.5V50H69z M44.781,15.705
		c0.83,0,1.504,0.673,1.504,1.504c0,0.831-0.674,1.504-1.504,1.504s-1.504-0.673-1.504-1.504
		C43.277,16.378,43.951,15.705,44.781,15.705z M37.377,12.7c2.334,0,4.232,1.898,4.232,4.232c0,2.333-1.898,4.231-4.232,4.231
		c-2.333,0-4.23-1.898-4.23-4.231C33.146,14.599,35.044,12.7,37.377,12.7z"
            />
            <path
              fill="none"
              d="M31,53v31.5c0,3.032,2.467,5.5,5.5,5.5h27c3.032,0,5.5-2.468,5.5-5.5V53H31z"
            />
            <path
              fill="#3C3A40"
              d="M63.5,7h-27c-4.687,0-8.5,3.813-8.5,8.5v69c0,4.687,3.813,8.5,8.5,8.5h27c4.687,0,8.5-3.813,8.5-8.5v-69
		C72,10.813,68.187,7,63.5,7z M36.5,10h27c3.032,0,5.5,2.467,5.5,5.5V50H31V15.5C31,12.467,33.467,10,36.5,10z M63.5,90h-27
		c-3.033,0-5.5-2.468-5.5-5.5V53h38v31.5C69,87.532,66.532,90,63.5,90z"
            />
            <path
              fill="#3C3A40"
              d="M37.377,21.164c2.334,0,4.232-1.898,4.232-4.231c0-2.333-1.898-4.232-4.232-4.232
		c-2.333,0-4.23,1.898-4.23,4.232C33.146,19.265,35.044,21.164,37.377,21.164z M37.377,15.7c0.68,0,1.232,0.553,1.232,1.232
		s-0.553,1.231-1.232,1.231c-0.679,0-1.23-0.552-1.23-1.231S36.698,15.7,37.377,15.7z"
            />
            <circle fill="#3C3A40" cx="44.781" cy="17.209" r="1.504" />
          </g>
        </svg>
      </button>
    </div>
    <div class="flex flex-col">
      <!-- <input
        id="uploadButton"
        class="w-[100px] h-[20px]"
        type="file"
        ref="fileInput"
        @change="handleImageUpload"
      /> -->

      <!-- <input
        id="uploadButton1"
        class="w-[100px] h-[30px] hidden"
        type="file"
        ref="fileInput1"
        @change="handleImageUpload1"
      /> -->
    </div>
    <div class="absolute top-[40px] left-[10px] flex flex-col gap-3">
      <div
        class="relative w-[35px] h-[30px]"
        v-for="(image, index) in uploadedImages"
        :key="image.id"
      >
        <!-- <span>{{ image.id }}</span> -->
        <img
          class="border-[2px] m-1 rounded-md border-gray-700/80"
          :src="image.url"
          :key="image.id"
          alt="Uploaded Image"
          @click="addClipPathToSelectedObject(index)"
        />
      </div>
    </div>
    <!-- <div class="flex flex-col">
      <select @change="addPhoneToCanvas" v-model="selectedShape">
        <option value="blank">Select Model</option>
        <option value="xiaomi">Xiaomi</option>
        <option value="samsung">Samsung</option>
      </select>
      <button @click="addPhoneToCanvas">Select Phone</button>
    </div> -->
    <!-- <select v-model="selectedImage">
      <option v-for="image in images" :key="image.id" :value1="image.url">
        {{ image.name }}
      </option>
    </select> -->
    <!-- <button @click="exportToPNG">Export to PNG</button> -->
    <!-- <button @click="handleImageUpload1">Add Canvas</button> -->
  </div>
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
  
  </div>
</template>

<script setup>


import Fabric from "../components/Fabric.vue";
import { ref } from "vue";
import SelectProduct from "./SelectProduct.vue";
import UploadImages from "./UploadImages.vue";
import Customize from "./Customize.vue";


const position = ref(380);

const moveLeft = () => {
  position.value -= 350;
};
const moveRight = () => {
  position.value += 350;
};
</script>
