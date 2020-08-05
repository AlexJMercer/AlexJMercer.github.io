<template>
  <div>
    <div v-if="post.orientation === 'portrait' || post.orientation === ''">
      <div class="header-content header-h-full d-md-inline-flex mb-4">
        <div class="header-info-half header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ post.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span
                  v-if="post.category === 'Design'"
                  class="badge badge-tag badge-uv mx-0"
                >
                  {{ post.category }}
                </span>
                <span
                  v-if="post.category === 'Dev'"
                  class="badge badge-tag badge-primary text-dark mx-0"
                >
                  {{ post.category }}
                </span>
                <span
                  v-if="post.type === 'Pro'"
                  class="badge badge-tag badge-dark mx-0"
                >
                  {{ post.type }}
                </span>
                <span
                  v-if="post.type === 'Pessoal'"
                  class="badge badge-tag badge-orange mx-0"
                >
                  {{ post.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="header-image-half header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
      </div>
    </div>
    <div v-if="post.orientation === 'landscape'">
      <div
        class="header-content header-h-full d-md-inline-flex shadow-image mb-4"
      >
        <div class="header-info header-h-full">
          <div class="h-100 d-flex flex-column justify-content-end">
            <h1 class="blog-title">
              <span class="marker marker-dark title">
                {{ post.title }}
              </span>
            </h1>
            <h5 class="blog-meta">
              <span class="marker marker-dark sm-mark">
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span v-if="post.category === 'Design'">
                  <span class="badge badge-tag badge-uv mx-0">
                    {{ post.category }}
                  </span>
                </span>
                <span v-if="post.category === 'Dev'">
                  <span class="badge badge-tag badge-primary text-dark mx-0">
                    {{ post.category }}
                  </span>
                </span>
                <span v-if="post.type === 'Pro'">
                  <span class="badge badge-tag badge-dark mx-0">
                    {{ post.type }}
                  </span>
                </span>
                <span v-if="post.type === 'Pessoal'">
                  <span class="badge badge-tag badge-orange mx-0">
                    {{ post.type }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="header-image header-h-full view">
          <div
            v-lazy:background-image="imageSrc"
            class="header-image-background header-h-full"
          ></div>
          <div class="mask texture-mask-4"></div>
        </div>
      </div>
    </div>
    <div v-if="post.orientation === 'parallax'">
      <div style="height: 80px;"></div>

      <div class="header-simple">
        <div
          v-lazy:background-image="imageSrc"
          class="header-simple-image-parallax view mb-4"
        >
          <div class="mask parallax-mask texture-mask-4"></div>
        </div>
        <div class="container p-lg-0">
          <div class="header-simple-info">
            <h1 class="blog-title">
              <span class="marker marker-dark marker-title">
                {{ post.title }}
              </span>
            </h1>
            <h5 v-if="post.description" class="blog-meta">
              <span class="marker marker-dark">
                {{ post.description }}
              </span>
            </h5>
            <h5 class="blog-meta">
              <span class="marker marker-dark">
                {{ dateFormat }}
              </span>
            </h5>
            <div class="d-flex">
              <div class="mt-1">
                <span>
                  <span
                    v-if="post.category === 'Design'"
                    class="badge badge-tag badge-uv mx-0"
                  >
                    {{ post.category }}
                  </span>
                </span>
                <span
                  v-if="post.category === 'Dev'"
                  class="badge badge-tag badge-primary text-dark mx-0"
                >
                  {{ post.category }}
                </span>
                <span
                  v-if="post.type === 'Pro'"
                  class="badge badge-tag badge-dark mx-0"
                >
                  {{ post.type }}
                </span>
                <span
                  v-if="post.type === 'Pessoal'"
                  class="badge badge-tag badge-orange mx-0"
                >
                  {{ post.type }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="post.orientation === 'square-profile'">
      <div style="height: 80px;"></div>

      <div class="container-fluid p-0">
        <div class="container p-0">
          <div class="col-12 pt-lg-3 py-2 px-3">
            <div class="header-profile">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12 col-12">
                  <div
                    v-lazy-container="{ selector: 'img' }"
                    class="head-avatar"
                  >
                    <img
                      :data-src="imageSrc"
                      width="325"
                      class="rounded shadow-image img-fluid mx-auto d-block mb-4"
                      :alt="post.title"
                    />
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12 col-12">
                  <div class="head-text my-3">
                    <h1 class="blog-title">
                      <span class="marker marker-dark marker-title">
                        {{ post.title }}
                      </span>
                    </h1>
                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ post.description }}
                      </span>
                    </h5>
                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ dateFormat }}
                      </span>
                    </h5>
                    <div class="d-flex">
                      <div class="mt-1">
                        <span
                          v-if="post.category === 'Design'"
                          class="badge badge-tag badge-uv mx-0"
                        >
                          {{ post.category }}
                        </span>
                        <span
                          v-if="post.category === 'Dev'"
                          class="badge badge-tag badge-primary text-dark mx-0"
                        >
                          {{ post.category }}
                        </span>
                        <span
                          v-if="post.type === 'Pro'"
                          class="badge badge-tag badge-dark mx-0"
                        >
                          {{ post.type }}
                        </span>
                        <span
                          v-if="post.type === 'Pessoal'"
                          class="badge badge-tag badge-orange mx-0"
                        >
                          {{ post.type }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="post.orientation === 'circle-profile'">
      <div style="height: 80px;"></div>

      <div class="container-fluid p-0">
        <div class="container p-0">
          <div class="col-12 pt-lg-3 py-2 px-3">
            <div class="header-profile">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12 col-12">
                  <div
                    v-lazy-container="{ selector: 'img' }"
                    class="head-avatar"
                  >
                    <img
                      :data-src="imageSrc"
                      width="325"
                      class="rounded-circle shadow-image img-fluid mx-auto d-block mb-4"
                      :alt="post.title"
                    />
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-xs-12 col-12">
                  <div class="head-text my-3">
                    <h1 class="blog-title">
                      <span class="marker marker-dark title">
                        {{ post.title }}
                      </span>
                    </h1>
                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ post.description }}
                      </span>
                    </h5>
                    <h5 class="blog-meta">
                      <span class="marker marker-dark sm-mark">
                        {{ dateFormat }}
                      </span>
                    </h5>
                    <div class="d-flex">
                      <div class="mt-1">
                        <span v-if="post.category === 'Design'">
                          <span class="badge badge-tag badge-uv mx-1">
                            {{ post.category }}
                          </span>
                        </span>
                        <span v-if="post.category === 'Dev'">
                          <span
                            class="badge badge-tag badge-primary text-dark mx-1"
                          >
                            {{ post.category }}
                          </span>
                        </span>
                        <span v-if="post.type === 'Pro'">
                          <span class="badge badge-tag badge-dark mx-1">
                            {{ post.type }}
                          </span>
                        </span>
                        <span v-if="post.type === 'Pessoal'">
                          <span class="badge badge-tag badge-orange mx-1">
                            {{ post.type }}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="post.orientation === 'image-top'">
      <div class="container-fluid p-0 mb-4">
        <div class="col-lg-10 offset-lg-1 col-12 p-lg-0">
          <div class="header-simple">
            <div
              v-lazy-container="{ selector: 'img' }"
              class="view shadow-image"
            >
              <img
                :data-src="imageSrc"
                alt=""
                class="header-simple-image-top"
              />
              <div class="mask texture-mask-4"></div>
            </div>
            <div class="px-2">
              <div class="header-simple-info mt-3 mb-5">
                <h1 class="blog-title">
                  <span class="marker marker-dark">
                    {{ post.title }}
                  </span>
                </h1>
                <h5 class="blog-meta">
                  <span class="marker marker-dark">
                    {{ dateFormat }}
                  </span>
                </h5>
                <div class="d-flex">
                  <div class="mt-1">
                    <span
                      v-if="post.category === 'Design'"
                      class="badge badge-tag badge-uv mx-0"
                    >
                      {{ post.category }}
                    </span>
                    <span
                      v-if="post.category === 'Dev'"
                      class="badge badge-tag badge-primary text-dark mx-0"
                    >
                      {{ post.category }}
                    </span>
                    <span
                      v-if="post.type === 'Pro'"
                      class="badge badge-tag badge-dark mx-0"
                    >
                      {{ post.type }}
                    </span>
                    <span
                      v-if="post.type === 'Pessoal'"
                      class="badge badge-tag badge-orange mx-0"
                    >
                      {{ post.type }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
  name: "PostHeaders",

  props: {
    post: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      // orientation: this.post.imgorientation
    };
  },

  computed: {
    imageSrc() {
      const image = this.post.coverAlt ? this.post.coverAlt : this.post.cover;
      // console.log(teste)

      if (image.startsWith("http") || image.startsWith("https")) {
        // console.log(true)
        return image;
      } else {
        // console.log(false)
        return require(`~/assets/images/projects/${image}`);
      }

      //   // Abaixo funfa
      //   // return require(`~/assets/images${this.routes}/${post.attributes.attributes.cover}`)
    },

    dateFormat() {
      const formattedDate = format(
        new Date(this.post.date),
        "dd 'de' MMMM 'de' yyyy",
        {
          locale: ptBR,
        }
      );

      return formattedDate;
    },
  },
};
</script>
