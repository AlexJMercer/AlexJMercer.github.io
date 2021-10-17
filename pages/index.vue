<template>
  <div class="landing d-flex flex-column justify-content-center">
    <template v-if="isDarkTheme">
      <img
        src="~/assets/images/ultimate-logo-light.svg"
        class="mb-2 mx-auto d-block"
        width="150"
      />
    </template>
    <template v-else>
      <img
        src="~/assets/images/ultimate-logo-dark.svg"
        class="mb-2 mx-auto d-block"
        width="150"
      />
    </template>
    <div class="px-3">
      <h1
        :class="isDarkTheme ? 'cyber-underline-light' : 'cyber-underline-dark'"
      >
        <strong>
          <em> Oi! Eu sou o Julian Silva da Cunha </em>
        </strong>
      </h1>
      <h2 style="font-size: 1.25rem; line-height: 1.5; margin-bottom: 1.5rem">
        <em>
          Sou formado em Tecnologia em Sistemas para Internet no IFSul, e
          atualmente estou cursando o 6º semestre do Design Digital na UFPel,
          tenho 26 anos e moro em Pelotas/RS.
        </em>
      </h2>
      <div class="pb-4">
        <a
          class="badge badge-tag rounded-pill my-1"
          href="mailto:juliancunha2010@hotmail.com"
          target="_blank"
          rel="noopener"
          title="Acessar e-mail"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
          E-mail
        </a>
        <a
          class="badge badge-tag rounded-pill my-1"
          href="https://github.com/UltimateMercer"
          target="_blank"
          rel="noopener"
          title="Acessar github"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="lg" />
          Github
        </a>
        <a
          class="badge badge-tag rounded-pill my-1"
          href="https://www.facebook.com/UltimateMercer"
          target="_blank"
          rel="noopener"
          title="Acessar facebook"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
          Facebook
        </a>
        <a
          class="badge badge-tag rounded-pill my-1"
          href="https://www.instagram.com/ultimatemercer/"
          target="_blank"
          rel="noopener"
          title="Acessar instagram"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
          Instagram
        </a>
        <a
          class="badge badge-tag rounded-pill my-1"
          href="https://github.com/UltimateMercer"
          target="_blank"
          rel="noopener"
          title="Linkedin"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
          Linkedin
        </a>
        <a
          class="badge badge-tag rounded-pill my-1"
          href="https://www.behance.net/ultimatemercer"
          target="_blank"
          rel="noopener"
          title="Behance"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fab', 'behance']" size="lg" />
          Behance
        </a>
        <a
          class="badge badge-tag rounded-pill my-1"
          href="https://medium.com/@ultimatemercer"
          target="_blank"
          rel="noopener"
          title="Medium"
          :class="isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'"
        >
          <font-awesome-icon :icon="['fab', 'medium-m']" size="lg" />
          Medium
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import dataArts from "~/assets/data/arts.json";
// import Sidebar from "~/components/Sidebar";
export default {
  components: {
    // Sidebar,
  },

  async asyncData({ $content, params }) {
    const contents = await $content({ deep: true }, params.slug)
      .only(["title", "imageHeader"])
      .fetch();
    return {
      contents,
    };
  },

  data() {
    return {
      code: "teste <teste@teste.com> teste",
      arts: dataArts,
    };
  },

  computed: {
    ...mapGetters(["isDarkTheme"]),

    shuffledArts() {
      const array = this.arts;
      const arts = array.sort(() => 0.5 - Math.random());
      return arts;
    },
  },
};
</script>

<style lang="scss">
.content {
  grid-area: Content;
  // display: flex;
  max-width: 100%;
  // flex-direction: column;
  // align-items: center;
  background-color: #121212;
  // padding: 0.5rem 1rem;
  // overflow-y: scroll;
  &::-webkit-scrollbar {
    //display: none;
  }

  // -ms-overflow-style: none; /* IE and Edge */
  // scrollbar-width: none; /* Firefox */
}

.landing {
  max-width: 1024px;
  margin: 0 auto 0;
  //display: flex;
  height: calc(100vh - 60px);

  &-info {
    display: block;
  }
}

.arts-img {
  max-width: 100%;
  height: 600px;
  object-fit: cover;
  box-shadow: 0px 0px 8px 4px rgba(72, 11, 255, 0.75);
  -webkit-box-shadow: 0px 0px 8px 4px rgba(72, 11, 255, 0.75);
  -moz-box-shadow: 0px 0px 8px 4px rgba(72, 11, 255, 0.75);
}
</style>
