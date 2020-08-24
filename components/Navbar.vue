<template>
  <b-navbar
    tag="nav"
    toggleable="md"
    type="dark"
    variant="transparent-dark"
    fixed="top"
  >
    <div class="container">
      <b-navbar-brand>
        <nuxt-link to="/" class="navbar-brand mx-2">
          <img
            src="~/assets/images/logo-light.png"
            width="70"
            class="img-fluid brand"
            alt="Ultimate Mercer Logo"
          />
        </nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-text>
            <span class="marker marker-dark marker-link">
              <strong>Em atualização</strong>
            </span>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
import Vue from "vue";
import { NavbarPlugin } from "bootstrap-vue";
Vue.use(NavbarPlugin);

export default {
  name: "Navbar",
  data() {
    return {
      route: this.$nuxt.$route.path,
    };
  },

  computed: {},
};
</script>
<style lang="scss">
.navbar {
  font-family: "IBM Plex Sans Condensed", "Fira Code", sans-serif;
  font-size: 1.25rem;
  padding: 0.25rem !important;
  .navbar-nav {
    .nav-item {
      padding: 0.25rem 1rem;
      font-weight: 500;
      .nav-link {
        color: #eaeaea;
      }
    }
  }
}

.bg-transparent-dark {
  background-color: rgba(18, 18, 18, 0.5);
}
</style>
