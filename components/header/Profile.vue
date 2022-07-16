<template>
  <div :class="twoColumn ? 'info-article-overlay' : ''">
    <header
      class="header-profile"
      :class="twoColumn ? 'd-block sticky-content' : ''"
    >
      <div>
        <img
          v-lazy="article.cover ? article.cover : article.imageHeader"
          class="mx-auto d-block mb-3"
          :class="
            isCircle ? 'header-profile-avatar-circle' : 'header-profile-avatar'
          "
          alt=""
        />
      </div>

      <div
        class="header-profile-content"
        :class="twoColumn ? 'text-lg-center mx-1' : ''"
      >
        <h2 class="article-title">
          <span class="text-light bg-dark p-1">
            <span class="marker-line">
              {{ article.title }}
            </span>
          </span>
        </h2>
        <h5 class="article-meta">
          <span class="text-light bg-dark p-1">{{ dateFormat }}</span>
        </h5>
        <h5 class="">
          <span>
            <span class="badge bg-uv border border-light">Websites</span>
            <span class="badge bg-uv border border-light">Posters</span>
          </span>
        </h5>
      </div>
    </header>
  </div>
</template>
<script>
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default {
  props: {
    article: {
      type: Object,
      default: null,
    },

    isCircle: {
      type: Boolean,
      default: false,
    },

    twoColumn: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    dateFormat() {
      const formattedDate = format(
        new Date(this.article.date),
        "dd 'de' MMMM 'de' yyyy', às' H:mm",
        {
          locale: ptBR,
        }
      )

      return formattedDate
    },
  },
}
</script>
