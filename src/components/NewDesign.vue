<template class="flex flex-col  min-h-svh overflow-hidden">
  <div
    class="flex-row flex items-center justify-start relative w-[100vw] p-1 h-[55px] shadow-inner bg-gray-200"
  >
    <div
      class="relative ml-4 w-[40px] h-[40px] bg-white rounded-full ring-slate-300 ring-1 text-lg text-white flex items-center align-middle"
    >
      <span class="text-center ml-3 text-white w-[50px]">
        <svg
          fill="#1C274C"
          height="16px"
          width="16px"
          viewBox="0 0 486.196 486.196"
        >
          <g>
            <path
              d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
            />
          </g>
        </svg>
      </span>
    </div>
    <div class="relative w-[520px] h-[70px]"></div>
    <div class="w-max h-max flex flex-row text-left">
      <div
        class="hidden lg:flex gap-3 flex-row items-center align-middle justify-center m-3 z-20"
      >
        <p
          v-if="
            casesTypes[selectedCaseType] && casesTypes[selectedCaseType].price
          "
          class="whitespace-wrap font-extrabold select-none text-sm text-center leading-12 text-slate-700"
        >
          {{ this.selectedModelTitle }}
        </p>
        <p
          v-if="
            casesTypes[selectedCaseType] && casesTypes[selectedCaseType].price
          "
          class="whitespace-wrap font-extrabold select-none text-sm text-center leading-12 text-slate-700"
        >
          /
        </p>
        <p
          v-if="
            casesTypes[selectedCaseType] && casesTypes[selectedCaseType].price
          "
          class="whitespace-wrap font-medium text-sm select-none text-center text-slate-400"
        >
          {{ this.selectedCaseTitle }}
        </p>
        <p
          v-if="
            casesTypes[selectedCaseType] && casesTypes[selectedCaseType].price
          "
          class="whitespace-wrap font-extrabold select-none text-sm text-center leading-12 text-slate-700"
        >
          /
        </p>
        <p
          v-if="
            casesTypes[selectedCaseType] && casesTypes[selectedCaseType].price
          "
          class="whitespace-wrap font-extrabold select-none text-sm text-center leading-12 text-slate-700"
        >
          {{ parseFloat(casesTypes[selectedCaseType].price).toFixed(2) }}
          <span
            class="whitespace-wrap font-extrabold select-none text-sm text-center leading-12 text-slate-700"
            >{{ dictionary.currency }}</span
          >
        </p>
      </div>
    </div>
  </div>
  <div
    class="z-0 items-start justify-between lg:justify-normal flex flex-col lg:flex-row h-[calc(100vh-70px)] lg:h-[calc(100vh-100px)]"
  >
    <ul
      class="absolute z-50 bg-white lg:relative flex bottom-0 flex-row lg:flex-col text-md h-[50px] text-sm font-xl text-gray-100"
    >
      <li class="w-[20vw] h-[50px] lg:w-full lg:h-[calc(20vh-14px)]">
        <a
          @click="setActiveTabIndex(1)"
          href="#"
          :class="[
            'inline-flex place-items-center pl-3 py-6 text-gray-900 active w-full  h-full bg-white',
            { activeTab: activeTabIndex === 1 },
          ]"
          aria-current="page"
        >
          <div class="relative">
            <div class="w-10 h-10 mx-auto relative">
              <div
                v-if="activeTabIndex === 1"
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="300"
                class="absolute z-20 w-10 h-10 mx-auto bg-gray-400 border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
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

              <div
                class="absolute w-10 h-10 mx-auto bg-white rounded-full ring-slate-300 ring-1 text-lg text-white flex items-center"
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
          </div>
          <span
            v-if="activeTabIndex === 1"
            v-motion
            :initial="{ opacity: 0.5 }"
            :enter="{ opacity: 1 }"
            :delay="300"
            class="hidden lg:block pl-3 text-xl select-none font-bold"
            >{{ dictionary.step_one_title }}</span
          >
          <span
            v-else
            class="hidden lg:block pl-3 font-bold select-none text-xl opacity-50 transition-all"
            >{{ dictionary.step_one_title }}</span
          >
        </a>
      </li>
      <li class="w-[20vw] h-[50px] lg:w-full lg:h-[calc(20vh-14px)]">
        <a
          href="#"
          @click="setActiveTabIndex(2)"
          :class="[
            'inline-flex place-items-center pl-3 py-6 text-gray-900  active  w-[60px] lg:w-[200px] h-full bg-white',
            { activeTab: activeTabIndex === 2 },
            { 'pointer-events-none': !selectedCaseTitle },
            { 'opacity-50': !selectedCaseTitle },
          ]"
        >
          <div class="relative">
            <div class="w-10 h-10 mx-auto relative">
              <div
                v-if="activeTabIndex === 2"
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="300"
                class="absolute z-20 w-10 h-10 mx-auto bg-gray-400 border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
              >
                <span class="text-center text-white w-full">
                  <svg
                    class="w-full fill-current"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C10.7661 4 9.77318 4.39718 7.7873 5.19153L4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8Z"
                      fill="#1C274C"
                    />
                    <path
                      opacity="0.7"
                      d="M5.76613 10L4.97883 10.3149C2.99294 11.1093 2 11.5065 2 12C2 12.4935 2.99294 12.8907 4.97883 13.6851L7.7873 14.8085C9.77318 15.6028 10.7661 16 12 16C13.2339 16 14.2268 15.6028 16.2127 14.8085L19.0212 13.6851C21.0071 12.8907 22 12.4935 22 12C22 11.5065 21.0071 11.1093 19.0212 10.3149L18.2339 10L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L5.76613 10Z"
                      fill="#1C274C"
                    />
                    <path
                      opacity="0.4"
                      d="M5.76613 14L4.97883 14.3149C2.99294 15.1093 2 15.5065 2 16C2 16.4935 2.99294 16.8907 4.97883 17.6851L7.7873 18.8085C9.77318 19.6028 10.7661 20 12 20C13.2339 20 14.2268 19.6028 16.2127 18.8085L19.0212 17.6851C21.0071 16.8907 22 16.4935 22 16C22 15.5065 21.0071 15.1093 19.0212 14.3149L18.2339 14L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L5.76613 14Z"
                      fill="#1C274C"
                    />
                  </svg>
                </span>
              </div>

              <div
                class="absolute w-10 h-10 mx-auto bg-white rounded-full ring-slate-300 ring-1 text-lg text-white flex items-center"
              >
                <span class="text-center text-white w-full">
                  <svg
                    class="w-full fill-current"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C10.7661 4 9.77318 4.39718 7.7873 5.19153L4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8Z"
                      fill="#1C274C"
                    />
                    <path
                      opacity="0.7"
                      d="M5.76613 10L4.97883 10.3149C2.99294 11.1093 2 11.5065 2 12C2 12.4935 2.99294 12.8907 4.97883 13.6851L7.7873 14.8085C9.77318 15.6028 10.7661 16 12 16C13.2339 16 14.2268 15.6028 16.2127 14.8085L19.0212 13.6851C21.0071 12.8907 22 12.4935 22 12C22 11.5065 21.0071 11.1093 19.0212 10.3149L18.2339 10L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L5.76613 10Z"
                      fill="#1C274C"
                    />
                    <path
                      opacity="0.4"
                      d="M5.76613 14L4.97883 14.3149C2.99294 15.1093 2 15.5065 2 16C2 16.4935 2.99294 16.8907 4.97883 17.6851L7.7873 18.8085C9.77318 19.6028 10.7661 20 12 20C13.2339 20 14.2268 19.6028 16.2127 18.8085L19.0212 17.6851C21.0071 16.8907 22 16.4935 22 16C22 15.5065 21.0071 15.1093 19.0212 14.3149L18.2339 14L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L5.76613 14Z"
                      fill="#1C274C"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <span
            v-if="activeTabIndex === 2"
            v-motion
            :initial="{ opacity: 0.5 }"
            :enter="{ opacity: 1 }"
            :delay="300"
            class="hidden lg:block pl-3 text-xl font-bold select-none"
            >{{ dictionary.step_two_title }}</span
          >
          <span
            v-else
            class="hidden lg:block pl-3 font-bold select-none text-xl opacity-50 transition-all"
            >{{ dictionary.step_two_title }}</span
          >
        </a>
      </li>
      <li class="w-[20vw] h-[50px] lg:w-full lg:h-[calc(20vh-14px)]">
        <a
          @click="setActiveTabIndex(3)"
          href="#"
          :class="[
            'inline-flex place-items-center pl-3 py-6 text-gray-900  active  w-[60px] lg:w-[200px] h-full bg-white',
            { activeTab: activeTabIndex === 3 },
            { 'pointer-events-none': !selectedCaseTitle },
            { 'pointer-events-none': !activeIndex },
            { 'opacity-50': !activeIndex },
          ]"
        >
          <div class="relative">
            <div class="w-10 h-10 mx-auto relative">
              <div
                v-if="activeTabIndex === 3"
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="200"
                class="absolute z-20 w-10 h-10 mx-auto bg-gray-400 border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
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
                class="absolute w-10 h-10 mx-auto bg-white rounded-full ring-slate-300 ring-1 text-lg text-white flex items-center"
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
          <span
            v-if="activeTabIndex === 3"
            v-motion
            :initial="{ opacity: 0.5 }"
            :enter="{ opacity: 1 }"
            :delay="300"
            class="hidden lg:block pl-3 text-xl select-none font-bold"
            >{{ dictionary.steper_image }}</span
          >
          <span
            v-else
            class="hidden lg:block pl-3 font-bold text-xl select-none opacity-50 transition-all"
            >{{ dictionary.steper_image }}</span
          >
        </a>
      </li>
      <li class="w-[20vw] h-[50px] lg:w-full lg:h-[calc(20vh-14px)]">
        <a
          @click="setActiveTabIndex(4)"
          href="#"
          :class="[
            'inline-flex place-items-center pl-3 py-6 text-gray-900  active w-[60px] lg:w-[200px] h-full bg-white',
            { activeTab: activeTabIndex === 4 },
            { 'pointer-events-none': !selectedCaseTitle },
            { 'pointer-events-none': !activeIndex },
            { 'opacity-50': !activeIndex },
          ]"
        >
          <div class="relative">
            <div class="w-10 h-10 mx-auto relative">
              <div
                v-if="activeTabIndex === 4"
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="500"
                class="absolute z-20 w-10 h-10 mx-auto bg-gray-400 border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
              >
                <span class="text-center text-white w-full">
                  <svg
                    class="w-full fill-current"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H13C13.4142 15.25 13.75 15.5858 13.75 16C13.75 16.4142 13.4142 16.75 13 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16Z"
                      fill="#1C274C"
                    />
                  </svg>
                </span>
              </div>

              <div
                class="absolute w-10 h-10 mx-auto bg-white rounded-full ring-slate-300 ring-1 text-lg text-white flex items-center"
              >
                <span class="text-center text-white w-full">
                  <svg
                    class="w-full fill-current"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.25 16C7.25 15.5858 7.58579 15.25 8 15.25H13C13.4142 15.25 13.75 15.5858 13.75 16C13.75 16.4142 13.4142 16.75 13 16.75H8C7.58579 16.75 7.25 16.4142 7.25 16Z"
                      fill="#1C274C"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <span
            v-if="activeTabIndex === 4"
            v-motion
            :initial="{ opacity: 0.5 }"
            :enter="{ opacity: 1 }"
            :delay="300"
            class="hidden lg:block pl-3 text-xl select-none font-bold"
            >{{ dictionary.steper_text }}</span
          >
          <span
            v-else
            class="hidden lg:block pl-3 font-bold text-xl select-none opacity-50 transition-all"
            >{{ dictionary.steper_text }}</span
          >
        </a>
      </li>

      <li class="w-[20vw] h-[50px] lg:w-full lg:h-[calc(20vh-14px)]">
        <a
          @click="setActiveTabIndex(5)"
          href="#"
          :class="[
            'inline-flex place-items-center pl-3 py-6 text-gray-900 bg-white active  w-[60px] lg:w-[200px] h-full ',
            { activeTab: activeTabIndex === 5 },
            { 'pointer-events-none': !selectedCaseTitle },
            { 'pointer-events-none': !activeIndex },
            { 'pointer-events-none': !this.emptyCanvas === true },
            { 'opacity-50': !this.emptyCanvas === true },
          ]"
        >
          <div class="relative">
            <div class="w-10 h-10 mx-auto relative">
              <div
                v-if="activeTabIndex === 5"
                v-motion
                :initial="{ opacity: 0, scale: 0 }"
                :enter="{ opacity: 1, scale: 1 }"
                :delay="300"
                class="absolute z-20 w-10 h-10 mx-auto bg-gray-400 border-2 border-gray-200 rounded-full text-lg text-white flex items-center"
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
                      opacity="0.4"
                      d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
                      fill="#292D32"
                    />
                    <path
                      d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM14.8809 15.0501L11.6309 18.0501C11.4909 18.1801 11.3009 18.2501 11.1209 18.2501C10.9309 18.2501 10.7409 18.1801 10.5909 18.0301L9.09094 16.5301C8.80094 16.2401 8.80094 15.7601 9.09094 15.4701C9.38094 15.1801 9.86094 15.1801 10.1509 15.4701L11.1409 16.4601L13.8609 13.9501C14.1609 13.6701 14.6409 13.6901 14.9209 13.9901C15.2109 14.3001 15.1909 14.7701 14.8809 15.0501Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
              </div>

              <div
                class="absolute w-10 h-10 mx-auto bg-white rounded-full ring-slate-300 ring-1 text-lg text-white flex items-center"
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
                      opacity="0.4"
                      d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
                      fill="#292D32"
                    />
                    <path
                      d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM14.8809 15.0501L11.6309 18.0501C11.4909 18.1801 11.3009 18.2501 11.1209 18.2501C10.9309 18.2501 10.7409 18.1801 10.5909 18.0301L9.09094 16.5301C8.80094 16.2401 8.80094 15.7601 9.09094 15.4701C9.38094 15.1801 9.86094 15.1801 10.1509 15.4701L11.1409 16.4601L13.8609 13.9501C14.1609 13.6701 14.6409 13.6901 14.9209 13.9901C15.2109 14.3001 15.1909 14.7701 14.8809 15.0501Z"
                      fill="#292D32"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <span
            v-if="activeTabIndex === 5"
            v-motion
            :initial="{ opacity: 0.5 }"
            :enter="{ opacity: 1 }"
            :delay="300"
            class="hidden lg:block pl-3 text-xl select-none font-bold"
            >Finish</span
          >
          <span
            v-else
            class="hidden lg:block pl-3 font-bold select-none text-xl opacity-50 transition-all"
            >Finish</span
          >
        </a>
      </li>
    </ul>
    <div
      class="box-border mx-auto lg:mx-0 flex relative flex-col w-full justify-center lg:justify-normal h-full bg-gray-100 lg:w-[380px]"
    >
      <Transition :name="mobileMode === true ? 'slide-fade' : 'box-fade'">
        <div
          v-if="
            mobileMode
              ? showDialog && activeTabIndex === 1
              : activeTabIndex === 1
          "
          class="z-40 absolute lg:relative bg-slate-100 text-gray-400 bottom-[0px] w-[100vw] lg:w-full"
        >
          <div class="relative z-40 w-[100vw] lg:w-[360px] h-[480px]">
            <div class="hidden lg:flex flex-col ml-4 mt-0 items-left">
              <p
                class="font-inter text-base select-none mt-0 font-semibold leading-2 text-slate-700"
              >
                {{ dictionary.step_one }}
              </p>
              <h1
                class="font-inter font-extrabold select-none leading-none tracking-tight text-slate-900 text-4xl sm:leading-[3.5rem]"
              >
                {{ dictionary.step_one_title }}
              </h1>
              <p
                class="font-inter mb-1 text-base select-none font-medium text-left leading-7 text-slate-700"
              >
                {{ dictionary.step_one_description }}
              </p>
            </div>
            <div class="relative bg-transparent w-[305px] h-[395px] mt-0">
              <!--start dialog step one box -->
              <div
                class="absolute lg:relative flex flex-col m-0 lg:ml-8 items-center bg-white lg:items-start bottom-0 shadow-inner ring-1 ring-slate-900/5 w-[100vw] lg:w-[320px] h-[480px]"
              >
                <div
                  v-if="this.alertMessageItemStock"
                  class="absolute m-2 w-[270px] h-[345px] ring-1 ring-slate-900/5 bg-slate-50 z-10"
                >
                  <p
                    class="font-inter select-none w-[260px] mt-12 px-6 text-sm whitespace-wrap font-medium text-left leading-5 text-slate-700"
                  >
                    {{ dictionary.alert_box_out_of_stock }}
                  </p>
                  <div
                    class="absolute left-[80px] bottom-5 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
                  >
                    <div
                      @click="alertMessageItemStockClose()"
                      class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-inner font-inter ring-1 ring-slate-900/10"
                    >
                      <p
                        class="text-center text-base select-none font-inter font-bold text-slate-100"
                      >
                        {{ dictionary.action_close }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="pt-5 space-y-5">
                  <div>
                    <label
                      for=""
                      class="font-inter text-md select-none font-semibold mt- px-4 leading-7 text-slate-700"
                      >{{ dictionary.device_type }}
                    </label>
                    <div class="mt-1">
                      <select
                        @change="getDeviceType(selectedType)"
                        v-model="selectedType"
                        class="w-[250px] ml-3 p-2 bg-slate-50 text-slate-700 outline-slate-700/20 focus:text-cyan-700 shadow-inner my-2 font-inter text-md font-light px-5 leading-7"
                      >
                        <option value="">
                          {{ dictionary.select_device }}
                        </option>
                        <option value="1">
                          {{ dictionary.phone_device }}
                        </option>
                        <option value="2">
                          {{ dictionary.tablet_device }}
                        </option>
                        <option value="4">
                          {{ dictionary.gadget_device }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      for=""
                      class="font-inter text-md select-none font-semibold mt-2 px-4 leading-7 text-slate-700"
                      >{{ dictionary.product_brand }}</label
                    >
                    <div class="mt-1">
                      <select
                        @change="
                          getPhoneModels(selectedBrand),
                            updateSelectedBrandTitle()
                        "
                        v-model="selectedBrand"
                        ref="phoneBrand"
                        id="phoneBrand"
                        name="phoneBrand"
                        disabled
                        class="w-[250px] ml-3 p-2 bg-slate-50 text-slate-700 outline-slate-700/20 focus:text-cyan-700 shadow-inner my-2 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                      >
                        <option disabled value="">
                          {{ dictionary.select_brand }}
                        </option>
                        <option
                          v-for="brand in brands"
                          :key="brand.id"
                          :value="brand.id"
                          :info="brand.title"
                        >
                          {{ brand.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="flex flex-col items-start m-2 notvalid">
                    <label
                      for=""
                      class="font-inter text-md select-none font-semibold mt-2 px-4 leading-7 text-slate-700"
                      >{{ dictionary.product_model }}</label
                    >
                    <div class="mt-1">
                      <select
                        @change="
                          getPhoneCase(selectedModel),
                            updateSelectedModelTitle()
                        "
                        v-model="selectedModel"
                        ref="phoneModel"
                        id="phoneModel"
                        name="phoneModel"
                        disabled
                        class="w-[250px] ml-3 p-2 bg-slate-50 text-slate-700 outline-slate-700/20 focus:text-cyan-700 shadow-inner focus-visible:ring-1 my-2 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                      >
                        <option selected value="">
                          {{ dictionary.select_model }}
                        </option>
                        <option
                          v-for="model in models"
                          :key="model.id"
                          :value="model.id"
                          :data="model.value"
                        >
                          {{ model.title }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="flex flex-col items-start m-2 valid">
                    <label
                      for=""
                      class="font-inter text-md select-none font-semibold mt-2 px-4 leading-7 text-slate-700"
                      >{{ dictionary.type_of_case }}</label
                    >
                    <div class="mt-2">
                      <select
                        @change="
                          addPhoneToCanvas(selectedCaseType),
                            updateSelectedCaseTitle()
                        "
                        v-model="selectedCaseType"
                        class="w-[250px] m-3 p-2 bg-slate-50 text-slate-700 outline-slate-700/20 focus:text-cyan-700 shadow-inner my-2 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                        disabled
                        ref="phoneCase"
                        id="phoneCase"
                        name="phoneCase"
                      >
                        <option value="">{{ dictionary.select_case }}</option>
                        <option
                          v-for="(caseType, index) in casesTypes"
                          :key="caseType.id"
                          :value="index"
                        >
                          {{ caseType.translated_title }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition :name="mobileMode === true ? 'slide-fade' : 'box-fade'">
        <div
          v-if="
            mobileMode
              ? showDialog && activeTabIndex === 2
              : activeTabIndex === 2
          "
          class="lg:p-6 text-gray-400 bg-gray-100 h-fit w-max lg:w-full"
        >
          <div
            class="z-40 absolute lg:relative mx-auto w-full lg:w-[360px] h-[460px]"
          >
            <div class="hidden lg:flex flex-col ml-4 mt-0 items-left">
              <p
                class="font-inter text-base select-none mt-0 font-semibold leading-2 text-slate-700"
              >
                {{ dictionary.step_two }}
              </p>
              <h1
                class="font-inter select-none font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
              >
                {{ dictionary.step_two_title }}
              </h1>
              <p
                class="font-inter select-none my-2 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
              >
                {{ dictionary.step_two_description }}
              </p>
            </div>
            <div
              class="relative bg-transparent w-[305px] h-[355px] mt-2 ring-slate-900/5"
            >
              <div
                class="absolute lg:relative flex flex-col bottom-0 items-center lg:items-start bg-gray-50 shadow-inner ring-1 ring-slate-900/5 w-[100vw] lg:w-[320px] h-[480px] ml-[7px] mt-[7px] bg-fit bg-bottom bg-no-repeat"
              >
                <div
                  class="flex flex-col mt-[30px] items-center w-[300px] h-[300px]"
                >
                  <p
                    v-if="this.selectedType == ''"
                    class="font-inter select-none w-[250px] my-5 px-4 text-sm whitespace-wrap font-medium text-left leading-5 text-slate-700"
                  >
                    {{ dictionary.alert_box_stepper }}
                  </p>

                  <div
                    v-if="this.selectedType == 1 || this.selectedType == 2"
                    class="flex flex-row mt-[50px] w-[220px] gap-8 items-center"
                  >
                    <div
                      @click="addCollage1(1)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        v-if="activeIndex === 1"
                        v-motion-pop
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=" "
                        src="/src/assets/images/phoneColection.png"
                      />
                    </div>
                    <div
                      @click="addCollage2(2)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        d
                        v-if="activeIndex === 2"
                        v-motion-pop
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=""
                        src="/src/assets/images/phoneColection1.png"
                      />
                    </div>
                    <div
                      @click="addCollage3(3)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        v-if="activeIndex === 3"
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=""
                        src="/src/assets/images/phoneColection2.png"
                      />
                    </div>
                  </div>
                  <div
                    v-if="this.selectedType == 1 || this.selectedType == 2"
                    class="flex flex-row mt-[50px] w-[220px] gap-8 items-center"
                  >
                    <div
                      @click="addCollage4(4)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        v-if="activeIndex === 4"
                        v-motion-pop
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=""
                        src="/src/assets/images/phoneColection4.png"
                      />
                    </div>
                    <div
                      @click="addCollage5(5)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        v-if="activeIndex === 5"
                        v-motion-pop
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=""
                        src="/src/assets/images/phoneColection5.png"
                      />
                    </div>
                    <div
                      @click="addCollage6(6)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        v-if="activeIndex === 6"
                        v-motion-pop
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=""
                        src="/src/assets/images/phoneColection6.png"
                      />
                    </div>
                  </div>
                  <div
                    v-if="this.selectedType == 4"
                    class="flex flex-row mt-[50px] w-[220px] gap-8 items-center"
                  >
                    <div
                      @click="addCollage1(7)"
                      class="relative w-[50px] h-[50px]"
                    >
                      <div
                        v-if="activeIndex === 7"
                        v-motion-pop
                        class="absolute -left-4 -top-3 border-spacing-6 border-[2px] border-dashed rounded-xl w-[60px] h-[75px] border-slate-600"
                      ></div>
                      <img
                        class=""
                        src="/src/assets/images/gadgetColection7.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition :name="mobileMode === true ? 'slide-fade' : 'box-fade'">
        <div
          v-show="
            mobileMode
              ? showDialog && activeTabIndex === 3
              : activeTabIndex === 3
          "
          class="z-40 absolute bg-gray-100 lg:relative text-gray-400 w-[100vw] lg:w-full"
        >
          <div
            class="box-border bg-gray-100 lg:bg-transparent flex flex-col items-center relative w-[100vw] lg:w-[360px] lg:p-2 h-[480px]"
          >
            <div class="block lg:hidden h-[50px]"></div>
            <div class="hidden lg:flex flex-col items-left">
              <p
                class="font-inter select-none text-base font-semibold leading-2 text-slate-700"
              >
                {{ dictionary.step_three }}
              </p>
              <h1
                class="font-inter select-none font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
              >
                {{ dictionary.step_three_title }}
              </h1>
              <p
                class="font-inter select-none my-5 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
              >
                {{ dictionary.step_three_description }}
              </p>
            </div>
            <div
              class="relative flex flex-row h-[40px] mt-2 items-center lg:items-start w-[280px]"
            >
              <div
                v-motion-pop
                v-if="alertMessageImageTooSmall"
                class="absolute top-0 mx-auto lg:m-0 w-[305px] h-[300px] shadow-xl ring-1 ring-slate-900/5 bg-slate-50 z-10"
              >
                <p
                  class="font-inter select-none w-[300px] mt-12 px-6 text-sm whitespace-wrap font-medium text-left leading-5 text-slate-700"
                >
                  {{ dictionary.alert_box_image_size }}
                </p>
                <div
                  class="absolute left-[80px] bottom-5 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
                >
                  <div
                    @click="alertMessageImageTooSmallClose()"
                    class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
                  >
                    <p
                      class="text-center select-none text-base font-inter font-bold text-slate-100"
                    >
                      {{ dictionary.action_close }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                v-motion-pop
                v-if="alertMessageImageType"
                class="absolute top-0 mx-auto lg:m-0 w-[305px] h-[300px] shadow-xl ring-1 ring-slate-900/5 bg-slate-50 z-10"
              >
                <p
                  class="font-inter select-none w-[300px] mt-12 px-6 text-sm whitespace-wrap font-medium text-left leading-5 text-slate-700"
                >
                  {{ dictionary.alert_box_file_type }}
                </p>
                <div
                  class="absolute left-[80px] bottom-5 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
                >
                  <div
                    @click="alertMessageImageTypeClose()"
                    class="cursor-pointer px-8 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
                  >
                    <p
                      class="text-center select-none text-base font-inter font-bold text-slate-100"
                    >
                      {{ dictionary.action_close }}
                    </p>
                  </div>
                </div>
              </div>

              <div
                @click="setActiveTabImages(1)"
                :class="[
                  ' transition-all  w-[100px]   h-[40px] pt-1  font-inter select-none my-2 text-base whitespace-nowrap font-medium text-center leading-7 bg-slate-900/70 text-slate-100  border-l-2 border-r-2 border-t-2 border-slate-900/5 ',
                  { activeTabImages: activeTabImages === 1 },
                ]"
              >
                {{ dictionary.images }}
              </div>
              <div
                @click="setActiveTabImages(3)"
                :class="[
                  'relative transition-all bg-slate-900/70 w-[100px] ml-2 my-2 pt-1 h-[40px]  font-inter select-none  text-base whitespace-nowrap font-medium text-center leading-7 text-slate-100 ring-1 ring-slate-900/5 border-l-2 border-r-2 border-t-2 border-slate-900/5 ',
                  { activeTabImages: activeTabImages === 3 },
                ]"
              >
                {{ dictionary.steper_text }}
              </div>

              <div
                @click="setActiveTabImages(2)"
                :class="[
                  'relative transition-all bg-slate-900/70 w-[100px] ml-2 my-2 pt-1 h-[40px]  font-inter select-none text-base whitespace-nowrap font-medium text-center leading-7 text-slate-100 ring-1 ring-slate-900/5 border-l-2 border-r-2 border-t-2 border-slate-900/5 ',
                  { activeTabImages: activeTabImages === 2 },
                ]"
              >
                {{ dictionary.collections }}
              </div>
            </div>
            <div
              v-if="activeTabImages === 1"
              class="bg-transparent relative w-[300px] h-[300px]"
            >
              <div
                class="absolute flex flex-col items-start bg-slate-50 border-l-2 border-r-2 border-b-2 border-slate-900/5 w-[290px] h-[260px] bg-fit bg-bottom bg-no-repeat"
              >
                <div class="pt-0 space-y-5">
                  <div class="flex flex-col items-center lg:items-start lg:m-2">
                    <div
                      class="absolute left-[25%] -bottom-7 px-2 py-2 text-white text-xl button-zoom bg-white/10 ring-slate-900/5"
                    >
                      <div
                        class="px-4 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 shadow-lg font-inter ring-1 ring-slate-900/10"
                      >
                        <p
                          @click="addButton"
                          class="px-2 py-2 animate-pulse text-center text-lg font-inter font-semibold leading-none tracking-tight text-slate-100"
                        >
                          Uvezi slike
                        </p>
                      </div>
                    </div>
                    <div class="pt-0 m-1 space-y-5">
                      <div
                        class="relative w-[300px] h-fit flex flex-row items-center flex-wrap"
                      >
                        <div
                          v-for="(image, index) in this.uploadedImages"
                          v-motion
                          :initial="{ opacity: 1, scale: 1 }"
                          :enter="{ opacity: 1, scale: 1 }"
                          :variants="{ custom: { opacity: 1, scale: 1 } }"
                          :delay="300"
                          :key="image.id"
                          class="relative m-1 w-[80px] h-[80px]"
                        >
                          <img
                            class="border-[2px] w-[90%] h-[90%] m-1 rounded-md border-gray-600/30"
                            :src="image.url"
                            :key="image.id"
                            alt="Uploaded Image"
                            @click="addClipPathToSelectedObject(index)"
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      id="uploadButton"
                      type="file"
                      ref="uploadButton"
                      style="display: none"
                      @change="handleImageUpload"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="activeTabImages === 3"
              class="bg-transparent relative w-[300px] h-[300px]"
            >
              <div
                class="absolute flex flex-col items-start bg-slate-50 w-[300px] h-[300px] bg-fit bg-bottom bg-no-repeat"
              >
                <div class="pt-0 space-y-5">
                  <div class="flex flex-col items-start m-2">
                    <div class="pt-0 m-1 space-y-5">
                      <div
                        class="relative w-[280px] h-fit flex flex-row items-center flex-wrap"
                      >
                        <div
                          v-for="(text, index) in uploadedText"
                          @click="addTextCanvas(index)"
                          v-motion
                          :initial="{ opacity: 1, scale: 1 }"
                          :enter="{ opacity: 1, scale: 1 }"
                          :variants="{ custom: { opacity: 1, scale: 1 } }"
                          :delay="300"
                          :key="text.id"
                          class="relative m-2 p-2 w-fit h-fit border-[2px] z-20 rounded-md border-gray-600/30"
                        >
                          <p
                            class="visible text-[3.0vw] lg:text-[1.0vw] font-normal text-black m-2 mt-4 mb-4"
                          >
                            {{ text.text }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="activeTabImages === 2"
              class="bg-transparent relative w-[300px] h-[300px]"
            >
              <div
                class="absolute flex flex-col items-start bg-slate-50 border-l-2 border-r-2 border-b-2 border-slate-900/5 w-[290px] h-[260px] bg-fit bg-bottom bg-no-repeat"
              >
                <div class="pt-0 m-1 space-y-5">
                  <div
                    class="relative w-[300px] h-fit flex flex-row items-center flex-wrap"
                  >
                    <div
                      v-for="item in this.filteredItems"
                      :key="item.id"
                      v-motion
                      :initial="{ opacity: 0, scale: 0 }"
                      :enter="{ opacity: 1, scale: 1 }"
                      :variants="{ custom: { scale: 1 } }"
                      :delay="300"
                      class="relative m-1 w-[40px] h-[40px]"
                    >
                      <img
                        class="border-[2px] w-[90%] h-[90%] m-1 rounded-md border-gray-600/30"
                        :src="item.src"
                        :key="item.id"
                        alt="Collection Image"
                        @click="uploadImageFromCollection(item)"
                      />
                    </div>
                  </div>
                </div>

                <!-- filter menu  -->
                <div
                  v-if="filterMenu"
                  v-motion
                  :initial="{ opacity: 0, scale: 0, translateY: 100 }"
                  :enter="{ opacity: 1, scale: 1, translateY: 0, delay: 100 }"
                  class="absolute w-[270px] h-[170px] rounded-md m-2 p-4 bg-gray-100 flex flex-col gap-2 bottom-0"
                >
                  <div class="w-full px-1 m-2 text-center text-xl font-inter font-semibold leading-none tracking-tight text-slate-500"><p>Select gallery type:</p></div>
                  <div class="flex flex-row w-full">
                  <div
                    class="px-1 m-2 text-center text-md font-inter font-extrabold leading-none tracking-tight text-slate-500"
                    @click="filterByCategory('a')"
                  >
                    Animals
                  </div>
                  <div
                    class="px-1 m-2 text-center text-md font-inter font-extrabold leading-none tracking-tight text-slate-500"
                    @click="filterByCategory('b')"
                  >
                    Space
                  </div>
                  <div
                    class="px-1 m-2 text-center text-md font-inter font-extrabold leading-none tracking-tight text-slate-500"
                    @click="filterByCategory('c')"
                  >
                    Cats
                  </div>
                </div>
                </div>
                <div
                  class="absolute left-[40%] -bottom-10 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
                >
                  <div
                    class="px-2 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
                  >
                    <p
                      class="px-1 mb-2 animate-pulse text-center text-3xl font-inter font-extrabold leading-none tracking-tight text-slate-100"
                    >
                  
                      <svg @click="toggleFilterMenu"
                        class="w-[30px] h-[30px] mt-2"
                        viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z" fill="#d1d1d1"></path> <path opacity="0.5" d="M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z" fill="#d1d1d1"></path> <path d="M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z" fill="#d1d1d1"></path> <path d="M13 6.5C13 4.37868 13 3.31802 13.659 2.65901C14.318 2 15.3787 2 17.5 2C19.6213 2 20.682 2 21.341 2.65901C22 3.31802 22 4.37868 22 6.5C22 8.62132 22 9.68198 21.341 10.341C20.682 11 19.6213 11 17.5 11C15.3787 11 14.318 11 13.659 10.341C13 9.68198 13 8.62132 13 6.5Z" fill="#d1d1d1"></path> </g></svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition :name="mobileMode === true ? 'slide-fade' : 'box-fade'">
        <div
          v-if="
            mobileMode
              ? showDialog && activeTabIndex === 4
              : activeTabIndex === 4
          "
          class="z-40 absolute bottom-4 lg:relative text-gray-400 w-[100vw] lg:w-full"
        >
          <div
            class="box-border bg-gray-100 lg:bg-transparent relative w-full lg:w-[360px] lg:p-2 h-[530px]"
          >
            <div class="block lg:hidden h-[10px]"></div>
            <div class="hidden lg:flex flex-col ml-2 mt-0 items-left">
              <p
                class="font-inter select-none text-base mt-0 font-semibold leading-2 text-slate-700"
              >
                {{ dictionary.step_four }}
              </p>
              <h1
                class="font-inter select-none font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
              >
                {{ dictionary.step_four_title }}
              </h1>
              <p
                class="font-inter select-none my-2 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
              >
                {{ dictionary.step_four_description }}
              </p>
            </div>
            <div
              class="relative mx-auto lg:mx-0 flex flex-row w-[300px] h-[50px] bg-transparent"
            >
              <div
                @click="setActiveTabText(1)"
                :class="[
                  'relative transition-all  w-[100px] ml-10 pt-1 h-[50px]  font-inter select-none  text-base whitespace-nowrap font-medium text-center leading-7 bg-slate-900/70 text-slate-100  border-l-2 border-r-2 border-t-2 border-slate-900/5 ',
                  { activeTabText: activeTabText === 1 },
                ]"
              >
                {{ dictionary.steper_text }}
              </div>
              <div
                @click="setActiveTabText(2)"
                :class="[
                  'relative transition-all bg-slate-900/70 w-[100px] ml-4 pt-1 h-[50px]  font-inter select-none  text-base whitespace-nowrap font-medium text-center leading-7 text-slate-100 ring-1 ring-slate-900/5 border-l-2 border-r-2 border-t-2 border-slate-900/5 ',
                  { activeTabText: activeTabText === 2 },
                ]"
              >
                {{ dictionary.collections }}
              </div>
            </div>
            <div
              class="bg-transparent w-[305px] h-[335px] mx-auto lg:mx-0 ring-slate-900/5"
            >
              <div
                class="absolute lg:relative flex flex-col bottom-0 items-start bg-slate-50 ring-1 ring-slate-900/5 w-[290px] h-[480px] bg-fit bg-bottom bg-no-repeat"
              >
                <div
                  v-if="activeTabText === 2"
                  class="bg-transparent relative w-[305px] h-[206px] mt-2"
                >
                  <div
                    class="absolute flex flex-col items-start bg-slate-50 w-[275px] h-[260px] ml-[7px] mt-[7px] bg-fit bg-bottom bg-no-repeat"
                  >
                    <div class="pt-0 space-y-5">
                      <div class="flex flex-col items-start m-2">
                        <div class="pt-0 m-1 space-y-5">
                          <div
                            class="relative w-[280px] h-fit flex flex-row items-center flex-wrap"
                          >
                            <div
                              v-for="(text, index) in uploadedText"
                              @click="addTextCanvas(index)"
                              v-motion
                              :initial="{ opacity: 1, scale: 1 }"
                              :enter="{ opacity: 1, scale: 1 }"
                              :variants="{ custom: { opacity: 1, scale: 1 } }"
                              :delay="300"
                              :key="text.id"
                              class="relative m-2 p-2 w-fit h-fit border-[2px] z-20 rounded-md border-gray-600/30"
                            >
                              <p
                                class="visible text-[3.0vw] lg:text-[1.0vw] font-normal text-black m-2 mt-4 mb-4"
                              >
                                {{ text.text }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="activeTabText === 1" class="pt-0 space-y-5">
                  <div class="flex flex-col items-start ml-2 gap-2">
                    <div class="flex flex-col">
                      <span
                        class="font-inter select-none ml-4 mt-2 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
                      >
                        {{ dictionary.action_enter_text_decription }}
                      </span>
                      <input
                        class="w-[250px] m-3 mt-0 p-2 bg-slate-50/40 text-gray-700 focus:bg-slate-50/20 outline-slate-700/20 outline-offset-8 focus:text-cyan-700 shadow-md focus-visible:ring-1 -my-4 ring-slate-900/5 font-inter text-md font-light px-5 leading-7"
                        type="text"
                        v-model="inputText"
                        @keyup.enter="updateSelectedText"
                      />
                    </div>
                    <p
                      class="font-inter select-none ml-4 mt-2 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
                    >
                      {{ dictionary.action_select_color }}
                    </p>
                    <div class="flex flex-row items-center">
                      <div
                        class="relative w-[37px] h-[37px] ml-4 shadow-xl ring-1 ring-slate-900/5"
                      >
                        <input
                          class="m-1 relative w-[30px] h-[30px]"
                          type="color"
                          id="favcolor"
                          name="favcolor"
                          v-model="fontColor"
                        />
                      </div>
                    </div>

                    <div class="flex flex-col gap-3">
                      <p
                        class="font-inter select-none ml-4 mt-1 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
                      >
                        {{ dictionary.action_font_allign_text }}
                      </p>
                      <div
                        class="flex flex-row place-items-center items-center gap-6 pl-4 mt-0"
                      >
                        <button @click="alignTextLeft">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.8"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              d="M3 3L3 21"
                              stroke="#323232"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 10.32C7 7.58598 7.58598 7 10.32 7H13.68C16.414 7 17 7.58598 17 10.32V13.68C17 16.414 16.414 17 13.68 17H10.32C7.58598 17 7 16.414 7 13.68V10.32Z"
                              stroke="#323232"
                              stroke-width="2"
                            />
                          </svg>
                        </button>
                        <button @click="alignTextCenter">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.8"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              d="M3 3L3 21"
                              stroke="#323232"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 3L21 21"
                              stroke="#323232"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 10.32C7 7.58598 7.58598 7 10.32 7H13.68C16.414 7 17 7.58598 17 10.32V13.68C17 16.414 16.414 17 13.68 17H10.32C7.58598 17 7 16.414 7 13.68V10.32Z"
                              stroke="#323232"
                              stroke-width="2"
                            />
                          </svg>
                        </button>
                        <!-- <button @click="alignTextRight">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.8"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            d="M21 21L21 3"
                            stroke="#323232"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7 10.32C7 7.58598 7.58598 7 10.32 7H13.68C16.414 7 17 7.58598 17 10.32V13.68C17 16.414 16.414 17 13.68 17H10.32C7.58598 17 7 16.414 7 13.68V10.32Z"
                            stroke="#323232"
                            stroke-width="2"
                          />
                        </svg>
                      </button> -->
                        <button @click="alignTextTop">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.8"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              d="M21 3L3 3"
                              stroke="#323232"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 10.32C7 7.58598 7.58598 7 10.32 7H13.68C16.414 7 17 7.58598 17 10.32V13.68C17 16.414 16.414 17 13.68 17H10.32C7.58598 17 7 16.414 7 13.68V10.32Z"
                              stroke="#323232"
                              stroke-width="2"
                            />
                          </svg>
                        </button>
                        <button @click="alignTextBottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.8"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              d="M3 21L21 21"
                              stroke="#323232"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7 10.32C7 7.58598 7.58598 7 10.32 7H13.68C16.414 7 17 7.58598 17 10.32V13.68C17 16.414 16.414 17 13.68 17H10.32C7.58598 17 7 16.414 7 13.68V10.32Z"
                              stroke="#323232"
                              stroke-width="2"
                            />
                          </svg>
                        </button>
                      </div>

                      <p
                        class="font-inter select-none ml-4 mt-2 text-base whitespace-nowrap font-medium text-left leading-7 text-slate-700"
                      >
                        {{ dictionary.action_select_font_decription }}
                      </p>

                      <select
                        v-model="textFamily"
                        :class="`font-pacifico w-[250px] ml-4 mt-0 p-2 bg-slate-50 text-slate-700 focus:bg-slate-50/20 outline-slate-700/20 outline-offset-8 focus:text-cyan-700  shadow-md focus-visible:ring-1 -my-4 ring-slate-900/5 font-inter text-md font-light px-5 leading-7`"
                      >
                        <option selected value="">
                          {{ dictionary.action_select_font }}
                        </option>
                        <option
                          selected
                          class="font-roboto"
                          value="roboto"
                          data-value-1="roboto"
                        >
                          Roboto
                        </option>

                        <option
                          selected
                          class="font-montserrat"
                          value="Montserrat"
                        >
                          Montserrat
                        </option>
                        <option
                          selected
                          class="font-nova-mono"
                          value1="nova-mono"
                          value="Nova Mono"
                        >
                          Nova Mono
                        </option>

                        <option
                          selected
                          class="font-dancing-script"
                          value="Dancing Script"
                        >
                          Dancing Script
                        </option>
                        <option class="font-caveat" selected value="Caveat">
                          Caveat
                        </option>
                        <option
                          selected
                          class="font-pacifico"
                          datavalue1="pacifico"
                          value="pacifico"
                        >
                          Pacifico
                        </option>
                        <option selected class="font-plaster" value="Plaster">
                          Plaster
                        </option>
                        <option selected class="font-lobster" value="Lobster">
                          Lobster
                        </option>
                        <option selected class="font-bangers" value="Bangers">
                          Bangers
                        </option>
                        <option
                          selected
                          class="font-indie-flower"
                          value="Indie Flower"
                        >
                          Indie Flower
                        </option>
                      </select>
                    </div>

                    <div
                      class="relative w-[300px] h-[10px] flex flex-row items-center flex-wrap"
                    ></div>
                    <!-- <div class="flex flex-row">
                    <div
                      class="relative w-[30px] h-[30px] m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 1"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>

                      <div
                        @click="addFontColor('red', 1)"
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-red-100 bg-red-600"
                      ></div>
                    </div>
                    <div
                      class="relative w-[30px] h-[30px] m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 2"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>

                      <div
                        @click="addFontColor('orange', 2)"
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-orange-100 bg-orange-600"
                      ></div>
                    </div>

                    <div
                      @click="addFontColor('yellow', 3)"
                      class="relative w-[30px] h-[30px] m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 3"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>

                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-yellow-100 bg-yellow-600"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('green', 4)"
                      class="relative w-[30px] h-[30px] m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 4"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>

                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-green-100 bg-green-600"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('blue', 5)"
                      class="relative w-[30px] h-[30px] m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 5"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>

                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-blue-100 bg-blue-600"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('purple', 6)"
                      class="relative w-[30px] h-[30px] m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 6"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>
                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-violet-100 bg-violet-600"
                      ></div>
                    </div>
                  </div> -->
                    <!-- <div class="flex flex-row">
                    <div
                      @click="addFontColor('black', 7)"
                      class="relative w-[30px] h-[30px] mt-0 m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 7"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>
                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-gray-100 bg-gray-900"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('white', 8)"
                      class="relative w-[30px] h-[30px] mt-0 m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 8"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>
                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-gray-100 bg-gray-200"
                      ></div>
                    </div>

                    <div
                      @click="addFontColor('gray', 9)"
                      class="relative w-[30px] h-[30px] mt-0 m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 9"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>
                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-gray-100 bg-gray-400"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('pink', 10)"
                      class="relative w-[30px] h-[30px] mt-0 m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 10"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>
                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-pink-100 bg-pink-500"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('cyan', 11)"
                      class="relative w-[30px] h-[30px] mt-0 m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 11"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>

                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-blue-100 bg-cyan-500"
                      ></div>
                    </div>
                    <div
                      @click="addFontColor('violet', 12)"
                      class="relative w-[30px] h-[30px] mt-0 m-2 rounded-md shadow-xl ring-1 ring-slate-900/5"
                    >
                      <div
                        v-if="activeIndexColor === 12"
                        v-motion-pop
                        class="absolute left-0 -top-0 border-spacing-6 border-[2px] rounded-md w-[30px] h-[30px] border-slate-500"
                      ></div>
                      <div
                        class="absolute top-[5px] left-[5px] w-[20px] h-[20px] rounded-sm ring-2 ring-violet-100 bg-violet-900"
                      ></div>
                    </div>
                  </div> -->

                    <div
                      class="mt-0 ml-[20%] px-2 py-2 text-white text-xl button-zoom bg-white/10 ring-slate-900/5"
                    >
                      <div
                        @click="uploadText"
                        class="z-50 cursor-pointer px-8 py-2 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 shadow-lg font-inter ring-1 ring-slate-900/10"
                      >
                        <p
                          class="w-fit text-center select-none text-base font-inter font-bold text-slate-100"
                        >
                          {{ dictionary.action_add_text }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition :name="mobileMode === true ? 'slide-fade' : 'box-fade'">
        <div
          v-if="
            mobileMode
              ? showDialog && activeTabIndex === 5
              : activeTabIndex === 5
          "
          class="z-40 absolute lg:relative p-6 bg-gray-100 text-medium text-gray-400 w-full h-[100vh-70px] lg:w-full"
        >
          <div class="flex flex-col ml- mt-2 items-center lg:items-left">
            <div class="hidden lg:flex flex-col ml-4 mt-0 items-left">
              <p
                class="invisible md:visible font-inter select-none text-base -mt-2 font-semibold leading-2 text-slate-700"
              >
                {{ dictionary.step_five }}
              </p>
              <!-- <p>Window Width: {{ windowWidth }}</p> -->
              <h1
                class="invisible md:visible font-inter select-none font-extrabold leading-none tracking-tight text-slate-900 text-5xl sm:leading-[3.5rem]"
              >
                {{ dictionary.step_five_title }}
              </h1>
            </div>

            <p
              v-if="
                casesTypes[selectedCaseType] &&
                casesTypes[selectedCaseType].price
              "
              class="visible font-inter select-none w-[280px] my-5 text-sm whitespace-wrap font-medium text-left leading-5 text-slate-700"
            >
              {{ dictionary.alert_box_cart_full }}
            </p>
            <!-- <p
            v-else="
              casesTypes[selectedCaseType] && casesTypes[selectedCaseType].price
            "
            class="font-inter select-none w-[200px] pl-12 m-6 text-xs whitespace-wrap font-medium text-center leading-5 text-slate-700"
          >
            {{ dictionary.alert_box_stepper }}
          </p> -->

            <div
              class="relative flex w-[300px] h-[300px] mt-3 flex-col items-center"
            >
              <svg
                v-if="
                  casesTypes[selectedCaseType] &&
                  casesTypes[selectedCaseType].price
                "
                class="w-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100"
                height="100"
              >
                <path
                  opacity="0.4"
                  d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
                  fill="#292D32"
                />
                <path
                  d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM14.8809 15.0501L11.6309 18.0501C11.4909 18.1801 11.3009 18.2501 11.1209 18.2501C10.9309 18.2501 10.7409 18.1801 10.5909 18.0301L9.09094 16.5301C8.80094 16.2401 8.80094 15.7601 9.09094 15.4701C9.38094 15.1801 9.86094 15.1801 10.1509 15.4701L11.1409 16.4601L13.8609 13.9501C14.1609 13.6701 14.6409 13.6901 14.9209 13.9901C15.2109 14.3001 15.1909 14.7701 14.8809 15.0501Z"
                  fill="#292D32"
                />
              </svg>

              <svg
                v-else="
                  casesTypes[selectedCaseType] &&
                  casesTypes[selectedCaseType].price
                "
                class="w-full fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100"
                height="100"
              >
                <defs id="defs2" />

                <path
                  opacity="0.4"
                  d="m 17.24,3.5825 h -0.4 L 13.46,0.20249998 c -0.27,-0.27 -0.71,-0.27 -0.99,0 -0.27,0.27 -0.27,0.71 0,0.99000002 l 2.39,2.39 H 5.1400001 l 2.39,-2.39 c 0.27,-0.27000002 0.27,-0.71000002 0,-0.99000002 -0.27,-0.27 -0.71,-0.27 -0.99,0 l -3.37,3.38000002 h -0.4 c -0.9,0 -2.76999998079071,0 -2.76999998079071,2.56 0,0.97 0.20000000079071,1.61 0.62000000079071,2.03004 0.24,0.25 0.52999998,0.38 0.83999998,0.45 0.29,0.07 0.6,0.08 0.9,0.08 H 17.64 c 0.31,0 0.6,-0.02 0.88,-0.08 0.84,-0.2 1.48,-0.80004 1.48,-2.48004 0,-2.56 -1.87,-2.56 -2.76,-2.56 z"
                  fill="#292d32"
                  id="path1"
                  style="display: inline"
                />
                <path
                  d="M 17.6609,8.70254 H 2.3609401 c -0.29,0 -0.61,-0.01 -0.9,-0.09 l 1.26,7.69 c 0.29,1.72 1.04,3.7 4.37,3.7 H 12.7009 c 3.37,0 3.97,-1.69 4.33,-3.58 l 1.51,-7.81 c -0.28,0.07 -0.58,0.09 -0.88,0.09 z"
                  fill="#292d32"
                  id="path2"
                  style="display: inline"
                  sodipodi:nodetypes="ssccssccs"
                />
                <rect
                  style="fill: #f9f9f9; stroke-width: 0.0334252"
                  id="rect2"
                  width="6.6733665"
                  height="1.4472374"
                  x="-5.2211137"
                  y="16.370911"
                  ry="0.69866574"
                  transform="rotate(-42.921289)"
                />
                <rect
                  style="fill: #f9f9f9; stroke-width: 0.0334252"
                  id="rect2-5"
                  width="6.6733665"
                  height="1.4472374"
                  x="13.488276"
                  y="2.4306953"
                  ry="0.69866574"
                  transform="rotate(42.88728)"
                />
              </svg>

              <div>
                <p
                  v-if="
                    casesTypes[selectedCaseType] &&
                    casesTypes[selectedCaseType].price
                  "
                  class="whitespace-wrap mt-2 font-extrabold text-sm text-center leading-12 text-slate-700"
                >
                  {{ this.selectedModelTitle }}
                </p>
                <p
                  v-if="
                    casesTypes[selectedCaseType] &&
                    casesTypes[selectedCaseType].price
                  "
                  class="whitespace-wrap font-medium text-sm text-center text-slate-400"
                >
                  {{ this.selectedCaseTitle }}
                </p>
                <p
                  v-if="
                    casesTypes[selectedCaseType] &&
                    casesTypes[selectedCaseType].price
                  "
                  class="whitespace-wrap mt-2 font-extrabold select-none text-sm text-center leading-12 text-slate-700"
                >
                  {{ dictionary.price }}
                </p>
                <p
                  v-else="
                    casesTypes[selectedCaseType] &&
                    casesTypes[selectedCaseType].price
                  "
                  class="whitespace-wrap font-extrabold select-none text-md text-center leading-12 text-slate-700"
                >
                  {{ dictionary.alert_box_cart }}
                </p>
                <p
                  v-if="
                    casesTypes[selectedCaseType] &&
                    casesTypes[selectedCaseType].price
                  "
                  class="animate-pulse mt-[80px] sm:mt-1 m-2 px-3 py-0 whitespace-wrap font-extrabold text-xl md:text-xl text-center leading-7 text-slate-400"
                >
                  {{
                    parseFloat(casesTypes[selectedCaseType].price).toFixed(2)
                  }}
                  <span
                    class="animate-none select-none -ml-1 text-justify text-2xl text-slate-700"
                    >{{ dictionary.currency }}</span
                  >
                </p>
              </div>

              <div
                v-if="this.emptyCanvas === true"
                class="relative left-[0] top-0 px-2 py-2 rounded-full text-white text-xl button-zoom bg-white/10 ring-1 ring-slate-900/5 shadow-lg"
              >
                <div
                  class="px-2 py-1 border-purple-600/5 bg-slate-900/70 hover:bg-slate-900/80 rounded-full shadow-lg font-inter ring-1 ring-slate-900/10"
                >
                  <p
                    @click="exportPNG()"
                    class="px-4 py-1 animate-pulse text-center select-none text-[16px] font-inter font-bold leading-none tracking-tight text-slate-100"
                  >
                    {{ dictionary.action_checkout }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div
      class="absolute z-0 lg:relative w-[100vw] h-[500px] lg:w-[500px] mt-[50px] lg:flex flex-col justify-center justify-items-center items-start"
    >
      <canvas
        id="start"
        class="z-0 relative w-[100vw] lg:w-[400px]"
        ref="canvasRef"
      >
      </canvas>

      <input
        id="uploadButton"
        type="file"
        ref="uploadButton"
        style="display: none"
        @change="handleImageUpload"
      />
      <!-- <div
        v-if="!casesTypes[selectedCaseType] && this.selectedType === ''"
        class="absolute p-3 w-[210px] h-[420px] left-[110px] top-[100px] flex flex-col items-center justify-items-center align-center m-3 z-20"
      >
        <div v-motion-pop class="flex flex-col justify-center items-center">
          <div>
            <svg
              height="60px"
              width="60px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512.007 512.007"
              xml:space="preserve"
            >
              <path
                d="M313.364,9.94C97.3,59.364-36.684,194.612,8.884,335.268C61.892,498.9,400.692,551.924,491.412,476.644
	S336.98,302.788,449.684,169.748C518.228,88.868,490.58-30.604,313.364,9.94z"
              />
              <circle
                style="fill: #e04f5f"
                cx="346.34"
                cy="89.396"
                r="41.072"
              />
              <circle
                style="fill: #32bea6"
                cx="223.572"
                cy="154.148"
                r="41.072"
              />
              <circle
                style="fill: #25b6d2"
                cx="121.828"
                cy="254.372"
                r="41.072"
              />
              <circle
                style="fill: #f2b851"
                cx="199.124"
                cy="371.364"
                r="41.072"
              />
            </svg>
          </div>
          <p
            class="font-inter select-none m-2 text-sm font-semibold text-justify no-whitespace leading-6 text-slate-700"
          >
            Započnite s dizajniranjem vaše maske odabirom modela vašeg uređaja
            sa leve strane.
          </p>
        </div>
      </div> -->

      <div
        v-motion-pop
        :delay="600"
        class="absolute w-[30px] right-[0px] top-[0px] gap-3 flex flex-col m-3 z-20"
      >
        <!-- <button @click="clearCanvas">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> -->
        <button @click="moveLeftSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28596 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28596 22 4.92893 22 3.46447 20.5355Z"
                fill="#1C274C"
              ></path>
              <path
                d="M16 11.25C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L11.5303 14.4697C11.8232 14.7626 11.8232 15.2374 11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697L10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967C11.8232 8.76256 11.8232 9.23744 11.5303 9.53033L9.81066 11.25H16Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="moveRightSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(1, 0, 0, -1, 0, 0)rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28596 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28596 22 4.92893 22 3.46447 20.5355Z"
                fill="#1C274C"
              ></path>
              <path
                d="M16 11.25C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L11.5303 14.4697C11.8232 14.7626 11.8232 15.2374 11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697L10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967C11.8232 8.76256 11.8232 9.23744 11.5303 9.53033L9.81066 11.25H16Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="moveUpSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(1, 0, 0, -1, 0, 0)rotate(270)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28596 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28596 22 4.92893 22 3.46447 20.5355Z"
                fill="#1C274C"
              ></path>
              <path
                d="M16 11.25C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L11.5303 14.4697C11.8232 14.7626 11.8232 15.2374 11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697L10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967C11.8232 8.76256 11.8232 9.23744 11.5303 9.53033L9.81066 11.25H16Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="moveDownSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(1, 0, 0, -1, 0, 0)rotate(90)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28596 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28596 22 4.92893 22 3.46447 20.5355Z"
                fill="#1C274C"
              ></path>
              <path
                d="M16 11.25C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H9.81066L11.5303 14.4697C11.8232 14.7626 11.8232 15.2374 11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.32902 12.3897 7.25 12.1989 7.25 12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697L10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967C11.8232 8.76256 11.8232 9.23744 11.5303 9.53033L9.81066 11.25H16Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>

        <button @click="flipXSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z"
                fill="#1C274C"
              ></path>
              <path
                d="M7.00003 10.75C6.6874 10.75 6.40756 10.5561 6.29779 10.2634C6.18801 9.97063 6.27134 9.64051 6.50688 9.43494L9.94438 6.43494C10.2565 6.16258 10.7302 6.19478 11.0026 6.50686C11.275 6.81894 11.2428 7.29272 10.9307 7.56508L9.00003 9.25001L17 9.25001C17.4142 9.25001 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75L7.00003 10.75Z"
                fill="#1C274C"
              ></path>
              <path
                d="M13.0694 16.4349C12.7573 16.7073 12.7251 17.1811 12.9975 17.4932C13.2698 17.8052 13.7436 17.8374 14.0557 17.5651L17.4932 14.5651C17.7287 14.3595 17.8121 14.0294 17.7023 13.7367C17.5925 13.4439 17.3127 13.25 17 13.25L7.00003 13.25C6.58582 13.25 6.25003 13.5858 6.25003 14C6.25003 14.4142 6.58582 14.75 7.00003 14.75H15L13.0694 16.4349Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="zoomInSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                fill="#1C274C"
              ></path>
              <path
                d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="zoomOutSelectedImage">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                fill="#1C274C"
              ></path>
              <path
                d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="sendBackwards">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(270)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z"
                fill="#1C274C"
              ></path>
              <path
                opacity="0.4"
                d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z"
                fill="#1C274C"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303C11.1768 14.2374 11.1768 13.7626 11.4697 13.4697L12.1893 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L12.1893 11.25L11.4697 10.5303C11.1768 10.2374 11.1768 9.76256 11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L14.5303 11.4697Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="bringForward">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M15 2H14C11.1716 2 9.75736 2 8.87868 2.87868C8 3.75736 8 5.17157 8 8V16C8 18.8284 8 20.2426 8.87868 21.1213C9.75736 22 11.1716 22 14 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2Z"
                fill="#1C274C"
              ></path>
              <path
                opacity="0.4"
                d="M8 8C8 6.46249 8 5.34287 8.14114 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5H8.14114C8 18.6571 8 17.5375 8 16V12.75V11.25V8Z"
                fill="#1C274C"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5303 11.4697C14.8232 11.7626 14.8232 12.2374 14.5303 12.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303C11.1768 14.2374 11.1768 13.7626 11.4697 13.4697L12.1893 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L12.1893 11.25L11.4697 10.5303C11.1768 10.2374 11.1768 9.76256 11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L14.5303 11.4697Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="rotateRightBy15">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                fill="#1C274C"
              ></path>
              <path
                d="M16.4017 6.28616C16.4017 5.98121 16.217 5.70662 15.9346 5.59158C15.6522 5.47653 15.3283 5.54393 15.1152 5.76208L14.3647 6.53037C12.244 5.55465 9.66551 5.95905 7.92796 7.7378C5.69068 10.0281 5.69068 13.7344 7.92796 16.0247C10.1748 18.3248 13.8252 18.3248 16.072 16.0247C17.3754 14.6904 17.9168 12.8779 17.7055 11.1507C17.6552 10.7396 17.2812 10.447 16.87 10.4973C16.4589 10.5476 16.1663 10.9217 16.2166 11.3328C16.3757 12.6335 15.9667 13.9859 14.999 14.9765C13.3407 16.6742 10.6593 16.6742 9.00097 14.9765C7.33301 13.269 7.33301 10.4935 9.00097 8.78596C10.1467 7.61303 11.7795 7.25143 13.225 7.69705L12.4635 8.47659C12.2527 8.69245 12.1917 9.01364 12.3088 9.29174C12.4259 9.56984 12.6983 9.75067 13 9.75067H15.6517C16.0659 9.75067 16.4017 9.41489 16.4017 9.00067V6.28616Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
        <button @click="rotateLeftBy15">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                opacity="0.1"
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                fill="#1C274C"
              ></path>
              <path
                d="M16.4017 6.28616C16.4017 5.98121 16.217 5.70662 15.9346 5.59158C15.6522 5.47653 15.3283 5.54393 15.1152 5.76208L14.3647 6.53037C12.244 5.55465 9.66551 5.95905 7.92796 7.7378C5.69068 10.0281 5.69068 13.7344 7.92796 16.0247C10.1748 18.3248 13.8252 18.3248 16.072 16.0247C17.3754 14.6904 17.9168 12.8779 17.7055 11.1507C17.6552 10.7396 17.2812 10.447 16.87 10.4973C16.4589 10.5476 16.1663 10.9217 16.2166 11.3328C16.3757 12.6335 15.9667 13.9859 14.999 14.9765C13.3407 16.6742 10.6593 16.6742 9.00097 14.9765C7.33301 13.269 7.33301 10.4935 9.00097 8.78596C10.1467 7.61303 11.7795 7.25143 13.225 7.69705L12.4635 8.47659C12.2527 8.69245 12.1917 9.01364 12.3088 9.29174C12.4259 9.56984 12.6983 9.75067 13 9.75067H15.6517C16.0659 9.75067 16.4017 9.41489 16.4017 9.00067V6.28616Z"
                fill="#1C274C"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <div class="absolute ml-2 top-[60px] h-min flex flex-col gap-3">
        <div
          class="relative w-[45px] h-[45px]"
          v-for="layer in uploadedLayers
            .slice()
            .sort((a, b) => a.position - b.position)"
          :key="layer.id"
        >
          <!-- <span>{{ image.id }}</span> -->
          <div
            v-if="layer.id == this.canvas.getActiveObject()?.id"
            v-motion-pop
            class="absolute -left-0 -top-0 -z-40 border-spacing-6 border-[2px] border-dashed rounded-md w-[53px] h-[53px] border-slate-600"
          ></div>

          <img
            v-if="layer.url"
            class="border-[2px] w-full h-full m-1 rounded-md border-gray-700/80"
            :src="layer.url"
            :key="layer.id"
            alt="Uploaded Image"
            @click="setActiveObjectById(layer.id)"
          />
          <p
            v-if="layer.text"
            class="border-[2px] w-full text-[.6vw] font-bold text-center pt-4 h-full m-1 rounded-md border-gray-700/80"
            :key="layer.id"
            alt="Uploaded Image"
            @click="setActiveObjectById(layer.id)"
          >
            {{ layer.text }}
          </p>
        </div>
      </div>
      <div
        class="absolute -top-[20px] left-[130px] z-20 flex flex-row items-center gap-3"
      >
        <div
          class="hidden relative w-fit h-fit border-[2px] z-20 rounded-md border-slate-600"
          v-for="(text, index) in uploadedText"
          @click="addTextCanvas(index)"
          :key="text.id"
        >
          <p class="visible text-[.6vw] font-bold m-1 mt-4 mb-4">
            {{ text.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { fabric } from "fabric";

import fs from "fs";
import { ref, toHandlers } from "vue";
import translations from "/src/translations.json";
import collection from "/src/collection.json";

export default {
  data() {
    return {
      emptyCanvas: "",
      selectedBrandTitle: "",
      selectedModelTitle: "",
      selectedCaseTitle: "",
      language: "rs",
      fetchCollection: [],
      items: collection,
      filterMenu: false,
      filteredItems: [],
      languageFound: false,
      dictionary: {},
      mobileDiv: this.$refs.canvasRef,
      deskDiv: this.$refs.canvasRef,
      windowWidth: window.innerWidth,
      mobileMode: false,
      translationsData: [],
      historyUndo: [],
      brands: [],
      activeLayerIndex: null,
      activeTabIndex: null,
      showDialog: true,
      activeTabImages: 1,
      activeTabText: 1,
      activeIndex: null,

      activeIndexColor: 7,
      models: [],
      fontColor: "black",
      casesTypes: [],
      exportMaskClipImage: {},
      exportPlaceholderImage: {},
      inputText: "",

      counter: ref(1),
      position: ref(830),

      inputText: "",
      textFamily: "",
      selectedType: "",
      selectedBrand: "",
      selectedModel: "",
      selectedCaseType: "",
      selectedImage: [],
      selectedText: [],
      objectsWithName: [],
      nextButtonProduct: false,
      alertMessageImageType: false,
      alertMessageImageTooSmall: false,
      alertMessageItemStock: false,
      itemStockCount: [],
      loading: false,
      canvas: null,
      uploadedLayers: [],
      uploadedImages: [],
      uploadedText: [],
      textIndex: 0,
      imageIndex: 1,
      offsetCollage: 80,
      printImage: "",
      previewImage: "",
    };
  },
  watch: {
    activeTabIndex(newValue, oldValue) {
      if (newValue === 2) {
        setTimeout(() => {
          this.showTab2 = true;
        }, 500);
      } else {
        this.showTab2 = false;
      }
    },
  },
  computed: {
    isVisible() {
      return this.mobileMode;
    },
  },

  methods: {
    toggleShowDialog() {
      this.windowWidth = window.innerWidth; // Update windowWidth when the window is resized

      this.mobileMode = this.windowWidth <= 760 ? true : false;

      console.log(this.mobileMode);
    },
    handleCanvasClick() {
      this.showDialog = false;
    },
    animateLeave() {
      this.$motion.leave({
        opacity: 1,
        y: 600,
        delay: 300,
        duration: 1300,
        easing: "ease-out",
      });
    },
    setActivePatterns() {
      var objects = this.canvas.getObjects();
      objects.forEach((object) => {
        if (object.name === "pattern") {
          console.log("Executed");
          object.set("active", false);
          this.canvas.renderAll();
        }
      });
    },

    deactivateActivePatterns() {
      var objects = this.canvas.getObjects();
      objects.forEach((object) => {
        if (object.name === "pattern") {
          console.log("Deactivated");
          object.setControlsVisibility({
            bl: false,
            br: false,
            tl: false,
            tr: false,
            mb: false,
            ml: false,
            mr: false,
            mt: false,
            mtr: false,
            customControl: true,
            customControl2: false,
            customControl3: false,
            customControl4: false,
            customControl5: false,
          });
          object.set({ selectable: true, evented: true, hasBorders: false });
          this.canvas.renderAll();
        }
      });
    },

    activateDrag() {
      console.log("drag");
      var activeObject = this.canvas.getActiveObject();
      if (
        activeObject &&
        activeObject.type === "image" &&
        activeObject.name === "canvas image"
      ) {
        activeObject.isDragging = true;
        this.canvas.renderAll();
      }
    },

    deselectObject(obj) {
      console.log(obj);
      const clipObject = obj.clipPath;

      if (clipObject) {
        // this.canvas.discardActiveObject();
        this.selectedObject = null;
        console.log("Object deselected");

        if (clipObject) {
          this.deactivateActivePatterns();
          // If the object is found, you can perform actions on it
          clipObject.setControlsVisibility({
            bl: false,
            br: false,
            tl: false,
            tr: false,
            mb: false,
            ml: false,
            mr: false,
            mt: false,
            mtr: false,
            customControl: true,
            customControl2: false,
            customControl3: false,
            customControl4: false,
            customControl5: false,
          });
          clipObject.set({
            selectable: true,
            evented: true,
            hasBorders: false,
          });
          this.canvas.renderAll();
          this.canvas.setActiveObject(clipObject);
          this.canvas.renderAll();

          // Add your code here to handle the object
        } else {
          console.log("clip-0 object not found");
        }
      }
    },

    checkEmptyCanvas() {
      const objects = this.canvas.getObjects();
      let emptyCanvas = false;
      objects.forEach((obj, index) => {
        if (obj.name === "canvas image" || obj.name === "text") {
          emptyCanvas = true;
        }
      });

      this.emptyCanvas = emptyCanvas;
      console.log(this.emptyCanvas);
      this.showDialog = false;
    },

    clickLastUploadedImage() {
      const lastImage = this.uploadedImages[this.uploadedImages.length - 1];
      const lastImageElement = this.$refs[`image-${lastImage.id}`];
      lastImageElement.$el.click();
    },
    updateSelectedBrandTitle() {
      const selectedBrand = this.brands.find(
        (brand) => brand.id === this.selectedBrand
      );
      this.selectedBrandTitle = selectedBrand.title;
      console.log(this.selectedBrandTitle);
    },
    updateSelectedModelTitle() {
      const selectedModel = this.models.find(
        (brand) => brand.id === this.selectedModel
      );
      this.selectedModelTitle = selectedModel.title;
      console.log(this.selectedModelTitle);
    },
    updateSelectedCaseTitle() {
      const selectedCase = this.casesTypes.find(
        (brand) => brand.id === this.selectedCase
      );
      this.selectedCaseTitle = this.casesTypes[this.selectedCaseType].title;
      console.log(this.casesTypes[this.selectedCaseType].title);
    },

    setLayers() {
      this.$set(this, "uploadedLayers", this.canvas.getObjects());
    },

    toggleFilterMenu() {
      this.filterMenu = !this.filterMenu;
    },
    filterByCategory(category) {
      this.filteredItems = this.filterItemsByCategory(
        collection.items,
        category
      );
      this.toggleFilterMenu();
    },
    filterItemsByCategory(items, category) {
      return items.filter((item) => item.category === category);
    },

    uploadImageFromCollection(event) {
      this.activeTabImages = 1;
      const src = event.src;
      if (this.imageIndex <= 6) {
        this.uploadedImages.push({
          url: src,
          id: this.imageIndex + 1,
        });
        this.imageIndex = this.imageIndex + 1;
      } else {
        return;
      }
    },

    uploadText() {
      if (this.textIndex <= 5 && this.inputText !== "") {
        this.uploadedText.push({
          id: this.imageIndex + 1,
          text: this.inputText,
          textFont: this.textFamily,
          textColor: this.fontColor,
        });
        this.textIndex = this.textIndex + 1;
        this.activeTabText = 2;
        console.log(this.uploadedText);
      } else {
        return;
      }
    },

    findLanguageAndDictionary() {
      // const language = "rs";
      const foundLanguage = translations.array.find(
        (item) => item.language === this.language
      );
      if (foundLanguage) {
        this.languageFound = true;
        this.dictionary = foundLanguage.dictionary;
      }
    },

    initCanvas(containerId) {
      if (this.canvas) {
        this.canvas.dispose(); // Dispose the existing canvas
        console.log("disposed");
      }
      console.log("created");
      this.canvas = new fabric.Canvas(
        containerId,
        {
          width: 450,
          height: 500,
          // minScaleLimit: 0.1,
          // maxScaleLimit: 0.3,
          // backgroundColor: "gray",
          getContext: "2d",
          // cornerStyle: "round",
          // objectCaching: true,
          willReadFrequently: true,
          renderOnAddRemove: false,
          //backgroundColor: "red",
          // isDrawingMode: false,
          // controlsAboveOverlay: true,
          preserveObjectStacking: true,
          selectable: false,
          selection: false,
        },
        { passive: true }
      );

      const clipRect = new fabric.Rect({
        width: 210,
        height: 430,

        rx: 20,
        ry: 20,
        top: 20,
        left: 0,
        name: "fakeClip",
        opacity: 0.5,
        // globalCompositeOperation: "destination-out",
        selectable: false,
        evented: false,
        fill: "rgba(5, 255, 255, 0.01)",
        strokeWidth: 2,
        cornerStyle: "round",
        strokeDashArray: [8, 16],
        stroke: "rgba(5, 5, 5, 1)",
        lockMovementX: true, // Object cannot be moved horizontally
        lockMovementY: true, // Object cannot be moved vertically
      });

      this.canvas.add(clipRect);
      clipRect.visible = true;
      clipRect.center();
      console.log("rect");
      // this.canvas.clipPath = clipRect;
      this.canvas.moveTo(clipRect, 1);

      this.canvas.renderAll();
      clipRect.animate("opacity", 0, {
        duration: 1000,
        onLoad: this.canvas.renderAll.bind(this.canvas),
      });
    },
    loadImages() {
      // Load 10 images onto the canvas
      for (let i = 1; i <= 5; i++) {
        const selectedObject = this.canvas.getActiveObject();
        if (!selectedObject || selectedObject.type === null) {
          return;
        }
        if (
          selectedObject.type === "rect" &&
          selectedObject.name === "pattern"
        ) {
          fabric.Image.fromURL(`src/assets/image${i}.jpg`, (img) => {
            const clipRect = new fabric.Rect({
              width: selectedObject.width,
              height: selectedObject.height,
              top: selectedObject.top,
              left: selectedObject.left,

              absolutePositioned: true,
              fill: "",
              perPixelTargetFind: false,
              opacity: 1,
              // globalCompositeOperation: "destination-out",
              hasBorders: true,
              borderColor: "#3ff4ff",
              clipPath: selectedObject.clipPath,
              evented: false,
              lockMovementX: true, // Object cannot be moved horizontally
              lockMovementY: true, // Object cannot be moved vertically
            });
            img.set({
              left: selectedObject.left + selectedObject.width / 2,
              top: selectedObject.top + selectedObject.height / 2,
              visible: false,
              width: img.width,
              height: img.height,
              originX: "center",
              originY: "center",
              scaleX: selectedObject.width / img.width,
              scaleY: selectedObject.height / img.height,
              clickable: true,
              targetFindTolerance: 5,
              selectable: true,
              hasControls: true,
              hasBorders: true,
              perPixelTargetFind: true,
              centerH: true,
              centerV: true,
              fill: "rgba(5, 5, 5, 0,.01)",
              name: "canvas image",
              clipPath: clipRect,
              visible: true,
              globalCompositeOperation: "source-atop",
            });
            img.setControlsVisibility({
              bl: true,
              br: false,
              tl: false,
              tr: false,
              mb: false,
              ml: false,
              mr: false,
              mt: false,
              mtr: true,
              customControl: false,
              customControl2: false,
              customControl3: true,
            });

            this.canvas.add(img);

            this.canvas.preserveObjectStacking = true;
            const objects = this.canvas.getObjects();
            objects.forEach((obj, index) => {
              if (obj && obj.type === "image" && obj.name === "transparent") {
                this.canvas.remove(obj);
                this.canvas.bringToFront(obj);
              }
            });

            this.canvas.sendBackwards(img);
            this.canvas.renderAll();
            this.exportPreviewPNG();
            this.exportImages(i);
          });
        }
      }
    },
    exportImages(index) {
      // Export each image to PNG

      const dataURL = this.canvas.toDataURL({
        format: "png",
        multiplier: 2, // Increase multiplier for higher quality
      });
      // Download the PNG image
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `image${index + 1}.png`;
      link.click();
    },

    handleResize() {
      this.windowWidth = window.innerWidth; // Update windowWidth when the window is resized

      const newDivId =
        this.windowWidth <= 750 ? this.$refs.canvasRef : this.$refs.canvasRef;

      if (this.windowWidth <= 750) {
        window.location.reload();
        this.initCanvas(newDivId);
      } else {
        window.location.reload();
        this.initCanvas(newDivId);
      }
    },

    setDimensions(width) {
      let scale = width / this.canvas.getWidth(),
        height = scale * this.canvas.getHeight();

      this.canvas.setDimensions({
        width: width,
        height: height,
      });

      this.canvas.calcOffset();
      let objects = this.canvas.getObjects();
      for (let i in objects) {
        let scaleX = objects[i].scaleX;
        let scaleY = objects[i].scaleY;
        let left = objects[i].left;
        let top = objects[i].top;

        objects[i].scaleX = scaleX * scale;
        objects[i].scaleY = scaleY * scale;
        objects[i].left = left * scale;
        objects[i].top = top * scale;

        objects[i].setCoords();
      }
      this.canvas.getObjects().forEach((obj) => {
        if (obj.clipPath) {
          // Resize the clip path based on the scaleFactor
          obj.clipPath.scaleX *= scale;
          obj.clipPath.scaleY *= scale;
          obj.clipPath.left *= scale;
          obj.clipPath.top *= scale;
          obj.clipPath.setCoords(); // Update clip path coordinates
        }
      });
    },

    dataURLtoBlob(dataurl) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    },

    pngUpload() {
      const blob1 = this.dataURLtoBlob(this.previewImage);
      const blob2 = this.dataURLtoBlob(this.printImage);

      /* console.log(blob); */

      const dataFull = new FormData();
      dataFull.append("file_preview", blob1, "preview.png");
      dataFull.append("file_print", blob2, "print.png");
      /*  const boundary = formData.getBoundary(); */
      /*  console.log(boundary); */
      const axiosConfig = {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data; boundary=${dataFull._boundary}",
        },
        timeout: 64000,
      };

      axios
        .post(
          "https://covers.mtpdev3.com/api/1.0/assetsblob",
          dataFull,
          axiosConfig
        )
        .then((response) => {
          console.log("Generisan");
          let data = response.data;
          let preview = data.preview;
          let print = data.print;
          this.generateUrl(preview, print);

          result.textContent = data.results[0].email;
        })
        .catch(function (error) {
          // handle error
          /* console.log(error); */
        })
        .finally(function () {
          // always executed
          console.log("I always Execued");
        });
    },
    alertMessageImageTypeClose() {
      this.alertMessageImageType = false;
    },
    alertMessageImageTooSmallClose() {
      this.alertMessageImageTooSmall = false;
    },
    alertMessageItemStockClose() {
      this.alertMessageItemStock = false;
    },
    async fetchTranslationsData() {
      let response = await fetch(
        `https://covers.mtpdev3.com/api/1.0/translations?language_code=${this.language}`,
        {
          method: "GET",
        }
      );
      this.translationsData = await response.json();
      console.log(this.translationsData.translations.actions_back);
    },
    async fetchCollectionData() {
      let response = await fetch("http://192.168.73.30:3000/images", {
        method: "GET",
      });
      this.fetchCollection = await response.json();
      console.log(this.fetchCollection);
    },

    async fetchStockData(product_id) {
      let headersList = {
        Accept: "application/json",
        "Control-Allow-Origin": "*",
        Authorization: "Basic",
      };

      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://mytrendyphone.dk/admin/WEBAPI/v2/products/${product_id}`,
        {
          method: "GET",

          headers: headersList,
        }
      );

      this.itemStockCount = await response.json();
      console.log(product_id);
      console.log(this.itemStockCount.stockCount);
      console.log(this.itemStockCount);
      if (this.itemStockCount.stockCount <= 0 && this.itemStockCount != null) {
        this.nextButtonProduct = false;
        this.alertMessageItemStock = true;
      } else {
        this.alertMessageItemStock = false;
        this.nextButtonProduct = true;
      }
    },

    generateUrl(previewImageHash, printImageHash) {
      // Define the parameters
      const baseUrl = "https://www.mytrendyphone.eu/shop/showbasket.html";
      console.table(this.casesTypes[this.selectedCaseType]);

      const brand = this.brands.find(
        (brand) => brand.id === this.selectedBrand
      ).title;

      const model = this.models.find(
        (model) => model.id === this.selectedModel
      ).title;
      const productId = this.casesTypes[this.selectedCaseType].dd_product_id;
      const coverType = this.casesTypes[this.selectedCaseType].title;

      // const infoImage = this.casesTypes[this.selectedCaseType].info_image;
      // const imageSegment = infoImage.split("/");
      // const previewImageHash = imageSegment[imageSegment.length - 1].replace(
      //   /\.png$/,
      //   ""
      // );
      // const printImageHash = imageSegment[imageSegment.length - 1].replace(
      //   /\.png$/,
      //   ""
      // );

      //  const productId = '232761-PRINT';
      //  const previewImageHash = '76fa720e34ba40ba556f4f3da30b5c2a';
      // const brand = 'Google';
      // const model = 'Google Pixel 6 Pro';
      //  const coverType = 'TPU Case';
      const color = "Transparent";
      //  const printImageHash = '76fa720e34ba40ba556f4f3da30b5c2a';

      const params = new URLSearchParams();
      params.set("ProductID", productId);
      params.set("Add", "1");
      params.set("AMOUNT", "1");
      params.set("Variantgroup1", "i");
      params.set("variant1", previewImageHash);
      params.set("Variantgroup2", "p");
      params.set("variant2", `${brand} ${model} - ${coverType} - ${color}`);
      params.set("Variantgroup3", "t");
      params.set("variant3", printImageHash);
      params.set("PostOrigin", "productinfo");

      const fullUrl = `${baseUrl}?${params.toString()}`;

      console.log(fullUrl);
      this.goToLink(fullUrl);
    },
    goToLink(url) {
      window.location.href = url;
    },

    toggleDialog() {
      this.showDialog = !this.showDialog;
    },

    setActiveTabIndex(key) {
      if (this.mobileMode === true) {
        this.toggleDialog();
      } else {
        this.showDialog = true;
      }

      console.log(this.showDialog);
      this.activeTabIndex = key;
      console.log(this.activeTabIndex);
      // Set the clicked item as active
    },
    setActiveTabImages(key) {
      this.activeTabImages = key;
      // Set the clicked item as active
    },
    setActiveTabText(key) {
      this.activeTabText = key;
      // Set the clicked item as active
    },

    setActiveItemIndex(key) {
      this.activeIndex = key;
      // Set the clicked item as active
    },
    setActiveColorIndex(key) {
      this.activeIndexColor = key;
      // Set the clicked item as active
    },

    moveLeft() {
      this.position -= 400;
    },
    moveRight() {
      this.position += 400;
    },
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    nextClick() {
      this.moveLeft();
      this.incrementCounter();
    },
    backClick() {
      this.moveRight();
      this.decrementCounter();
    },
    addFontColor(fontcolor, index) {
      this.fontColor = fontcolor;
      this.setActiveColorIndex(index);
    },
    alignTextTopLeft(alignment) {
      const text = this.canvas.getActiveObject();
      if (text && text.type === "i-text") {
        const clipPath = text.clipPath;
        const centerPoint = clipPath.getCenterPoint();
        const clipPathBounds = clipPath.getBoundingRect();

        text.setPositionByOrigin(
          { x: clipPathBounds.left + 30, y: clipPathBounds.top + 5 },
          "left",
          "top"
        );

        this.canvas.renderAll();
      }
    },
    alignTextRight(alignment) {
      const text = this.canvas.getActiveObject();
      if (text && text.type === "i-text") {
        const clipPath = text.clipPath;
        const centerPoint = clipPath.getCenterPoint();
        const clipPathBounds = clipPath.getBoundingRect();

        text.setPositionByOrigin(
          {
            x: centerPoint.x + text.getBoundingRect().width - 40,
            y: text.getBoundingRect().top + text.getBoundingRect().height / 2,
          },
          "width",
          "center"
        );
        console.log(text.width),
          console.log(clipPathBounds),
          this.canvas.renderAll();
      }
    },
    alignTextLeft(alignment) {
      const text = this.canvas.getActiveObject();
      if (text && text.type === "i-text") {
        const clipPath = text.clipPath;
        const centerPoint = clipPath.getCenterPoint();
        const clipPathBounds = clipPath.getBoundingRect();

        text.set({
          left: clipPathBounds.left + 50,
        });
        console.log(text.width),
          console.log(clipPathBounds),
          this.canvas.renderAll();
      }
    },
    alignTextCenter(alignment) {
      const text = this.canvas.getActiveObject();
      if (text && text.type === "i-text") {
        const clipPath = text.clipPath;
        const centerPoint = clipPath.getCenterPoint();
        const clipPathBounds = clipPath.getBoundingRect();

        text.setPositionByOrigin(
          { x: centerPoint.x, y: centerPoint.y },
          "center",
          "center"
        );

        this.canvas.renderAll();
      }
    },
    alignTextTop(alignment) {
      const text = this.canvas.getActiveObject();
      if (text && text.type === "i-text") {
        const clipPath = text.clipPath;
        const centerPoint = clipPath.getCenterPoint();
        const clipPathBounds = clipPath.getBoundingRect();

        text.set({
          top:
            clipPathBounds.top +
            text.getBoundingRect().height / 2 +
            clipPathBounds.height * 0.05,
        });

        this.canvas.renderAll();
      }
    },
    alignTextBottom(alignment) {
      const text = this.canvas.getActiveObject();
      if (text && text.type === "i-text") {
        const clipPath = text.clipPath;
        const centerPoint = clipPath.getCenterPoint();
        const clipPathBounds = clipPath.getBoundingRect();

        text.set({
          top:
            clipPathBounds.top +
            clipPathBounds.height -
            text.height / 2 -
            clipPathBounds.height * 0.05,
        });
        console.log(text.height / 2),
          console.log(clipPathBounds.height / 2 + text.height / 2),
          this.canvas.renderAll();
      }
    },
    updateSelectedText() {
      const selectedTextObject = this.canvas.getActiveObject();
      if (selectedTextObject) {
        selectedTextObject.text = this.inputText;
        this.canvas.renderAll();
      }
    },

    addTextCanvas(index) {
      this.checkEmptyCanvas();
      const selectedObject = this.canvas.getActiveObject();
      if (!selectedObject || selectedObject.type === null) {
        return;
      }

      if (
        selectedObject.type === "rect" &&
        selectedObject.name === "pattern" &&
        this.uploadedLayers.length < 6
      ) {
        console.log(selectedObject.left + selectedObject.width / 2);
        console.log(selectedObject.top + selectedObject.height / 2);

        const clipRect = new fabric.Rect({
          top: 30,
          left: 90 + this.offsetCollage,
          width: 270,
          height: 435,
          absolutePositioned: true,
          fill: "",
          perPixelTargetFind: false,
          /// global why
          // globalCompositeOperation: "destination-out",
          hasBorders: true,
          borderColor: "#3ff4ff",
          clipPath: selectedObject.clipPath,
          evented: false,
        });

        const newText = new fabric.IText(this.uploadedText[index].text, {
          // Set the properties for the text object here
          left: selectedObject.left + selectedObject.width / 2,
          top: selectedObject.top + selectedObject.height / 2,
          id: `rect-${this.uploadedLayers.length}`,
          // // scaleX: 0.12,
          // //   scaleY: 0.12,
          originX: "left",
          originY: "center",
          name: "text",
          fontFamily: this.uploadedText[index].textFont,
          fontSize: 30,
          // textAlign: "center",
          globalCompositeOperation: "source-atop",
          clipPath: clipRect,
          targetFindTolerance: 5,
          selectable: true,
          textAlign: "center",
          hasControls: true,
          hasBorders: true,
          perPixelTargetFind: true,
          fill: this.uploadedText[index].textColor,
          // centerH: true,
          //   centerV: true,
        });
        let newValue = this.uploadedLayers.length;
        this.uploadedLayers.push({
          text: this.uploadedText[index].text,
          //id: selectedImage.id,
          id: `rect-${newValue}`,
        });
        newText.setControlsVisibility({
          bl: true,
          br: false,
          tl: false,
          tr: false,
          mb: false,
          ml: false,
          mr: false,
          mt: false,
          mtr: true,
          customControl: false,
          customControl2: false,
          customControl3: true,
          customControl4: false,
            customControl5: true,
        });

        newText.visible = true;
        newText.center();
        newText.selectable = true;
        this.canvas.add(newText);
        this.canvas.moveTo(newText, 9);
        this.canvas.setActiveObject(newText);

        newText.on("mouse:down", (event) => {
          const target = event.target;
          if (target && target.selectable) {
            this.canvas.setActiveObject(target);
            this.canvas.renderAll();
          }
        });

        this.canvas.renderAll();

        const objects = this.canvas.getObjects();
        objects.forEach((obj, index) => {
          if (obj && obj.type === "image" && obj.name === "transparent") {
            this.canvas.remove(obj);
            this.canvas.moveTo(obj, 9);
          }
        });

        objects.forEach((obj, index) => {
          console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
        });

        this.canvas.renderAll();

        // img.src = selectedImage.url;
      }
    },

    addPhoneToCanvas(caseType) {
      this.showDialog = false;
      this.clearAllCanvas();
      this.activeIndex = 0;
      console.table(this.selectedType);
      console.log(this.casesTypes[this.selectedCaseType].title);
      if (this.casesTypes[this.selectedCaseType].title === "Flip Case") {
        this.offsetCollage = this.offsetCollage + 90;
        this.canvas.renderAll();
      } else {
        this.offsetCollage = 0;
        this.canvas.renderAll();
      }

      this.exportMaskClipImage = this.casesTypes[caseType].image_draw_mask;
      this.exportPlaceholderImage = this.casesTypes[caseType].image_placeholder;
      console.log(this.casesTypes[caseType].dd_product_id);
      this.fetchStockData(this.casesTypes[caseType].dd_product_id);

      console.log(this.casesTypes[caseType]);
      console.log(this.casesTypes[caseType].image_draw_mask);

      // Logic to add the selected shape to the canvas

      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "image" && obj.name === "transparent") {
          this.canvas.remove(obj);
        }

        if (obj && obj.type === "image" && obj.name === "background") {
          this.canvas.remove(obj);
        }

        if (obj && obj.type === "rect" && obj.name === "blank") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });
      // adding phone mask to cannvas

      const back = fabric.Image.fromURL(
        this.casesTypes[caseType].image_placeholder,
        (background) => {
          // the scaleToHeight property is use to set the image height
          background.scaleToHeight(320);
          // scaleToWidth is use to set the image width
          background.scaleToWidth(320);
          background.left;
          background.top;
          background.opacity = 0;
          background.evented = false;
          background.selectable = false;
          background.evented = false;
          background.name = "background";
          // img.opacity = 0.5;
          background.objectCaching = false;
          background.selectable = false;
          background.targetFindTolerance = 5;

          background.perPixelTargetFind = true;
          // img.globalCompositeOperation = "destination-out";
          this.canvas.add(background);

          background.center();
          this.canvas.moveTo(background, 0);
          this.canvas.renderAll();
          background.animate("opacity", 1, {
            duration: 500,
            onChange: this.canvas.renderAll.bind(this.canvas),
          });
        },
        { crossOrigin: "anonymous" }
      );

      const trans = fabric.Image.fromURL(
        this.casesTypes[caseType].image_draw_mask,
        (img) => {
          // the scaleToHeight property is use to set the image height
          img.scaleToHeight(320);
          // scaleToWidth is use to set the image width
          img.scaleToWidth(320);
          img.left;
          img.top;
          img.opacity = 0;
          img.evented = false;
          img.selectable = false;
          img.evented = false;
          img.name = "transparent";
          // img.opacity = 0.5;
          img.objectCaching = false;

          img.targetFindTolerance = 5;

          img.perPixelTargetFind = true;
          // img.globalCompositeOperation = "destination-out";
          this.canvas.add(img);

          img.center();
          this.canvas.moveTo(img, 1);
          this.canvas.renderAll();
          img.animate("opacity", 1, {
            duration: 500,
            onChange: this.canvas.renderAll.bind(this.canvas),
          });
        },
        { crossOrigin: "anonymous" }
      );
    },

    addUploadedImageToCanvas(index) {
      const selectedImage = this.uploadedImages[index];
      const img = new Image();
      img.onload = () => {
        const fabricImg = new fabric.Image(img, {
          // Set the properties for the fabric image here
          left: 200,
          top: 100,
          scaleX: 0.3,
          scaleY: 0.3,
          selectable: true,
          hasControls: true,
          hasBorders: true,
          perPixelTargetFind: true,
          id: index,
          // globalCompositeOperation: "xor",
          centerH: true,
          centerV: true,
          name: "canvas image",
        });
        this.canvas.add(fabricImg);
        this.canvas.moveTo(fabricImg, 2);
        this.canvas.setActiveObject(fabricImg);
        // this.canvas.renderAll();
      };
      img.src = selectedImage.url;
    },
    setActiveObjectById(id) {
      console.log(id);
      const objects = this.canvas.getObjects();
      //find the object with the matching id from layer id
      const targetObject = objects.find((obj) => obj.id === id);
      this.activeLayerIndex = id.slice(5);
      console.log(targetObject);
      if (targetObject) {
        if (this.canvas.getActiveObject() === targetObject) {
          this.deselectObject(targetObject);

          this.canvas.renderAll();
        } else {
          this.canvas.setActiveObject(targetObject);
          this.canvas.renderAll();
        }
        this.canvas.renderAll();
      }
    },

    addClipPathToSelectedObject(index) {
      this.checkEmptyCanvas();
      const selectedObject = this.canvas.getActiveObject();
      if (!selectedObject || selectedObject.type === null) {
        console.log(selectedObject);
        return;
      }

      if (selectedObject.type === "rect" && selectedObject.name === "pattern") {
        const selectedImage = this.uploadedImages[index];
        //   console.log(selectedObject);

        const img = new Image();
        // adding image to canvas
        img.onload = () => {
          const clipRect = new fabric.Rect({
            width: selectedObject.width,
            height: selectedObject.height,
            top: selectedObject.top,
            left: selectedObject.left,
            absolutePositioned: true,
            fill: "",
            perPixelTargetFind: false,
            opacity: 1,
            // globalCompositeOperation: "destination-out",
            hasBorders: true,
            borderColor: "#3ff4ff",
            clipPath: selectedObject.clipPath,
            evented: false,
            lockMovementX: true, // Object cannot be moved horizontally
            lockMovementY: true, // Object cannot be moved vertically
          });

          const fabricImg = new fabric.Image(img, {
            left: selectedObject.left + selectedObject.width / 2,
            top: selectedObject.top + selectedObject.height / 2,
            id: `rect-${this.uploadedLayers.length}`,

            originX: "center",
            originY: "center",
            cornerSize: this.canvas.width * 0.05,
            clickable: true,
            targetFindTolerance: 5,
            evented: false,
            hasControls: true,
            hasBorders: true,
            perPixelTargetFind: true,
            centerH: true,
            centerV: true,
            fill: "rgba(5, 5, 5, 0,.01)",
            name: "canvas image",
            clipPath: clipRect,
            globalCompositeOperation: "source-atop",
          });
          //adding image to layers
          console.log(selectedObject.width / img.width);
          console.log(selectedObject.height);

          const objectsToLayers = this.canvas.getObjects();
          const indexToLayers = objectsToLayers.indexOf(fabricImg);

          console.log(`rect-${selectedImage.id}`);
          let newValue = this.uploadedLayers.length;
          if (
            this.uploadedLayers.length < 6 &&
            !this.uploadedLayers.find(
              (layer) => layer.id === `rect-${newValue}`
            )
          ) {
            console.log("print");
            this.uploadedLayers.push({
              url: selectedImage.url,
              //id: selectedImage.id,
              id: `rect-${newValue}`,
            });

            fabricImg.setControlsVisibility({
              bl: true,
              br: false,
              tl: false,
              tr: false,
              mb: false,
              ml: false,
              mr: false,
              mt: false,
              mtr: true,
              customControl: false,
              customControl2: false,
              customControl3: true,
              customControl4: false,
              customControl5: true,
            });
            this.canvas.add(fabricImg);
            fabricImg.scaleToWidth(300);
            fabricImg.scaleToHeight(420);

            this.canvas.moveTo(fabricImg, 4);

            const objects = this.canvas.getObjects();
            objects.forEach((obj, index) => {
              if (obj && obj.type === "image" && obj.name === "transparent") {
                this.canvas.remove(obj);
                this.canvas.moveTo(obj, 9);
              }
            });

            objects.forEach((obj, index) => {
              console.log(
                `Item ${index}: ${obj.type} name: ${obj.name} id: ${obj.id} `
              );
              //this.setActiveObjectById(obj.id);
              console.log(obj);
              console.log(this.uploadedLayers);
            });

            this.canvas.renderAll();
          }
        };

        // console.log(selectedImage.width);
        //console.log(selectedImage.height);

        img.src = selectedImage.url;
        img.width = selectedImage.width;
        img.height = selectedImage.height;
      }
      if (
        selectedObject.type === "circle" &&
        selectedObject.name === "pattern"
      ) {
        const selectedImage = this.uploadedImages[index];
        const img = new Image();
        // adding image to canvas
        img.onload = () => {
          const clipRect = new fabric.Circle({
            width: selectedObject.width,
            height: selectedObject.height,
            top: selectedObject.top - 25,
            left: selectedObject.left - 25,

            radius: selectedObject.radius,
            absolutePositioned: true,
            fill: "",
            perPixelTargetFind: false,
            opacity: 1,
            // globalCompositeOperation: "destination-out",
            hasBorders: true,
            borderColor: "#3ff4ff",
            clipPath: selectedObject.clipPath,
            evented: false,
          });

          const fabricImg = new fabric.Image(img, {
            left: selectedObject.left + selectedObject.width / 2,
            top: selectedObject.top + selectedObject.height / 2,

            scaleX: 0.12,
            scaleY: 0.12,
            originX: "center",
            originY: "center",
            cornerSize: this.canvas.width * 0.05,
            clickable: true,
            targetFindTolerance: 5,
            selectable: true,
            hasControls: true,
            hasBorders: true,
            perPixelTargetFind: true,
            centerH: true,
            centerV: true,
            name: "canvas image",
            clipPath: clipRect,
            globalCompositeOperation: "source-atop",
          });

          fabricImg.setControlsVisibility({
            bl: true,
            br: false,
            tl: false,
            tr: false,
            mb: false,
            ml: false,
            mr: false,
            mt: false,
            mtr: true,
            customControl: false,
            customControl2: false,
            customControl3: true,
          });

          this.canvas.add(fabricImg);

          this.canvas.moveTo(fabricImg, 4);

          const objects = this.canvas.getObjects();
          objects.forEach((obj, index) => {
            if (obj && obj.type === "image" && obj.name === "transparent") {
              this.canvas.remove(obj);
              this.canvas.moveTo(obj, 9);
            }
          });

          objects.forEach((obj, index) => {
            console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
          });

          this.canvas.renderAll();
        };
        img.src = selectedImage.url;
        img.width = selectedImage.width;
        img.height = selectedImage.height;
      }

      this.toggleDialog();
    },

    clearInput1() {
      this.$refs.fileInput1.value = null;
    },
    clearInput() {
      this.$refs.fileInput.value = null;
    },

    addCollage2(key) {
      this.showDialog = false;
      this.uploadedLayers = [];
      this.activeLayerIndex = null;
      if (
        this.selectedBrand === "" ||
        this.selectedModel === "" ||
        this.selectedCaseType === ""
      ) {
        return;
      }

      this.setActiveItemIndex(key);
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });

      var rectangle = new fabric.Rect({
        top: 23,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 215,
        selectable: true,

        name: "pattern",
        opacity: 0,
        hasControls: true,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        // strokeDashArray: [8, 16],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      var rectangle2 = new fabric.Rect({
        top: 240,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 240,
        selectable: true,

        name: "pattern",
        hasControls: true,
        opacity: 0,
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 2,
        strokeDashArray: [10, 10],

        globalCompositeOperation: "source-atop",
        hoverCursor: "pointer",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle2.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      rectangle.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });

      rectangle2.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });

      this.canvas.add(rectangle, rectangle2);
      this.canvas.moveTo(rectangle, 2);
      this.canvas.moveTo(rectangle2, 3);
      rectangle.animate("opacity", 1, {
        duration: 500,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      rectangle2.animate("opacity", 1, {
        duration: 500,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      this.setActivePatterns(), this.canvas.renderAll();
    },
    addCollage1(key) {
      this.showDialog = false;
      this.uploadedLayers = [];
      this.activeLayerIndex = null;
      if (
        this.selectedBrand === "" ||
        this.selectedModel === "" ||
        this.selectedCaseType === ""
      ) {
        return;
      }

      this.setActiveItemIndex(key);
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });
      objects.forEach((obj, index) => {
        if (obj && obj.type === "image" && obj.name === "transparent") {
          console.log(obj.getBoundingRect());
        }
        var rectangle0 = new fabric.Rect({
          top: 30,
          left: 90 + this.offsetCollage,
          width: 270,
          height: 435,

          selectable: true,

          name: "pattern",
          hasControls: true,
          opacity: 0,
          hasBorders: false,
          cornerStyle: "round",
          fill: "rgba(5, 5, 5, 0.01)",
          stroke: "black",
          strokeWidth: 2,
          strokeDashArray: [10, 10],

          globalCompositeOperation: "source-atop",
          hoverCursor: "pointer",
          // stroke: "black",
          lockMovementX: true,
          lockMovementY: true,
        });

        // rectangle0.scaleToHeight(100);
        // rectangle0.scaleToWidth(100);

        rectangle0.setControlsVisibility({
          customControl: true,
          customControl2: false,
          customControl3: false,
          customControl4: false,
          customControl5: false,

          bl: false,
          br: false,
          tl: false,
          tr: false,
          mb: false,
          ml: false,
          mr: false,
          mt: false,
          mtr: false,
        });

        // rectangle0.on("mousedblclick", function (options) {});

        // rectangle0.fire("mouse:down", function (options) {});

        rectangle0.on("mouse:down", (event) => {
          const target = event.target;
          if (target && target.selectable) {
            this.canvas.setActiveObject(target);
            // this.canvas.renderAll();
          }
        });

        this.canvas.add(rectangle0);
        this.canvas.moveTo(rectangle0, 2);
        rectangle0.animate("opacity", 1, {
          duration: 500,
          onChange: this.canvas.renderAll.bind(this.canvas),
        });

        this.setActivePatterns(), this.canvas.renderAll();
      });
    },

    addCollage3(key) {
      this.showDialog = false;
      this.uploadedLayers = [];
      this.activeLayerIndex = null;
      if (
        this.selectedBrand === "" ||
        this.selectedModel === "" ||
        this.selectedCaseType === ""
      ) {
        return;
      }

      this.setActiveItemIndex(key);
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });

      var rectangle = new fabric.Rect({
        top: 23,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 150,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 2,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      var rectangle2 = new fabric.Rect({
        top: 327,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 150,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 2,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        hoverCursor: "pointer",

        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle2.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });
      var rectangle3 = new fabric.Rect({
        top: 175,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 150,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 0,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle3.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      // rectangle.on("mousedblclick", function (options) {
      //   uploadButton1.click();
      // });

      rectangle.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });

      rectangle2.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });
      rectangle3.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });
      // rectangle2.on("mousedblclick", function (options) {
      //   uploadButton.click();
      // });

      this.canvas.add(rectangle, rectangle2, rectangle3);
      this.canvas.moveTo(rectangle, 2);
      this.canvas.moveTo(rectangle2, 3);
      this.canvas.moveTo(rectangle3, 4);
      rectangle.animate("opacity", 1, {
        duration: 300,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      rectangle2.animate("opacity", 1, {
        duration: 600,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      rectangle3.animate("opacity", 1, {
        duration: 900,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      // this.canvas.renderAll();
    },
    addCollage4(key) {
      this.showDialog = false;
      this.uploadedLayers = [];
      this.activeLayerIndex = null;
      if (
        this.selectedBrand === "" ||
        this.selectedModel === "" ||
        this.selectedCaseType === ""
      ) {
        return;
      }

      this.setActiveItemIndex(key);
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });

      var rectangle = new fabric.Rect({
        top: 20,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 110,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 2,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      var rectangle2 = new fabric.Rect({
        top: 132,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 110,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        // stroke: "black",
        // strokeWidth: 2,
        // strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle2.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });
      var rectangle3 = new fabric.Rect({
        top: 243,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 110,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 2,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle3.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });
      var rectangle4 = new fabric.Rect({
        top: 356,
        left: 90 + this.offsetCollage,
        width: 270,
        height: 110,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        // stroke: "black",
        // strokeWidth: 2,
        // strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle4.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      // rectangle.on("mousedblclick", function (options) {
      //   uploadButton1.click();
      // });

      rectangle.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });

      rectangle2.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });
      rectangle3.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });
      rectangle4.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          // this.canvas.renderAll();
        }
      });
      // rectangle2.on("mousedblclick", function (options) {
      //   uploadButton.click();
      // });

      this.canvas.add(rectangle, rectangle2, rectangle3, rectangle4);
      this.canvas.moveTo(rectangle, 2);
      this.canvas.moveTo(rectangle2, 3);
      this.canvas.moveTo(rectangle3, 4);
      this.canvas.moveTo(rectangle4, 5);
      rectangle.animate("opacity", 1, {
        duration: 200,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      rectangle2.animate("opacity", 1, {
        duration: 400,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      rectangle3.animate("opacity", 1, {
        duration: 400,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      rectangle4.animate("opacity", 1, {
        duration: 400,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      // this.canvas.renderAll();
    },
    addCollage5(key) {
      this.showDialog = false;
      this.uploadedLayers = [];
      this.activeLayerIndex = null;

      if (
        this.selectedBrand === "" ||
        this.selectedModel === "" ||
        this.selectedCaseType === ""
      ) {
        return;
      }

      this.setActiveItemIndex(key);
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });

      var rectangle = new fabric.Rect({
        top: 173,
        left: 150 + this.offsetCollage,
        width: 150,
        height: 150,
        selectable: true,
        name: "pattern",
        hasControls: true,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        opacity: 0,
        strokeWidth: 2,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",
        lockMovementX: true,
        lockMovementY: true,
      });
      rectangle.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,

        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      rectangle.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          this.canvas.renderAll();
        }
      });

      this.canvas.add(rectangle);
      rectangle.animate("opacity", 1, {
        duration: 500,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      this.canvas.moveTo(rectangle, 2);

      // this.canvas.renderAll();
    },
    addCollage6(key) {
      this.showDialog = false;
      this.uploadedLayers = [];
      this.activeLayerIndex = null;
      if (
        this.selectedBrand === "" ||
        this.selectedModel === "" ||
        this.selectedCaseType === ""
      ) {
        return;
      }

      this.setActiveItemIndex(key);
      const objects = this.canvas.getObjects();
      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });

      const circle = new fabric.Circle({
        radius: 100, // Set the radius of the circle
        top: 173,
        left: 150 + this.offsetCollage,
        width: 150,
        height: 150,
        selectable: true,
        name: "pattern",
        hasControls: true,
        opacity: 0,
        hoverCursor: "pointer",
        hasBorders: false,
        cornerStyle: "round",
        fill: "rgba(5, 5, 5, 0.01)",
        stroke: "black",
        strokeWidth: 2,
        strokeDashArray: [10, 10],
        globalCompositeOperation: "source-atop",
        // stroke: "black",

        lockMovementX: true,
        lockMovementY: true,
      });

      circle.setControlsVisibility({
        customControl: true,
        customControl2: false,
        customControl3: false,
        customControl4: false,
        customControl5: false,
        bl: false,
        br: false,
        tl: false,
        tr: false,
        mb: false,
        ml: false,
        mr: false,
        mt: false,
        mtr: false,
      });

      circle.on("mouse:down", (event) => {
        const target = event.target;
        if (target && target.selectable) {
          this.canvas.setActiveObject(target);
          this.canvas.renderAll();
        }
      });

      this.canvas.add(circle);

      circle.animate("opacity", 1, {
        duration: 500,
        onChange: this.canvas.renderAll.bind(this.canvas),
      });
      this.canvas.moveTo(circle, 2);
      // this.canvas.renderAll();
    },

    removeAllRect() {
      this.canvas.forEachObject(function (object) {
        if (object.type === "rect") {
          canvas.remove(object); // Remove the rectangle object from the canvas
        }
      });
      canvas.renderAll();
    },

    getDeviceType(type) {
      console.log(this.selectedType);
      const brandDropDown = this.$refs.phoneBrand;

      this.fetchBrandsData();
      this.fetchModelsData();
      this.fetchCaseTypeData();

      if (type === "") {
        brandDropDown.disabled = true;
        brandDropDown.selectedIndex = 0;
        // selectCaseDropDown.disabled = true;
        // selectCaseDropDown= selectCaseDropDown.selectedValue;
        return false;
      }

      brandDropDown.disabled = false;
      this.selectedBrand = "";
      this.selectedModel = "";
      this.selectedCaseType = "";
    },

    async fetchBrandsData(typed) {
      try {
        const response = await fetch(
          `https://covers.mtpdev3.com/api/1.0/brands?language_code=rs&device_id=${this.selectedType}`
        );
        const data = await response.json();
        this.brands = data;
        console.log(this.brands); // Update the brands data in the component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async fetchModelsData(brand) {
      try {
        const modelType = `https://covers.mtpdev3.com/api/1.0/models?language_code=rs&device_id=${this.selectedType}&brand_id=${brand}`;

        const response = await fetch(modelType);
        const data = await response.json();
        this.models = data; // Update the brands data in the component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async fetchCaseTypeData(model) {
      try {
        const caseType = `https://covers.mtpdev3.com/api/1.0/types?language_code=${this.language}&model_id=${model}`;
        const response = await fetch(caseType);
        const data = await response.json();
        this.casesTypes = data; // Update the brands data in the component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    getPhoneModels(brand) {
      console.log(brand);
      const modelDropDown = this.$refs.phoneModel;

      if (brand === "") {
        modelDropDown.disabled = true;
        modelDropDown.selectedIndex = 0;
        return false;
      }

      modelDropDown.disabled = false;
      this.fetchModelsData(brand);
      this.selectedModel = "";
      this.selectedCaseType = "";
    },
    getPhoneCase(model) {
      const caseDropDown = this.$refs.phoneCase;
      console.log(model);
      if (model === "") {
        caseDropDown.disabled = true;
        caseDropDown.selectedIndex = 0;
        return false;
      }

      caseDropDown.disabled = false;
      this.selectedCaseType = "";
      this.fetchCaseTypeData(model);
    },

    addImageToCanvas() {
      if (this.selectedImage) {
        fabric.Image.fromURL(this.selectedImage, (img) => {
          // Customize the image properties if needed
          img.scaleToHeight(230);
          // scaleToWidth is use to set the image width
          img.scaleToWidth(230);

          img.selectable = false;
          this.canvas.clear();
          this.canvas.moveTo(img, 1);
          this.canvas.add(img);
          img.center();

          // this.canvas.renderAll();
        });
      }
    },
    //image upload function
    handleImageUpload(event) {
      const files = event.target.files;
      const file = files[0];
      const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB (example size limit)
      const minWidth = 800;
      console.log(file);
      console.log(file.size);
      console.log(maxSizeInBytes);

      const remainingSlots = 6 - this.uploadedImages.length;
      const filesToUpload = Array.from(files).slice(0, remainingSlots);
      if (
        file &&
        file.type.startsWith("image/") &&
        file.size < maxSizeInBytes
      ) {
        for (let i = 0; i < filesToUpload.length; i++) {
          const reader = new FileReader();

          reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;

            img.onload = () => {
              const imageWidth = img.width;
              console.log("Image width:", imageWidth);
              if (imageWidth > minWidth) {
                this.uploadedImages.push({
                  url: e.target.result,
                  id: this.imageIndex + 1,
                });

                // console.log(this.imageIndex);
                this.imageIndex = this.imageIndex + 1;
                console.log("Ucitana slika");
                console.log(this.imageIndex);
              } else {
                this.alertMessageImageTooSmall = true;
              }
            };
          };
          reader.readAsDataURL(filesToUpload[i]);
        }
      } else {
        this.alertMessageImageType = true;
      }
    },

    handleImageUpload1(event) {
      const files = event.target.files;

      const remainingSlots = 8 - this.uploadedImages.length;
      const filesToUpload = Array.from(files).slice(0, remainingSlots);

      for (let i = 0; i < filesToUpload.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImages.push({
            url: e.target.result,
            id: this.imageIndex + 1,
          });
          console.log(this.imageIndex);
          this.imageIndex = this.imageIndex + 1;
          console.log(this.imageIndex);
          const img = new Image();
          img.onload = () => {
            const fabricImg = new fabric.Image(img, {
              left: 200,
              top: 100,
              scaleX: 0.1,
              scaleY: 0.1,
              clickable: true,
              flipX: false,
              // clipPath: clipRect2,
              objectCaching: false,
              selectable: true,
              hasControls: true,
              hasBorders: true,
              perPixelTargetFind: true,
              centerH: true,
              centerV: true,
              name: "canvas image",
            });

            //  this.imageGroup.addWithUpdate(fabricImg);
            //  this.canvas.moveTo(this.imageGroup,2);

            this.canvas.add(fabricImg);
            this.canvas.setActiveObject(fabricImg);

            this.canvas.moveTo(fabricImg, this.imageIndex);

            const objects = this.canvas.getObjects();
            objects.forEach((obj, index) => {
              console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
            });
            console.log(this.uploadedImages);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(filesToUpload[i]);
      }
    },

    addButton() {
      this.activeTabIndex = 3;

      this.$refs.uploadButton?.click();
      // Remove any existing event listeners
      this.$refs.uploadButton.removeEventListener(
        "change",
        this.uploadButtonChangeListener
      );

      // Add new event listener
      if (
        !this.alertMessageImageTooSmall === false ||
        !this.alertMessageImageType === false
      ) {
        this.uploadButtonChangeListener = () => {
          console.log("add clip path executed");
          setTimeout(() => {
            this.addClipPathToSelectedObject(this.uploadedImages.length - 1);
          }, 500);
        };
      }

      this.$refs.uploadButton.addEventListener(
        "change",
        this.uploadButtonChangeListener
      );
    },

    selectImage(index) {
      this.canvas.setActiveObject(this.canvas.item(index));
      // this.canvas.renderAll();
    },
    exportPNG() {
      this.loading = true;
      // this.setDimensions(700);

      this.exportPreviewPNG();

      setTimeout(() => {
        // this.setDimensions(700);
        this.exportPrintPNG1();
      }, 2000);

      setTimeout(() => {
        this.pngUpload();
      }, 5000);

      setTimeout(() => {
        this.generateUrl();
      }, 15000);

      // this.resetAllCanvas();
    },
    exportPreviewPNG() {
      const objects = this.canvas.getObjects();

      objects.forEach((obj, index) => {
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          obj.strokeWidth = 0;
          this.canvas.renderAll();
        }

        if (obj && obj.type === "circle" && obj.name === "pattern") {
          // obj.strokeWidth = 0;

          // obj.fill= 'transparent';
          // obj.globalCompositeOperation = null;
          this.canvas.renderAll();
        }

        if (obj && obj.type === "image" && obj.name === "transparent") {
          // obj.globalCompositeOperation = "destination-out";
          // obj.visible= false;
          console.log(obj.name);
          this.canvas.renderAll();
        }

        if (obj && obj.type === "image" && obj.name === "background") {
          // obj.globalCompositeOperation = "source-atop";
          // obj.visible= false;

          this.canvas.renderAll();
        }

        if (obj && obj.type === "image" && obj.name === "text") {
          obj.globalCompositeOperation = "source-atop";
          console.log(obj.name);
        }

        if (obj && obj.type === "image" && obj.name === "canvas image") {
          obj.globalCompositeOperation = "source-atop";
          obj.visible = true;

          this.canvas.renderAll();
          console.log(obj.name);
        }
      });
      // this.scaleUp();
      setTimeout(() => {
        this.createPreviewLink();
      }, 1000);
    },

    exportPrintPNG() {
      const objects = this.canvas.getObjects();
      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "pattern") {
          obj.globalCompositeOperation = "source-atop";
          // obj.fill = 'transparent';
          // obj.left = 120;
          // obj.width = 210;
          // obj.center();
          obj.fill = "rgba(5, 5, 5, 0.1)";
          obj.strokeWidth = 0;

          this.canvas.renderAll();
        }
      });

      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "transparent" || obj.name === "background") {
          // Show the object named 'canvas image'
          // obj.globalCompositeOperation = "destination-in";
          obj.visible = false;
          this.canvas.renderAll();
        } else {
          return;
        }
      });
      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "canvas image") {
          console.log("type:" + this.selectedType);
          console.log("brand:" + this.selectedBrand);
          const createClipCircle = (width, height, top, left, radius) => {
            const clipCircle = new fabric.Circle({
              originX: "left",
              originY: "top",
              radius: radius, // Set the radius of the circle
              top: top,
              left: left,
              width: width,
              height: height,
              fill: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              name: "pattern",
              clipName: "pattern",
              opacity: 1,
              globalCompositeOperation: "destination-in",
              selectable: false,
              evented: false,

              strokeWidth: 2,
              cornerStyle: "round",
              strokeDashArray: [8, 16],
              stroke: "rgba(5, 5, 5, 1)",
              // stroke: "black",

              lockMovementX: true,
              lockMovementY: true,
            });

            clipCircle.center();
            this.canvas.add(clipCircle);
            this.canvas.backgroundImage = null;
            this.canvas.renderAll();
            this.canvas.clipPath = clipCircle;
            obj.globalCompositeOperation = null;
            this.canvas.renderAll();
          };

          const createClipRect = (width, height, rx, ry, top, left) => {
            const clipRect = new fabric.Rect({
              width: width,
              height: height,
              rx: rx,
              ry: ry,
              top: top,
              left: left,
              fill: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              name: "pattern",
              clipName: "pattern",
              opacity: 1,
              globalCompositeOperation: "destination-in",
              selectable: false,
              evented: false,
              strokeWidth: 2,
              cornerStyle: "round",
              strokeDashArray: [8, 16],
              stroke: "rgba(5, 5, 5, 1)",
              lockMovementX: true,
              lockMovementY: true,
            });
            clipRect.center();
            this.canvas.add(clipRect);
            this.canvas.backgroundImage = null;
            this.canvas.renderAll();
            this.canvas.clipPath = clipRect;
            obj.globalCompositeOperation = null;
            this.canvas.renderAll();
          };

          switch (true) {
            case this.selectedType == 2 && this.selectedBrand == 1:
              console.log("tablet Samsung");
              createClipRect(250, 395, 0, 0, 50, 100);
              break;
            case this.selectedType == 2 && this.selectedBrand == 2:
              console.log("tablet Apple");
              createClipRect(270, 360, 0, 0, 70, 90);
              break;
            case this.selectedType == 2 && this.selectedBrand == 3:
              console.log("tablet Huawei");
              createClipRect(250, 395, 0, 0, 50, 100);
              break;
            case (this.selectedType == 1 && this.selectedBrand == 1) ||
              this.selectedBrand == 2 ||
              this.selectedBrand == 3 ||
              this.selectedBrand == 4 ||
              this.selectedBrand == 7 ||
              this.selectedBrand == 8 ||
              this.selectedBrand == 12 ||
              this.selectedBrand == 13 ||
              this.selectedBrand == 18:
              console.log("phone");
              createClipRect(350, 660, 30, 30, 40, 180);

              break;
            case this.selectedType == 4 && this.selectedBrand == 14:
              console.log("Gadget Device");
              createClipRect(100, 100, 30, 30, 197, 175);
              break;

            case this.selectedType == 4 && this.selectedBrand == 15:
              console.log("Gadget Device Ring");
              createClipCircle(100, 100, 170, 175, 40);
              break;
            case this.selectedType == 4 && this.selectedBrand == 17:
              console.log("Gadget Device Charger");
              createClipCircle(150, 150, 173, 150, 102);
              break;

            case this.casesTypes[this.selectedCaseType].title === "Flip Case":
              console.log("phone Flip Case");
              createClipRect(195, 385, 0, 0, 55, 180);
              break;
          }
        } else {
          return;
        }
      });

      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "text") {
          // Show the object named 'canvas image'
          obj.globalCompositeOperation = null;
          this.canvas.renderAll();
          const createClipRect = (width, height, rx, ry, top, left) => {
            const clipRect = new fabric.Rect({
              originX: "left",
              originY: "top",
              width: width,
              height: height,
              rx: rx,
              ry: ry,
              top: top,
              left: left,
              fill: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              name: "pattern",
              clipName: "pattern",
              opacity: 1,
              globalCompositeOperation: "destination-in",
              selectable: false,
              evented: false,
              strokeWidth: 2,
              cornerStyle: "round",
              strokeDashArray: [8, 16],
              stroke: "rgba(5, 5, 5, 1)",
              lockMovementX: true,
              lockMovementY: true,
            });
            clipRect.center();
            this.canvas.add(clipRect);
            this.canvas.backgroundImage = null;
            this.canvas.renderAll();
            this.canvas.clipPath = clipRect;
            obj.globalCompositeOperation = null;
            this.canvas.renderAll();
          };

          switch (true) {
            case this.selectedType == 2 && this.selectedBrand == 1:
              console.log("tablet Samsung");
              createClipRect(250, 395, 0, 0, 50, 100);
              break;
            case this.selectedType == 2 && this.selectedBrand == 2:
              console.log("tablet Apple");
              createClipRect(270, 360, 0, 0, 70, 90);
              break;
            case this.selectedType == 2 && this.selectedBrand == 3:
              console.log("tablet Huawei");
              createClipRect(250, 395, 0, 0, 50, 100);
              break;
            case (this.selectedType == 1 && this.selectedBrand == 1) ||
              this.selectedBrand == 2 ||
              this.selectedBrand == 3 ||
              this.selectedBrand == 4 ||
              this.selectedBrand == 7 ||
              this.selectedBrand == 8 ||
              this.selectedBrand == 12 ||
              this.selectedBrand == 13 ||
              this.selectedBrand == 18:
              console.log("phone");
              createClipRect(2100, 2430, 20, 20, 30, 120);
              break;
            case this.selectedType == 4 && this.selectedBrand == 14:
              console.log("Gadget Device");
              createClipRect(150, 150, 0, 0, 173, 150);
              break;

            case this.casesTypes[this.selectedCaseType].title === "Flip Case":
              console.log("phone Flip Case");
              createClipRect(195, 385, 0, 0, 55, 180);
              break;
          }
        } else {
          return;
        }
      });

      // Update the canvas to reflect the changes

      this.canvas.renderAll();

      setTimeout(() => {
        this.createPrintLink();
      }, 1000);
    },
    exportPrintPNG1() {
      const objects = this.canvas.getObjects();
      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "pattern") {
          obj.visible = false;

          // obj.globalCompositeOperation = "source-atop";
          // obj.fill = 'transparent';
          // obj.left = 120;
          // obj.width = 210;
          // obj.center();
          // obj.fill = "rgba(5, 5, 5, 0.1)";
          // obj.strokeWidth = 0;

          this.canvas.renderAll();
        }
      });

      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "transparent" || obj.name === "background") {
          // Show the object named 'canvas image'
          // obj.globalCompositeOperation = "destination-in";
          obj.visible = false;
          this.canvas.renderAll();
        } else {
          return;
        }
      });
      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "canvas image") {
          console.log("type:" + this.selectedType);
          console.log("brand:" + this.selectedBrand);

          obj.globalCompositeOperation = null;
        }
      });

      this.canvas.getObjects().forEach((obj) => {
        if (obj.name === "text") {
          // Show the object named 'canvas image'
          obj.globalCompositeOperation = null;
          this.canvas.renderAll();
          const createClipRect = (width, height, rx, ry, top, left) => {
            const clipRect = new fabric.Rect({
              originX: "left",
              originY: "top",
              width: width,
              height: height,
              rx: rx,
              ry: ry,
              top: top,
              left: left,
              fill: "rgba(0, 0, 0, 1)",
              backgroundColor: "rgba(0, 0, 0, 0)",
              name: "pattern",
              clipName: "pattern",
              opacity: 1,
              globalCompositeOperation: "destination-in",
              selectable: false,
              evented: false,
              strokeWidth: 2,
              cornerStyle: "round",
              strokeDashArray: [8, 16],
              stroke: "rgba(5, 5, 5, 1)",
              lockMovementX: true,
              lockMovementY: true,
            });
            clipRect.center();
            this.canvas.add(clipRect);
            this.canvas.backgroundImage = null;
            this.canvas.renderAll();
            this.canvas.clipPath = clipRect;
            obj.globalCompositeOperation = null;
            this.canvas.renderAll();
          };

          switch (true) {
            case this.selectedType == 2 && this.selectedBrand == 1:
              console.log("tablet Samsung");
              createClipRect(250, 395, 0, 0, 50, 100);
              break;
            case this.selectedType == 2 && this.selectedBrand == 2:
              console.log("tablet Apple");
              createClipRect(270, 360, 0, 0, 70, 90);
              break;
            case this.selectedType == 2 && this.selectedBrand == 3:
              console.log("tablet Huawei");
              createClipRect(250, 395, 0, 0, 50, 100);
              break;
            case (this.selectedType == 1 && this.selectedBrand == 1) ||
              this.selectedBrand == 2 ||
              this.selectedBrand == 3 ||
              this.selectedBrand == 4 ||
              this.selectedBrand == 7 ||
              this.selectedBrand == 8 ||
              this.selectedBrand == 12 ||
              this.selectedBrand == 13 ||
              this.selectedBrand == 18:
              console.log("phone");
              createClipRect(2100, 2430, 20, 20, 30, 120);
              break;
            case this.selectedType == 4 && this.selectedBrand == 14:
              console.log("Gadget Device");
              createClipRect(150, 150, 0, 0, 173, 150);
              break;

            case this.casesTypes[this.selectedCaseType].title === "Flip Case":
              console.log("phone Flip Case");
              createClipRect(195, 385, 0, 0, 55, 180);
              break;
          }
        } else {
          return;
        }
      });

      // Update the canvas to reflect the changes

      this.canvas.renderAll();

      setTimeout(() => {
        this.createPrintLink();
      }, 1000);
    },
    scaleUp() {
      const scaleFactor = 4;
      const center = new fabric.Point(
        this.canvas.width / 2,
        this.canvas.height / 2
      );
      const offset = new fabric.Point(
        center.x * (scaleFactor - 1),
        center.y * (scaleFactor - 1)
      );
      this.canvas.set(
        {
          width: this.canvas.width * scaleFactor,

          height: this.canvas.height * scaleFactor,
        },
        { backstoreOnly: true }
      );
      console.log(this.canvas.width);
      this.canvas.getObjects().forEach((obj) => {
        // Scale all objects
        obj.scaleX *= scaleFactor;
        obj.scaleY *= scaleFactor;

        // If the object is a clip path, scale its path as well
        if (obj.clipPath) {
          obj.clipPath.scaleX *= scaleFactor;
          obj.clipPath.scaleY *= scaleFactor;
        }
        obj.left += offset.x;
        obj.top += offset.y;
        obj.setCoords(); // Update object's coordinates
      });

      this.canvas.renderAll(); // Render the updated canvas
    },
    bindObjectsToCanvasSize() {
      const canvasWidth = this.canvas.width;
      const canvasHeight = this.canvas.height;

      this.canvas.getObjects().forEach((obj) => {
        // Calculate new positions relative to the canvas size
        const leftRatio = obj.left / canvasWidth;
        const topRatio = obj.top / canvasHeight;

        // Update object's positions based on canvas size
        obj.left = leftRatio * this.canvas.width;
        obj.top = topRatio * this.canvas.height;

        obj.setCoords(); // Update object's coordinates
      });

      this.canvas.renderAll(); // Render the updated canvas
    },

    cropMask(caseType) {
      console.log(this.exportMaskClipImage);

      fabric.Image.fromURL(
        this.exportMaskClipImage,
        (img) => {
          // the scaleToHeight property is use to set the image height
          img.scaleToHeight(320);
          // scaleToWidth is use to set the image width
          img.scaleToWidth(320);

          img.visible = true;
          img.center();
          img.selectable = false;
          img.globalCompositeOperation = "source-atop";

          this.canvas.moveTo(img, 0);
          // this.canvas.add(img);

          img.center();
          this.canvas.renderAll();
          // this.canvas.renderAll();
        },
        { crossOrigin: "anonymous" }
      );
    },

    createPreviewLink() {
      // Export the canvas to a PNG image

      this.previewImage = this.canvas.toDataURL({
        format: "png",
        multiplier: 3,
        quality: 50,
      });

      // // Create a link element to download the PNG image
      // const link = document.createElement("a");
      // link.href = dataURL;
      // link.download = "preview_image.png";
      // // Trigger the download
      // link.click();
    },
    createPrintLink() {
      // Export the canvas to a PNG image

      this.printImage = this.canvas.toDataURL({
        format: "png",
        multiplier: 3,
        quality: 50,
      });

      // // Create a link element to download the PNG image
      // const link = document.createElement("a");
      // link.href = dataURL;
      // link.download = "print_image.png";
      // // Trigger the download
      // link.click();
    },

    undoMove() {
      this.canvas.undo();
      console.log(this.historyUndo);
      this.canvas.renderAll();
    },
    redoMove() {
      this.canvas.redo();
      console.log(this.historyUndo);
      this.canvas.renderAll();
    },
    flipXSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();

      if (selectedObject && selectedObject.type === "image") {
        selectedObject.flipX = !selectedObject.flipX;
        this.canvas.renderAll();
      }
    },
    shiftLayerUp(arr, index) {
      if (index > 0 && index < arr.length) {
        const temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
      }
      return arr;
    },

    shiftLayerDown(index) {
      console.log(this.uploadedLayers);
      if (
        this.uploadedLayers.length > 2 &&
        index >= 0 &&
        index < this.uploadedLayers.length - 1
      ) {
        const temp = this.uploadedLayers[index];
        this.uploadedLayers[index] = this.uploadedLayers[index + 1];
        this.uploadedLayers[index + 1] = temp;
      }
      console.log(this.uploadedLayers);
    },
    moveLeftSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      console.log(selectedObject.scaleX);
      console.log(this.canvas.maxScaleLimit);
      if (selectedObject && selectedObject.type === "image") {
        selectedObject.left = selectedObject.left - 10;
        this.canvas.renderAll();
      }
      if (selectedObject && selectedObject.type === "i-text") {
        selectedObject.left = selectedObject.left - 10;
        this.canvas.renderAll();
      }
    },
    moveRightSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      console.log(selectedObject.scaleX);
      console.log(this.canvas.maxScaleLimit);
      if (selectedObject && selectedObject.type === "image") {
        selectedObject.left = selectedObject.left + 10;
        this.canvas.renderAll();
      }
      if (selectedObject && selectedObject.type === "i-text") {
        selectedObject.left = selectedObject.left + 10;
        this.canvas.renderAll();
      }
    },
    moveUpSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      console.log(selectedObject.scaleX);
      console.log(this.canvas.maxScaleLimit);
      if (selectedObject && selectedObject.type === "image") {
        selectedObject.top = selectedObject.top - 10;
        this.canvas.renderAll();
      }
      if (selectedObject && selectedObject.type === "i-text") {
        selectedObject.top = selectedObject.top - 10;
        this.canvas.renderAll();
      }
    },

    moveDownSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      console.log(selectedObject.scaleX);
      console.log(this.canvas.maxScaleLimit);
      if (selectedObject && selectedObject.type === "image") {
        selectedObject.top = selectedObject.top + 10;
        this.canvas.renderAll();
      }
      if (selectedObject && selectedObject.type === "i-text") {
        selectedObject.top = selectedObject.top + 10;
        this.canvas.renderAll();
      }
    },

    rotateRightBy15() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();

      if (selectedObject && selectedObject.type === "image") {
        if (selectedObject.name === "canvas image") {
          // Update the object's absolute angle
          selectedObject.angle = selectedObject.angle + 15;
          this.canvas.renderAll();
        } else {
          // ...
        }
      }
    },
    rotateLeftBy15() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();

      if (selectedObject && selectedObject.type === "image") {
        if (selectedObject.name === "canvas image") {
          // Update the object's absolute angle
          selectedObject.angle = selectedObject.angle - 15;
          this.canvas.renderAll();
        } else {
          // ...
        }
      }
    },

    zoomInSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      console.log(selectedObject.scaleX);
      console.log(this.canvas.maxScaleLimit);
      if (selectedObject && selectedObject.type === "image") {
        if (selectedObject.scaleX <= 0.8) {
          selectedObject.scaleX *= 1.1;
          selectedObject.scaleY *= 1.1;
          selectedObject.setCoords();
          this.canvas.renderAll();
        } else {
          selectedObject.scaleX *= 1.0;
          selectedObject.scaleY *= 1.0;
          this.canvas.renderAll();
        }
      }
      if (selectedObject && selectedObject.type === "i-text") {
        console.log(selectedObject.scaleX);
        console.log(this.canvas.maxScaleLimit);
        if (selectedObject.scaleX <= 3) {
          selectedObject.scaleX *= 1.1;
          selectedObject.scaleY *= 1.1;
          selectedObject.setCoords();
          this.canvas.renderAll();
        } else {
          selectedObject.scaleX *= 1.0;
          selectedObject.scaleY *= 1.0;
          this.canvas.renderAll();
        }
      }
    },
    zoomOutSelectedImage() {
      // Get the selected object
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject && selectedObject.type === "image") {
        if (selectedObject.scaleX >= 0.1) {
          selectedObject.scaleX *= 0.9;
          selectedObject.scaleY *= 0.9;
          this.canvas.renderAll();
        } else {
          selectedObject.scaleX *= 1.0;
          selectedObject.scaleY *= 1.0;
          this.canvas.renderAll();
        }
      }
      if (selectedObject && selectedObject.type === "i-text") {
        if (selectedObject.scaleX >= 1) {
          selectedObject.scaleX *= 0.9;
          selectedObject.scaleY *= 0.9;
          this.canvas.renderAll();
        } else {
          selectedObject.scaleX *= 1.0;
          selectedObject.scaleY *= 1.0;
          this.canvas.renderAll();
        }
      }
    },

    render(ctx, left, top, styleOverride, fabricObject) {
      fabric.Image.fromURL("../images/add-square.svg", (img) => {
        img.scaleToWidth(48);
        img.scaleToHeight(48);
        ctx.drawImage(img._element, left - 16, top - 16, 48, 48);
      });
    },

    bringForward() {
      this.getObjectsFromCanvas();

      // Bring the selected object forward in the stack order

      const selectedObject = this.canvas.getActiveObject();
      // console.log(selectedObject);

      if (selectedObject) {
        const currentIndex = this.canvas.getObjects().indexOf(selectedObject);
        console.log(`currentIndex: ${currentIndex}`);
        console.table(this.canvas.getObjects());
        if (currentIndex < this.canvas.getObjects().length - 2) {
          const selectedObjectId = selectedObject.id;
          const uploadedLayersIndex = this.uploadedLayers.findIndex(
            (layer) => layer.id === selectedObjectId
          );

          console.table(this.uploadedLayers);

          this.canvas.bringForward(selectedObject);
          this.canvas.renderAll();
          console.log("-----Uploaded Layers------");
          console.table(this.uploadedLayers);
          let objectsToLayers = this.getObjectsFromCanvas();
          this.uploadedLayers = objectsToLayers.map((object) => {
            return {
              id: object.id,
              url: object._originalElement?.currentSrc,
              text: object.text,
              position: this.canvas.getObjects().indexOf(object),
            };
          });
        }
      }
    },
    getObjectsFromCanvas() {
      const objects = this.canvas
        .getObjects()
        .filter((obj) => obj.name === "canvas image" || obj.name === "text");
      console.table(objects);
      return objects;
    },
    sendBackwards() {
      // Send the selected object backward in the stack order
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject) {
        const currentIndex = this.canvas.getObjects().indexOf(selectedObject);
        console.log(currentIndex);
        this.activeLayerIndex = currentIndex;
        if (currentIndex > 2) {
          const selectedObjectId = selectedObject.id;
          const uploadedLayersIndex = this.uploadedLayers.findIndex(
            (layer) => layer.id === selectedObjectId
          );
          if (uploadedLayersIndex !== -1) {
            this.uploadedLayers[uploadedLayersIndex].position = currentIndex;
          }
          console.table(this.uploadedLayers);
          this.canvas.sendBackwards(selectedObject);
          this.canvas.renderAll();
          let objectsToLayers = this.getObjectsFromCanvas();
          this.uploadedLayers = objectsToLayers.map((object) => {
            return {
              id: object.id,
              url: object._originalElement?.currentSrc,
              text: object.text,
              position: this.canvas.getObjects().indexOf(object),
            };
          });
        }
      }
    },

    deleteSelectedImage() {
      // Delete the selected image from the canvas
      const selectedObject = this.canvas.getActiveObject();
      if (selectedObject) {
        // var index = this.canvas.getObjects().indexOf(selectedObject);
        console.log(selectedObject.type);
        // this.uploadedImages.splice(index - 2, 1);
        // this.canvas.moveTo(selectedObject, 2);
        this.canvas.remove(selectedObject);
        this.canvas.renderAll();
        let objectsToLayers = this.getObjectsFromCanvas();
        this.uploadedLayers = objectsToLayers.map((object) => {
          return {
            id: object.id,
            text: object.text,
            url: object._originalElement?.currentSrc,
            position: this.canvas.getObjects().indexOf(object),
          };
        });

        // console.log(this.uploadedImages);
        // this.imageIndex = this.imageIndex - 1;
        // if (this.uploadedImages.length === 0) {
        //   this.imageIndex = 1;
        // }
      }
      if (selectedObject && selectedObject.type === "i-text") {
        this.canvas.remove(selectedObject);
        this.canvas.renderAll();
        this.checkEmptyCanvas();
      }
      this.deactivateActivePatterns();
      this.canvas.renderAll();
      this.checkEmptyCanvas();
    },

    clearCanvas() {
      // Clear all objects from the canvas
      const objects = this.canvas.getObjects();

      objects.forEach((obj, index) => {
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
          // this.canvas.setActiveObject(obj);
          // this.canvas.bringToFront(obj);
          // this.canvas.moveTo(obj,10);
          // obj.clipPath = null;
          console.log(obj.name);
        }

        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
          // this.canvas.setActiveObject(obj);
          // this.canvas.bringToFront(obj);
          // this.canvas.moveTo(obj,10);
          // obj.clipPath = null;
          console.log(obj.name);
        }
        //clear layers array
        this.uploadedLayers = [];
        this.activeLayerIndex = null;
      });

      // objects.forEach((obj, index) => {
      //   if (obj && obj.type === "image" && obj.name === "back") {
      //     this.canvas.remove(obj);
      //     this.canvas.renderAll();
      //   }
      // });

      // objects.forEach((obj, index) => {
      //   if (obj && obj.type === "image" && obj.name === "transparent") {
      //     this.canvas.remove(obj);
      //     this.canvas.renderAll();
      //   }
      // });

      objects.forEach((obj, index) => {
        this.canvas.renderAll();
        console.log(
          `Item ${index}: ${obj.type} name: ${obj.name} id: ${obj.id}`
        );
      });
    },
    clearAllCanvas() {
      // Clear all objects from the canvas
      const objects = this.canvas.getObjects();

      objects.forEach((obj, index) => {
        if (obj && obj.type === "image" && obj.name === "canvas image") {
          this.canvas.remove(obj);
          // this.canvas.setActiveObject(obj);
          // this.canvas.bringToFront(obj);
          // this.canvas.moveTo(obj,10);
          // obj.clipPath = null;
          console.log(obj.name);
        }

        if (obj && obj.type === "i-text" && obj.name === "text") {
          this.canvas.remove(obj);
          // this.canvas.setActiveObject(obj);
          // this.canvas.bringToFront(obj);
          // this.canvas.moveTo(obj,10);
          // obj.clipPath = null;
          console.log(obj.name);
        }

        if (obj && obj.type === "circle" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
        if (obj && obj.type === "rect" && obj.name === "pattern") {
          this.canvas.remove(obj);
        }
      });

      // objects.forEach((obj, index) => {
      //   if (obj && obj.type === "image" && obj.name === "back") {
      //     this.canvas.remove(obj);
      //     this.canvas.renderAll();
      //   }
      // });

      // objects.forEach((obj, index) => {
      //   if (obj && obj.type === "image" && obj.name === "transparent") {
      //     this.canvas.remove(obj);
      //     this.canvas.renderAll();
      //   }
      // });

      objects.forEach((obj, index) => {
        this.canvas.renderAll();
        console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
      });
    },

    resetAllCanvas() {
      setTimeout(() => {
        // Clear all objects from the canvas
        const objects = this.canvas.getObjects();

        objects.forEach((obj, index) => {
          if (obj && obj.type === "image" && obj.name === "canvas image") {
            this.canvas.remove(obj);

            console.log(obj.name);
          }

          if (obj && obj.type === "image" && obj.name === "background") {
            this.canvas.remove(obj);

            console.log(obj.name);
          }
          if (obj && obj.type === "image" && obj.name === "transparent") {
            this.canvas.remove(obj);

            console.log(obj.name);
          }

          if (obj && obj.type === "text" && obj.name === "text") {
            this.canvas.remove(obj);

            console.log(obj.name);
          }

          if (obj && obj.type === "circle" && obj.name === "pattern") {
            this.canvas.remove(obj);
          }
          if (obj && obj.type === "rect" && obj.name === "pattern") {
            this.canvas.remove(obj);
          }
          this.canvas.renderAll();
        });

        // objects.forEach((obj, index) => {
        //   if (obj && obj.type === "image" && obj.name === "back") {
        //     this.canvas.remove(obj);
        //     this.canvas.renderAll();
        //   }
        // });

        // objects.forEach((obj, index) => {
        //   if (obj && obj.type === "image" && obj.name === "transparent") {
        //     this.canvas.remove(obj);
        //     this.canvas.renderAll();
        //   }
        // });

        objects.forEach((obj, index) => {
          this.canvas.renderAll();
          console.log(`Item ${index}: ${obj.type} name: ${obj.name}`);
        });
        // this.addEmptyPhone();
      }, 5000);
    },

    addEmptyPhone() {
      setTimeout(() => {
        // Empty shape device
        const clipRect = new fabric.Rect({
          width: 230,
          height: 460,

          rx: 20,
          ry: 20,
          top: -20,
          left: 0,
          name: "pattern",
          opacity: 1,
          globalCompositeOperation: null,
          selectable: false,
          fill: "rgba(5, 255, 255, 0.01)",
          strokeWidth: 2,
          cornerStyle: "round",
          strokeDashArray: [8, 16],
          stroke: "rgba(5, 5, 5, 1)",
          lockMovementX: true, // Object cannot be moved horizontally
          lockMovementY: true, // Object cannot be moved vertically
        });

        this.canvas.add(clipRect);
        clipRect.visible = true;
        clipRect.center();
        // this.canvas.clipPath = clipRect;
        this.canvas.moveTo(clipRect, 0);

        clipRect.animate("opacity", 1, {
          duration: 1000,
          onChange: this.canvas.renderAll.bind(this.canvas),
        });
      }, 1000);
    },
  },
  created() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://image-backend-lqbq.onrender.com/images"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error");
      });
    this.fetchTranslationsData();
    this.findLanguageAndDictionary();
    console.log(this.dictionary);
    this.filteredItems = this.filterItemsByCategory(collection.items, "c");
    console.log("Filtered Items:", this.filteredItems);
  },
  mounted() {
    this.windowWidth = window.innerWidth; // Update windowWidth when the window is resized

    const newDivId =
      this.windowWidth <= 760 ? this.$refs.canvasRef : this.$refs.canvasRef;
    this.mobileMode = this.windowWidth <= 760 ? true : false;
    if (this.mobileMode === true) {
      this.activeTabIndex = null;
    } else {
      this.activeTabIndex = 1;
    }
    console.log(this.mobileMode);
    this.initCanvas(newDivId);

    //window.addEventListener("resize", this.toggleShowDialog);

    // if (this.windowWidth <= 600) {
    //   this.canvas = new fabric.Canvas(
    //     newDivId,
    //     {
    //       width: 450,
    //       height: 500,
    //       // minScaleLimit: 0.1,
    //       // maxScaleLimit: 0.3,
    //       // backgroundColor: "gray",
    //       getContext: "2d",
    //       // cornerStyle: "round",
    //       // objectCaching: true,
    //       willReadFrequently: true,
    //       renderOnAddRemove: false,
    //       backgroundColor: "red",
    //       // isDrawingMode: false,
    //       // controlsAboveOverlay: true,
    //       preserveObjectStacking: true,
    //       selectable: false,
    //       selection: false,
    //     },
    //     { passive: true }
    //   );
    // } else {
    //   this.canvas = new fabric.Canvas(
    //     this.$refs.canvasRef,
    //     {
    //       width: 450,
    //       height: 500,
    //       // minScaleLimit: 0.1,
    //       // maxScaleLimit: 0.3,
    //       // backgroundColor: "gray",
    //       getContext: "2d",
    //       // cornerStyle: "round",
    //       // objectCaching: true,
    //       willReadFrequently: true,
    //       renderOnAddRemove: false,
    //       // isDrawingMode: false,
    //       // controlsAboveOverlay: true,
    //       preserveObjectStacking: true,
    //       selectable: false,
    //       selection: false,
    //     },
    //     { passive: true }
    //   );
    // }

    const rotateSquareImage = new Image();
    rotateSquareImage.src = "../images/rotate-left.svg";
    const scaleSquareImage = new Image();
    scaleSquareImage.src = "../images/arrow-scale-square.svg";
    const closeSquareImage = new Image();
    closeSquareImage.src = "../images/close-square-black.svg";
    const zoomInImage = new Image();
    zoomInImage.src = "../images/zoom-in.svg";
    const addSquareImage = new Image();
    addSquareImage.src = "../images/add-square.svg";
    const moveSquareImage = new Image();
    moveSquareImage.src = "../images/command-square.svg";

    this.canvas.on(
      "object:added",
      () => {
        //workaround - selecting all objects to enable object controls

        let objects = this.canvas.getObjects();
        var selection = new fabric.ActiveSelection(objects, {
          canvas: this.canvas,
        });
        this.checkEmptyCanvas();
        this.canvas.discardActiveObject();
        this.canvas.setActiveObject(selection); //selecting all objects...
        this.canvas.discardActiveObject(); //...and deselecting them
      },
      { passive: true }
    );

    this.canvas.on("selection:cleared", (obj) => {
      if (
        obj.deselected &&
        obj.deselected[0] &&
        obj.deselected[0].id 
        
      ) {
        const patternObjects = this.canvas
          .getObjects()
          .filter((obj) => obj.name === "pattern");
        patternObjects.forEach((patternObject) => {
          if (patternObject) {
            patternObject.selectable = false;
            patternObject.evented = false;
            this.canvas.renderAll();
          }
        });
        console.log("Pattern deselected");
        console.log(obj.deselected[0]);
        console.log(obj.deselected[0].id);
        this.setActiveObjectById(obj.deselected[0].id);
      } 
      
    });
    // show add button on patterns on hover if canvas is empty
    this.canvas.on("mouse:over", (options) => {
      //console.log(options.target);
      var activeObject = options.target;
      if (
        this.emptyCanvas === false &&
        activeObject?.type === "rect" &&
        activeObject?.name === "pattern"
      ) {
        this.canvas.setActiveObject(activeObject);
        this.canvas.renderAll();
      }
    });

    this.canvas.on("before:selection:cleared", (object) => {
      console.log('Deselected object', object.target )
      const activeObject = this.canvas.getActiveObject();
      if (activeObject?.id === object.target.id) {
            this.canvas.setActiveObject(activeObject);
            console.log("++++++++++++++");
          };
    });

    this.canvas.on(
      "selection:updated",
      (obj) => {
        var selectedObj = obj.target;
        if (
          obj.selected[0] &&
          obj.selected[0].name === "canvas image" &&
          this.mobileMode === false
        ) {
          console.log("The selected object is a canvas image");
          console.log(obj.selected[0].id);
          console.log(obj.selected[0].clipPath);
          let object = this.canvas.getActiveObject();

          this.canvas.setActiveObject(object);

          this.setActiveTabIndex(3);
          this.setActiveTabImages(1);
        } else {
        }
        if (
          obj.selected[0] &&
          obj.selected[0].name === "text" &&
          this.mobileMode === false
        ) {
          console.log("The selected object is a canvas image");
          this.inputText = obj.selected[0].text;
          console.log(obj.selected[0].id);
          this.setActiveTabIndex(4);
          this.setActiveTabText(1);
        }
      },
      { passive: true }
    );

    this.canvas.on(
      "object:moved",
      (object) => {
        object.target.selectable = true;
        object.target.hasControls = true;
        object.target.objectCaching = true;
        object.target.perPixelTargetFind = false;
        this.canvas.preserveObjectStacking = true;

        object.target.setControlsVisibility({
          bl: true,
          br: false,
          tl: false,
          tr: false,
          mb: false,
          ml: false,
          mr: false,
          mt: false,
          mtr: true,
          customControl: false,
          customControl2: false,
          customControl3: true,
        });
        this.canvas.sendToBack(object.target);
        this.canvas.moveTo(object.target, 8);
        this.canvas.renderAll();
        const objects = this.canvas.getObjects();
        objects.forEach((obj, index) => {
          if (obj && obj.type === "text" && obj.name === "text") {
            // this.canvas.remove(obj);
            this.canvas.bringToFront(obj);
          }
        });
        objects.forEach((obj, index) => {
          if (obj && obj.type === "image" && obj.name === "transparent") {
            this.canvas.remove(obj);
            this.canvas.bringToFront(obj);
          }
        });

        objects.forEach((obj, index) => {
          console.log(
            `Item ${index}: ${obj.type} name: ${obj.name} id: ${obj.id}`
          );
        });
      },
      { passive: true }
    );

    // const activeObject = this.canvas.getActiveObject();

    // // Check if an active object exists
    // if (activeObject) {
    //   // Enable dragging for the active object
    //   activeObject.selectable = true;
    //   // this.canvas.renderAll();
    // }
    // Empty shape device

    // const flipRect = new fabric.Rect({

    //   width: 270,
    //   height: 360,

    //   top: 70,
    //   left: 90,
    //   name: "flip",
    //   opacity: 0.5,
    //   // globalCompositeOperation: "destination-out",
    //   selectable: false,
    //   evented: false,
    //   fill: "rgba(5, 255, 5, 1)",
    //   strokeWidth: 2,
    //   cornerStyle: "round",
    //   strokeDashArray: [8, 16],
    //   stroke: "rgba(5, 5, 5, 1)",
    //   lockMovementX: true, // Object cannot be moved horizontally
    //   lockMovementY: true, // Object cannot be moved vertically
    // });
    // this.canvas.add(flipRect);
    // flipRect.visible = true;
    // // flipRect.center();
    // // this.canvas.clipPath = clipRect;
    // this.canvas.moveTo(flipRect, 1);

    // this.canvas.renderAll();

    this.canvas.controlsAboveOverlay = false;

    // Create a custom control as an icon
    const customControl = new fabric.Control({
      x: 0,
      y: 0,
      offsetY: 0,
      offsetX: 0,
      visible: true,
      cursorStyle: "pointer",
      // actionHandler: fabric.controlsUtils.rotationWithSnapping,
      // actionName: "rotate",

      mouseDownHandler: () => this.setActiveTabIndex(3),

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(addSquareImage, left - 24, top - 24, 48, 48);
      },
    });

    // Create a custom control as an icon
    const customControl2 = new fabric.Control({
      x: 0,
      y: 0,
      offsetY: 0,
      offsetX: 0,

      cursorStyle: "pointer",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",
      // mouseUpHandler: this.zoomInSelectedImage,

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(zoomInImage, left - 48, top - 48, 48, 48);
      },
    });

    const customControl3 = new fabric.Control({
      x: -0.5,
      y: -0.5,
      offsetY: 0,
      offsetX: 0,
      sizeX: 48,
      sizeY: 48,
      cursorStyle: "pointer",
      selectable: true,

      mouseDownHandler: this.deleteSelectedImage,

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(closeSquareImage, left - 24, top - 24, 48, 48);
      },
    });
    const customControl4 = new fabric.Control({
      x: 0.5,
      y: 0.5,
      offsetY: 0,
      offsetX: 0,
      cursorStyle: "pointer",
      mouseDownHandler: this.activateDrag,

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(addSquareImage, left - 24, top - 24, 48, 48);
      },
    });

    const customControl5 = new fabric.Control({
      x: 0.5,
      y: 0.5,
      offsetY: 0,
      offsetX: 0,
      sizeX: 24,
      sizeY: 24,
      cursorStyle: "move",
      mouseDownHandler: (eventData, transform, x, y) => {
        const canvas = this.canvas;
        const selectedObject = canvas.getActiveObject();

        if (selectedObject) {
          canvas.isDragging = false;

          canvas.renderAll();

          let prevPointerX, prevPointerY;

          const mouseMoveHandler = (eventData) => {
            const pointer = canvas.getPointer(eventData);
            const objectLeft = selectedObject.left;
            const objectTop = selectedObject.top;

            if (prevPointerX && prevPointerY) {
              const relativeX = pointer.x - prevPointerX;
              const relativeY = pointer.y - prevPointerY;
              selectedObject.set({
                left: objectLeft + relativeX,
                top: objectTop + relativeY,
              });
            }

            prevPointerX = pointer.x;
            prevPointerY = pointer.y;

            canvas.renderAll();
          };

          const mouseUpHandler = () => {
            canvas.isDragging = false;
            canvas.selectable = false;
            canvas.renderAll();
            canvas.off("mouse:move", mouseMoveHandler);
            canvas.off("mouse:up", mouseUpHandler);
          };

          canvas.on("mouse:move", mouseMoveHandler);
          canvas.on("mouse:up", mouseUpHandler);
        }
      },

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(moveSquareImage, left - 24, top - 24, 48, 48);
      },
    });

    fabric.Object.prototype.controls.customControl = customControl;
    fabric.Object.prototype.controls.customControl2 = customControl2;
    fabric.Object.prototype.controls.customControl3 = customControl3;
    fabric.Object.prototype.controls.customControl4 = customControl4;
    fabric.Object.prototype.controls.customControl5 = customControl5;
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "rgb(0, 162, 250)";
    fabric.Object.prototype.borderColor = "rgb(0, 162, 250)";
    fabric.Object.prototype.cornerStyle = "circle";
    fabric.Object.prototype.cornerSize = 16;
    fabric.Object.prototype.strokeWidth = 2;
    fabric.Object.prototype.centeredScaling = true;
    // fabric.Object.prototype.evented = true;
    fabric.Object.prototype.centeredRotation = true;
    fabric.Object.prototype.perPixelTargetFind = true;
    fabric.Object.prototype.objectCaching = true;
    // fabric.Object.prototype.matrixCache = true;
    fabric.Object.prototype.controls.mtr = new fabric.Control({
      x: 0.5,
      y: -0.5,
      offsetY: 0,
      offsetX: 0,

      cursorStyle: "pointer",
      actionHandler: fabric.controlsUtils.rotationWithSnapping,
      actionName: "rotate",

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(rotateSquareImage, left - 24, top - 24, 48, 48);
      },
    });
    fabric.Object.prototype.controls.bl = new fabric.Control({
      x: -0.5,
      y: 0.5,
      offsetY: 0,
      offsetX: 0,
      cursorStyle: "pointer",
      actionHandler: fabric.controlsUtils.scalingEqually,
      actionName: "scale",

      render: function (ctx, left, top, styleOverride, fabricObject) {
        ctx.drawImage(scaleSquareImage, left - 24, top - 24, 48, 48);
      },
    });
  },
};

