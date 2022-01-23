<template>
  <LayoutContent>
    <section
      v-lazy:background-image="setImage"
      class="background-texture background-layout py-5"
    >
      <template v-if="isDarkTheme">
        <img
          src="~/assets/images/ultimate-logo-red.svg"
          width="175"
          style="margin: 0 auto 1.25rem; display: block; padding: 0 0 1.25rem"
        />
      </template>
      <template v-else>
        <img
          src="~/assets/images/ultimate-logo-red.svg"
          width="175"
          style="margin: 0 auto 1.25rem; display: block; padding: 0 0 1.25rem"
        />
      </template>

      <div
        style="max-width: 1024px; margin: 0 auto 2.5rem; display: block"
        :class="[isDarkTheme ? 'bg-light' : 'bg-dark']"
      >
        <div class="main-article rounded">
          <div
            class="nuxt-content background-texture py-5"
            :class="[isDarkTheme ? 'light-theme' : '']"
          >
            <div class="about-header mb-2">
              <img
                v-lazy="me"
                class="about-header-img mx-auto d-block shadow"
                :class="
                  !isDarkTheme ? 'border border-light' : 'border border-dark'
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
              <mark>Ultimate Mercer</mark>
            </h4>
          </div>
        </div>
      </div>
    </section>
  </LayoutContent>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      me: "https://i.imgur.com/rkCtudG.jpg",
      data: [],
      images: [
        "https://i.imgur.com/p7kPVCN.jpg",
        "https://i.imgur.com/YFUEbBx.jpg",
        "https://i.imgur.com/Qw6LuRE.jpg",
        "https://i.imgur.com/KMN1KQ5.jpg",
      ],
    };
  },

  computed: {
    ...mapGetters(["isDarkTheme"]),
    setImage() {
      const img = this.images;
      const randomImg = Math.floor(Math.random() * img.length);
      return img[randomImg];
    },
  },
};
</script>

<style lang="scss">
.about-header {
  max-width: 100%;
  padding: 0.5rem 0;
  display: block;

  &-img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  &-info {
    //margin: 0.5rem 0.5rem 0.5rem 2rem;
  }
}

@media screen and (max-width: 768px) {
  .about-header {
    display: block;

    &-img {
      width: 175px;
      height: 175px;
      object-fit: cover;
    }

    &-info {
      margin: 0.5rem;
    }
  }
}

.overlayed {
  position: absolute;
  z-index: 2;
}

.background-layout {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
