import { MDXComponents } from "@/components/Mdx";
import { getDocument, rawDocuments } from "@/lib/services";

const DEFAULT_LAYOUT = "FullpageLayout";

export async function getStaticPaths() {
  const paths = rawDocuments.map((doc: any) => doc.slug);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  return getDocument(params);
}

const Project = ({ doc, authordetails, prev, next }: any) => {
  return (
    <>
      <MDXComponents
        layout={doc.layout ?? DEFAULT_LAYOUT}
        doc={doc}
        code={doc.body.code}
        authordetails={authordetails}
        prev={prev}
        next={next}
      />
    </>
  );
};

export default Project;
