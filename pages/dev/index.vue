<template>
  <div>
    <div class="bg-dark">
      <div class="d-block mx-auto mb-4">
        <div class="d-flex">
          <img
            src="~/assets/images/ultimate-logo-light.svg"
            width="175"
            style="margin: 0 auto; display: block; padding: 1.25rem"
          />
          <span class="my-auto">
            <font-awesome-icon
              :icon="['fas', 'plus']"
              size="lg"
              class="text-light"
            />
          </span>
          <img
            src="~/assets/images/blklight-base-w.svg"
            width="150"
            style="margin: 0 auto; display: block; padding: 1.25rem"
          />
        </div>
      </div>
    </div>

    <div class="container">
      <h1>Em atualização...</h1>
    </div>
    <section class="container">
      <CardText
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('projects/dev', params.slug)
      .sortBy('createdDate', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
}
</script>
