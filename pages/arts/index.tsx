import Image from "next/image";
import { getDocumentsByChannel } from "@/lib/services";
import ListArticles from "@/components/List/Articles";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/content/siteMetadata";

export async function getStaticProps() {
  return getDocumentsByChannel("Arts");
}

interface HomeProp {
  documents: Array<object>;
  initialDisplayDocuments: any;
  pagination: number;
}

const Arts = ({ documents, initialDisplayDocuments, pagination }: HomeProp) => {
  return (
    <>
      <PageSEO
        title={`Projetos pessoais - Arts - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div className="bg-dark-500">
        <img
          src="/images/ultimate-logo-red.svg"
          className="mx-auto block py-8"
          width="175"
          height="175"
          alt="Ultimate Mercer Logo"
        />
      </div>

      <section className="background-texture">
        <div className="max-w-8xl mx-auto">
          <section className="container mx-auto py-6">
            <h1 className="text-5xl font-bold mb-4">Projetos - Arts</h1>
            <p className="text-xl leading-normal tracking-wide mb-6">
              Aqui reúno todos os meus projetos e ideias desenvolvidas
              relacionadas a área do design e das artes, como a edição digital,
              que é algo atualmente que tenho como hobby.
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

export default Arts;
