<template>
  <LayoutContent>
    <div class="card card-flat view-anchor my-0">
      <img
        :src="setImage"
        class="filter-black-white img-fluid"
        alt=""
        style="object-fit: cover; height: 100vh"
      />
      <!-- <div class="mask pattern-2"></div> -->
      <div class="card-img-overlay d-flex align-items-center">
        <div class="container">
          <div
            class="card card-raised background-texture"
            style="
              max-width: 1024px;
              margin: 0 auto;
              background-color: rgba(18, 18, 18, 0.75) !important;
            "
          >
            <div class="card-body px-4">
              <img
                src="~/assets/images/ultimate-logo-red.svg"
                class="mb-2 mx-auto d-block"
                width="175"
              />

              <h1
                class="text-light cyber-underline-light"
                style="font-family: 'Lexend'"
              >
                Oi! Eu sou o Julian Silva da Cunha
              </h1>
              <h3
                class="text-light"
                style="
                  line-height: 1.5;
                  margin-bottom: 1.25rem;
                  font-weight: 400;
                  font-family: 'Lexend';
                "
              >
                Desenvolvedor Front-end | blueshift.cc
              </h3>
              <div class="pb-3">
                <a
                  class="badge badge-tag bg-light text-dark rounded-pill my-1"
                  href="mailto:juliancunha2010@gmail.com"
                  target="_blank"
                  rel="noopener"
                  title="Acessar e-mail"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                </a>
                <a
                  class="badge badge-tag bg-light text-dark rounded-pill my-1"
                  href="https://github.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Acessar github"
                >
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                </a>
                <a
                  class="badge badge-tag bg-light text-dark rounded-pill my-1"
                  href="https://www.instagram.com/ultimatemercer/"
                  target="_blank"
                  rel="noopener"
                  title="Acessar instagram"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                </a>
                <a
                  class="badge badge-tag bg-light text-dark rounded-pill my-1"
                  href="https://www.linkedin.com/in/ultimatemercer/"
                  target="_blank"
                  rel="noopener"
                  title="Linkedin"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
                </a>
                <a
                  class="badge badge-tag bg-light text-dark rounded-pill my-1"
                  href="https://www.behance.net/ultimatemercer"
                  target="_blank"
                  rel="noopener"
                  title="Behance"
                >
                  <font-awesome-icon :icon="['fab', 'behance']" size="lg" />
                </a>
                <a
                  class="badge badge-tag bg-light text-dark rounded-pill my-1"
                  href="https://medium.com/@ultimatemercer"
                  target="_blank"
                  rel="noopener"
                  title="Medium"
                >
                  <font-awesome-icon :icon="['fab', 'medium-m']" size="lg" />
                </a>
              </div>
              <!-- <h5 class="text-light" style="font-family: 'Lexend'">
                <em> Em desenvolvimento... </em>
              </h5> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutContent>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      me: 'https://i.imgur.com/rkCtudG.jpg',

      images: [
        'https://i.imgur.com/p7kPVCN.jpg',
        'https://i.imgur.com/YFUEbBx.jpg',
        'https://i.imgur.com/Qw6LuRE.jpg',
        'https://i.imgur.com/KMN1KQ5.jpg',
      ],
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
    setImage() {
      const img = this.images
      const randomImg = Math.floor(Math.random() * img.length)
      return img[randomImg]
    },
  },
}
</script>
<style lang="scss">
.landing {
  max-width: 1024px;
  margin: 0 auto 0;
  height: 100vh;
  &-info {
    display: block;
  }
}
.background-layout {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
