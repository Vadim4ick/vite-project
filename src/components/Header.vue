<template>
  <header
    :class="{
      'min-h-screen': show,
    }"
    class="fixed z-50 w-full bg-bg"
  >
    <div class="mx-auto max-w-[1360px] px-[16px]">
      <div class="flex h-headerHeight items-center justify-between gap-6">
        <router-link to="/">
          <img
            src="/img/homePage/logoService.png"
            class="w-[60px]"
            srcset="/img/homePage/logoService@2x.png 2x"
            alt="logoService.png"
          />
        </router-link>

        <Burger :show="show" @update:show="show = $event" />

        <div
          :class="{
            'max-largeDesktop:visible max-largeDesktop:absolute  max-largeDesktop:top-[25px] max-largeDesktop:pt-headerHeight':
              show,
            'max-largeDesktop:hidden': !show,
          }"
          class="w-full largeDesktop:flex largeDesktop:max-w-[1000px] largeDesktop:justify-between"
        >
          <nav>
            <ul
              class="flex max-largeDesktop:flex-col max-largeDesktop:items-center max-largeDesktop:gap-3 largeDesktop:gap-6"
            >
              <li v-for="(item, index) in navList">
                <router-link
                  :to="item.path"
                  class="hover:text-mainColorHover transition-colors max-largeDesktop:text-[23px]"
                  >{{ item.name }}</router-link
                >
              </li>
            </ul>
          </nav>

          <router-link
            to=""
            class="hover:text-mainColorHover flex items-center justify-center gap-2 max-largeDesktop:pt-[20px] max-largeDesktop:text-[20px] max-largeDesktop:text-[23px]"
          >
            <Whatsapp customClasses="text-mainColor" />

            <span>PLAN YOUR JOURNEY</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { navList } from "@/shared/const/navList.ts";
  import Burger from "@/components/Burger.vue";
  import Whatsapp from "@/shared/icons/Whatsapp.vue";

  export default {
    data() {
      return {
        navList: navList,
        show: false,
      };
    },

    components: {
      Burger,
      Whatsapp,
    },

    watch: {
      show(newValue) {
        if (newValue) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      },
    },
  };
</script>
