<template>
  <div class="flex flex-col pt-headerHeight">
    <h1 class="text-[30px] text-black">Cделанные страницы:</h1>

    <ul class="flex flex-col justify-center pl-6">
      <li><router-link to="/">homePage</router-link></li>
      <li><router-link to="/hotel">Hotel</router-link></li>
      <li><router-link to="/someHotels">SomeOfTheHotels</router-link></li>
      <li><router-link to="/bespoke">Bespoke</router-link></li>
      <li><router-link to="/luxury">Luxury</router-link></li>
      <li><router-link to="/digital">DigitalTravel</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>
