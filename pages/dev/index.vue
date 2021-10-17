<template>
  <div>
    <div class="bg-dark">
      <div class="d-block mx-auto mb-4">
        <div class="d-flex">
          <img
            src="~/assets/images/ultimate-logo-light.svg"
            width="150"
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
            width="125"
            style="margin: 0 auto; display: block; padding: 1.25rem"
          />
        </div>
      </div>
    </div>

    <div class="container-lg">
      <h1>Projetos pessoais - Desenvolviment web</h1>
      <p style="font-size: 1.25rem">
        Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto para o
        âmbito acadêmico e profissional, quanto para o pessoal com o objetivo de
        me manter sempre em evolução das minhas técnicas e habilidades, e
        praticando o uso da criatividade para o desenvolvimento dos meus projeto
        em geral.
      </p>
      <div class="">
        <div class="" v-for="(project, i) in projects" :key="i">
          <div
            class="card card-raised card-horizontal hover-card mb-4"
            :class="[
              isDarkTheme
                ? 'hover-card-yellow-bordered card-plain border border-light'
                : 'hover-card-uv-bordered border border-dark',
            ]"
          >
            <img
              v-lazy="project.cover ? project.cover : project.imageHeader"
              class="card-horizontal-image"
              alt=""
            />

            <div class="card-body py-4">
              <h4 class="card-title">
                <span
                  class="py-1"
                  :class="
                    isDarkTheme ? 'text-dark bg-light' : 'text-light bg-dark'
                  "
                >
                  <em>
                    <i class="marker-line"> {{ project.title }} </i>
                  </em>
                </span>
              </h4>
              <p class="d-block d-sm-block d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum vitae sint nisi fugiat minima.
              </p>
              <div class="d-flex justify-content-end">
                <nuxt-link
                  :to="project.path"
                  class="btn btn-raised btn-uv btn-read-more ml-auto"
                  >Acessar projeto</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  async asyncData({ $content, params }) {
    const projects = await $content("dev", params.slug)
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
.item {
  // background-color: #480bff;
}
</style>
