<template>
  <div>
    <div class="bg-dark">
      <img
        src="~/assets/images/ultimate-logo-red.svg"
        width="175"
        style="margin: 0 auto 1.25rem; display: block; padding: 1.25rem"
      />
    </div>

    <div class="container-fluid">
      <div class="container">
        <h1
          class="font-monospace"
          :class="
            !isDarkTheme ? 'cyber-underline-light' : 'cyber-underline-dark'
          "
        >
          Projetos pessoais - Arte digital
        </h1>
        <p class="font-monospace" style="font-size: 1.25rem">
          Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
          âmbito acadêmico e profissional, quanto para o pessoal com o objetivo
          de me manter sempre em evolução das minhas técnicas e habilidades, e
          praticando o uso da criatividade para o desenvolvimento dos meus
          projeto em geral.
        </p>
      </div>

      <!-- <div class="grid-masonry mb-4 mx-auto d-block">
        <div class="grid-masonry-sizer"></div>
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="grid-masonry-item"
        >
          <div
            class="card card-masonry card-raised view-anchor"
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
      </div> -->
    </div>

    <div class="container-lg" style="max-width: 1700px !important">
      <div class="grid-cards">
        <section v-if="articles.length > 0" class="grid-cards-content">
          <div
            v-for="article of articles"
            :key="article.title"
            class="card card-raised card-background view-anchor my-2"
            :class="[
              isDarkTheme
                ? 'hover-card-yellow-bordered border border-light'
                : 'hover-card-uv-bordered border border-dark',
            ]"
          >
            <img
              :src="article.cover ? article.cover : article.imageHeader"
              class="card-background-image-featured card-img-border"
              alt="..."
              style="height: calc(95vh - 60px) !important"
              :class="colorFilterRandom"
            />
            <div class="mask texture-mask-4"></div>

            <div
              class="
                card-img-overlay
                h-100
                d-flex
                flex-column
                justify-content-end
              "
            >
              <div class="">
                <span
                  class="
                    badge
                    bg-dark
                    text-light
                    badge-tag
                    border border-dark
                    ms-0
                    me-2
                  "
                >
                  <DateFormat :date="article.createdDate" />
                </span>
              </div>

              <h3 class="card-title my-2">
                <span class="text-light bg-dark py-1">
                  <em>
                    <i class="marker-line"> {{ article.title }} </i>
                  </em>
                </span>
              </h3>
              <div class="d-flex justify-content-end">
                <nuxt-link
                  :to="article.path"
                  class="btn btn-raised btn-uv btn-read-more-sm ms-auto"
                  >Acessar projeto</nuxt-link
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('art', params.slug)
      .sortBy('createdDate', 'desc')
      .fetch()
    // console.log(JSON.stringify(articles, undefined, 2));
    return {
      articles,
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
    colorFilterRandom() {
      const filters = ['black-white', 'cyberpunk-v', 'purple-red-orange']
      const num = Math.floor(Math.random() * filters.length)
      const filter = `hover-filter-${filters[num]}`
      return filter
    },
  },
  watch: {
    data() {
      // this.loadMasonry()
    },
  },
  mounted() {
    // this.loadMasonry()
  },
  methods: {
    // loadMasonry() {
    //   const Masonry = require('masonry-layout')
    //   const ImagesLoaded = require('imagesloaded')
    //   const grid = document.querySelector('.grid-masonry')
    //   ImagesLoaded(grid, () => {
    //     this.$emit('images-loaded')
    //     const msnry = new Masonry(grid, {
    //       // options...
    //       itemSelector: '.grid-masonry-item',
    //       columnWidth: '.grid-masonry-sizer',
    //       // percentPosition: true,
    //       gutter: 4,
    //       fitWidth: true,
    //     })
    //     this.$emit('masonry-loaded', msnry)
    //   })
    // },
  },
}
</script>

<style lang="scss">
.grid-cards {
  max-width: 100vw;
  margin: 0 auto;
  padding: 0 20px;
  &-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-auto-columns: auto auto;
    column-gap: 16px;
    align-items: flex-start;
  }
}
@media screen and (max-width: 1500px) {
  .grid-cards {
    &-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (max-width: 992px) {
  .grid-cards {
    &-content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (max-width: 768px) {
  .grid-cards {
    padding: 0 16px;
    &-content {
      grid-template-columns: 1fr;
    }
  }
}
</style>

<style lang="scss" scoped>
.grid-masonry {
  display: flex;
  width: 100%;
  // padding: 0.25rem;
  // grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  // grid-template-columns: repeat(4, 1fr);
  // grid-auto-rows: minmax(25%, 1fr);
  //grid-template-rows: masonry;
  &-item,
  &-sizer {
    width: 32%;
  }
  @media screen and (max-width: 1500px) {
    &-item,
    &-sizer {
      width: 33%;
    }
  }
  @media screen and (max-width: 1200px) {
    &-item,
    &-sizer {
      width: 50%;
    }
  }
  @media screen and (max-width: 992px) {
    &-item,
    &-sizer {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    &-item,
    &-sizer {
      max-width: 100vw;
      width: 100%;
    }
  }
}
::selection {
  color: #121212;
  background: #ffff00;
}
</style>
