<template>
  <!-- CONTACT -->
  <section class="pb-[60px] pt-headerHeight">
    <div class="px-4 py-2">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        contact
      </h3>
    </div>

    <div>
      <img
        class="w-full object-cover max-tablet:h-[250px]"
        src="/img/hotel/test.png"
        alt=""
      />
    </div>

    <div class="flex flex-col items-center pt-[35px]">
      <img
        class="mx-auto w-[80px]"
        src="/img/homePage/logoService.png"
        srcset="/img/homePage/logoService@2x.png 2x"
        alt="logoService.png"
      />

      <div class="mt-[15px] flex items-center justify-center gap-5 p-3">
        <a href="/">
          <Instagram customClasses="text-mainColor" />
        </a>
        <a href="/">
          <Whatsapp customClasses="text-mainColor" />
        </a>

        <a href="/"> <Mail customClasses="text-mainColor" /></a>
      </div>
    </div>
  </section>
  <!-- /CONTACT -->

  <!-- @LITTLEBLUEDOOR.TRAVEL -->
  <section class="pb-[100px]">
    <div class="mx-auto max-w-[1510px] px-4">
      <h2
        class="px-4 text-center font-[500] uppercase max-tablet:text-[25px] max-mobile:text-[20px] tablet:text-[42px]"
      >
        @LITTLEBLUEDOOR.TRAVEL
      </h2>

      <swiper
        class="pt-[50px]"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          465: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          615: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 35,
          },
        }"
      >
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="mx-auto object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- /@LITTLEBLUEDOOR.TRAVEL -->
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import Instagram from "@/shared/icons/Instagram.vue";
  import Mail from "@/shared/icons/Instagram.vue";
  import Whatsapp from "@/shared/icons/Whatsapp.vue";

  import "swiper/css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Instagram,
      Mail,
      Whatsapp,
    },
  };
</script>
