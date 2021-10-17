<template>
  <div>
    <div class="bg-dark">
      <img
        src="~/assets/images/ultimate-logo-red.svg"
        width="175"
        style="margin: 0 auto 1.25rem; display: block; padding: 1.25rem"
      />
    </div>

    <div class="mx-auto mb-2" style="max-width: 1500px; padding: 0 1rem">
      <div>
        <h1
          :class="
            isDarkTheme ? 'cyber-underline-light' : 'cyber-underline-dark'
          "
        >
          Projetos pessoais - Arte digital
        </h1>
      </div>
      <p style="font-size: 1.25rem">
        Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
        âmbito acadêmico e profissional, quanto para o pessoal com o objetivo de
        me manter sempre em evolução das minhas técnicas e habilidades, e
        praticando o uso da criatividade para o desenvolvimento dos meus projeto
        em geral.
      </p>
    </div>
    <div class="container-fluid">
      <div class="grid-masonry mb-4 mx-xl-3 mx-lg-2">
        <div class="grid-masonry-sizer mx-2"></div>
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="grid-masonry-item"
        >
          <div
            class="card card-masonry card-raised"
            :class="
              isDarkTheme
                ? 'card-plain hover-card-red-bordered border border-light'
                : 'hover-card-red-bordered card-raised border border-dark'
            "
            style="border-radius: 0.5rem"
          >
            <div class="card-masonry-area-image with-hover-overlay">
              <img
                :src="project.cover ? project.cover : project.imageHeader"
                class="card-masonry-image"
                :class="colorFilterRandom"
                :alt="project.title"
              />
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
                      <i class="marker-line"> {{ project.title }} </i>
                    </em>
                  </span>
                </h4>
                <div class="d-flex justify-content-end">
                  <nuxt-link
                    :to="project.path"
                    class="btn btn-raised btn-uv btn-read-more-sm ms-auto"
                    >Acessar projeto</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- <div
            class="card card-raised card-background grid-masonry-item"
            :class="isDarkTheme ? 'hover-card-yellow' : 'hover-card-uv'"
          >
            <img
              v-lazy="project.cover ? project.cover : project.imageHeader"
              class="card-background-image-featured"
              alt="..."
            />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end"
            >
              <h4 class="card-title">
                <span class="text-light bg-dark py-1 px-1">
                  <em>
                    {{ project.title }}
                  </em>
                </span>
              </h4>
              <div class="d-flex">
                <nuxt-link
                  :to="project.path"
                  class="badge badge-tag text-light bg-uv text-end"
                  >Acessar</nuxt-link
                >
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  async asyncData({ $content, params }) {
    const projects = await $content("art", params.slug)
      .sortBy("createdDate", "desc")
      .fetch();

    return {
      projects,
    };
  },

  computed: {
    ...mapGetters(["isDarkTheme"]),

    colorFilterRandom() {
      const filters = [
        "black-white",
        "blue-red",
        "cyberpunk-v",
        "purple-red-orange",
      ];
      const num = Math.floor(Math.random() * filters.length);
      const filter = `hover-filter-${filters[num]}`;

      return filter;
    },
  },

  watch: {
    data() {
      this.loadMasonry();
    },
  },

  mounted() {
    this.loadMasonry();
  },

  methods: {
    loadMasonry() {
      const Masonry = require("masonry-layout");
      const ImagesLoaded = require("imagesloaded");

      const grid = document.querySelector(".grid-masonry");

      ImagesLoaded(grid, () => {
        this.$emit("images-loaded");
        const msnry = new Masonry(grid, {
          // options...
          itemSelector: ".grid-masonry-item",
          columnWidth: ".grid-masonry-sizer",
          percentPosition: true,
        });

        this.$emit("masonry-loaded", msnry);
      });
    },
  },
};
</script>
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
    width: 23%;
  }

  @media screen and (max-width: 1200px) {
    &-item,
    &-sizer {
      width: 40%;
    }
  }

  @media screen and (max-width: 992px) {
    &-item,
    &-sizer {
      width: 35%;
    }
  }

  @media screen and (max-width: 768px) {
    &-item,
    &-sizer {
      width: 100%;
    }
  }
}

::selection {
  color: #121212;
  background: #ffff00;
}
</style>
