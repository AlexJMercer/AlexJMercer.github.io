<template>
  <LayoutContent>
    <div style="background-color: #1779ff">
      <img
        src="~/assets/images/ultimate-logo-light.svg"
        width="175"
        style="margin: 0 auto 1.25rem; display: block; padding: 1.25rem"
      />
    </div>
    <section class="container">
      <h1
        :class="isDarkTheme ? 'cyber-underline-light' : 'cyber-underline-dark'"
      >
        Projetos profissionais e acadêmicos
      </h1>
      <p style="font-size: 1.25rem">
        Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
        âmbito acadêmico e profissional, quanto para o pessoal com o objetivo de
        me manter sempre em evolução das minhas técnicas e habilidades, e
        praticando o uso da criatividade para o desenvolvimento dos meus projeto
        em geral.
      </p>
      <CardHorizontal
        v-for="article in articles"
        :key="article.slug"
        :article="article"
      />
    </section>
  </LayoutContent>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('pro', params.slug)
      .sortBy('createdDate', 'asc')
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
