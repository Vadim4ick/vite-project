<template>
  <!-- Главная секция с баннером -->
  <section class="relative">
    <img
      class="h-full w-full"
      src="/img/homePage/banner.png"
      srcset="/img/homePage/banner@2x.png 2x"
    />

    <div
      class="max-largeDesktop:gap-[30px] max-tablet:gap-[10px] largeDesktop:gap-[110px] absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col items-center px-3 text-white"
    >
      <div class="flex flex-col items-center">
        <p
          class="largeDesktop:text-[30px] max-tablet:text-[14px] max-largeDesktop:text-[16px] text-center font-medium uppercase"
        >
          LITTLE BLUE DOOR
        </p>

        <p
          class="font-kyiv largeDesktop:text-[70px] max-tablet:text-[25px] max-largeDesktop:text-[35px] mt-[-20px ] max-largeDesktop:mt-[-10px] text-center capitalize"
        >
          the art of Elevated travel
        </p>
      </div>

      <span
        class="largeDesktop:text-[25px] max-tablet:text-[12px] max-largeDesktop:text-[14px] text-center font-openSans"
      >
        Elevate your Travel: Experience the difference of Tailored advice and
        unique destinations
      </span>
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

        <p class="tablet:text-[20px] max-w-[650px] text-center font-openSans">
          At Little Blue Door, we curate your ideal journey from start to
          finish. Simply share your vision with us, and we'll bring it to life.
        </p>
      </div>

      <div class="tablet:pt-[100px] max-tablet:pt-[50px] pb-[70px]">
        <h2
          class="tablet:text-[42px] max-tablet:text-[35px] text-center font-[500] uppercase"
        >
          Our Services
        </h2>

        <div
          class="tablet:grid-cols-2 tablet:pt-[80px] max-tablet:pt-[40px] tablet:gap-y-[50px] max-tablet:gap-y-[35px] grid justify-items-center gap-x-3 font-openSans"
        >
          <div
            class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
          >
            <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
              Curated Bookings
            </h4>

            <p class="tablet:text-[20px]">
              Our portfolio features a carefully curated collection of the
              world's finest hotels, exclusive villas, yacht rentals, and unique
              Airbnb properties.
            </p>
          </div>
          <div
            class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
          >
            <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
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
            class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
          >
            <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
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
            class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
          >
            <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
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
          class="max-tablet:text-[20px] tablet:h-[67px] max-tablet:h-[55px] max-tablet:max-w-[200px] tablet:max-w-[270px] tablet:mt-[70px] max-tablet:mt-[40px] mx-auto table w-full bg-mainColor text-[25px] font-medium text-bg"
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
          class="tablet:text-[42px] max-tablet:text-[35px] text-center font-[500] uppercase"
        >
          OUR PARTNERS
        </h2>

        <p class="tablet:text-[20px] text-center font-openSans">
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
    class="tablet:mt-[65px] max-tablet:mt-[35px] tablet:pb-[115px] max-tablet:pb-[65px] relative"
  >
    <div class="mx-auto max-w-[1440px]">
      <div>
        <img
          src="/img/homePage/yourDoor.png"
          srcset="/img/homePage/yourDoor@2x.png 2x"
          alt=""
        />

        <p
          class="largeDesktop:top-[15%] max-largeDesktop:top-[10%] max-tablet:top-[5%] largeDesktop:text-[40px] max-largeDesktop:text-[25px] max-tablet:text-[20px] absolute left-1/2 w-full translate-x-[-50%] text-center font-semibold text-white"
        >
          YOUR DOOR TO
        </p>
      </div>

      <div class="px-4">
        <button
          class="tablet:text-[25px] mx-auto mt-[50px] table h-[67px] w-full max-w-[615px] bg-mainColor px-2 font-medium text-bg"
        >
          CURATE YOUR OWN DREAM JOURNEY
        </button>
      </div>
    </div>
  </section>
  <!-- /YOUR DOOR TO -->

  <!-- WHY US -->
  <section class="tablet:pb-[150px] max-tablet:pb-[75px]">
    <div class="mx-auto max-w-[1380px] px-4">
      <h2
        class="tablet:text-[42px] max-tablet:text-[35px] text-center font-[500] uppercase"
      >
        WHY US?
      </h2>

      <div
        class="tablet:grid-cols-2 tablet:pt-[80px] max-tablet:pt-[40px] tablet:gap-y-[50px] max-tablet:gap-y-[35px] grid justify-items-center gap-x-3 font-openSans"
      >
        <div
          class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
        >
          <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
            Experience
          </h4>

          <p class="tablet:text-[20px] font-light italic">
            With 10+ years in the Luxury Concierge Industry and more supplier
            relationships than we’d like to keep track of, we finally pooled it
            all together in one place.
          </p>
        </div>
        <div
          class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
        >
          <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
            Authenticity
          </h4>

          <p class="tablet:text-[20px] font-light italic">
            We are committed to genuine experiences. Our privileged insider
            knowledge enables us to go beyond the well-trodden tourist trail in
            search of the most coveted hidden gems.
          </p>
        </div>
        <div
          class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
        >
          <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
            Personalised Service
          </h4>

          <p class="tablet:text-[20px]">
            We promise immediate assistance and support before, during, and
            after your trip for any travel issues or emergencies
          </p>
        </div>
        <div
          class="tablet:px-4 tablet:py-2 max-tablet:gap-[15px] tablet:gap-[30px] flex w-full flex-col text-center"
        >
          <h4 class="tablet:text-[27px] max-tablet:text-[22px] font-bold">
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
  <section class="tablet:pb-[220px] max-tablet:pb-[100px]">
    <h2
      class="tablet:text-[42px] max-tablet:text-[35px] px-4 text-center font-[500] uppercase"
    >
      CLIENT EXPERIENCE
    </h2>

    <swiper
      class="pl-4 pt-[40px]"
      :breakpoints="{
        320: {
          slidesPerView: 1.2,
          spaceBetween: 10,
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
          class="tablet:min-h-[417px] max-tablet:min-h-[350px] flex flex-col gap-[14px] bg-white px-[25px] py-8"
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
          class="tablet:min-h-[417px] max-tablet:min-h-[350px] flex flex-col gap-[14px] bg-white px-[25px] py-8"
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
          class="tablet:min-h-[417px] max-tablet:min-h-[350px] flex flex-col gap-[14px] bg-white px-[25px] py-8"
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
          class="tablet:min-h-[417px] max-tablet:min-h-[350px] flex flex-col gap-[14px] bg-white px-[25px] py-8"
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
          class="tablet:min-h-[417px] max-tablet:min-h-[350px] flex flex-col gap-[14px] bg-white px-[25px] py-8"
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
  </section>
  <!-- / CLIENT EXPERIENCE -->

  <section class="pb-[55px]">
    <h2
      class="tablet:text-[42px] max-tablet:text-[25px] max-mobile:text-[20px] px-4 text-center font-[500] uppercase"
    >
      @LITTLEBLUEDOOR.TRAVEL
    </h2>

    <swiper
      class="laptop:pl-[43px] max-laptop:pl-4 pt-[50px]"
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
