<template>
  <section class="pt-headerHeight pb-[85px]">
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

  <section class="pb-[55px] text-black">
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
          <button class="h-[40px] w-full bg-black px-2 uppercase">
            Hotels
          </button>
          <button class="h-[40px] w-full bg-black px-2 uppercase">
            Villas & apartaments
          </button>
        </div>
      </div>
    </div>

    <div class="pt-[30px]">
      <div
        class="mx-auto flex max-w-[335px] justify-between gap-2 pb-[30px] text-[18px] font-semibold"
      >
        <button class="uppercase">Hotels</button>
        <button class="uppercase">Villas</button>
        <button class="uppercase">Boats</button>
      </div>

      <div class="mx-auto max-w-[1280px]">
        <swiper
          :breakpoints="{
            320: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            460: {
              slidesPerView: 2.6,
              spaceBetween: 20,
            },
            550: {
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
  </section>

  <!--
  <section class="pb-[120px]">
    <h3
      class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
    >
      WHY US?
    </h3>

    <div
      class="mx-auto flex max-w-[747px] flex-col items-center px-4 pt-[45px]"
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <b>10000</b> laboriosam.
      </p>

      <ul class="pb-[40px] pt-[30px]">
        <li>
          <p class="text-center"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center"><b>Lorem ipsum dolor sit amet.</b></p>
        </li>
        <li>
          <p class="text-center">
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </p>
        </li>
      </ul>

      <div class="flex flex-col gap-[20px]">
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          natus sequi distinctio quae, exercitationem soluta!
        </p>

        <p class="text-center"><b>Lorem ipsum dolor sit amet.</b></p>
      </div>
    </div>
  </section>

  <section class="pb-[200px]">
    <div class="mx-auto max-w-[680px]">
      <h3
        class="text-center font-[500] uppercase max-tablet:text-[25px] tablet:text-[35px]"
      >
        A few popular travel destinations among lbd clients
      </h3>
    </div>

    <div
      class="hotelTravel mx-auto flex max-w-[1210px] flex-col gap-[100px] px-4 pt-[50px]"
    >
      <article class="gap-[45px]">
        <swiper
          class="hotelSwiper w-full"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }"
        >
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
        </swiper>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center">Lorem ipsum dolor sit amet.</p>

          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold">BOOK NOW</button>
        </div>
      </article>

      <article class="gap-[45px]">
        <swiper
          class="hotelSwiper w-full"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }"
        >
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
        </swiper>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center">Lorem ipsum dolor sit amet.</p>

          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold">BOOK NOW</button>
        </div>
      </article>

      <article class="gap-[45px]">
        <swiper
          class="hotelSwiper w-full"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }"
        >
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
        </swiper>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center">Lorem ipsum dolor sit amet.</p>

          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold">BOOK NOW</button>
        </div>
      </article>

      <article class="gap-[45px]">
        <swiper
          class="hotelSwiper w-full"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }"
        >
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="w-[485px] object-cover"
              src="/img/ourService.png"
              alt=""
            />
          </swiper-slide>
        </swiper>

        <div
          class="hotelContent flex w-full flex-col items-center justify-center gap-[15px] text-[14px]"
        >
          <p class="text-center">Lorem ipsum dolor sit amet.</p>

          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aut consectetur veritatis molestias nostrum asperiores ex sit enim
            ducimus voluptatibus? Nulla, rem quod blanditiis incidunt aliquid
            quisquam.
          </p>

          <button class="text-[17px] font-semibold">BOOK NOW</button>
        </div>
      </article>
    </div>
  </section>

  <section class="pb-[40px]">
    <div class="mx-auto flex max-w-[1230px] flex-col items-center px-4">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <b>10000</b> laboriosam.
      </p>

      <ul class="pb-[40px] pt-[30px]">
        <li>
          <p class="text-center"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center"><b>Lorem, ipsum.</b></p>
        </li>
        <li>
          <p class="text-center"><b>Lorem ipsum dolor sit amet.</b></p>
        </li>
        <li>
          <p class="text-center">
            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
          </p>
        </li>
      </ul>

      <div class="flex flex-col gap-[20px]">
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
          fugit eius, omnis, aut temporibus amet excepturi porro eaque placeat
          saepe ullam ipsum. Corporis voluptas atque enim, hic maiores facilis
          ea cumque consequuntur est totam aspernatur ipsum non? Tempore, quod
          saepe?
        </p>

        <p class="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          voluptatum rem ea distinctio dicta, harum quis iure veniam tempora
          nostrum odio illo, dolores reiciendis quo!
        </p>

        <p class="text-center"><b>Lorem ipsum dolor sit amet.</b></p>
      </div>

      <div class="flex flex-col items-center pt-[35px]">
        <img
          class="mx-auto w-[80px]"
          src="/img/homePage/logoService.png"
          srcset="/img/homePage/logoService@2x.png 2x"
          alt="logoService.png"
        />

        <span class="tracking-[0.5px]">LITTLE BLUE DOOR</span>

        <span class="text-[10px]">ELEVATED TRAVEL</span>
      </div>
    </div>
  </section> -->
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";

  import "swiper/css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
  };
</script>
