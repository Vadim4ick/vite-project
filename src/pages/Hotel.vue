<template>
  <!-- HOTEL & VILLA BOOKINGS -->
  <section class="pb-[85px] pt-headerHeight">
    <div class="px-4 py-2">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        Hotel & VILLA BOOKINGS
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
  <!-- /HOTEL & VILLA BOOKINGS -->

  <!-- SLIDER TABS -->
  <section class="pb-[55px]">
    <div class="mx-auto max-w-[582px] px-4">
      <p class="text-center font-semibold uppercase max-tablet:text-[14px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. iste at
        consequuntur ipsum.
      </p>

      <div class="mt-[25px] bg-white px-[10px] py-[20px]">
        <p class="text-center font-semibold max-tablet:text-[14px]">
          Lorem ipsum dolor sit amet adipisicing elit. Veniam, beatae soluta
          autem quisquam, consequuntur consectetur
        </p>

        <div
          class="flex w-full justify-between pt-[30px] text-[12px] text-white max-tablet:gap-3 max-tablet:px-4 tablet:gap-5 tablet:px-9"
        >
          <button
            class="h-[40px] w-full bg-black px-2 uppercase transition-colors hover:bg-mainColor"
          >
            Hotels
          </button>
          <button
            class="h-[40px] w-full bg-black px-2 uppercase transition-colors hover:bg-mainColor"
          >
            Villas & apartaments
          </button>
        </div>
      </div>
    </div>

    <!-- TABS SLIDES -->
    <div class="pt-[30px]">
      <div
        class="mx-auto flex max-w-[365px] justify-between gap-2 px-4 pb-[30px] text-[18px] font-semibold"
      >
        <button
          class="uppercase"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="currentTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="mx-auto max-w-[1280px]">
        <div v-if="currentTab === 'Hotels'">
          <swiper
            :breakpoints="{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              460: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              991: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }"
          >
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </div>

        <div v-else-if="currentTab === 'Villas'">
          <swiper
            :breakpoints="{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              460: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              991: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }"
          >
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </div>

        <div v-else-if="currentTab === 'Boats'">
          <swiper
            :breakpoints="{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              460: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              991: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }"
          >
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="h-[200px] w-[200px] object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- /TABS SLIDES -->
  </section>
  <!-- /SLIDER TABS -->

  <!-- WHY US? -->
  <section class="pb-[120px]">
    <h3
      class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
    >
      WHY US?
    </h3>

    <div
      class="mx-auto flex max-w-[747px] flex-col items-center px-4 pt-[45px]"
    >
      <p class="text-center tablet:uppercase">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <b>10000</b> laboriosam.
      </p>

      <ul class="pb-[40px] pt-[30px]">
        <li>
          <p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center tablet:uppercase">
            <b>Lorem ipsum dolor sit amet.</b>
          </p>
        </li>
        <li>
          <p class="text-center tablet:uppercase">
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </p>
        </li>
      </ul>

      <div class="flex flex-col gap-[20px]">
        <p class="text-center tablet:uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          natus sequi distinctio quae, exercitationem soluta!
        </p>

        <p class="text-center tablet:uppercase">
          <b>Lorem ipsum dolor sit amet.</b>
        </p>
      </div>
    </div>
  </section>
  <!-- /WHY US? -->

  <!-- A FEW POPULAR TRAVEL DESTINATIONS AMONG LBD CLIENTS -->
  <section class="max-tablet:pb-[120px] tablet:pb-[200px]">
    <div class="mx-auto max-w-[680px]">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        A few popular travel destinations among lbd clients
      </h3>
    </div>

    <div
      class="hotelTravel mx-auto flex max-w-[1210px] flex-col px-4 pt-[50px] max-tablet:gap-[50px] tablet:gap-[100px]"
    >
      <article
        class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:gap-[25px] max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular laptop:gap-[45px] laptop:even:grid-cols-travelPopularReverse"
      >
        <div class="hotelSwiper flex flex-col gap-4">
          <swiper
            :modules="modules"
            class="w-full max-w-[485px]"
            :navigation="{
              nextEl: '.swiper-popularTravelOne-btn.button-next',
              prevEl: '.swiper-popularTravelOne-btn.button-prev',
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }"
          >
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-between">
            <button class="swiper-popularTravelOne-btn button-prev">
              <Arrow customClasses="rotate-180 w-[32px] h-[32px]" />
            </button>

            <button class="swiper-popularTravelOne-btn button-next">
              <Arrow customClasses="w-[32px] h-[32px]" />
            </button>
          </div>
        </div>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center tablet:uppercase">
            Lorem ipsum dolor sit amet.
          </p>

          <p class="text-center tablet:uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold uppercase">BOOK NOW</button>
        </div>
      </article>

      <article
        class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:gap-[25px] max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular laptop:gap-[45px] laptop:even:grid-cols-travelPopularReverse"
      >
        <div class="hotelSwiper flex flex-col gap-4">
          <swiper
            :modules="modules"
            class="w-full max-w-[485px]"
            :navigation="{
              nextEl: '.swiper-popularTravelThree-btn.button-next',
              prevEl: '.swiper-popularTravelThree-btn.button-prev',
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }"
          >
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-between">
            <button class="swiper-popularTravelThree-btn button-prev">
              <Arrow customClasses="rotate-180 w-[32px] h-[32px]" />
            </button>

            <button class="swiper-popularTravelThree-btn button-next">
              <Arrow customClasses="w-[32px] h-[32px]" />
            </button>
          </div>
        </div>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center tablet:uppercase">
            Lorem ipsum dolor sit amet.
          </p>

          <p class="text-center tablet:uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold uppercase">BOOK NOW</button>
        </div>
      </article>

      <article
        class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:gap-[25px] max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular laptop:gap-[45px] laptop:even:grid-cols-travelPopularReverse"
      >
        <div class="hotelSwiper flex flex-col gap-4">
          <swiper
            :modules="modules"
            class="w-full max-w-[485px]"
            :navigation="{
              nextEl: '.swiper-popularTravelFour-btn.button-next',
              prevEl: '.swiper-popularTravelFour-btn.button-prev',
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }"
          >
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-between">
            <button class="swiper-popularTravelFour-btn button-prev">
              <Arrow customClasses="rotate-180 w-[32px] h-[32px]" />
            </button>

            <button class="swiper-popularTravelFour-btn button-next">
              <Arrow customClasses="w-[32px] h-[32px]" />
            </button>
          </div>
        </div>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center tablet:uppercase">
            Lorem ipsum dolor sit amet.
          </p>

          <p class="text-center tablet:uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold uppercase">BOOK NOW</button>
        </div>
      </article>

      <article
        class="grid max-laptop:grid-cols-travelPopularTablet max-laptop:gap-[25px] max-laptop:even:grid-cols-travelPopularReverseTablet max-tablet:grid-cols-1 max-tablet:even:grid-cols-1 laptop:grid-cols-travelPopular laptop:gap-[45px] laptop:even:grid-cols-travelPopularReverse"
      >
        <div class="hotelSwiper flex flex-col gap-4">
          <swiper
            :modules="modules"
            class="w-full max-w-[485px]"
            :navigation="{
              nextEl: '.swiper-popularTravelTwo-btn.button-next',
              prevEl: '.swiper-popularTravelTwo-btn.button-prev',
            }"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }"
          >
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
            <swiper-slide>
              <img
                class="w-full object-cover"
                src="/img/ourService.png"
                alt=""
              />
            </swiper-slide>
          </swiper>

          <div class="flex justify-between">
            <button class="swiper-popularTravelTwo-btn button-prev">
              <Arrow customClasses="rotate-180 w-[32px] h-[32px]" />
            </button>

            <button class="swiper-popularTravelTwo-btn button-next">
              <Arrow customClasses="w-[32px] h-[32px]" />
            </button>
          </div>
        </div>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center tablet:uppercase">
            Lorem ipsum dolor sit amet.
          </p>

          <p class="text-center tablet:uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold uppercase">BOOK NOW</button>
        </div>
      </article>
    </div>
  </section>
  <!-- /A FEW POPULAR TRAVEL DESTINATIONS AMONG LBD CLIENTS -->

  <section class="pb-[40px]">
    <div class="mx-auto flex max-w-[1230px] flex-col items-center px-4">
      <p class="text-center tablet:uppercase">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <b>10000</b> laboriosam.
      </p>

      <ul class="pb-[40px] pt-[30px]">
        <li>
          <p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center tablet:uppercase"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center tablet:uppercase">
            <b>Lorem ipsum dolor sit amet.</b>
          </p>
        </li>
        <li>
          <p class="text-center tablet:uppercase">
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </p>
        </li>
      </ul>

      <div class="flex flex-col gap-[20px]">
        <p class="text-center tablet:uppercase">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          fugit eius, omnis, aut temporibus amet excepturi porro eaque placeat
          saepe ullam ipsum. Corporis voluptas atque enim, hic maiores facilis
          ea cumque consequuntur est totam aspernatur ipsum non? Tempore, quod
          saepe?
        </p>

        <p class="text-center tablet:uppercase">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          voluptatum rem ea distinctio dicta, harum quis iure veniam tempora
          nostrum odio illo, dolores reiciendis quo!
        </p>

        <p class="text-center tablet:uppercase">
          <b>Lorem ipsum dolor sit amet.</b>
        </p>
      </div>

      <div class="flex flex-col items-center pt-[35px]">
        <img
          class="mx-auto w-[80px]"
          src="/img/homePage/logoService.png"
          srcset="/img/homePage/logoService@2x.png 2x"
          alt="logoService.png"
        />

        <span class="tracking-[0.5px] tablet:uppercase">LITTLE BLUE DOOR</span>

        <span class="text-[10px] tablet:uppercase">ELEVATED TRAVEL</span>
      </div>
    </div>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import Arrow from "@/shared/icons/Arrow.vue";
  import { Navigation } from "swiper/modules";

  import "swiper/css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Arrow,
    },

    data() {
      return {
        currentTab: "Hotels",
        tabs: ["Hotels", "Villas", "Boats"],
      };
    },

    setup() {
      return {
        modules: [Navigation],
      };
    },
  };
</script>
