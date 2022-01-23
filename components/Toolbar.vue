<template>
  <div class="head-toolbar" :class="!isDarkTheme ? 'text-dark' : ''">
    <div class="d-flex align-middle py-2 px-4">
      <nuxt-link to="/" class="d-inline-block me-3">
        <template v-if="!isDarkTheme">
          <img
            src="../assets/images/ultimate-logo-light.svg"
            title="Ultimate Mercer"
            width="55"
            class="mx-auto d-block"
          />
        </template>
        <template v-else>
          <img
            src="../assets/images/ultimate-logo-dark.svg"
            title="Ultimate Mercer"
            width="55"
            class="mx-auto d-block"
          />
        </template>
      </nuxt-link>
      <NavigationTool />
      <!-- <button
        type="button"
        class="btn d-inline-block d-sm-none d-md-none d-xl-none d-xxl-none"
        :class="isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'"
        @click.prevent="sidebarSwitch"
      >
        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
      </button> -->
      <div class="ms-auto">
        <button
          class="btn ml-auto"
          :class="!isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'"
          @click.prevent="darkTheme"
        >
          <font-awesome-icon :icon="['fas', 'adjust']" size="lg" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isDarkTheme", "isSidebarOpen"]),
  },
  methods: {
    ...mapMutations({
      darkTheme: "darkTheme",
      sidebarSwitch: "sidebarSwitch",
    }),
  },
};
</script>
