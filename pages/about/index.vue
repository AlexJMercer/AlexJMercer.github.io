<template>
  <div class="pb-5">
    <div class="container-fluid mt-5 p-0">
      <div class="container mt-3 p-0">
        <div class="col-12 pt-lg-3 py-4 px-3">
          <div class="header-profile">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-xs-12 col-12">
                <div v-lazy-container="{ selector: 'img' }" class="head-avatar">
                  <img
                    :data-src="require('~/assets/images/ultimate-logo.jpg')"
                    width="300"
                    class="rounded shadow-image img-fluid mx-auto d-block mb-4"
                  />
                </div>
              </div>
              <div class="col-lg-8 col-md-8 col-xs-12 col-12">
                <div class="head-text my-3">
                  <h1 class="blog-title">
                    <span class="marker marker-dark">
                      Julian Silva da Cunha
                    </span>
                  </h1>
                  <h1 class="blog-title">
                    <span class="marker marker-dark">
                      a.k.a. Ultimate Mercer
                    </span>
                  </h1>
                  <h5 class="blog-meta">
                    <span class="marker marker-dark">
                      Sou formado em Tecnologia em Sistemas para Internet no
                      IFSul, e atualmente estou cursando o 6º semestre do Design
                      Digital na UFPel, tenho 25 anos e moro em Pelotas/RS.
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-lg-0 p-md-0">
      <div
        class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 p-lg-0 col-md-10 offset-md-1 p-md-0 col-12 mt-3 mb-4"
      >
        <div class="page">
          <div class="post sans">
            <h2>
              <strong>Sobre mim</strong>
            </h2>
            <p>
              Do início de 2013 a setembro de 2016, estudei no Instituto Federal
              Sul-riograndense no curso superior em tecnologias em sistemas para
              internet. Recém formado fui em busca de algumas oportunidades, mas
              infelizmente as que apareceram não se concretizaram.
            </p>
            <p>
              Foi então que no fim de 2017, retornei à universidade, desta vez
              na Universidade Federal de Pelotas, no curso de bacharelado em
              Design Digital, sendo esta uma oportunidade para aprender ainda
              mais, e numa área que eu curti trabalhar desde o IFSul, Web
              Design/Desenvolvimento Front-end.
            </p>
            <p>
              Neste período em que estou no design da UFPel, tive diversas
              oportunidades de interagir e aprender com diferentes áreas e
              diferentes atividades, sendo mais recentemente uma das minhas
              paixões atuais a edição digital, onde curto criar algumas imagens
              a partir de algumas ideias (sendo basicamente um hobby). Além
              disso, este curso tem me oferecido a oportunidade de conhecer
              diferentes pessoas e a desenvolver melhor a minha visão do mundo.
            </p>
            <p>
              No meio disso tudo também tive a oportunidade de ingressar em um
              curso de inglês na Topway, para poder me qualificar ainda mais.
            </p>
            <p>
              Além do mais, este curso tem me ensinado a ser mais criativo, onde
              sempre que possível, em algumas atividades procuro desenvolver
              alguns websites, assim posso seguir aprimorando tanto o
              conhecimento em design como desenvolver o front-end dos projetos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
