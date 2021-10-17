<template>
  <div id="topAnchor">
    <template v-if="article.layout === 'two-column'">
      <ArticleTwoColumn :article="article" :author="author" />
    </template>
    <template v-else>
      <Article :article="article" :author="author" />
    </template>
    <PrevNextArticles :prev="prev" :next="next" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("dev", params.slug).fetch();

    const [prev, next] = await $content("dev")
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
    return { title: this.article.title };
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
