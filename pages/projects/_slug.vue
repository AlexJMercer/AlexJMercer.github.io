<template>
  <div class="">
    <PostHeaders :post="headerInfo" />

    <div v-if="post.html" class="container-fluid p-lg-0 p-md-0 my-2">
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12 mb-4"
      >
        <div class="page">
          <div class="post" :class="fontStyle">
            <!-- eslint-disable-next-line -->
            <div v-html="post.html"></div>
          </div>
        </div>
        <hr />
        <h4>
          Tags:
        </h4>
        <span
          v-for="(tag, i) in post.attributes.tags"
          :key="i"
          class="badge badge-secondary"
          >{{ tag }}</span
        >
      </div>
    </div>

    <DuotoneFilter />
  </div>
</template>
<script>
import DuotoneFilter from "~/components/DuotoneFilters.vue";
import PostHeaders from "~/components/PostHeaders";

export default {
  components: {
    DuotoneFilter,
    PostHeaders,
  },

  async asyncData({ params }) {
    try {
      const post = await import(`~/content/projects/${params.slug}.md`);
      return {
        post,
      };
    } catch (error) {
      return false;
    }
  },

  computed: {
    imageSrc() {
      const image = this.post.attributes.coverAlt
        ? this.post.attributes.coverAlt
        : this.post.attributes.cover;
      // console.log(teste)

      if (image.startsWith("http") || image.startsWith("https")) {
        // console.log(true)
        return image;
      } else {
        // console.log(false)
        return require(`~/assets/images/projects/${image}`);
      }

      //   // Abaixo funfa
      //   // return require(`~/assets/images${this.routes}/${post.attributes.attributes.cover}`)
    },
    fontStyle() {
      const font = this.post.attributes.fontStyle;
      if (!font) {
        return "base";
      } else {
        return font;
      }
    },

    headerInfo(post) {
      return {
        title: this.post.attributes.title,
        date: this.post.attributes.date,
        description: this.post.attributes.description,
        category: this.post.attributes.category,
        type: this.post.attributes.type,
        tags: this.post.attributes.tags,
        cover: this.post.attributes.cover,
        coverAlt: this.post.attributes.coverAlt,
        orientation: this.post.attributes.imgorientation,
      };
    },
  },
};
</script>
