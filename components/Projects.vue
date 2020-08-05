<template>
  <section class="container-fluid my-4">
    <div v-lazy-container="{ selector: 'img' }">
      <div
        class="col-lg-10 col-md-12 col-12 offset-lg-1 offset-md-0 offset-0 px-0"
      >
        <h2 class="mb-3"><strong>Meus projetos</strong></h2>
        <div
          class="card card-raised rounded-lg bg-dark text-white neon-shadow-red mt-3 mb-5"
        >
          <div class="view">
            <img
              :data-src="require('~/assets/images/ultimate-logo.jpg')"
              alt="Projetos pessoais"
              class="card-image-stories duotone-cyberpunk-c"
            />
            <div class="mask texture-mask-3"></div>
            <div
              class="card-img-overlay h-100 d-flex flex-column justify-content-end"
            >
              <div class="p-2">
                <h3 class="">
                  <span class="marker marker-dark marker-title">
                    <strong>Meus projetos</strong>
                  </span>
                </h3>
                <p>
                  <span class="marker marker-dark">
                    Aqui disponibilizo tanto projetos pessoais, quanto projetos
                    profissionais e acadêmicos.
                  </span>
                </p>

                <div class="">
                  <span class="badge badge-warning badge-tag">
                    Última atualização: Jan 20
                  </span>
                </div>
              </div>
              <nuxt-link
                to="/projects"
                class="stretched-link"
                title="Visualizar projetos"
              ></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Projects",
};
</script>
<style lang="scss">
.card-image-stories {
  border-radius: 0.25rem !important;
}
</style>
