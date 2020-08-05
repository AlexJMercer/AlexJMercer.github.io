<template>
  <section class="container-fluid pt-5">
    <div class="container p-0">
      <div class="col-12 py-3 px-lg-4">
        <div class="header-profile">
          <div class="col-12 p-0 my-5">
            <div v-lazy-container="{ selector: 'img' }" class="head-avatar">
              <img
                :data-src="require('~/assets/images/logo-ultimatemercer.jpg')"
                width="300"
                class="img-fluid rounded-sm mx-auto d-block"
                alt="Oi, eu sou o Julian"
              />
            </div>
          </div>
          <div class="col-12 p-0">
            <div class="px-lg-4 pt-2">
              <h1 class="mb-3">
                <span class="marker marker-dark marker-title">
                  <strong>Julian Silva da Cunha a.k.a. Ultimate Mercer</strong>
                </span>
              </h1>

              <h5 class="text-main mt-2 mb-4">
                Sou formado em Tecnologia em Sistemas para Internet no IFSul, e
                atualmente estou cursando o 6º semestre do Design Digital na
                UFPel, tenho 25 anos e moro em Pelotas/RS.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="scss"></style>
