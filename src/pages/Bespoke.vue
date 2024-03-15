<template>
  <!-- BESPOKE INTINERARIES -->
  <section class="pb-[85px] pt-headerHeight">
    <div class="px-4 py-2">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        BESPOKE INTINERARIES
      </h3>
    </div>

    <div>
      <img
        class="w-full object-cover max-tablet:h-[250px]"
        src="/img/hotel/test.png"
        alt=""
      />
    </div>

    <div class="pt-[35px]">
      <img
        class="mx-auto w-[80px]"
        src="/img/homePage/logoService.png"
        srcset="/img/homePage/logoService@2x.png 2x"
        alt="logoService.png"
      />

      <div
        class="mx-auto flex max-w-[677px] flex-col gap-[15px] px-4 pt-[10px] text-[14px]"
      >
        <p class="text-center uppercase">
          Lorem ipsum <b>dolor sit amet,</b> consectetur adipisicing elit.
          Provident maxime facere expedita quia voluptas suscipit reiciendis
          impedit voluptatibus quidem soluta!
        </p>

        <p class="text-center uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          itaque ullam similique, dolore corporis iste.
        </p>
      </div>
    </div>
  </section>
  <!-- /BESPOKE INTINERARIES -->

  <!-- HOW IT WORKS? -->
  <section>
    <div class="mx-auto max-w-[1315px] px-4 pb-5">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        HOW IT WORKS?
      </h3>

      <p class="pt-4 text-center">
        AVOID THE TOURSIT TRAPS AND IMMERSE IN THE <b>TRUE ESSENCE</b> OF EACH
        DESTINATION
      </p>

      <div
        class="grid gap-5 pt-8 max-laptop:grid-cols-2 max-tablet:grid-cols-1 laptop:grid-cols-4"
      >
        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>

        <div class="flex flex-col gap-[15px] max-laptop:items-center">
          <img
            class="w-[300px] object-cover"
            src="/img/ourService.png"
            alt=""
          />

          <div class="flex flex-col gap-[10px]">
            <p class="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              accusamus minima nesciunt assumenda qui fugiat commodi nam earum!
              Ea, dolore!
            </p>
            <p class="text-center">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /HOW IT WORKS? -->

  <!-- START PLANNING YOUR TRIP -->
  <section class="max-tablet:pt-[50px] tablet:pt-[100px]">
    <div class="mx-auto max-w-[900px] px-4">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        start planning your trip
      </h3>

      <p class="pt-4 text-center uppercase">
        An expert from lbd will contact you shortly
      </p>

      <form class="mb-[120px] mt-[30px] text-black">
        <div class="bg-white px-12 py-8">
          <h4 class="text-center text-[23px] font-semibold uppercase">
            SUBMIT A commission request
          </h4>

          <p class="pb-[40px] pt-[25px] text-center font-openSans italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            dolorem eius consequuntur sunt devwer sed dolore.
          </p>

          <div class="flex flex-col gap-[30px]">
            <div class="flex gap-[30px]">
              <input
                class="h-[45px] w-full border-b border-gray-400"
                type="text"
                placeholder="FIRST NAME"
              />

              <input
                class="h-[45px] w-full border-b border-gray-400"
                type="text"
                placeholder="LAST NAME"
              />
            </div>

            <input
              class="h-[45px] w-full border-b border-gray-400"
              type="text"
              placeholder="EMAIL"
            />

            <textarea
              class="h-[170px] w-full border-b border-gray-400"
              placeholder="MESSAGE"
            ></textarea>
          </div>
        </div>

        <button class="w-full pt-4 font-semibold uppercase underline">
          Example
        </button>
      </form>
    </div>
  </section>
  <!-- /START PLANNING YOUR TRIP -->

  <!-- PAST ITINERARIES FOR LBG CLIENTS -->
  <section class="max-tablet:pb-[50px] tablet:pb-[100px]">
    <div class="relative mx-auto max-w-[1315px] px-4">
      <h4
        class="text-center font-[500] uppercase text-black max-tablet:text-[20px] tablet:text-[30px]"
      >
        PAST ITINERARIES FOR LBG CLIENTS
      </h4>

      <swiper
        :modules="modules"
        class="max-tablet:pt-[50px] tablet:pt-[100px]"
        :navigation="{
          nextEl: '.swiper-past-btn.button-next',
          prevEl: '.swiper-past-btn.button-prev',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1.8,
            spaceBetween: 17,
          },
          400: {
            slidesPerView: 2.2,
            spaceBetween: 17,
          },
          460: {
            slidesPerView: 2.7,
            spaceBetween: 17,
          },
          600: {
            slidesPerView: 3.3,
            spaceBetween: 17,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 17,
          },

          991: {
            slidesPerView: 4,
            spaceBetween: 17,
          },
        }"
      >
        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>
      </swiper>

      <div class="flex justify-between px-4 pt-4">
        <button class="swiper-past-btn button-prev">
          <Arrow customClasses="rotate-180 w-[32px] h-[32px]" />
        </button>

        <button class="swiper-past-btn button-next">
          <Arrow customClasses="w-[32px] h-[32px]" />
        </button>
      </div>
    </div>
  </section>
  <!-- /PAST ITINERARIES FOR LBG CLIENTS -->

  <!-- Slider 2 -->
  <section class="pb-[100px]">
    <div class="relative mx-auto max-w-[1315px] px-4">
      <swiper
        :modules="modules"
        :navigation="{
          nextEl: '.swiper-pastTwo-btn.button-next',
          prevEl: '.swiper-pastTwo-btn.button-prev',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1.8,
            spaceBetween: 17,
          },
          400: {
            slidesPerView: 2.2,
            spaceBetween: 17,
          },
          460: {
            slidesPerView: 2.7,
            spaceBetween: 17,
          },
          600: {
            slidesPerView: 3.3,
            spaceBetween: 17,
          },

          768: {
            slidesPerView: 3.5,
            spaceBetween: 17,
          },

          991: {
            slidesPerView: 4,
            spaceBetween: 17,
          },
        }"
      >
        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="object-cover max-tablet:h-[200px] max-tablet:w-[200px] tablet:h-[300px] tablet:w-[300px]"
            src="/img/ourService.png"
            alt=""
          />
        </swiper-slide>
      </swiper>

      <div class="flex justify-between px-4 pt-4">
        <button class="swiper-pastTwo-btn button-prev">
          <Arrow customClasses="rotate-180 w-[32px] h-[32px]" />
        </button>

        <button class="swiper-pastTwo-btn button-next">
          <Arrow customClasses="w-[32px] h-[32px]" />
        </button>
      </div>
    </div>
  </section>
  <!-- /Slider 2 -->

  <!-- WHATSAPP  -->
  <section
    class="flex flex-col items-center justify-center gap-5 px-4 pb-[65px]"
  >
    <Whatsapp class="h-[64px] w-[64px]" />

    <p class="text-center uppercase tablet:text-[20px]">
      whatsapp us for more information
    </p>
  </section>
  <!-- /WHATSAPP  -->
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation } from "swiper/modules";
  import Arrow from "@/shared/icons/Arrow.vue";
  import Whatsapp from "@/shared/icons/Whatsapp.vue";

  import "swiper/css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Arrow,
      Whatsapp,
    },

    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log("slide change");
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation],
      };
    },
  };
</script>
