<template>
  <div :class="{'dark': styleModeActive === 'moon'}">
    <section class="text-text-light bg-background-light dark:text-text-dark dark:bg-background-dark">
      <!-- home -->
      <section class="h-screen relative z-20 grid grid-cols-2">
        <div class="col-span-2 lg:col-span-1">
          <img
            class="w-full h-screen object-cover object-center"
            src="@/assets/imgs/me-2.jpg"
            alt=""
          >
        </div>
        <div
          class="
    col-span-1 flex flex-col items-start justify-center p-2 md:px-8
    absolute lg:relative w-full h-full lg:h-auto left-0 top-0
    bg-gray-light-300/80 lg:bg-gray-light-300 dark:bg-gray-dark-300/60 dark:lg:bg-gray-dark-300
     "
        >
          <h1 class="text-3xl leading-xl text-primary-light dark:text-primary-dark mb-3">
            <span class="text-5xl leading-lg">Hello! <br>I'm Rita Kuo,</span><br> a frontend engineer.
          </h1>
        </div>
      </section>

      <!-- navbar -->
      <!-- <nav class="sticky top-0 z-20 drop-shadow">
        <div class="bg-gray-light-300 dark:bg-gray-dark-300 flex justify-end px-3 py-1.5">
          <a
            class="ease-linear duration-300 hover:text-primary-light dark:hover:text-primary-dark ml-3"
            href="#"
          >About</a>
          <a
            class="ease-linear duration-300 hover:text-primary-light dark:hover:text-primary-dark ml-3"
            href="#works"
          >Works</a>
          <a
            class="ease-linear duration-300 hover:text-primary-light dark:hover:text-primary-dark ml-3"
            href="#"
          >Why Rita</a>
        </div>
      </nav> -->

      <!-- works -->
      <section
        id="works"
        class="container min-h-screen py-6"
      >
        <h2 class="text-2xl text-primary-light dark:text-text-dark mb-3">
          Works I had participated in...
        </h2>
        <section
          v-for="(work, index) in worksList"
          :key="index"
          class="group js-show-on-scroll"
          :class="$style.card"
        >
          <div :class="[$style.imageWrap, $style[work.imgType]]">
            <img
              v-for="(img, imgIndex) in work.imgs"
              :key="imgIndex"
              :class="$style.img"
              :src="require(`@/assets/imgs/works/${img}`)"
              alt=""
            >
          </div>
          <div
            class="flex flex-col items-start justify-center"
            :class="[work.imgType === 'horizontal' ? 'py-10' : 'py-18']"
          >
            <div class="flex items-center flex-wrap mb-2">
              <span
                v-for="(tag, tagIndex) in work.tags"
                :key="tagIndex"
                :class="$style.tag"
              >{{ tag }}</span>
            </div>
            <h6 class="text-2xl dark:text-primary-dark whitespace-pre-line md:whitespace-normal mb-3">
              {{ work.title }}
            </h6>
            <p
              class="leading-lg whitespace-pre-line"
              :class="{'mb-5': work.link}"
            >
              {{ work.description }}
            </p>
            <a
              v-if="work.link"
              :class="$style.link"
              :href="work.link"
              target="_blank"
            >
              <AppIcon
                name="link"
                :class="$style.iconLink"
              />
              檢視網站
            </a>
          </div>
        </section>
      </section>

      <!-- skills -->
      <section
        id="skills"
        class="bg-gray-light-300 dark:bg-gray-dark-300 py-8 mb-10"
      >
        <div class="container">
          <h2 class="text-center text-2xl text-primary-light dark:text-text-dark mb-4">
            Skills
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 js-show-on-scroll">
            <div
              v-for="(skill, index) in skillsList"
              :key="index"
              class="bg-background-light dark:bg-background-dark transition flex flex-col items-center shadow hover:shadow-xl p-3"
            >
              <AppIcon
                :name="skill.icon"
                class="w-10 h-10 mb-2"
              />
              <h6 class="text-2xl mb-3">
                {{ skill.title }}
              </h6>
              <p class="leading-lg whitespace-pre-line">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- contact -->
      <section
        id="contact"
        class="bg-gray-light-300 dark:bg-background-dark py-8"
      >
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="rounded-xl overflow-hidden transform transition hover:-translate-y-1.5">
              <img
                class="w-full h-full object-cover object-center"
                src="@/assets/imgs/me-2.jpg"
                alt=""
              >
            </div>
            <div class="flex flex-col items-start justify-center p-3">
              <h2 class="text-4xl leading-lg text-primary-light dark:text-primary-dark mb-4">
                <span>Hey!</span> 我是 Rita.
              </h2>
              <p class="text-lg mb-4">
                我喜歡建構網站，喜歡將設計轉變為網頁的過程。<br>
                想創造出讓人耳目一新的網頁，<br>想完成讓使用者順從直覺瀏覽的網站，<br>想成為網頁的魔法師。
              </p>
              <div>
                <a
                  href="mailto:rita860620@gmail.com"
                  class="flex items-center"
                  :class="$style.link"
                >
                  <AppIcon
                    name="mail"
                    class="w-2.5 h-2.5 mr-0.5"
                  />rita860620@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-gray-light-600 dark:bg-gray-dark-300 text-right text-xs py-1">
        <div class="container">
          Copyright © 2022 Rita. All rights reserved.
        </div>
      </footer>

      <!-- style mode -->
      <div class="fixed left-2 bottom-2">
        <div
          class="flex flex-col items-center justify-center bg-secondary-light dark:bg-secondary-dark rounded-full p-1.5
         ease-in duration-300 opacity-50 hover:opacity-100"
        >
          <AppIcon
            v-for="(mode, index) in styleModeList"
            :key="mode"
            :name="mode"
            class="w-3 h-3 cursor-pointer transition hover:transform hover:rotate-45"
            :class="[{'mb-2': index!==styleModeList.length-1},
                     [styleModeActive === mode ? 'text-white' : 'text-dark/50']]"
            @click="setStyleModeActive(mode)"
          />
        </div>
      </div>

      <!-- back to top -->
      <div class="fixed right-2 bottom-2">
        <div class="flex flex-col items-center justify-center bg-secondary-light dark:bg-secondary-dark rounded-full p-1.5">
          <AppIcon
            name="chevron-top "
            class="w-3 h-3 text-white cursor-pointer transition hover:-translate-y-0.5"
            @click="backToTop"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'VersionView01',
  setup () {
    const styleModeList = ref(['sun', 'moon'])
    const styleModeActive = ref('sun')
    const setStyleModeActive = (mode) => {
      styleModeActive.value = mode
    }

    const worksList = ref([
      {
        imgType: 'horizontal',
        imgs: ['contentManagement01.png', 'contentManagement02.png'],
        title: '《OmniEC內容管理平台》網站開發',
        description: `網站管理者可藉由此平台創造獨特的網站風格，平台內可以管理首頁元件、編輯元件內容、抽換圖片，以及編輯網站色系、字級大小，並可以選擇發布的網站版本與版本回溯。
        透過 Git Submodule 共用模組，可達到在平台編輯發布後，消費者在網站前台能即時瀏覽最新的網站樣貌。`,
        tags: ['前端獨立開發', 'Vue.js 3']
      },
      {
        imgType: 'vertical',
        imgs: ['buyitall01.png', 'buyitall02.png'],
        title: '《OmniEC商城》網站開發',
        description: '開發完整專案，包含商品列表、購物車、會員資訊、訂單列表、結帳等功能。\n與後端溝通後，共同串接金流。',
        link: 'https://buyitall.omniec.com.tw',
        tags: ['前端獨立開發', 'Vue.js 3', '金流串接']
      },
      {
        imgType: 'horizontal',
        imgs: [
          'admin01.png',
          'admin02.png'
        ],
        title: '《OmniEC商城》\n前後端分離工程',
        description: '拆分 Java Spring Boot 框架與 Vue.js 合併的系統，分離成前台與後台兩獨立專案，資料改以 API 與後端溝通。\n建立自動化部屬流程，透過 Bitbucket 只要分支有更新將自動打包部屬至 AWS S3。',
        tags: ['前端獨立開發', 'Vue.js 3', '自動化部屬']
      },
      {
        imgType: 'vertical',
        imgs: ['coolmama01.png', 'coolmama02.png'],
        title: '《Coolmama親子品牌》\n官方商城開發',
        description: '協作切版，因為排版較彈性，特別針對每個裝置都調整成最舒服的排版方式。',
        link: 'https://coolmama.omniec.com.tw',
        tags: ['前端開發', 'Vue.js 3']
      },
      {
        imgType: 'vertical',
        imgs: ['nana01.png', 'nana01.png'],
        title: '《娜娜家──精品寶石設計》\n官方網站開發',
        description: '協作切版，特別以別具特色的modal呈現作品，無論在任何裝置上都能輕鬆觀看作品細節。',
        link: 'https://www.nanahomecrystal.com',
        tags: ['前端開發', 'Vue.js 3']
      },
      {
        imgType: 'horizontal',
        imgs: ['atenore01.png', 'atenore02.png'],
        title: '《Atenore地圖網》\n網站開發',
        description: '利用 Google Map API 定位使用者位置，並在地圖上標出與使用者鄰近的地標。\n網站內特別客製化地標 icon 與資訊方塊樣式。',
        tags: ['前端獨立開發', 'Vue.js 3']
      }
    ])

    const skillsList = ref([
      {
        icon: 'vue',
        title: 'Vue.js',
        description: '熟用 Vue.js 2 與 Vue.js 3，了解生命週期、Options API 與 Composition API。曾多次以 Vue cli 建立專案，搭配 Vuex, Vue Router 整合使用。'
      },
      {
        icon: 'sass',
        title: 'Sass',
        description: '能利用變數與mixin組織化維護 CSS，並能透過修改 Bootstrap Sass 檔案重新定義主色、修改預設值、調整元件樣式。'
      },
      {
        icon: 'git',
        title: 'Git',
        description: '熟悉 pull, push, merge, branch 等基本操作，並可透過 Submodule 建立共用模組，統一管理專案核心部分。'
      }
    ])

    const backToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    let observer = null
    const intersectionObserverCallback = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('translate-y-2')
          entry.target.classList.remove('opacity-0')
          observer.unobserve(entry.target)
        }
      })
    }

    onMounted(() => {
      observer = new IntersectionObserver(intersectionObserverCallback, { threshold: 0.5 })
      const targets = document.querySelectorAll('.js-show-on-scroll')
      targets.forEach(function (target) {
        target.classList.add('translate-y-2')
        target.classList.add('opacity-0')
        target.classList.add('transition')
        observer.observe(target)
      })
    })

    return { styleModeList, styleModeActive, setStyleModeActive, worksList, skillsList, backToTop }
  }
}
</script>

