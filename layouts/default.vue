<template>
  <div>
    <Navbar />
    <nuxt />

    <Footer />
    <div class="bg-dark">
      <DuotoneFilters />
    </div>
  </div>
</template>
<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
import DuotoneFilters from "~/components/DuotoneFilters.vue";

export default {
  components: {
    Navbar,
    Footer,
    DuotoneFilters,
  },
};
</script>

<style>
@import "~/assets/style/css/ultimate.css";
</style>

<style lang="scss">
body {
  font-family: "Roboto Mono", "Fira Code", "Roboto", -apple-system,
    BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}
</style>
