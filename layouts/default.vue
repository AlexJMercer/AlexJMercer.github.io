<template>
  <main class="main-layout" :class="isDarkTheme ? 'bg-light' : 'bg-dark'">
    <div class="main-grid">
      <Toolbar />
      <div class="content" :class="isDarkTheme ? 'text-dark' : ''">
        <Nuxt />
        <template v-if="$route.name !== 'index'">
          <Footer />
        </template>
        <ColorFilters />
      </div>
    </div>

    <!-- <div class="mask texture-mask-4"></div> -->
  </main>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import Toolbar from "~/components/Toolbar.vue";

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
  // async fetch() {
  //   this.data = await this.$content("channels").fetch();
  // },
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
  components: { Toolbar },
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
  /* background-image: url("assets/mask-overlays/13-extra.png");
  background-attachment: fixed; */
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

.main-layout {
  /* background-image: url("assets/mask-overlays/13-extra.png");
  background-attachment: fixed; */
}
</style>
