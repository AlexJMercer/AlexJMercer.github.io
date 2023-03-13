import Image from "next/image";
import { getDocumentsByChannel } from "@/lib/services";
import ListArticles from "@/components/List/Articles";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/content/siteMetadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  return getDocumentsByChannel("Dev");
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
          className="mx-auto block py-8"
          width={175}
          height={175}
          alt="Ultimate Mercer Logo"
        />
        <FontAwesomeIcon icon={faPlus} className="text-light-500 text-2xl" />
        <Image
          src="/images/blklight-base-w.svg"
          className="mx-auto block py-8"
          width={150}
          height={150}
          alt="Ultimate Mercer Logo"
        />
      </div>
      <section className="background-texture">
        <div className="max-w-8xl mx-auto">
          <section className="container mx-auto py-6">
            <h1 className="text-5xl font-bold mb-4 align-middle flex items-center">
              Projetos pessoais - Development{" "}
              <span className="mx-2 inline-flex text-sm rounded-md bg-red-500 text-light-500 px-2 py-1">
                Em atualização...
              </span>
            </h1>
            <p className="text-xl leading-normal tracking-wide mb-6">
              Aqui reúno todos os meus projetos e ideias desenvolvidas
              relacionadas a área de desenvolvimento web, com foco atualmente no
              desenvolvimento front-end.
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
