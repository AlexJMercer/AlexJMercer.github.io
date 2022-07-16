<template>
  <div
    class="mobile-sidebar"
    :class="[
      isSidebarOpen ? 'slide-in-left' : 'slide-out-left',
      isDarkTheme ? 'bg-dark' : 'bg-light',
    ]"
  >
    <nav>
      <div class="mobile-sidebar-container">
        <div class="mobile-sidebar-content">
          <div class="mobile-sidebar-brand">
            <nuxt-link to="/">
              <template v-if="isDarkTheme">
                <img
                  src="../static/ultimate-logo-red.svg"
                  title="Ultimate Mercer"
                  width="100"
                  class="mx-auto d-block"
                />
              </template>
              <template v-else>
                <img
                  src="../static/ultimate-logo-dark.svg"
                  title="Ultimate Mercer"
                  width="100"
                  class="mx-auto d-block"
                />
              </template>
            </nuxt-link>
          </div>
          <div class="d-block">
            <div
              class="mobile-sidebar-items"
              :class="
                $route.name === 'about' ? 'mobile-sidebar-items-active' : ''
              "
            >
              <NuxtLink
                to="/about"
                class="mobile-sidebar-link"
                :class="isDarkTheme ? 'text-light' : 'text-dark'"
              >
                <img
                  src="https://i.imgur.com/rkCtudG.jpg"
                  class="mobile-page"
                  :class="$route.name === 'about' ? 'mobile-page-active' : ''"
                  alt="Sobre mim"
                />
                <h5 class="ms-3 mb-0">Sobre mim</h5>
              </NuxtLink>
            </div>
            <div
              class="mobile-sidebar-items"
              :class="
                $route.name === 'skills' ? 'mobile-sidebar-items-active' : ''
              "
            >
              <NuxtLink
                to="/skills"
                class="mobile-sidebar-link"
                :class="isDarkTheme ? 'text-light' : 'text-dark'"
              >
                <img
                  :src="skillThumb"
                  class="mobile-page"
                  :class="$route.name === 'skills' ? 'mobile-page-active' : ''"
                  alt="Sobre mim"
                />
                <h5 class="ms-3 mb-0">Skills</h5>
              </NuxtLink>
            </div>
            <div
              class="mobile-sidebar-items"
              :class="
                $route.name === 'pro' ? 'mobile-sidebar-items-active' : ''
              "
            >
              <NuxtLink
                to="/pro"
                class="mobile-sidebar-link"
                :class="isDarkTheme ? 'text-light' : 'text-dark'"
              >
                <img
                  :src="proThumb"
                  class="mobile-page"
                  :class="$route.name === 'pro' ? 'mobile-page-active' : ''"
                  alt="Sobre mim"
                />
                <h5 class="ms-3 mb-0">Projetos profissionais e acadêmicos</h5>
              </NuxtLink>
            </div>
            <div
              class="mobile-sidebar-items"
              :class="
                $route.name === 'dev' ? 'mobile-sidebar-items-active' : ''
              "
            >
              <NuxtLink
                to="/dev"
                class="mobile-sidebar-link"
                :class="isDarkTheme ? 'text-light' : 'text-dark'"
              >
                <img
                  :src="devThumb"
                  class="mobile-page"
                  :class="$route.name === 'dev' ? 'mobile-page-active' : ''"
                  alt="Sobre mim"
                />
                <h5 class="ms-3 mb-0">Projetos dev pessoais</h5>
              </NuxtLink>
            </div>
            <div
              class="mobile-sidebar-items"
              :class="
                $route.name === 'art' ? 'mobile-sidebar-items-active' : ''
              "
            >
              <NuxtLink
                to="/art"
                class="mobile-sidebar-link"
                :class="isDarkTheme ? 'text-light' : 'text-dark'"
              >
                <img
                  :src="artThumb"
                  class="mobile-page"
                  :class="$route.name === 'art' ? 'mobile-page-active' : ''"
                  alt="Sobre mim"
                />
                <h5 class="ms-3 mb-0">Projetos de art</h5>
              </NuxtLink>
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

  mounted() {
    console.log(this.isSidebarOpen)
  },

  updated() {
    console.log(this.isSidebarOpen)
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
.mobile-sidebar {
  position: fixed;
  top: 0;
  background-color: transparent;
  width: 100%;
  min-height: 100vh;
  transform: translateX(0);
  flex-shrink: 1;
  border-right: 1px solid #ced4da;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-self: mobile-start;
  top: 0;
  /* position: sticky; */
  z-index: 400;
  box-shadow: 0px 0px 8px 0px rgba(18, 18, 18, 0.75);

  nav {
    height: 100%;
  }

  &-container {
    display: block;
    height: 100%;
  }

  &-content {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  &-brand {
    padding: 1.5rem 0;
    text-align: center;
    margin-bottom: 2.5rem;
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

  &-link {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    text-decoration: none;
    padding: 0 1.5rem;
  }

  &-footer {
    padding: 0.5rem 0;
  }
}

.mobile-page {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: 1px solid #121212;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &-active,
  &:hover {
    border-radius: 25% !important;
  }
}

/* @media screen and (max-width: 768px) {
  .mobile-sidebar {
    display: none;
  }
} */

.slide-in-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2022-7-16 16:2:51
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-out-left {
  -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2022-7-16 16:4:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-out-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
}
@keyframes slide-out-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
}
</style>
