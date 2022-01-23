<template>
  <section>
    <div class="container">
      <button class="btn btn-outline-dark" @click.prevent="buttonOpen()">
        <font-awesome-icon :icon="['fas', 'th']" size="lg" />
        Apps
      </button>
    </div>
    <div v-if="show" class="my-3 py-5 px-3 background-texture">
      <HorizontalScroller>
        <div v-for="(art, i) in arts" :key="i" class="d-inline">
          <div class="d-inline-block">
            <img
              :src="art.url"
              class="img-fluid mx-2 mb-4 rounded shadow"
              :alt="art.title"
              style="width: 300px; height: 150px; object-fit: cover"
            />
            <p class="text-center text-wrap" style="width: 200px">
              {{ art.title }}
            </p>
          </div>
        </div>
        <!-- <div v-for="(item, i) in menu" :key="i" class="d-inline">
          <div class="d-inline-block">
            <img
              :src="thumbSrc(item.thumb)"
              class="img-fluid mx-2 mb-4 rounded shadow"
              :alt="item.name"
              style="width: 250px; height: 250px; object-fit: cover"
            />
            <p class="text-center text-wrap" style="width: 200px">
              {{ item.name }}
            </p>
          </div>
        </div> -->
      </HorizontalScroller>
    </div>
    <div v-if="show">
      <div class="border-gradient-test">
        <img
          src="https://i.imgur.com/KMN1KQ5.jpg"
          alt=""
          style="width: 100%; height: 350px; object-fit: cover"
        />
      </div>
    </div>
    <div class="container">
      <div
        v-for="(item, i) in menu"
        :key="i"
        class="
          d-flex
          align-items-center
          background-texture
          border border-dark
          my-2
        "
        style="border-radius: 10rem"
      >
        <div class="flex-shrink-0">
          <img
            :src="thumbSrc(item.thumb)"
            class="rounded-circle"
            alt="..."
            style="width: 50px; height: 50px; object-fit: cover"
          />
        </div>
        <div class="d-flex flex-grow-1 ms-3">
          {{ item.name }}
          <button class="btn btn-orange btn-sm ms-auto me-3">
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </button>
        </div>
      </div>
    </div>
    <!-- cards -->
    <div class="container">
      <div class="card card-background view-anchor">
        <img
          src=""
          class="card-background-image-featured bg-light"
          alt="Image"
        />
        <div class="mask texture-mask-4"></div>
        <div class="card-img-overlay text-light">
          <h2>Ultimates</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In atque
            explicabo aliquid molestias commodi corrupti quaerat modi magni iste
            doloribus? Dolores dolore a exercitationem dolorum ut. Voluptas,
            debitis velit. Magni!
          </p>
        </div>
      </div>

      <div
        class="card view-anchor"
        :class="isDarkTheme ? 'card-plain text-light' : 'text-dark bg-light'"
      >
        <div class="card-body view-content">
          <h2>Ultimates</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In atque
            explicabo aliquid molestias commodi corrupti quaerat modi magni iste
            doloribus? Dolores dolore a exercitationem dolorum ut. Voluptas,
            debitis velit. Magni!
          </p>
        </div>
        <div class="mask texture-mask-4"></div>
      </div>
    </div>

    <div class="container-lg p-5 background-texture">
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel totam
        pariatur reprehenderit dicta iste neque magni, consectetur, quisquam et
        atque facilis assumenda eos cumque! Quia id voluptatum vel. Ea, nobis!
      </h1>
    </div>

    <div class="container-fluid my-5">
      <div class="masonry-grid">
        <!--Item -->
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="masonry-grid__item"
        >
          <div
            class="card card-masonry card-raised view-anchor mt-0"
            :class="
              !isDarkTheme
                ? 'card-plain hover-card-red-bordered border border-light'
                : 'hover-card-red-bordered card-raised border border-dark'
            "
            style="border-radius: 0.5rem"
          >
            <div class="card-masonry-area-image with-hover-overlay">
              <img
                :src="article.cover ? article.cover : article.imageHeader"
                class="card-masonry-image"
                :class="colorFilterRandom"
                :alt="article.title"
              />
              <div class="mask texture-mask-4"></div>
            </div>
            <div
              class="
                card-masonry-area-header
                h-100
                d-flex
                flex-column
                justify-content-end
              "
            >
              <div class="">
                <h4 class="card-title">
                  <span class="text-light bg-dark py-1">
                    <em>
                      <i class="marker-line"> {{ article.title }} </i>
                    </em>
                  </span>
                </h4>
                <div class="d-flex justify-content-end">
                  <nuxt-link
                    :to="article.path"
                    class="btn btn-raised btn-uv btn-read-more-sm ms-auto"
                    >Acessar projeto</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Repeat other items -->
      </div>
    </div>

    <article></article>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import artsData from "~/assets/data/arts.json";
import menuData from "~/assets/data/menu.json";

export default {
  async asyncData({ $content, params }) {
    const articles = await $content("arts", params.slug)
      .sortBy("createdDate", "desc")
      .fetch();

    console.log(JSON.stringify(articles, undefined, 2));
    return {
      articles,
    };
  },
  data() {
    return {
      games: [],
      show: false,
      arts: artsData,
      menu: menuData,
    };
  },

  // async fetch() {
  //   this.games = await this.$axios.$get(
  //     "https://www.freetogame.com/api/games?platform=pc"
  //   );

  //   console.log(JSON.stringify(this.games, undefined, 2));
  // },

  computed: {
    ...mapGetters(["isDarkTheme"]),
  },

  methods: {
    buttonOpen() {
      this.show = !this.show;
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
.search-bar {
  width: 100%;
  height: 70px;
  background-color: #0e5feb;
  color: #ffffff;
  display: flex;
  align-items: center;
  &--content {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .input-groups {
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: 2px solid #ffffff;
    border-radius: 10em;

    &--icon {
      padding: 0 8px;
    }
  }

  .input-search {
    width: 100%;
    background: transparent;
    /* border: 2px solid #ffffff; */
    border: none;
    color: #ffffff;
    outline: 0;
    border-radius: 10em;
    padding: 8px 16px;

    ::placeholder {
      color: #ffffff !important;
    }
  }

  .filter-button {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 12px 30px;
    font-size: 16px;
    border: none;
    cursor: pointer;

    /* transition-property: border-color, background-color;
      transition-duration: time(default);
      transition-timing-function: ease(inout); */

    span {
      color: #0e5feb;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      /* transition-property: color;
        transition-duration: time(default);
        transition-timing-function: ease(inout); */
    }

    &:hover {
      background-color: darken(#ffffff, 10%) !important;

      /* span {
          color: #ffffff;
        } */
    }
  }
}

.masonry-grid {
  /* It is split into 3 columns */
  column-count: 3;

  /* The space between columns */
  column-gap: 1rem;

  /* Misc */
  width: 100%;
  padding: 0.5rem 0;
}

.masonry-grid__item {
  /* Prevent a column from breaking into multiple columns */
  break-inside: avoid;

  /* Misc */
  margin-bottom: 1rem;
}

.border-gradient-test {
  width: 100%;
  height: auto;
  /* position: static; */
  &:after {
    /* content: ""; */
    display: block;
    /* position: absolute; */
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(244, 204, 58, 1) 0%,
      rgba(242, 100, 25, 1) 60%,
      rgba(232, 72, 85, 1) 100%
    );
  }
}
</style>
