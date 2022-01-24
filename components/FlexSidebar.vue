<template>
  <div class="flex-sidebar">
    <nav>
      <div class="flex-sidebar-container">
        <div class="flex-sidebar-content">
          <div class="flex-sidebar-brand">
            <nuxt-link to="/">
              <template v-if="isDarkTheme">
                <img
                  src="../static/ultimate-logo-red.svg"
                  title="Ultimate Mercer"
                  width="60"
                  class="mx-auto d-block"
                />
              </template>
              <template v-else>
                <img
                  src="../static/ultimate-logo-dark.svg"
                  title="Ultimate Mercer"
                  width="60"
                  class="mx-auto d-block"
                />
              </template>
            </nuxt-link>
          </div>
          <div class="d-block">
            <div class="flex-sidebar-items">
              <NuxtLink to="/about">
                <img
                  src="https://i.imgur.com/rkCtudG.jpg"
                  style="
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  class="mx-auto d-block"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div class="flex-sidebar-items">
              <NuxtLink to="/skills">
                <img
                  :src="skillThumb"
                  style="
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  class="mx-auto d-block"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div class="flex-sidebar-items">
              <NuxtLink to="/pro">
                <img
                  :src="proThumb"
                  style="
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  class="mx-auto d-block"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div class="flex-sidebar-items">
              <NuxtLink to="/dev">
                <img
                  :src="devThumb"
                  style="
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  class="mx-auto d-block"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div class="flex-sidebar-items">
              <NuxtLink to="/art">
                <img
                  :src="artThumb"
                  style="
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                  "
                  class="mx-auto d-block"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="d-block">
            <div class="flex-sidebar-items">
              <a
                href="#"
                class="btn btn-flat mx-auto d-block"
                :class="isDarkTheme ? 'btn-outline-light' : 'btn-outline-dark'"
                @click.prevent="darkTheme"
              >
                <font-awesome-icon :icon="['fas', 'adjust']" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'

import UMThumb from '@/assets/images/thumbs/ultimate-mercer-thumbs.jpg'
import UMProThumb from '@/assets/images/thumbs/ultimate-mercer-pro-thumbs.jpg'
import DevThumb from '@/assets/images/thumbs/blklight-thumbs.jpg'

export default {
  data() {
    return {
      skillThumb: UMThumb,
      proThumb: UMProThumb,
      devThumb: DevThumb,
      artThumb: UMThumb,
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme', 'isSidebarOpen']),
  },

  methods: {
    ...mapMutations({
      darkTheme: 'darkTheme',
      sidebarSwitch: 'sidebarSwitch',
    }),
  },
}
</script>
<style lang="scss">
.flex-sidebar {
  background-color: transparent;
  width: 80px;
  min-height: 100vh;
  flex-shrink: 1;
  border-right: 1px solid #ced4da;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-self: flex-start;
  top: 0;
  position: sticky;
  z-index: 1;

  nav {
    height: 100%;
  }

  &-container {
    display: block;
    height: 100%;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100vh;
  }

  &-brand {
    padding: 1.5rem 0;
    text-align: center;
  }

  &-items {
    padding-bottom: 1.25rem;
  }
}

@media screen and (max-width: 768px) {
  .flex-sidebar {
    display: none;
  }
}
</style>
