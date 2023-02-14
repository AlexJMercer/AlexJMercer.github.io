<template>
  <div>
    <div class="bg-dark">
      <img
        src="~/assets/images/ultimate-logo-red.svg"
        width="175"
        style="margin: 0 auto 1.25rem; display: block; padding: 1.25rem"
      />
    </div>

    <div class="container-fluid px-md-5">
      <div class="container">
        <h1
          :class="
            isDarkTheme ? 'cyber-underline-light' : 'cyber-underline-dark'
          "
        >
          Projetos pessoais - Arte digital
        </h1>
        <p class="font-art" style="font-size: 18px">
          Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
          âmbito acadêmico e profissional, quanto para o pessoal com o objetivo
          de me manter sempre em evolução das minhas técnicas e habilidades, e
          praticando o uso da criatividade para o desenvolvimento dos meus
          projeto em geral.
        </p>
      </div>

      <!-- <div class="grid-masonry mb-4">
        <div class="grid-sizer col-xl-4 col-lg-4 col-md-6 col-12"></div>
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="grid-item col-xl-4 col-lg-4 col-md-6 col-12 px-lg-2 px-md-2"
        >
          <div
            class="card card-masonry card-raised my-2"
            :class="
              isDarkTheme
                ? 'card-plain hover-card-bordered-crimson border border-light'
                : 'hover-card-bordered-uv card-raised border border-dark'
            "
          >
            <div class="card-masonry-area-image view-anchor gradient-mask">
              <img
                :src="article.cover ? article.cover : article.imageHeader"
                class="card-masonry-image"
                :class="colorFilterRandom"
                :alt="article.title"
              />
              <div class="mask gradient-mask"></div>
            </div>
            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-end"
            >
              <div class="">
                <div class="badge badge-tag bg-dark text-light">
                  <DateFormat :date="article.createdDate" />
                </div>

                <h3 class="card-title text-light mt-1 mb-2">
                  {{ article.title }}
                </h3>
                <div class="d-flex justify-content-end">
                  <nuxt-link
                    :to="article.path"
                    class="btn btn-raised btn-read-more-sm ms-auto"
                    :class="isDarkTheme ? 'btn-crimson' : 'btn-uv'"
                    >Acessar projeto</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <div class="container-fluid px-xl-5">
      <div class="grid-cards">
        <section v-if="articles.length > 0" class="grid-cards-content">
          <div
            v-for="article of articles"
            :key="article.title"
            class="card card-background view-anchor my-2"
            :class="[
              isDarkTheme
                ? 'hover-card-bordered-crimson border border-light'
                : 'hover-card-bordered-uv border border-dark',
            ]"
          >
            <img
              :src="article.cover ? article.cover : article.imageHeader"
              class="card-background-image-featured"
              alt="..."
              :class="colorFilterRandom"
            />
            <div class="mask texture-mask-4 gradient-mask"></div>

            <div
              class="card-img-overlay p-3 h-100 d-flex flex-column justify-content-end"
            >
              <div class="">
                <div class="badge badge-tag bg-dark text-light">
                  <DateFormat :date="article.createdDate" />
                </div>
              </div>

              <h3 class="card-title text-light my-2">
                {{ article.title }}
              </h3>
              <div class="d-flex justify-content-end">
                <nuxt-link
                  :to="article.path"
                  class="btn btn-raised btn-read-more-sm ms-auto"
                  :class="isDarkTheme ? 'btn-crimson' : 'btn-uv'"
                >
                  Acessar projeto
                </nuxt-link>
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
    const articles = await $content('projects/art', params.slug)
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
      const filters = [
        // 'black-white',
        'cyberpunk-v',
        // 'purple-red-orange',
        'blue-red-golden',
      ]
      const num = Math.floor(Math.random() * filters.length)
      const filter = `hover-filter-${filters[num]}`
      return filter
    },
  },
  watch: {
    data() {
      this.loadMasonry()
    },
  },
  mounted() {
    this.loadMasonry()
  },
  methods: {
    loadMasonry() {
      const Masonry = require('masonry-layout')
      const ImagesLoaded = require('imagesloaded')
      const grid = document.querySelector('.grid-masonry')
      ImagesLoaded(grid, () => {
        this.$emit('images-loaded')
        const msnry = new Masonry(grid, {
          // options...
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
          // gutter: 4,
          // fitWidth: true,
        })
        this.$emit('masonry-loaded', msnry)
      })
    },
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
    grid-template-columns: repeat(3, 1fr);
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
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media screen and (max-width: 768px) {
  .grid-cards {
    padding: 0;
    &-content {
      grid-template-columns: 1fr;
    }
  }
}
</style>

<style lang="scss" scoped>
.grid-masonry {
  /* display: flex;
  width: 100%; */
  /* // padding: 0.25rem;
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
  } */
}
::selection {
  color: #121212;
  background: #ffff00;
}

.card-img-art {
  height: 650px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .card-img-art {
    height: 400px;
    object-fit: cover;
  }
}

.font-art {
  font-family: 'Inter', sans-serif;
}

.gradient-mask {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    rgba(18, 18, 18, 1) 100%
  );
}
</style>
