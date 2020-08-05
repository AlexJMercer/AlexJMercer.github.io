<template>
  <div class="container-fluid">
    <div
      class="col-lg-10 col-md-12 col-12 offset-lg-1 offset-md-0 offset-0 px-0 pb-4"
    >
      <h2 class="mb-2">
        <strong>
          Projetos recentes
        </strong>
      </h2>
      <div v-lazy-container="{ selector: 'img' }" class="row">
        <div class="col-lg-4 col-md-4 col-12 offset-lg-0 offset-md-0">
          <div
            class="card card-background card-raised card-featured-post neon-shadow-darkblue view mb-4"
          >
            <img
              data-src="https://i.imgur.com/WH3nZum.png"
              class="card-background-image featured-image"
              alt="Image Post"
            />
            <div class="card-body h-100 d-flex flex-column justify-content-end">
              <h5 class="card-featured-title">
                <span class="marker marker-dark">
                  <strong>
                    Star Wars: The Rise of Skywalker
                  </strong>
                </span>
              </h5>
              <div class="card-subinfo">
                <span class="badge badge-uv badge-tag">
                  Design
                </span>
                <span class="badge badge-dark badge-tag">
                  Nov 13
                </span>
              </div>

              <nuxt-link
                to="/projects/2019-11-13-star-wars"
                class="stretched-link"
                title="Acessar post do projeto"
              ></nuxt-link>
            </div>

            <div class="mask texture-mask-2"></div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12 offset-lg-0 offset-md-0">
          <div
            class="card card-background card-raised card-featured-post neon-shadow-darkblue view mb-4"
          >
            <img
              :data-src="
                require('~/assets/images/projects/ultimate-mercer-logo-1.jpg')
              "
              class="card-background-image featured-image"
              alt="Image Post"
            />
            <div class="card-body h-100 d-flex flex-column justify-content-end">
              <h5 class="card-featured-title">
                <span class="marker marker-dark">
                  <strong>
                    Ultimate Mercer: Nova idéia de logo
                  </strong>
                </span>
              </h5>
              <div class="card-subinfo">
                <span class="badge badge-uv badge-tag">
                  Design
                </span>
                <span class="badge badge-dark badge-tag">
                  Abr 15
                </span>
                <nuxt-link
                  to="/personal/2020-04-15-ultimate-mercer-logo"
                  class="stretched-link"
                  title="Acessar post do projeto"
                ></nuxt-link>
              </div>
            </div>
            <div class="mask texture-mask-2"></div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12 offset-lg-0 offset-md-0">
          <div
            class="card card-background card-raised card-featured-post neon-shadow-darkblue view mb-4"
          >
            <img
              data-src="https://miro.medium.com/max/1500/1*WpG7T6nPIYcyqt1hLgqQNg.png"
              class="card-background-image featured-image"
              alt=""
            />
            <div class="card-body h-100 d-flex flex-column justify-content-end">
              <h5 class="card-featured-title">
                <span class="marker marker-dark">
                  <strong>
                    Ultimate Mercer: Be The Revolution, Join The Ultimates
                  </strong>
                </span>
              </h5>
              <div class="card-subinfo">
                <span class="badge badge-dark badge-tag text-orange">
                  Nerdstation
                </span>
                <span class="badge badge-dark badge-tag">
                  Jan 20
                </span>
                <a
                  href=""
                  class="stretched-link"
                  title="Acessar post do projeto"
                ></a>
              </div>
            </div>
            <div class="mask texture-mask-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LastProjects",
};
</script>
