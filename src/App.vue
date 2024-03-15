<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="h-full flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "App",

    components: {
      Header,
      Footer,
    },
  };
</script>
