<template>
  <section class="main-article mb-5">
    <ArticleHeader :article="headerData" />
    <article class="mb-5" :class="[!isDarkTheme ? 'light-theme' : '']">
      <template v-if="article.type === 'stories'">
        <div class="nuxt-content mono-font">
          <p class="mb-2">{{ article.abstract }}</p>
          <hr
            v-if="article.toc.length < 2"
            :class="isDarkTheme ? 'bg-light' : 'bg-dark'"
          />
        </div>
      </template>
      <template v-if="article.type === 'stories' && article.toc.length >= 2">
        <div class="nuxt-content mono-font">
          <nav
            class="border py-3 px-md-4 px-3 my-4 rounded"
            :class="isDarkTheme ? 'border-light' : 'border-dark'"
          >
            <h4 class="mb-1">
              <strong><em>Índice</em></strong>
            </h4>
            <hr class="mt-2" :class="isDarkMode ? 'bg-light' : 'bg-dark'" />

            <ul>
              <li v-for="link of article.toc" :key="link.id" class="mb-2">
                <NuxtLink :to="`#${link.id}`">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </template>
      <nuxt-content :document="article" class="mono-font" />

      <template v-if="article.gallery">
        <div class="nuxt-content">
          <figure v-if="article.gallery.length >= 1" class="gallery-block">
            <HorizontalScroller>
              <div
                v-for="(art, i) in article.gallery"
                :key="i"
                class="gallery-block-content"
              >
                <img
                  v-lazy="art"
                  :alt="article.title"
                  :title="article.title"
                  class="gallery-block-img"
                />
              </div>
            </HorizontalScroller>
          </figure>
        </div>
      </template>
    </article>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    article: {
      type: Object,
      default: null,
    },

    author: {
      type: Object,
      default: null,
    },
  },

  computed: {
    ...mapGetters(["isDarkTheme"]),
    headerData() {
      return {
        title: this.article.title,
        date: this.article.createdDate,
        description: this.article.description,
        category: this.article.category,
        channel: this.article.channel,
        // tags: this.article.attributes.tags,
        cover: this.article.cover,
        imageHeader: this.article.imageHeader,
        headerLayout: this.article.headerLayout,
      };
    },
    authorInfo() {
      return {
        username: this.author[0].username,
        bio: this.author[0].bio,
        quote: this.article.author.quote,
        cover: this.author[0].cover,
      };
    },
  },
};
</script>
<style lang="scss">
.main-article {
  .gallery-block {
    display: grid;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 1.25rem;

    &-content {
      display: inline-block;
      margin: 1rem 1rem;
    }

    &-img {
      max-width: 100%;
      height: 85vh;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 768px) {
    .gallery-block {
      display: grid;
      max-width: 100%;
      margin: 0 auto;
      padding: 0 1rem;

      &-content {
        display: block;
        margin: 1rem 1rem;
      }

      &-img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        margin: 0 auto;
        display: block;
      }
    }
  }
}

// .nuxt-content {
//   border: 1px solid #480bff;
// }
</style>
