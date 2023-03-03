import Image from "next/image";
import { getDocumentsByTag } from "@/lib/services";
import ListArticles from "@/components/List/Articles";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/content/siteMetadata";

export async function getStaticProps() {
  return getDocumentsByTag("Ultimate Series");
}

interface HomeProp {
  documents: Array<object>;
  initialDisplayDocuments: any;
  pagination: number;
}

const UltimateSeries = ({
  documents,
  initialDisplayDocuments,
  pagination,
}: HomeProp) => {
  // console.log(initialDisplayDocuments);
  return (
    <>
      <PageSEO
        title={`Ultimate Series - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div className="card rounded-none !my-0">
        <img
          src="https://i.imgur.com/p7kPVCN.jpg"
          className="w-full md:h-60 h-48 object-cover filter-cyberpunk-ix"
          alt=""
        />
        <div className="card-img-overlay flex items-center">
          <img
            src="/images/ultimate-logo-red.svg"
            className="mx-auto d-block py-4 filter-cyberpunk-vii"
            width="175"
            height="175"
            alt="Ultimate Mercer Logo"
          />
        </div>
      </div>
      <section className="background-texture">
        <div className="max-w-8xl mx-auto">
          <section className="container mx-auto py-6">
            <h1 className="text-5xl font-bold mb-4">Ultimate Series</h1>
            <p className="text-xl leading-normal tracking-wide mb-6">
              Aqui reúno todos os meus projetos e idéias desenvolvidas, tanto
              para o âmbito acadêmico e profissional, quanto para o pessoal com
              o objetivo de me manter sempre em evolução das minhas técnicas e
              habilidades, e praticando o uso da criatividade para o
              desenvolvimento dos meus projeto em geral.
            </p>
          </section>
        </div>
        <ListArticles
          documents={documents}
          initialDisplayDocuments={initialDisplayDocuments}
          pagination={pagination}
        />
      </section>
    </>
  );
};

export default UltimateSeries;
