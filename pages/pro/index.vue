<template>
  <div>
    <div style="background-color: #1779ff">
      <img
        src="~/assets/images/ultimate-logo-light.svg"
        width="150"
        style="margin: 0 auto 1.25rem; display: block; padding: 1.25rem"
      />
    </div>
    <div class="container-lg">
      <h1>Projetos profissionais e acadêmicos</h1>
      <p style="font-size: 1.25rem">
        Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
        âmbito acadêmico e profissional, quanto para o pessoal com o objetivo de
        me manter sempre em evolução das minhas técnicas e habilidades, e
        praticando o uso da criatividade para o desenvolvimento dos meus projeto
        em geral.
      </p>
      <div class="grid-card-3 my-4">
        <div v-for="(project, i) in projects" :key="i">
          <div
            class="card card-raised card-background mb-4"
            :class="[
              isDarkTheme
                ? 'hover-card-yellow-bordered border border-light'
                : 'hover-card-uv-bordered border border-dark',
            ]"
          >
            <img
              :src="project.cover ? project.cover : project.imageHeader"
              class="card-background-image card-img-border"
              alt="..."
            />

            <div
              class="
                card-img-overlay
                h-100
                d-flex
                flex-column
                justify-content-end
              "
            >
              <h4 class="card-title my-2">
                <span class="text-light bg-dark py-1">
                  <em>
                    <i class="marker-line"> {{ project.title }} </i>
                  </em>
                </span>
              </h4>
              <div class="d-flex justify-content-end">
                <nuxt-link
                  :to="project.path"
                  class="btn btn-uv btn-raised btn-read-more-sm ml-auto"
                  >Acessar projeto</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="" v-for="(project, i) in projects" :key="i">
        <li>
          <nuxt-link :to="project.path" style="color: #eaeaea">{{
            project.title
          }}</nuxt-link>
        </li>
      </div> -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  async asyncData({ $content, params }) {
    const projects = await $content("pro", params.slug)
      .sortBy("createdDate", "desc")
      .fetch();
    return {
      projects,
    };
  },

  computed: {
    ...mapGetters(["isDarkTheme"]),
  },
};
</script>
<style lang="scss">
.grid-card-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(525px, 2fr));
  column-gap: 15px;
}
</style>
