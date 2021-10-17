import { createSEOMeta } from "./utils/seo.js";
// import seoImage from "./static/ultimate-seo.jpg";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ultimate Mercer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...createSEOMeta({
        title: "Ultimate Mercer",
        description:
          "Oi! Eu sou o Julian , mas se quiser pode me chamar de Ultimate Mercer!",
        image: "ultimatemercer.github.io/static/ultimate-seo.jpg",
        url: "ultimatemercer.github.io",
      }),
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/blklight.scss"],

  loading: {
    color: "#ffff00",
    height: "8px",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-lazyload"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        // theme: "prism-themes/themes/prism-xonokai.css",
        // theme: "prism-themes/themes/prism-synthwave84.css",
        theme: "prism-themes/themes/prism-dracula.css",
        // theme: "prism-themes/themes/prism-shades-of-purple.css",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["masonry-layout", "vue-lazyload"],
  },

  fontawesome: {
    icons: {
      solid: [
        "faEnvelope",
        "faAdjust",
        "faBars",
        "faSun",
        "faMoon",
        "faCode",
        "faTerminal",
        "faLaptopCode",
        "faPlus",
        "faTimes",
        "faWindowClose",
        "faChevronRight",
        "faChevronLeft",
      ],
      regular: ["faSun", "faMoon", "faWindowClose"],
      brands: [
        "faFacebookF",
        "faGithub",
        "faMediumM",
        "faBehance",
        "faLinkedinIn",
        "faInstagram",
        "faTwitch",
      ],
    },
  },
};
