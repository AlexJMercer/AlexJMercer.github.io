import Vue from "vue";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require("~/assets/images/error.jpg"),
  loading: require("~/assets/images/loading.jpg"),
  attempt: 1,
});
