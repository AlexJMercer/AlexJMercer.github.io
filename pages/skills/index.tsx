import Image from "next/image";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/content/siteMetadata";

const Skills = () => {
  const academics = [
    {
      institute: "IFSul - Instituto Federal Sul-rio-grandense - Pelotas/RS",
      imageUrl: "https://i.imgur.com/aOYbbmu.jpg",
      course: "Tecnólogo em Sistemas para Internet",
      status: "Completo",
    },
    {
      institute: "UFPel - Universidade Federal de Pelotas",
      imageUrl: "https://i.imgur.com/a7Ul7uG.jpg",
      course: "Bacharelado em Design Digital",
      status: "6º Semestre - Em andamento/matrícula trancada",
    },
    {
      institute: "TopWay - English School",
      imageUrl: "https://i.imgur.com/qrjFnG0.jpg",
      course: "Inglês - Avançado",
      status: "Conclusão em 2018",
    },
  ];

  const experiences = [
    {
      title: "QuestõesPRO",
      imageUrl: "/images/loading.jpg",
      role: "Desenvolvedor Front-end - VueJS",
      description: "",
      started: "Jan 2021",
      finished: "Dez 2022",
    },
    {
      title: "blueshift.cc",
      imageUrl: "https://i.imgur.com/fxDITOw.jpg",
      role: "Desenvolvedor Front-end - VueJS",
      description: "",
      started: "Jan 2021",
      finished: "Dez 2022",
    },
    {
      title: "Mentorise",
      imageUrl: "/images/loading.jpg",
      role: "Desenvolvedor Front-end - ReactJS",
      description: "",
      started: "Jan 2021",
      finished: "Dez 2022",
    },
    {
      title: "bohr.io",
      imageUrl: "https://i.imgur.com/jW8T7Pj.jpg",
      role: "Desenvolvedor Front-end - VueJS",
      description: "",
      started: "Dez 2021",
      finished: "Dez 2022",
    },
  ];

  const techs = [
    {
      name: "VueJS",
      imageUrl: "https://i.imgur.com/qbNTl5W.png",
    },
    {
      name: "ReactJS",
      imageUrl: "https://i.imgur.com/Wa0TqhR.jpg",
    },
    {
      name: "Javascript",
      imageUrl: "https://i.imgur.com/MHHLm6d.png",
    },
    {
      name: "NextJS",
      imageUrl: "https://i.imgur.com/WTpjqbw.jpg",
    },
    {
      name: "NuxtJS",
      imageUrl: "https://i.imgur.com/vN0N4iX.jpg",
    },
    {
      name: "NodeJS",
      imageUrl: "https://i.imgur.com/nStZvOB.jpg",
    },
    {
      name: "TailwindCSS",
      imageUrl: "https://i.imgur.com/kV9AGth.jpg",
    },
    {
      name: "Bootstrap",
      imageUrl: "https://i.imgur.com/eazD6Ja.jpg",
    },
    {
      name: "SASS",
      imageUrl: "https://i.imgur.com/wqYQJE0.jpg",
    },
    {
      name: "Git",
      imageUrl: "https://i.imgur.com/TFXBfp2.jpg",
    },

    {
      name: "Github",
      imageUrl: "https://i.imgur.com/NQEpMuE.jpg",
    },
    {
      name: "NPM",
      imageUrl: "https://i.imgur.com/AcB6T5Z.jpg",
    },
    {
      name: "Yarn",
      imageUrl: "https://i.imgur.com/3UvMJL4.jpg",
    },
    {
      name: "VSCode",
      imageUrl: "https://i.imgur.com/84ae3eq.jpg",
    },
    {
      name: "Docker",
      imageUrl: "https://i.imgur.com/xPqPYPd.jpg",
    },
    {
      name: "PostgreSQL",
      imageUrl: "https://i.imgur.com/aDnvaLa.jpg",
    },
  ];
  return (
    <>
      <PageSEO
        title={`Conhecimento - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div className="block bg-gradient-to-r from-blue-500 via-dark-500 to-uv-500 w-full h-56">
        <img
          src="/images/ultimate-logo-light.svg"
          className="mx-auto d-block py-8"
          width="175"
          height="175"
          alt="Ultimate Mercer Logo"
        />
      </div>
      <div className="background-texture">
        <div className="max-w-8xl mx-auto px-4">
          <section className="container mx-auto py-6">
            <h1 className="text-5xl font-bold mb-4">Conhecimento</h1>
            <p className="text-xl leading-normal tracking-wide mb-6">
              Durante os últimos anos venho estudando e praticando a utilização
              de diferentes tecnologias, tanto para o Desenvolvimento
              Front-end/Web quanto para o Design, com isso venho tendo contato e
              produzindo material com diferentes ferramentas, linguagens e
              tecnologias, que tem me propiciado evoluir em ambas as áreas.
            </p>
          </section>
          <section className="container mx-auto py-4">
            <h2 className="text-4xl font-bold mb-4 border-b border-b-dark-500 dark:border-b-light-500">
              Formações
            </h2>
            {academics.map((academic) => (
              <div
                key={academic.institute}
                className="flex items-center my-4 px-2"
              >
                <Image
                  src={academic.imageUrl}
                  alt={`${academic.institute} image`}
                  className="w-24 h-24 object-cover rounded hover:drop-shadow-xl hover:ring-2 ring-gray-300 transition-all"
                  width={1000}
                  height={1000}
                />
                <div className="ml-4">
                  <h4 className="text-[21px] font-medium">
                    {academic.institute}
                  </h4>
                  <p>{academic.course}</p>
                  <p>{academic.status}</p>
                </div>
              </div>
            ))}
          </section>
          <section className="container mx-auto py-4">
            <h2 className="text-4xl font-bold mb-4 border-b border-b-dark-500 dark:border-b-light-500">
              Experiências
            </h2>
            {experiences.map((exp) => (
              <div key={exp.title} className="flex items-center my-4 px-2">
                <Image
                  src={exp.imageUrl}
                  alt={`${exp.title} image`}
                  className="w-24 h-24 object-cover rounded hover:drop-shadow-xl hover:ring-2 ring-gray-300 transition-all"
                  width={1000}
                  height={1000}
                />
                <div className="ml-4">
                  <h4 className="text-[21px] font-medium">{exp.title}</h4>
                  <p>{exp.role}</p>
                  <p>{exp.description}</p>
                  <p>
                    {exp.started} - {exp.finished}
                  </p>
                </div>
              </div>
            ))}
          </section>
          <section className="container mx-auto py-4 mb-5">
            <h2 className="text-4xl font-bold mb-4 border-b border-b-dark-500 dark:border-b-light-500">
              Tecnologias e ferramentas
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {techs.map((tech) => (
                <div key={tech.name} className="flex items-center mb-4 px-2">
                  <Image
                    src={tech.imageUrl}
                    alt={`${tech.name} image`}
                    className="w-24 h-24 object-cover rounded hover:drop-shadow-xl hover:ring-2 ring-gray-300 transition-all"
                    width={1000}
                    height={1000}
                  />
                  <div className="ml-4">
                    <h4 className="text-2xl font-medium">{tech.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Skills;
