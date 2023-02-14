<template>
  <div v-if="prev || next" class="container py-4">
    <h3>Artigos relacionados</h3>
    <div class="d-md-flex justify-content-between">
      <template v-if="prev">
        <div
          class="card card-background mx-md-2 prev-next-item"
          :class="[
            isDarkTheme
              ? 'hover-card-yellow-bordered border border-light'
              : 'hover-card-uv-bordered border border-dark',
          ]"
        >
          <img
            v-lazy="prev.cover ? prev.cover : prev.imageHeader"
            class="card-background-image card-img-border hover-filter-cyberpunk-v"
            :alt="prev.title"
          />
          <div
            class="card-img-overlay h-100 d-flex flex-column justify-content-end"
          >
            <div class="d-flex mb-1">
              <span class="badge bg-dark border border-dark ms-0 me-1">
                <DateFormat :date="prev.createdDate" />
              </span>
              <ChannelBadge :channel="prev.channel" />
            </div>
            <h5 class="card-title">
              <span class="bg-dark text-light py-1">
                <em> {{ prev.title }} </em>
              </span>
            </h5>

            <div class="d-flex justify-content-between my-1">
              <nuxt-link
                :to="prev.path"
                class="btn btn-uv btn-raised btn-sm ms-auto"
              >
                Ler mais...
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>

      <template v-if="next">
        <div
          class="card card-background mx-md-2 prev-next-item"
          :class="[
            isDarkTheme
              ? 'hover-card-yellow-bordered border border-light'
              : 'hover-card-uv-bordered border border-dark',
          ]"
        >
          <img
            v-lazy="next.cover ? next.cover : next.imageHeader"
            class="card-background-image card-img-border hover-filter-cyberpunk-v"
            :alt="next.title"
          />
          <div
            class="card-img-overlay h-100 d-flex flex-column justify-content-end"
          >
            <div class="d-flex mb-1">
              <span class="badge bg-dark border border-dark ms-0 me-1">
                <DateFormat :date="next.createdDate" />
              </span>
              <ChannelBadge :channel="next.channel" />
            </div>
            <h5 class="card-title">
              <span class="bg-dark text-light py-1">
                <em> {{ next.title }} </em>
              </span>
            </h5>

            <div class="d-flex justify-content-between my-1">
              <nuxt-link
                :to="next.path"
                class="btn btn-uv btn-raised btn-sm ms-auto"
              >
                Ler mais...
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    prev: {
      type: Object,
      default: null,
    },
    next: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
  methods: {
    slugName(data) {
      const link = data.replace('articles/', '').replace('/', '')
      return link
    },
  },
}
</script>
<style lang="scss"></style>
