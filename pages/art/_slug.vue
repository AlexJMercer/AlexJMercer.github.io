<template>
  <div id="topAnchor">
    <template v-if="article.layout === 'two-column'">
      <ArticleTwoColumn :article="article" />
    </template>
    <template v-else>
      <Article :article="article" />
    </template>
    <PrevNextArticles :prev="prev" :next="next" />
  </div>
</template>
<script>
import { createSEOMeta } from "~/utils/seo.js";

export default {
  async asyncData({ $content, params }) {
    const article = await $content("art", params.slug).fetch();

    const [prev, next] = await $content("art")
      .only([
        "title",
        "slug",
        "cover",
        "imageHeader",
        "createdDate",
        "channel",
        "dir",
      ])
      .sortBy("createdDate", "desc")
      .where({ isPublished: true })
      .surround(params.slug)
      .fetch();
    return { article, prev, next };
  },

  head() {
    const url = this.article.slug;
    const image = this.article.cover
      ? this.article.cover
      : this.article.imageHeader;
    const { title, description } = this.article;

    return {
      title: `${title} - Ultimate Mercer`,
      meta: createSEOMeta({ title, description, image, url }),
    };
  },

  mounted() {
    this.scrollTopHack();
  },

  methods: {
    scrollTopHack() {
      const element = document.getElementById("topAnchor");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    },
  },
};
</script>
