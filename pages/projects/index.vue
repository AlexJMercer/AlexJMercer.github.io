<template>
  <main>
    <div class="bg-dark">
      <div class="d-block mx-auto mb-4">
        <div class="d-flex py-2">
          <img
            src="~/assets/images/ultimate-logo-red.svg"
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
    <section class="container-fluid">
      <div class="container">
        <h1
          :class="
            isDarkTheme ? 'cyber-underline-light' : 'cyber-underline-dark'
          "
        >
          Projetos
        </h1>
        <p class="font-art" style="font-size: 20px">
          Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
          âmbito acadêmico e profissional, quanto para o pessoal com o objetivo
          de me manter sempre em evolução das minhas técnicas e habilidades, e
          praticando o uso da criatividade para o desenvolvimento dos meus
          projeto em geral.
        </p>
      </div>
      <div class="container-fluid">
        <div class="grid-cards">
          <div class="grid-cards-content">
            <CardBackground
              v-for="article in articles"
              :key="article.slug"
              :article="article"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $content, params }) {
    const articles = await $content('projects', { deep: true }, params.slug)
      .sortBy('createdDate', 'desc')
      .fetch()
    console.log(JSON.stringify(articles, undefined, 2))
    return {
      articles,
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
}
</script>
