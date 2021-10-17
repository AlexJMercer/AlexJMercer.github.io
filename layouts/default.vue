<template>
  <main class="main-layout">
    <Sidebar :channels="menu" />
    <div id="grid" class="grid">
      <div
        class="Nav-bar"
        :class="
          !isDarkTheme
            ? 'text-dark bg-light border-bottom border-dark'
            : 'border-bottom border-light'
        "
      >
        <div class="d-flex align-middle py-2 px-4">
          <nuxt-link
            to="/"
            class="d-inline-block d-sm-none d-md-none d-xl-none d-xxl-none me-3"
          >
            <template v-if="isDarkTheme">
              <img
                src="../assets/images/ultimate-logo-light.svg"
                title="Ultimate Mercer"
                width="50"
                class="mx-auto d-block"
              />
            </template>
            <template v-else>
              <img
                src="../assets/images/ultimate-logo-dark.svg"
                title="Ultimate Mercer"
                width="50"
                class="mx-auto d-block"
              />
            </template>
          </nuxt-link>
          <button
            type="button"
            class="btn d-inline-block d-sm-none d-md-none d-xl-none d-xxl-none"
            :class="isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'"
            @click.prevent="sidebarSwitch"
          >
            <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
          </button>
          <div class="ms-auto">
            <button
              class="btn ml-auto"
              :class="isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'"
              @click.prevent="darkTheme"
            >
              <font-awesome-icon :icon="['fas', 'adjust']" size="lg" />
            </button>
          </div>
        </div>
      </div>
      <div class="content" :class="!isDarkTheme ? 'text-dark bg-light' : ''">
        <Nuxt />
        <template v-if="$route.name !== 'index'">
          <Footer />
        </template>
        <ColorFilters />
      </div>
    </div>
  </main>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

import dataMenu from "~/assets/data/menu.json";

export default {
  data() {
    return {
      menu: dataMenu,
      isDark: true,
    };
  },

  computed: {
    ...mapGetters(["isDarkTheme", "isSidebarOpen"]),

    showChannels() {
      return console.log(this.channels);
    },
  },

  methods: {
    ...mapMutations({
      darkTheme: "darkTheme",
      sidebarSwitch: "sidebarSwitch",
    }),

    lightMode() {
      this.isDark = !this.isDark;
      console.log(this.isDark);
    },
  },
};
</script>
<style lang="scss">
.grid {
  flex: 1;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "NavBar NavBar NavBar"
    "Content Content Content "
    "Content Content Content "
    "Content Content Content "
    "Footer Footer Footer ";
  height: 100vh;
}

.Nav-bar {
  grid-area: NavBar;
  z-index: 1000;
}

.content {
  grid-area: Content;
  max-width: 100%;
  overflow-y: auto;
}

.footer {
  grid-area: Footer;
  max-width: 100%;
  padding: 0.5rem 1rem 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "IBM Plex Sans Condensed", "Roboto Mono", consolas, monospace !important;
}
</style>
