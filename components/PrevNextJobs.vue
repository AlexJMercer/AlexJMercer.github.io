<template>
  <div v-if="prev || next" class="container mb-4">
    <h3>Outras vagas</h3>
    <div class="d-flex justify-content-between">
      <template v-if="prev">
        <article
          class="card hover-card-uv w-50 mx-2 mb-3 prev-next-item"
          :class="[
            isDarkTheme
              ? 'hover-card-yellow-bordered card-plain border border-light'
              : 'hover-card-uv-bordered border border-dark',
          ]"
        >
          <div class="card-body p-3" :class="isDarkTheme ? 'text-light' : ''">
            <div class="d-xl-flex d-lg-block d-flex mb-3">
              <span class="badge bg-uv border border-uv me-2">
                <DateFormat :date="prev.createdDate" />
              </span>
              <span class="badge bg-uv border border-uv me-2">
                {{ prev.category }}
              </span>
            </div>

            <h5 class="mb-3">
              <em>{{ prev.title }}</em>
            </h5>
            <div class="text-end my-1">
              <NuxtLink
                tag="a"
                :to="{
                  name: `${slugName(prev.dir)}-slug`,
                  params: { slug: `${prev.slug}` },
                }"
                class="btn btn-uv btn-sm"
              >
                Ler mais...
              </NuxtLink>
            </div>
          </div>
        </article>
      </template>
      <template v-if="next">
        <article
          class="card hover-card-uv w-50 mx-2 mb-3 prev-next-item"
          :class="[
            isDarkTheme
              ? 'hover-card-yellow-bordered card-plain border border-light'
              : 'hover-card-uv-bordered border border-dark',
          ]"
        >
          <div class="card-body p-3" :class="isDarkTheme ? 'text-light' : ''">
            <div class="d-xl-flex d-lg-block d-flex mb-3">
              <span class="badge bg-uv border border-uv me-2">
                <DateFormat :date="next.createdDate" />
              </span>
              <span class="badge bg-uv border border-uv me-2">
                {{ next.category }}
              </span>
            </div>

            <h5 class="mb-3">
              <em>{{ next.title }}</em>
            </h5>
            <div class="text-end my-1">
              <NuxtLink
                tag="a"
                :to="{
                  name: `${slugName(next.dir)}-slug`,
                  params: { slug: `${next.slug}` },
                }"
                class="btn btn-uv btn-sm"
              >
                Ler mais...
              </NuxtLink>
            </div>
          </div>
        </article>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

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
    ...mapGetters(["isDarkTheme"]),
  },
  methods: {
    slugName(data) {
      const link = data.replace("articles/", "").replace("/", "");
      return link;
    },
  },
};
</script>
