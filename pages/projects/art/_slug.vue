<template>
  <LayoutContent>
    <template v-if="article.layout === 'two-column'">
      <ArticleTwoColumn :article="article" />
    </template>
    <template v-else>
      <Article :article="article" />
    </template>
    <PrevNextArticles :prev="prev" :next="next" />
  </LayoutContent>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('projects/art', params.slug).fetch()
    const [prev, next] = await $content('projects/art')
      .only([
        'title',
        'slug',
        'cover',
        'imageHeader',
        'createdDate',
        'channel',
        'dir',
      ])
      .sortBy('createdDate', 'desc')
      .where({ isPublished: true })
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  },
  // head() {
  //   const url = this.article.slug;
  //   const image = this.article.cover
  //     ? this.article.cover
  //     : this.article.imageHeader;
  //   const { title, description } = this.article;
  //   return {
  //     title: `${title} - Ultimate Mercer`,
  //     meta: createSEOMeta({ title, description, image, url }),
  //   };
  // },
}
</script>
