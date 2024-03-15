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
          <img src="/img/logo.png" srcset="/img/logo@2x.png 2x"
        /></router-link>

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
                  class="max-largeDesktop:text-[23px]"
                  >{{ item.name }}</router-link
                >
              </li>
            </ul>
          </nav>

          <router-link
            to=""
            class="flex justify-center gap-2 max-largeDesktop:items-center max-largeDesktop:pt-[20px] max-largeDesktop:text-[20px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M13.0127 2.1665C7.04788 2.1665 2.19213 7.01808 2.18996 12.9829C2.18888 14.8896 2.68828 16.7509 3.63511 18.3911L2.16669 23.8332L7.83514 22.4938C9.41573 23.3561 11.195 23.8088 13.0064 23.8099H13.0106C18.9743 23.8099 23.828 18.9572 23.8312 12.9935C23.8334 10.1021 22.709 7.38355 20.6659 5.33822C18.6227 3.29397 15.9074 2.16759 13.0127 2.1665ZM13.0106 4.33317C15.3246 4.33425 17.4992 5.23645 19.134 6.87012C20.7687 8.50595 21.6667 10.6795 21.6646 12.9914C21.6624 17.7624 17.7817 21.6432 13.0085 21.6432C11.5644 21.6421 10.134 21.2796 8.87404 20.5916L8.14406 20.1938L7.33791 20.3843L5.2051 20.8879L5.72561 18.9539L5.96047 18.0864L5.5119 17.3078C4.75574 15.9991 4.35555 14.5028 4.35663 12.9829C4.3588 8.21408 8.24068 4.33317 13.0106 4.33317ZM9.18296 7.98942C9.00205 7.98942 8.70953 8.05713 8.46145 8.32796C8.21336 8.59771 7.51353 9.25105 7.51353 10.5814C7.51353 11.9117 8.4826 13.1977 8.61802 13.3786C8.75236 13.5584 10.4886 16.3747 13.237 17.458C15.5207 18.3583 15.9845 18.1806 16.4807 18.1351C16.9768 18.0907 18.0813 17.4823 18.3067 16.8507C18.532 16.2192 18.5325 15.6759 18.4654 15.5643C18.3982 15.4516 18.2178 15.3844 17.947 15.249C17.6772 15.1136 16.3479 14.4608 16.0998 14.3709C15.8517 14.281 15.6703 14.2355 15.4904 14.5063C15.3106 14.7772 14.7938 15.3845 14.6356 15.5643C14.4774 15.7452 14.3203 15.7695 14.0495 15.6341C13.7787 15.4976 12.9079 15.2114 11.8744 14.2905C11.0705 13.5744 10.5281 12.6909 10.37 12.4201C10.2129 12.1503 10.3552 12.0022 10.4906 11.8678C10.6119 11.7465 10.7593 11.552 10.8947 11.3939C11.029 11.2357 11.0756 11.123 11.1655 10.9432C11.2555 10.7634 11.2094 10.6047 11.1423 10.4692C11.0751 10.3338 10.5491 8.99855 10.3086 8.46338C10.106 8.0138 9.89207 8.00335 9.69924 7.99577C9.54216 7.98927 9.3628 7.98942 9.18296 7.98942Z"
                fill="#283593"
              />
            </svg>

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

  export default {
    data() {
      return {
        navList: navList,
        show: false,
      };
    },

    components: {
      Burger,
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
