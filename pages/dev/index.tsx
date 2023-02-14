import Image from "next/image";
import { getAllDocumentsByChannel } from "@/lib/services";
import ListArticles from "@/components/List/Articles";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/content/siteMetadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  return getAllDocumentsByChannel("Dev");
}

interface HomeProp {
  documents: Array<object>;
  initialDisplayDocuments: any;
  pagination: number;
}

const Dev = ({ documents, initialDisplayDocuments, pagination }: HomeProp) => {
  return (
    <>
      <PageSEO
        title={`Projetos pessoais - Development - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div className="bg-dark-500 flex items-center">
        <Image
          src="/images/ultimate-logo-red.svg"
          className="mx-auto d-block py-4"
          width={175}
          height={175}
          alt="Ultimate Mercer Logo"
        />
        <FontAwesomeIcon
          icon={faPlus}
          className="text-light-500-500 text-2xl"
        />
        <Image
          src="/images/blklight-base-w.svg"
          className="mx-auto d-block py-4"
          width={150}
          height={150}
          alt="Ultimate Mercer Logo"
        />
      </div>
      <section className="background-texture">
        <div className="max-w-8xl mx-auto">
          <section className="container mx-auto py-6">
            <h1 className="text-5xl font-bold mb-4">
              Projetos pessoais - Development
            </h1>
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

export default Dev;