<style lang="scss" module>
:global(.transition),
.transition {
  @apply ease-[cubic-bezier(0.37,0,0.63,1)] duration-300;
}

.card {
  // @apply lg:h-3/5-screen;
  @apply relative;
  @apply bg-gray-light-600;
  @apply overflow-hidden rounded-xl;
  @apply grid grid-cols-1 lg:grid-cols-2;
  @apply px-3 md:px-8 mb-5;

  .imageWrap {
    @apply h-2/5-screen lg:h-full;
    @apply relative;
    @apply overflow-hidden;
  }

  .img {
    @apply absolute;
    @apply shadow-xl;
    @apply transition;
  }

  .vertical .img {
    @apply h-auto;

    &:nth-child(1) {
      @apply z-10;
      @apply w-1/2;
      @apply object-top;
      @apply top-1/4;
    }

    &:nth-child(2) {
      @apply w-1/3;
      @apply object-bottom;
      @apply bottom-1/5;
    }
  }

  .horizontal .img {
    @apply h-auto;

    &:nth-child(1) {
      @apply z-10;
      @apply w-2/3;
      @apply bottom-0 translate-y-1/4;
    }

    &:nth-child(2) {
      @apply w-3/5;
      @apply bottom-1/4;
    }
  }

  &:nth-child(odd) {
    .vertical .img {
      &:nth-child(1) {
        @apply right-1/2 translate-x-1/3;
        @apply lg:left-0 lg:translate-x-1/2;
      }

      &:nth-child(2) {
        @apply left-1/2;
        @apply lg:left-0 lg:translate-x-3;
      }
    }

    .horizontal .img {
      &:nth-child(1) {
        @apply right-1/2 translate-x-1/3;
        @apply lg:right-8 lg:translate-x-0;
      }

      &:nth-child(2) {
        @apply left-1/2;
        @apply lg:left-0 lg:translate-x-3;
      }
    }
  }

  &:nth-child(even) {
    .imageWrap {
      @apply lg:order-last;
    }

    .vertical .img {
      &:nth-child(1) {
        @apply right-1/2 translate-x-1/3;
        @apply lg:right-0 lg:-translate-x-1/2;
      }

      &:nth-child(2) {
        @apply left-1/2;
        @apply lg:left-auto lg:right-0 lg:-translate-x-3;
      }
    }

    .horizontal .img {
      &:nth-child(1) {
        @apply left-8;
      }

      &:nth-child(2) {
        @apply right-0 -translate-x-3;
      }
    }
  }

  &:hover {
    .vertical .img {
      &:nth-child(1) {
        @apply top-1/5;
      }

      &:nth-child(2) {
        @apply bottom-1/4 translate-x-0;
      }
    }

    .horizontal .img {
      &:nth-child(1) {
        @apply translate-y-0;
      }

      &:nth-child(2) {
        @apply bottom-1/3 translate-x-0;
      }
    }
  }
}

.tag {
  @apply rounded-full;
  @apply px-1 py-0.25 mr-1 mb-1;
  @apply border border-secondary-light/50;
  @apply text-sm;
  @apply select-none;
}

.iconLink {
  @apply fill-current;
  @apply w-2.5 h-2.5;
  @apply mr-0.5;
}

.link {
  @apply rounded-full;
  @apply inline-flex items-center;
  @apply px-2 py-1;
  @apply -translate-x-2;
  @apply border border-transparent;
  @apply transition;
  @apply hover:text-text-light/50 hover:-translate-y-0.25;
}

:global(.dark) {
  .card {
    @apply bg-gray-dark-300;
  }

  .tag {
    @apply border-white/25;
  }

  .link {
    @apply hover:text-text-dark/50;
  }
}
</style>
