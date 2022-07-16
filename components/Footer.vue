<template>
  <footer class="footer">
    <div
      class="container"
      :class="isDarkTheme ? 'text-light' : 'text-dark bg-light text-dark'"
    >
      <div class="">
        <div
          class="border-bottom mb-3"
          :class="isDarkTheme ? 'border-light' : 'border-dark'"
        >
          <template v-if="isDarkTheme">
            <img
              src="~/assets/images/ultimate-logo-light.svg"
              width="100"
              class="mx-auto d-block my-3"
              alt=""
            />
          </template>
          <template v-else>
            <img
              src="~/assets/images/ultimate-logo-dark.svg"
              width="100"
              class="mx-auto d-block my-3"
              alt=""
            />
          </template>
        </div>

        <div class="d-md-flex">
          <div class="py-3">
            <p class="me-lg-5" style="font-size: 1.25rem">
              Se gostou do que viu, fique a vontade para entrar em contato
              através das minhas redes sociais!
            </p>
            <p class="me-lg-5" style="font-size: 1.25rem">
              Um abraço e até mais!!
            </p>
          </div>
          <div class="">
            <h3>
              <strong>Contatos</strong>
            </h3>
            <div class="pb-4">
              <a
                class="badge badge-tag rounded-pill my-1 text-light"
                href="mailto:juliancunha2010@gmail.com"
                target="_blank"
                rel="noopener"
                title="Acessar e-mail"
                :class="!isDarkTheme ? 'text-dark bg-light' : 'bg-dark'"
              >
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                E-mail
              </a>
              <a
                class="badge badge-tag rounded-pill my-1 text-light"
                href="https://github.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Acessar github"
                :class="!isDarkTheme ? 'text-dark bg-light' : 'bg-dark'"
              >
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                Github
              </a>
              <a
                class="badge badge-tag rounded-pill my-1 text-light"
                href="https://www.instagram.com/ultimatemercer/"
                target="_blank"
                rel="noopener"
                title="Acessar instagram"
                :class="!isDarkTheme ? 'text-dark bg-light' : 'bg-dark'"
              >
                <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                Instagram
              </a>
              <a
                class="badge badge-tag rounded-pill my-1 text-light"
                href="https://github.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Linkedin"
                :class="!isDarkTheme ? 'text-dark bg-light' : 'bg-dark'"
              >
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
                Linkedin
              </a>
              <a
                class="badge badge-tag rounded-pill my-1 text-light"
                href="https://www.behance.net/ultimatemercer"
                target="_blank"
                rel="noopener"
                title="Behance"
                :class="!isDarkTheme ? 'text-dark bg-light' : 'bg-dark'"
              >
                <font-awesome-icon :icon="['fab', 'behance']" size="lg" />
                Behance
              </a>
              <a
                class="badge badge-tag rounded-pill my-1 text-light"
                href="https://medium.com/@ultimatemercer"
                target="_blank"
                rel="noopener"
                title="Medium"
                :class="!isDarkTheme ? 'text-dark bg-light' : 'bg-dark'"
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" size="lg" />
                Medium
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
}
</script>
