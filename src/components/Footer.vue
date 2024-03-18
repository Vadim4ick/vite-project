<template>
  <footer class="bg-mainColor">
    <div class="mx-auto max-w-[750px] px-4">
      <div class="pb-[20px] pt-[40px]">
        <p class="text-center text-white">Stay Tuned.</p>

        <form class="flex h-[75px] w-full pt-6">
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            class="w-full border-b border-gray-400 pl-2 tracking-[3px] tablet:text-[20px]"
          />

          <button class="w-[140px] bg-black text-[14px] text-white">
            SUBSCRIBE
          </button>
        </form>

        <div
          class="flex items-center justify-center gap-5 max-tablet:pt-[45px] tablet:pt-[90px]"
        >
          <a href="/">
            <Instagram customClasses="text-white" />
          </a>
          <a href="/">
            <Whatsapp customClasses="text-white" />
          </a>

          <a href="/">
            <Mail customClasses="text-white" />
          </a>
        </div>
      </div>

      <div
        class="flex items-center justify-between text-[14px] text-white max-tablet:flex-col max-tablet:gap-4 max-tablet:pb-4 tablet:h-[50px] tablet:gap-2"
      >
        <div class="flex gap-[20px]">
          <a href="javascript:void(0)" class="uppercase">T&S</a>
          <a href="javascript:void(0)" class="uppercase">REFUND POLICY</a>
        </div>

        <a href="javascript:void(0)">© 2024 VOLK | ALL RIGHTS RESERVED</a>

        <div class="flex gap-[20px]">
          <a href="javascript:void(0)">PRIVACY POLICY</a>
          <a href="javascript:void(0)">REVIEWS</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Instagram from "@/shared/icons/Instagram.vue";
  import Mail from "@/shared/icons/Mail.vue";
  import Whatsapp from "@/shared/icons/Whatsapp.vue";

  export default {
    components: {
      Instagram,
      Mail,
      Whatsapp,
    },
  };
</script>
