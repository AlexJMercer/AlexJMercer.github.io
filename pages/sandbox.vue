<template>
  <section>
    <div class="scroller">
      <div class="scroller__container--controls">
        <button
          class="scroller__container--prev"
          @click.prevent="clickPrev('parent')"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg" />
        </button>
        <button
          class="scroller__container--next"
          @click.prevent="clickNext('parent')"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg" />
        </button>
      </div>
      <section ref="parent" class="scroller__container">
        <div v-for="(art, i) in arts" :key="i" class="d-inline">
          <div class="d-inline-block">
            <img
              :src="art.url"
              class="img-fluid mx-2 mb-4 rounded shadow"
              :alt="art.title"
              style="width: 300px; height: 150px; object-fit: cover"
            />
            <p class="text-center text-wrap" style="width: 200px">
              {{ art.title }}
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="scroller">
      <div class="scroller__container--controls">
        <button class="scroller__container--prev" @click.prevent="clickPrev()">
          <font-awesome-icon :icon="['fas', 'chevron-left']" size="lg" />
        </button>
        <button class="scroller__container--next" @click.prevent="clickNext()">
          <font-awesome-icon :icon="['fas', 'chevron-right']" size="lg" />
        </button>
      </div>
      <section ref="tags" class="scroller__container">
        <div v-for="(art, i) in arts" :key="i" class="d-inline">
          <div class="d-inline-block">
            <img
              :src="art.url"
              class="img-fluid mx-2 mb-4 rounded shadow"
              :alt="art.title"
              style="width: 300px; height: 150px; object-fit: cover"
            />
            <p class="text-center text-wrap" style="width: 200px">
              {{ art.title }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import artsData from "~/assets/data/arts.json";

export default {
  data() {
    return {
      arts: artsData,
      scrollLeft: null,
    };
  },

  methods: {
    clickPrev(block) {
      const { parent, tags } = this.$refs;
      if (block === "parent") {
        parent.scrollLeft -= 200;
      } else {
        tags.scrollLeft -= 200;
      }
    },
    clickNext(block) {
      const { parent, tags } = this.$refs;
      if (block === "parent") {
        parent.scrollLeft += 200;
      } else {
        tags.scrollLeft += 200;
      }
    },
  },
};
</script>
<style scoped>
.scroller {
  width: 100%;
  /* padding: 0.5rem 2rem; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}
.scroller__container {
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.2s;
  will-change: transform;
  user-select: none;
  /* cursor: grab; */
  position: relative;
  margin: 16px 40px;
  padding: 0 16px;
}

.scroller__container--controls {
  position: relative;
  z-index: 10;
  height: auto;
}
.scroller__container--prev {
  position: absolute;
  left: 0;
  margin: auto 0;
}
.scroller__container--next {
  position: absolute;
  right: 0;
}
</style>
