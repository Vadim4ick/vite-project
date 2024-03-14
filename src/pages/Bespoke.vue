<template>
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
          <svg
            class="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button class="swiper-past-btn button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>

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
          <svg
            class="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <button class="swiper-pastTwo-btn button-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>

  <section
    class="flex flex-col items-center justify-center gap-5 px-4 pb-[65px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      height="64px"
      width="64px"
      viewBox="0 0 308 308"
    >
      <g id="XMLID_468_">
        <path
          id="XMLID_469_"
          d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"
        />
        <path
          id="XMLID_470_"
          d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"
        />
      </g>
    </svg>

    <p class="text-center uppercase tablet:text-[20px]">
      whatsapp us for more information
    </p>
  </section>
</template>

<script>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation } from "swiper/modules";

  import "swiper/css";

  export default {
    components: {
      Swiper,
      SwiperSlide,
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