// TO DO //
//++++Enable next button if item is low and add other text
//++++ Dialog box for too small image and not image file
// History functionality

//++++Flip functionality
// +++++Set print image size to 2000x2000
// Change UI color
// ++++Fix Collection functionality
// +++++ Better mobile view (another box for mobile double canvas)
// ++++Image cutting
// ++++clear canvas text ?
// ++++zoom text command ?
// +++translate ?
// +++image add to cavnvas scale to width
// image loader spinner
// +++ alert if canvas is empty
// +++ first step alert box message
// +++ reset canvas on new device selection remove text from canvas
// +++ikone fill
// +++objekat deselection
// +++rotatior
// +++zoom objekta na canvas mora da bude veci
// +++kada postoji aktivan canvas image objekat iskljuciti komande na svim pattern objektima
// na mobilnoj verziji vrati zoom
// text ima samo jednu vrstu clipPatha
// ++++clip path custom command visibility
// icons color
// +++alert boxes redesign
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  opacity: 1;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(600px);
  opacity: 0;
}

.box-fade-enter-active {
  transition: all 0.5s ease-out;
  opacity: 0;
}

.box-fade-leave-active {
  transition: all 0.5s ease-out;
  opacity: 1;
}

.box-fade-enter-from,
.box-fade-leave-to {
  opacity: 0;
}

.activeTab {
  @apply bg-gray-100;
  @apply text-gray-600;
  @apply shadow-inner;
}
.activeTabImages {
  @apply bg-gray-50;
  @apply text-gray-600;
  @apply shadow-inner;
}
.activeTabText {
  @apply bg-gray-50;
  @apply text-gray-600;
  @apply shadow-inner;
}
.font-caveat {
  font-family: "Caveat", sans-serif;
  /* Add other font styles here */
}
.font-roboto {
  font-family: "Roboto", sans-serif;
  /* Add other font styles here */
}
.font-montserrat {
  font-family: "Montserrat", sans-serif;
}
.font-nova-mono {
  font-family: "Nova Mono", sans-serif;
}
.font-dancing-script {
  font-family: "Dancing Script", sans-serif;
}
.font-pacifico {
  font-family: "Pacifico", sans-serif;
}
.font-lobster {
  font-family: "Lobster", sans-serif;
}
.font-bangers {
  font-family: "Bangers", sans-serif;
}
.font-indie-flower {
  font-family: "Indie Flower", sans-serif;
}
</style>
