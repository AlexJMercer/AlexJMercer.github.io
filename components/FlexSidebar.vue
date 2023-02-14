<template>
  <div class="flex-sidebar border-end border-secondary">
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
            <div
              class="flex-sidebar-items"
              :class="
                $route.name === 'about' ? 'flex-sidebar-items-active' : ''
              "
            >
              <NuxtLink to="/about">
                <img
                  src="https://i.imgur.com/rkCtudG.jpg"
                  class="page-button mx-auto d-block"
                  :class="$route.name === 'about' ? 'page-button-active' : ''"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div
              class="flex-sidebar-items"
              :class="
                $route.name === 'skills' ? 'flex-sidebar-items-active' : ''
              "
            >
              <NuxtLink
                v-tooltip="{
                  placement: 'right',
                  content: 'Acessar',
                }"
                to="/skills"
              >
                <img
                  :src="skillThumb"
                  class="page-button mx-auto d-block"
                  :class="$route.name === 'skills' ? 'page-button-active' : ''"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div
              class="flex-sidebar-items"
              :class="$route.name === 'pro' ? 'flex-sidebar-items-active' : ''"
            >
              <NuxtLink
                v-tooltip="{ placement: 'right', content: 'Acessar' }"
                to="/pro"
              >
                <img
                  :src="proThumb"
                  class="page-button mx-auto d-block"
                  :class="$route.name === 'pro' ? 'page-button-active' : ''"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div
              class="flex-sidebar-items"
              :class="$route.name === 'dev' ? 'flex-sidebar-items-active' : ''"
            >
              <NuxtLink
                v-tooltip="{ placement: 'right', content: 'Acessar' }"
                to="/dev"
              >
                <img
                  :src="devThumb"
                  class="page-button mx-auto d-block"
                  :class="$route.name === 'dev' ? 'page-button-active' : ''"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
            <div
              class="flex-sidebar-items"
              :class="$route.name === 'art' ? 'flex-sidebar-items-active' : ''"
            >
              <NuxtLink
                v-tooltip="{ placement: 'right', content: 'Acessar' }"
                to="/art"
              >
                <img
                  :src="artThumb"
                  class="page-button mx-auto d-block"
                  :class="$route.name === 'art' ? 'page-button-active' : ''"
                  alt="Sobre mim"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="d-block">
            <div class="flex-sidebar-footer">
              <a
                href="#"
                class="btn btn-flat btn-lg mx-auto d-block"
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
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-self: flex-start;
  top: 0;
  position: sticky;
  z-index: 1000;

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
    padding: 0.75rem 0;
    cursor: pointer;

    &:hover,
    &-active {
      background-color: #ff6d00;
    }

    &-avatar {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;

      &:hover,
      &-active {
        &-avatar {
          border-radius: 0.5rem !important;
        }
      }
    }

    /* &:hover,
    &-active {
      background-color: #ff6d00;

      &-avatar {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 0.5rem;
      }
    } */
  }

  &-footer {
    padding: 0.5rem 0;
  }
}

.page-button {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border: 1px solid #121212;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &-active,
  &:hover {
    border-radius: 25% !important;
  }
}

@media screen and (max-width: 768px) {
  .flex-sidebar {
    display: none;
  }
}
</style>
