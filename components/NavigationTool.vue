<template>
  <div class="d-inline-block position-relative">
    <div
      class="d-flex align-items-center background-texture rounded border"
      :class="isDarkTheme ? 'border-dark' : 'border-light'"
      style="min-width: 150px"
    >
      <div class="flex-shrink-0">
        <img
          src="https://i.imgur.com/diuV6oy.jpg"
          class="rounded"
          style="width: 45px; height: 45px; object-fit: cover"
          alt=""
        />
      </div>
      <div
        class="d-flex align-items-center flex-grow-1 ms-3"
        :class="isDarkTheme ? 'text-dark' : 'text-light'"
      >
        home
        <button
          class="btn btn-sm ms-auto"
          :class="isDarkTheme ? 'text-dark' : 'text-light'"
          @click.prevent="toggle"
        >
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </button>
      </div>
    </div>

    <div v-if="open" class="dropdown-nav">
      <div
        v-for="link in menu"
        :key="link.name"
        class="d-flex align-items-center mb-1 background-texture rounded border"
        :class="isDarkTheme ? 'bg-light border-dark' : 'bg-dark border-light'"
        style="min-width: 200px"
      >
        <div class="flex-shrink-0">
          <img
            :src="thumbSrc(link.thumb)"
            class="rounded"
            style="width: 45px; height: 45px; object-fit: cover"
            alt=""
          />
        </div>
        <div
          class="d-flex align-items-center flex-grow-1 ms-3"
          :class="isDarkTheme ? 'text-dark' : 'text-light'"
        >
          <span style="white-space: nowrap">
            {{ link.name }}
          </span>
          <nuxt-link
            :to="{ name: link.slug }"
            class="btn btn-sm ms-auto"
            :class="isDarkTheme ? 'text-dark' : 'text-light'"
          >
            <font-awesome-icon :icon="['fas', 'folder-open']" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import menuData from "~/assets/data/menu.json";

export default {
  props: {
    links: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      open: false,
      menu: menuData,
      activeUrl: {
        thumb: "",
        name: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isDarkTheme"]),
  },
  watch: {
    $route(to, from) {
      this.open = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    },
    linkClicked(url) {
      this.toggle();
      this.changeUrl(url);
    },
    changeUrl(url) {
      this.activeUrl = url;
    },
    thumbSrc(url) {
      if (url.startsWith("http") || url.startsWith("https")) {
        return url;
      } else {
        return require(`~/assets/images/thumbs/${url}`);
      }
    },
  },
};
</script>
<style lang="scss">
.dropdown-nav {
  width: 100%;
  background-color: transparent;
  background-clip: padding-box;
  border: none;
  color: #121212;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  list-style: none;
  margin: 0.125rem 0 0;
  padding: 0.25rem 0;
  position: absolute;
  left: 0;
}
</style>
