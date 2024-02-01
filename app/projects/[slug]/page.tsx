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
  rawDocuments.map((doc: any) => ({ slug: doc.slug }));

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let metadata = {};

  const slug = params.slug;

  const article = await getDocument({ slug });

  const authors = article.authordetails.map((author: any) => {
    return author.name;
  });
  // const article = await rawDocuments.find(
  //   (doc: any) => doc.slug === params.slug
  // );
  return { title: article.doc?.title, authors: authors };
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
