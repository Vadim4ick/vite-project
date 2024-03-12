<template>
  <div
    @click="toggleShow"
    className="cursor-pointer h-8 relative z-20 largeDesktop:hidden"
  >
    <div
      :class="
        show ? 'top-[50%] rotate-[-45deg] transition-transform' : 'top-1/4'
      "
      class="absolute right-0 h-0.5 w-12 bg-mainColor transition-transform"
    />
    <div
      :class="
        show ? 'top-[50%] w-12 rotate-45 transition-transform' : 'top-1/2 w-8'
      "
      class="absolute right-0 h-0.5 bg-mainColor transition-transform"
    />
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
      },
    },

    methods: {
      toggleShow() {
        this.$emit("update:show", !this.show);
      },
    },
  };
</script>
