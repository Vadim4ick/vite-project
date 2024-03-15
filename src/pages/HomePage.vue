<template>
  <!-- Главная секция с баннером -->
  <section class="pt-headerHeight">
    <div class="relative">
      <img
        class="h-full w-full"
        src="/img/homePage/banner.png"
        srcset="/img/homePage/banner@2x.png 2x"
      />

      <div
        class="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center px-3 text-white max-largeDesktop:gap-[30px] max-tablet:gap-[10px] largeDesktop:gap-[110px]"
      >
        <div class="flex flex-col items-center">
          <p
            class="text-center font-medium uppercase max-largeDesktop:text-[16px] max-tablet:text-[14px] largeDesktop:text-[30px]"
          >
            LITTLE BLUE DOOR
          </p>

          <p
            class="mt-[-20px ] text-center font-kyiv capitalize max-largeDesktop:mt-[-10px] max-largeDesktop:text-[35px] max-tablet:text-[25px] largeDesktop:text-[70px]"
          >
            the art of Elevated travel
          </p>
        </div>

        <span
          class="text-center font-openSans max-largeDesktop:text-[14px] max-tablet:text-[12px] largeDesktop:text-[25px]"
        >
          Elevate your Travel: Experience the difference of Tailored advice and
          unique destinations
        </span>
      </div>
    </div>
  </section>
  <!-- /Главная секция с баннером -->

  <!-- Our Services -->
  <section>
    <div class="mx-auto max-w-[1300px] px-4">
      <div class="flex flex-col items-center pt-[50px]">
        <div class="pb-[50px]">
          <img
            src="/img/homePage/logoService.png"
            srcset="/img/homePage/logoService@2x.png 2x"
            alt="logoService.png"
          />
        </div>

        <p class="max-w-[650px] text-center font-openSans tablet:text-[20px]">
          At Little Blue Door, we curate your ideal journey from start to
          finish. Simply share your vision with us, and we'll bring it to life.
        </p>
      </div>

      <div class="pb-[70px] max-tablet:pt-[50px] tablet:pt-[100px]">
        <h2
          class="text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]"
        >
          Our Services
        </h2>

        <div
          class="grid justify-items-center gap-x-3 font-openSans max-tablet:gap-y-[35px] max-tablet:pt-[40px] tablet:grid-cols-2 tablet:gap-y-[50px] tablet:pt-[80px]"
        >
          <div
            class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
          >
            <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
              Curated Bookings
            </h4>

            <p class="tablet:text-[20px]">
              Our portfolio features a carefully curated collection of the
              world's finest hotels, exclusive villas, yacht rentals, and unique
              Airbnb properties.
            </p>
          </div>
          <div
            class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
          >
            <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
              Tailored Itineraries
            </h4>

            <p class="tablet:text-[20px]">
              Whether it's a romantic honeymoon, an adventurous safari, a
              relaxing weekend escape, a culinary exploration or a family
              voyage, LBD will custom create a unique itinerary to reflect your
              individuality, interests, special moments, and of course, budget.
            </p>
          </div>
          <div
            class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
          >
            <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
              Concierge Services
            </h4>

            <p class="tablet:text-[20px]">
              From securing last-minute dining reservations, to planning sudden
              weekend getaways, to arranging private jet travel, our 24/7
              WhatsApp support is at your service to accommodate your every
              need.
            </p>
          </div>
          <div
            class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
          >
            <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
              LBD Benefits & Insider Access
            </h4>

            <p class="tablet:text-[20px]">
              Enjoy preferential rates, upgrades, special amenities and unique
              “money-can’t-buy” experiences, courtesy of our extensive expertise
              and connections.
            </p>
          </div>
        </div>

        <button
          class="mx-auto table w-full bg-mainColor text-[25px] font-medium text-bg max-tablet:mt-[40px] max-tablet:h-[55px] max-tablet:max-w-[200px] max-tablet:text-[20px] tablet:mt-[70px] tablet:h-[67px] tablet:max-w-[270px]"
        >
          Start Planning
        </button>
      </div>
    </div>
  </section>
  <!-- /Our Services -->

  <!-- OUR PARTNERS -->
  <section>
    <div class="mx-auto max-w-[1450px]">
      <div class="flex flex-col gap-[10px] px-4">
        <h2
          class="text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]"
        >
          OUR PARTNERS
        </h2>

        <p class="text-center font-openSans tablet:text-[20px]">
          We have hand-picked each of our partners to guarantee the utmost
          quality in everything we offer.
        </p>
      </div>

      <div class="flex gap-[35px] overflow-hidden pt-[55px]">
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
        <img class="max-w-max" src="/img/ourService.png" alt="" />
      </div>
    </div>
  </section>
  <!-- /OUR PARTNERS -->

  <!-- YOUR DOOR TO -->
  <section
    class="relative max-tablet:mt-[35px] max-tablet:pb-[65px] tablet:mt-[65px] tablet:pb-[115px]"
  >
    <div class="mx-auto max-w-[1440px]">
      <div>
        <img
          src="/img/homePage/yourDoor.png"
          srcset="/img/homePage/yourDoor@2x.png 2x"
          alt=""
        />

        <p
          class="absolute left-1/2 w-full translate-x-[-50%] text-center font-semibold text-white max-largeDesktop:top-[10%] max-largeDesktop:text-[25px] max-tablet:top-[5%] max-tablet:text-[20px] largeDesktop:top-[15%] largeDesktop:text-[40px]"
        >
          YOUR DOOR TO
        </p>
      </div>

      <div class="px-4">
        <button
          class="mx-auto mt-[50px] table h-[67px] w-full max-w-[615px] bg-mainColor px-2 font-medium text-bg tablet:text-[25px]"
        >
          CURATE YOUR OWN DREAM JOURNEY
        </button>
      </div>
    </div>
  </section>
  <!-- /YOUR DOOR TO -->

  <!-- WHY US -->
  <section class="max-tablet:pb-[75px] tablet:pb-[150px]">
    <div class="mx-auto max-w-[1380px] px-4">
      <h2
        class="text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]"
      >
        WHY US?
      </h2>

      <div
        class="grid justify-items-center gap-x-3 font-openSans max-tablet:gap-y-[35px] max-tablet:pt-[40px] tablet:grid-cols-2 tablet:gap-y-[50px] tablet:pt-[80px]"
      >
        <div
          class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
        >
          <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
            Experience
          </h4>

          <p class="font-light italic tablet:text-[20px]">
            With 10+ years in the Luxury Concierge Industry and more supplier
            relationships than we’d like to keep track of, we finally pooled it
            all together in one place.
          </p>
        </div>

        <div
          class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
        >
          <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
            Authenticity
          </h4>

          <p class="font-light italic tablet:text-[20px]">
            We are committed to genuine experiences. Our privileged insider
            knowledge enables us to go beyond the well-trodden tourist trail in
            search of the most coveted hidden gems.
          </p>
        </div>

        <div
          class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
        >
          <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
            Personalised Service
          </h4>

          <p class="tablet:text-[20px]">
            We promise immediate assistance and support before, during, and
            after your trip for any travel issues or emergencies
          </p>
        </div>

        <div
          class="flex w-full flex-col text-center max-tablet:gap-[15px] tablet:gap-[30px] tablet:px-4 tablet:py-2"
        >
          <h4 class="font-bold max-tablet:text-[22px] tablet:text-[27px]">
            Stress Free Planning
          </h4>

          <p class="tablet:text-[20px]">
            We handle all logistical aspects of travel, from bookings to
            transportation, allowing for a worry-free experience.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- /WHY US -->

  <!-- CLIENT EXPERIENCE -->
  <section class="max-tablet:pb-[100px] tablet:pb-[220px]">
    <div class="mx-auto max-w-[1510px] px-4">
      <h2
        class="px-4 text-center font-[500] uppercase max-tablet:text-[35px] tablet:text-[42px]"
      >
        CLIENT EXPERIENCE
      </h2>

      <swiper
        class="pl-4 pt-[40px]"
        :breakpoints="{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          465: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          615: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3.1,
            spaceBetween: 30,
          },
          1250: {
            slidesPerView: 3.45,
            spaceBetween: 35,
          },
        }"
      >
        <swiper-slide>
          <div
            class="flex flex-col gap-[14px] bg-white px-[25px] py-8 max-tablet:min-h-[350px] tablet:min-h-[417px]"
          >
            <p class="text-[25px] font-medium">Love it!</p>

            <span class="tablet:text-[20px] tablet:font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus eu
              ornare vel eget elit aliquet fermentum morbi. Bibendum molestie
              viverra pretium fermentum tempus, erat.
            </span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div
            class="flex flex-col gap-[14px] bg-white px-[25px] py-8 max-tablet:min-h-[350px] tablet:min-h-[417px]"
          >
            <p class="text-[25px] font-medium">Love it!</p>

            <span class="tablet:text-[20px] tablet:font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus eu
              ornare vel eget elit aliquet fermentum morbi. Bibendum molestie
              viverra pretium fermentum tempus, erat.
            </span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div
            class="flex flex-col gap-[14px] bg-white px-[25px] py-8 max-tablet:min-h-[350px] tablet:min-h-[417px]"
          >
            <p class="text-[25px] font-medium">Love it!</p>

            <span class="tablet:text-[20px] tablet:font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus eu
              ornare vel eget elit aliquet fermentum morbi. Bibendum molestie
              viverra pretium fermentum tempus, erat.
            </span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div
            class="flex flex-col gap-[14px] bg-white px-[25px] py-8 max-tablet:min-h-[350px] tablet:min-h-[417px]"
          >
            <p class="text-[25px] font-medium">Love it!</p>

            <span class="tablet:text-[20px] tablet:font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus eu
              ornare vel eget elit aliquet fermentum morbi. Bibendum molestie
              viverra pretium fermentum tempus, erat.
            </span>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div
            class="flex flex-col gap-[14px] bg-white px-[25px] py-8 max-tablet:min-h-[350px] tablet:min-h-[417px]"
          >
            <p class="text-[25px] font-medium">Love it!</p>

            <span class="tablet:text-[20px] tablet:font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus eu
              ornare vel eget elit aliquet fermentum morbi. Bibendum molestie
              viverra pretium fermentum tempus, erat.
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <!-- / CLIENT EXPERIENCE -->

  <section class="pb-[55px]">
    <div class="mx-auto max-w-[1510px] px-4">
      <h2
        class="px-4 text-center font-[500] uppercase max-tablet:text-[25px] max-mobile:text-[20px] tablet:text-[42px]"
      >
        @LITTLEBLUEDOOR.TRAVEL
      </h2>

      <swiper
        class="pt-[50px] max-laptop:pl-4 laptop:pl-[43px]"
        :breakpoints="{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          465: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          615: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 2.7,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3.1,
            spaceBetween: 30,
          },
          1250: {
            slidesPerView: 3.7,
            spaceBetween: 35,
          },
        }"
      >
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img class="object-cover" src="/img/ourService.png" alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
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
