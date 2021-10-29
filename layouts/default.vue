<template>
  <main
    v-lazy:background-image="setImage"
    class="background-home view-anchor"
    :class="!isDarkTheme ? 'text-dark bg-light' : ''"
  >
    <div class="mask texture-mask-4"></div>
    <Nuxt />
    <ColorFilters />
  </main>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      data: [],
      images: [
        "https://i.imgur.com/p7kPVCN.jpg",
        "https://i.imgur.com/YFUEbBx.jpg",
        "https://i.imgur.com/Qw6LuRE.jpg",
        "https://i.imgur.com/KMN1KQ5.jpg",
      ],
    };
  },

  async fetch() {
    this.data = await this.$content("channels").fetch();
  },

  computed: {
    ...mapGetters(["isDarkTheme", "isSidebarOpen"]),
    setImage() {
      const img = this.images;
      const randomImg = Math.floor(Math.random() * img.length);
      return img[randomImg];
    },
  },

  methods: {
    ...mapMutations({
      darkTheme: "darkTheme",
      sidebarSwitch: "sidebarSwitch",
    }),
  },
};
</script>
<style lang="scss">
.bar-test {
  display: flex;
  max-width: 100%;
}

.main-grid {
  flex: 1;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 60px auto;
  grid-template-areas:
    "Toolbar Toolbar Toolbar"
    "Content Content Content "
    "Content Content Content "
    "Content Content Content "
    "Footer Footer Footer ";
  height: 100vh;
}

.head-toolbar {
  grid-area: Toolbar;
  z-index: 50;
}

.content {
  grid-area: Content;
  max-width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.footer {
  grid-area: Footer;
  max-width: 100%;
  padding: 1rem 1.5rem 1rem;
  margin-top: auto;
}

.background-home {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
