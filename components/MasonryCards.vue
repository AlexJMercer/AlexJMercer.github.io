<template>
  <div class="grid row py-2">
    <div class="grid-sizer col-lg-4 col-md-6 col-12"></div>

    <div
      v-for="(post, i) in posts"
      :key="i"
      class="col-lg-4 col-md-6 col-12 p-1 grid-item"
    >
      <div class="card card-masonry m-md-0">
        <div class="card-masonry-area-image with-hover-overlay">
          <div class="view">
            <img
              class="img-fluid card-masonry-image"
              :src="imagePath(post)"
              :alt="post.attributes.title"
            />
            <div class="mask texture-mask-2"></div>
          </div>
        </div>
        <div
          class="card-masonry-area-header h-100 d-flex flex-column justify-content-end"
        >
          <h4 class="mb-2">
            <span class="marker marker-dark">
              {{ post.attributes.title }}
            </span>
          </h4>
          <span class="mb-3">
            <span class="badge badge-warning">
              {{ dateFormat(post) }}
            </span>
            <span
              v-if="post.attributes.category === 'Design'"
              class="badge badge-uv mx-0"
            >
              {{ post.attributes.category }}
            </span>
            <span
              v-if="post.attributes.category === 'Dev'"
              class="badge badge-primary text-dark"
            >
              {{ post.attributes.category }}
            </span>
            <span
              v-if="post.attributes.type === 'Pro'"
              class="badge badge-dark"
            >
              {{ post.attributes.type }}
            </span>
            <span
              v-if="post.attributes.type === 'Pessoal'"
              class="badge badge-orange"
            >
              {{ post.attributes.type }}
            </span>
          </span>
          <div v-if="post.attributes.isPublished">
            <router-link
              :to="post.path"
              class="btn btn-dark btn-sm btn-block"
              title="Acessar post do projeto"
              >Ler mais</router-link
            >
          </div>
          <div v-else>
            <button class="btn btn-secondary btn-sm btn-block" disabled>
              Post em atualização
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  name: "MasonryCards",

  props: {
    posts: {
      type: Array,
      default: null,
    },

    route: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      routes: this.$props.route,
    };
  },

  computed: {},

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

      const grid = document.querySelector(".grid");

      ImagesLoaded(grid, () => {
        this.$emit("images-loaded");
        const msnry = new Masonry(grid, {
          // options...
          itemSelector: ".grid-item",
          columnWidth: ".grid-sizer",
          percentPosition: true,
        });

        this.$emit("masonry-loaded", msnry);
      });
    },

    imagePath(post) {
      const image = post.attributes.cover;
      // console.log(teste)

      if (image.startsWith("http") || image.startsWith("https")) {
        // console.log(true)
        return post.attributes.cover;
      } else {
        // console.log(false)
        return require(`~/assets/images${this.routes}/${image}`);
      }

      // Abaixo funfa
      // return require(`~/assets/images${this.routes}/${post.attributes.cover}`)
    },
    dateFormat(post) {
      const time = new Date(post.attributes.date);
      const formattedDate = format(new Date(time), "dd MMM yyyy", {
        locale: ptBR,
      });

      return formattedDate;
    },
  },
};
</script>
