const About = () => {
  return (
    <section className="main-article py-16">
      <div className="max-w-5xl block mt-0 mx-auto mb-10">
        <img
          src="https://i.imgur.com/rkCtudG.jpg"
          className="size-48 mx-auto block rounded-lg border border-dark-500 dark:border-light-500"
          width="256"
          height="256"
          alt="Julian Silva da Cunha"
        />
      </div>
      <div className="article-grid">
        <h1 className="text-5xl leading-normal mb-4">
          <strong> Oi! Eu sou o Julian</strong>
        </h1>
        <h4 className="text-xl font-bold mb-8">
          Sou formado em Tecnologia em Sistemas para Internet no IFSul, e
          atualmente estou cursando o 6º semestre do Design Digital na UFPel e
          moro em Pelotas/RS.
        </h4>
        <div className="">
          <p className="text-xl leading-normal tracking-wide mb-4">
            Do início de 2013 a setembro de 2016, estudei no Instituto Federal
            Sul-riograndense no curso superior em tecnologias em sistemas para
            internet. Recém formado fui em busca de algumas oportunidades, mas
            infelizmente as que apareceram não se concretizaram.
          </p>
          <p className="text-xl leading-normal tracking-wide mb-4">
            Foi então que no fim de 2017, retornei à universidade, desta vez na
            Universidade Federal de Pelotas, no curso de bacharelado em Design
            Digital, sendo esta uma oportunidade para aprender ainda mais, e
            numa área que eu curti trabalhar desde o IFSul, Web
            Design/Desenvolvimento Front-end.
          </p>
          <p className="text-xl leading-normal tracking-wide mb-4">
            Neste período em que estou no design da UFPel, tive diversas
            oportunidades de interagir e aprender com diferentes áreas e
            diferentes atividades, sendo mais recentemente uma das minhas
            paixões atuais a edição digital, onde curto criar algumas imagens a
            partir de algumas ideias (sendo basicamente um hobby). Além disso,
            este curso tem me oferecido a oportunidade de conhecer diferentes
            pessoas e a desenvolver melhor a minha visão do mundo.
          </p>
          <p className="text-xl leading-normal tracking-wide mb-4">
            No meio disso tudo também tive a oportunidade de ingressar em um
            curso de inglês na Topway, para poder me qualificar ainda mais.
          </p>
          <p className="text-xl leading-normal tracking-wide mb-4">
            Além do mais, este curso tem me ensinado a ser mais criativo, onde
            sempre que possível, em algumas atividades procuro desenvolver
            alguns websites, assim posso seguir aprimorando tanto o conhecimento
            em design como desenvolver o front-end dos projetos.
          </p>
          <h4 className="font-bold leading-normal tracking-wide text-3xl mb-4">
            Em atualização...
          </h4>

          <h4 className="font-bold leading-normal tracking-wide text-2xl">
            Mas se quiser pode me chamar também de Ultimate Mercer
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
