<template>
  <LayoutContent>
    <main class="landing d-flex flex-column justify-content-center py-3">
      <div class="container">
        <div
          class="card card-raised"
          style="background-color: rgba(18, 18, 18, 0.75) !important"
        >
          <div class="card-body">
            <template v-if="!isDarkTheme">
              <img
                src="~/assets/images/ultimate-logo-red.svg"
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
            <h1
              class="font-monospace"
              :class="
                !isDarkTheme
                  ? 'text-light cyber-underline-light'
                  : 'text-dark cyber-underline-dark'
              "
            >
              Oi! Eu sou o Julian Silva da Cunha
            </h1>
            <h3
              class="font-monospace"
              style="line-height: 1.5; margin-bottom: 1.25rem; font-weight: 400"
              :class="!isDarkTheme ? 'text-light' : 'text-dark'"
            >
              Desenvolvedor Front-end | blueshift.cc
            </h3>
            <div class="pb-3">
              <a
                class="badge badge-tag rounded-pill my-1"
                href="mailto:juliancunha2010@hotmail.com"
                target="_blank"
                rel="noopener"
                title="Acessar e-mail"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
              </a>
              <a
                class="badge badge-tag rounded-pill my-1"
                href="https://github.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Acessar github"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fab', 'github']" size="lg" />
              </a>
              <a
                class="badge badge-tag rounded-pill my-1"
                href="https://www.facebook.com/UltimateMercer"
                target="_blank"
                rel="noopener"
                title="Acessar facebook"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />
              </a>
              <a
                class="badge badge-tag rounded-pill my-1"
                href="https://www.instagram.com/ultimatemercer/"
                target="_blank"
                rel="noopener"
                title="Acessar instagram"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
              </a>
              <a
                class="badge badge-tag rounded-pill my-1"
                href="https://www.linkedin.com/in/ultimatemercer/"
                target="_blank"
                rel="noopener"
                title="Linkedin"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
              </a>
              <a
                class="badge badge-tag rounded-pill my-1"
                href="https://www.behance.net/ultimatemercer"
                target="_blank"
                rel="noopener"
                title="Behance"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fab', 'behance']" size="lg" />
              </a>
              <a
                class="badge badge-tag rounded-pill my-1"
                href="https://medium.com/@ultimatemercer"
                target="_blank"
                rel="noopener"
                title="Medium"
                :class="
                  !isDarkTheme ? 'bg-light text-dark' : 'bg-dark text-light'
                "
              >
                <font-awesome-icon :icon="['fab', 'medium-m']" size="lg" />
              </a>
            </div>
            <h5
              class="font-monospace"
              :class="!isDarkTheme ? 'text-light' : 'text-dark'"
            >
              <em> Em desenvolvimento... </em>
            </h5>
          </div>
        </div>
      </div>
    </main>
  </LayoutContent>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isDarkTheme"]),
  },
};
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
</style>
