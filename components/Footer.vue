<template>
  <div class="container-fluid bg-dark text-light">
    <div class="container">
      <footer class="py-3 pt-md-4">
        <div class="row">
          <div class="col-12 col-md">
            <img
              class="img-fluid brand mb-2"
              src="~/assets/images/logo-light.png"
              alt="Ultimate Mercer Logo"
              width="65"
            />
            <small class="d-block mb-3 text-muted">&copy;2020</small>
          </div>
          <div class="col-6 col-md">
            <h5>
              <span class="marker marker-light marker-link">Redes sociais</span>
            </h5>
            <ul class="list-unstyled">
              <li class="">
                <a
                  href="mailto:juliancunha2010@hotmail.com"
                  class="text-light"
                  target="_blank"
                  rel="noopener"
                  title="E-mail"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
                  E-mail
                </a>
              </li>
              <li>
                <a
                  class="text-light"
                  href="https://github.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Acessar github"
                >
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                  Github
                </a>
              </li>
              <li>
                <a
                  class="text-light"
                  href="https://www.facebook.com/UltimateMercer"
                  target="_blank"
                  rel="noopener"
                  title="Facebook"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-f']" size="lg" />

                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ultimatemercer/"
                  class="text-light mb-2"
                  target="_blank"
                  rel="noopener"
                  title="Instagram"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/UltimateMercer"
                  class="text-light"
                  target="_blank"
                  rel="noopener"
                  title="LinkedIn"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.behance.net/ultimatemercer"
                  class="text-light"
                  target="_blank"
                  rel="noopener"
                  title="Behance"
                >
                  <font-awesome-icon :icon="['fab', 'behance']" size="lg" />
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@ultimatemercer"
                  class="text-light"
                  target="_blank"
                  rel="noopener"
                  title="Medium"
                >
                  <font-awesome-icon :icon="['fab', 'medium-m']" size="lg" />
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>
              <span class="marker marker-light marker-link">Projetos</span>
            </h5>
            <ul class="list-unstyled text-small">
              <li>
                <nuxt-link class="text-light" to="/projects"
                  >Meus projetos</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
