<template>
  <div>
    <div class="container-fluid">
      <div class="py-5 px-3">
        <button type="button" class="btn btn-primary btn-raised">
          Primary
        </button>
        <button type="button" class="btn btn-secondary btn-raised">
          Secondary
        </button>
        <button type="button" class="btn btn-success btn-raised">
          Success
        </button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info btn-raised">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>

        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>

        <button type="button" class="btn btn-outline-v2-primary">
          Primary
        </button>
        <button type="button" class="btn btn-outline-v2-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-outline-v2-success">
          Success
        </button>
        <button type="button" class="btn btn-outline-v2-danger">Danger</button>
        <button type="button" class="btn btn-outline-v2-warning">
          Warning
        </button>
        <button type="button" class="btn btn-outline-v2-info">Info</button>
        <button type="button" class="btn btn-outline-v2-light">Light</button>
        <button type="button" class="btn btn-outline-v2-dark">Dark</button>-v2

        <button type="button" class="btn btn-primary btn-raised">
          Primary
        </button>
        <button type="button" class="btn btn-secondary btn-raised">
          Secondary
        </button>
        <button type="button" class="btn btn-success btn-raised">
          Success
        </button>
        <button type="button" class="btn btn-info btn-raised">Info</button>

        <button type="button" class="btn btn-info btn-raised">
          <font-awesome-icon :icon="['fas', 'moon']" size="lg" />
        </button>
      </div>

      <p class="p-2 my-2">
        <em> >Some italic text that will be (maybe) useful in the future...</em>
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" />
        <font-awesome-icon :icon="['fas', 'sun']" size="lg" />
        <font-awesome-icon :icon="['fas', 'moon']" size="lg" />
        <font-awesome-icon :icon="['far', 'sun']" size="lg" />
        <font-awesome-icon :icon="['far', 'moon']" size="lg" />
        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
        <font-awesome-icon :icon="['fas', 'plus']" size="lg" />
      </p>
    </div>
    <div class="">
      <div
        class="card card-background card-raised view mb-4"
        :class="[isDarkTheme ? 'hover-card-yellow' : 'hover-card-uv ']"
      >
        <img
          src="https://i.imgur.com/jm9zFhK.jpg"
          class="card-background-image card-img-border cyberpunk-effect"
        />
        <!-- <div v-if="texture" class="mask texture-mask-2"></div> -->
        <div
          class="card-img-overlay h-100 d-flex flex-column justify-content-end"
        >
          <div class="d-flex mb-1">
            <!-- <span class="badge badge-dark badge-tag border border-dark ml-0 mr-1">
            {{ formatDate(article.createdDate) }}
          </span> -->
            <!-- <ChannelBadge :channel="article.channel" :isTag="true" /> -->
          </div>
          <h4>
            <span class="marker marker-dark py-1">
              <strong>
                <em> teste </em>
              </strong>
            </span>
          </h4>

          <div class="d-flex justify-content-between my-1">
            <!-- <span
            class="badge badge-dark badge-tag ml-0 d-none d-md-block d-md-none d-lg-block"
          >
            Por {{ article.author.name }}
          </span> -->
            <nuxt-link to="" class="btn btn-uv btn-raised btn-custom ml-auto">
              Ler mais...
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="two-columns-layout">
      <div class="left-column">
        <div class="p-3">
          <!-- <img
            src="https://i.imgur.com/l77LFAn.jpg"
            style="width: 250px; height: 250px; object-fit: cover"
            class="mx-auto d-block"
            alt=""
          /> -->
        </div>
      </div>
      <div class="right-column" style="font-size: 20px">
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
        <p>
          JavaScript has never had any official solution for distributing
          packages, and every web platform (Rails, Django etc) has their own
          idea of how to structure and package JavaScript. In the last few
          years, NPM has started becoming the canonical way of distribution,
          with Webpack as the build system, but there’s no way to load NPM
          packages in the browser without a server-side component.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          vitae sint nisi fugiat minima, aperiam aliquam modi repellat impedit
          adipisci! Recusandae, in? Tempore optio commodi doloremque at
          aspernatur magni esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eos
          sapiente suscipit optio similique, adipisci commodi officiis enim quas
          accusamus recusandae minus harum reiciendis aut, sunt in voluptatibus
          necessitatibus! Aliquid.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("pro", params.slug).fetch();
    return {
      projects,
    };
  },
};
</script>
<style lang="scss">
.grid-card-3 {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 15px;
}
</style>
<style lang="scss">
//Can Reuse This
.two-columns-layout {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "left-column right-column";
}

.left-column {
  grid-area: left-column;

  div {
    position: sticky;
    top: 0;
    z-index: 1020;
    height: 100vh;
    background-image: url("https://i.imgur.com/To4RzjC.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.right-column {
  grid-area: right-column;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 16px 740px 16px 1fr;
}

.right-column > * {
  grid-column: 3;
}
</style>
