import { Metadata, ResolvingMetadata } from "next";
import { MDXComponents } from "@/components/mdx";
import { getDocument, rawDocuments } from "services";

const LAYOUTS = [
  "basic-layout",
  "basic-overflow-layout",
  "fullpage-layout",
  "landscape-layout",
  "parallax-layout",
  "portrait-layout",
  "simple-layout",
];

const DEFAULT_LAYOUT = "basic-layout";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () =>
  rawDocuments.map((doc: any) => ({
    slug: doc.slug.replace("/projects/", ""),
  }));

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = await getDocument(params);

  const authors = article.authordetails.map((author: any) => {
    return { name: author.name };
  });

  const images = article.doc?.cover
    ? article.doc?.cover
    : article.doc?.imageHeader
    ? article.doc?.imageHeader
    : "/ultimate-mercer-base.jpg";

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.doc?.title,
    authors: [...authors],
    openGraph: {
      images: images,
    },
  };
}
const ArticleLayout = async ({ params }: { params: { slug: string } }) => {
  const article = await getDocument(params);
  return (
    <>
      {article && (
        <MDXComponents
          layout={
            article.doc?.layout && LAYOUTS.includes(article.doc?.layout)
              ? article.doc?.layout
              : DEFAULT_LAYOUT
          }
          doc={article.doc}
          code={article.doc?.body.code}
          authordetails={article.authordetails}
          prev={article.prev}
          next={article.next}
        />
      )}
    </>
  );
};
export default ArticleLayout;
