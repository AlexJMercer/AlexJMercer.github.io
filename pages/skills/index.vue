<template>
  <LayoutContent>
    <div class="skills-header">
      <img
        src="~/assets/images/ultimate-logo-light.svg"
        width="150"
        style="margin: 0 auto 1.25rem; display: block; padding: 1.25rem"
      />
    </div>
    <div class="py-3 container">
      <h1>
        <strong>Conhecimento</strong>
      </h1>
      <div style="font-size: 1.25rem">
        <p>
          Durante os últimos anos venho estudando e praticando a utilização de
          diferentes tecnologias, tanto para o Desenvolvimento Front-end/Web
          quanto para o Design, com isso venho tendo contato e produzindo
          material com diferentes ferramentas, linguagens e tecnologias, que tem
          me propiciado evoluir em ambas as áreas.
        </p>
      </div>
    </div>
    <div class="container">
      <div
        class="card card-plain border border-primary mb-4"
        :class="isDarkTheme ? ' text-light' : 'text-dark'"
      >
        <div class="card-header bg-primary">
          <h2 class="text-light">Desenvolvimento Front-End/Web</h2>
        </div>
        <div class="card-body">
          <h4>Tecnologias conhecidas:</h4>
          <h5 class="mb-3">
            <span class="badge bg-primary border border-dark text-light"
              >HTML</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >CSS</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >SASS/SCSS</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >PHP</span
            >
          </h5>
          <h4>Quero aprimorar:</h4>
          <h5 class="mb-3">
            <span class="badge bg-primary border border-dark text-light"
              >Vue</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >NuxtJS</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >Javascript</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >AdonisJS</span
            >
          </h5>
          <h4>Ferramentas de desenvolvimento:</h4>
          <h5 class="mb-3">
            <span class="badge bg-primary border border-dark text-light"
              >VSCode</span
            >

            <span class="badge bg-primary border border-dark text-light"
              >Bootstrap</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >GitHub</span
            >

            <span class="badge bg-primary border border-dark text-light"
              >NodeJS</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >NPM</span
            >
          </h5>
          <h4>Quero aprender:</h4>
          <h5 class="mb-3">
            <span class="badge bg-primary border border-dark text-light"
              >React</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >NextJS</span
            >
            <span class="badge bg-primary border border-dark text-light"
              >Gatsby</span
            >
          </h5>
        </div>
      </div>

      <div
        class="card card-plain border border-uv text-md-end"
        :class="isDarkTheme ? ' text-light' : 'text-dark'"
      >
        <div class="card-header bg-uv">
          <h2 class="text-light">Design</h2>
        </div>
        <div class="card-body">
          <h4>O que eu gosto de desenvolver:</h4>
          <h5 class="mb-3">
            <span class="badge bg-uv border border-dark">Websites</span>
            <span class="badge bg-uv border border-dark">Posters</span>
            <span class="badge bg-uv border border-dark">Wallpapers</span>
            <span class="badge bg-uv border border-dark">Capas</span>
          </h5>
          <h4>Quero aprimorar:</h4>
          <h5 class="mb-3">
            <span class="badge bg-uv border border-dark"
              >Adobe After Effects</span
            >
            <span class="badge bg-uv border border-dark"
              >Adobe Illustrator</span
            >
            <span class="badge bg-uv border border-dark">Adobe InDesign</span>
          </h5>
          <h4>Ferramentas de design:</h4>
          <h5 class="mb-3">
            <span class="badge bg-uv border border-dark">Adobe Photoshop</span>
            <span class="badge bg-uv border border-dark"
              >Adobe Illustrator</span
            >
            <span class="badge bg-uv border border-dark">Figma</span>
            <span class="badge bg-uv border border-dark">Adobe XD</span>
            <span class="badge bg-uv border border-dark">Invision</span>
          </h5>
          <h4>Quero aprender:</h4>
          <h5 class="mb-3">
            <span class="badge bg-uv border border-dark">Sketch</span>
            <span class="badge bg-uv border border-dark">Framer Web</span>
            <span class="badge bg-uv border border-dark">Webflow</span>
          </h5>
        </div>
      </div>
    </div>
  </LayoutContent>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  async asyncData({ $content, params }) {
    const projects = await $content("pro", params.slug).fetch();
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
.skills-header {
  background: rgb(23, 121, 255);
  background: linear-gradient(
    90deg,
    rgba(23, 121, 255, 1) 0%,
    rgba(72, 11, 255, 1) 100%
  );
}
</style>
