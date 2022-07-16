<template>
  <LayoutContent>
    <div class="card card-flat view-anchor my-0">
      <img
        :src="setImage"
        class="img-fluid"
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
            <div class="card-body">
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
    <!-- <section class="py-5">
      <div
        style="max-width: 1024px; margin: 0 auto 2.5rem; display: block"
        class="rounded"
        :class="[isDarkTheme ? 'bg-dark' : 'bg-light']"
      >
        <div class="main-article rounded">
          <div
            class="nuxt-content mono-font py-5"
            :class="[isDarkTheme ? 'dark-theme' : '']"
          >
            <div class="about-header mb-2">
              <img
                v-lazy="me"
                class="about-header-img mx-auto d-block shadow"
                :class="
                  isDarkTheme ? 'border border-light' : 'border border-dark'
                "
              />
              <div class="about-header-info">
                <h1>
                  <strong> Oi! Eu sou o Julian</strong>
                </h1>
                <h4
                  style="
                    font-size: 1.25rem;
                    line-height: 1.5;
                    margin-bottom: 1.25rem;
                  "
                >
                  Sou formado em Tecnologia em Sistemas para Internet no IFSul,
                  e atualmente estou cursando o 6º semestre do Design Digital na
                  UFPel e moro em Pelotas/RS.
                </h4>
              </div>
            </div>
            <p>
              Do início de 2013 a setembro de 2016, estudei no Instituto Federal
              Sul-riograndense no curso superior em tecnologias em sistemas para
              internet. Recém formado fui em busca de algumas oportunidades, mas
              infelizmente as que apareceram não se concretizaram.
            </p>
            <p>
              Foi então que no fim de 2017, retornei à universidade, desta vez
              na Universidade Federal de Pelotas, no curso de bacharelado em
              Design Digital, sendo esta uma oportunidade para aprender ainda
              mais, e numa área que eu curti trabalhar desde o IFSul, Web
              Design/Desenvolvimento Front-end.
            </p>
            <p>
              Neste período em que estou no design da UFPel, tive diversas
              oportunidades de interagir e aprender com diferentes áreas e
              diferentes atividades, sendo mais recentemente uma das minhas
              paixões atuais a edição digital, onde curto criar algumas imagens
              a partir de algumas ideias (sendo basicamente um hobby). Além
              disso, este curso tem me oferecido a oportunidade de conhecer
              diferentes pessoas e a desenvolver melhor a minha visão do mundo.
            </p>
            <p>
              No meio disso tudo também tive a oportunidade de ingressar em um
              curso de inglês na Topway, para poder me qualificar ainda mais.
            </p>
            <p>
              Além do mais, este curso tem me ensinado a ser mais criativo, onde
              sempre que possível, em algumas atividades procuro desenvolver
              alguns websites, assim posso seguir aprimorando tanto o
              conhecimento em design como desenvolver o front-end dos projetos.
            </p>

            <h4>
              Mas se quiser pode me chamar também de
              <br />
              <mark
                :class="
                  isDarkTheme ? 'bg-crimson text-dark' : 'bg-crimson text-dark'
                "
              >
                Ultimate Mercer
              </mark>
            </h4>
          </div>
        </div>
      </div>
    </section> -->
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
